/** biome-ignore-all lint/nursery/useMaxParams: Not passing objects to help performance */
import { Rectangle } from '../../math/rectangle.js';
import { Vec3 } from '../../math/vec3.js';
import type { BitmapFont } from '../bitmapFont.js';
import type { Color } from '../color.js';
import { getImageFragmentSource } from '../defaultShaders.js';
import type { GLContext } from '../glContext.js';
import type { Image } from '../image.js';
import type { RenderTarget } from '../renderTarget.js';
import { Shader } from '../shader.js';
import { BaseRenderer } from './baseRenderer.js';

/**
 * The offset per vertex.
 * position: x, y, z.
 * color: r, g, b, a.
 * texture: u, v.
 */
const OFFSET = 9;

/**
 * The buffer offset per quad.
 */
const QUAD_OFFSET: number = OFFSET * 4;

/**
 * The amount of vertices per quad in the vertex buffer.
 */
const VERTICES_PER_QUAD = 4;

/**
 * The amount of indices per quad in the index buffer.
 */
const INDICES_PER_QUAD = 6;

export class ImageRenderer extends BaseRenderer {
  /**
   * The current batch index in the buffer.
   */
  private index = 0;

  /**
   * Temporary vector to store a vertex position.
   */
  private tempVec3: Vec3;

  /**
   * Temporary frame to store the image region.
   */
  private tempFrame: Rectangle;

  /**
   * Current batch image.
   */
  private currentImage?: Image;

  /**
   * Current batch render target.
   */
  private currentTarget?: RenderTarget;

  /**
   * Create a new image renderer.
   * @param context - The WebGL rendering context.
   */
  constructor(context: GLContext) {
    super(context);

    this.tempVec3 = new Vec3();
    this.tempFrame = new Rectangle();

    this.vertexBuffer = this.context.gl.createBuffer();
    this.vertexIndices = new Float32Array(this.BUFFER_SIZE * QUAD_OFFSET);

    this.indexBuffer = this.context.gl.createBuffer();
    this.indexIndices = new Int32Array(this.BUFFER_SIZE * INDICES_PER_QUAD);

    for (let i = 0; i < this.indexIndices.length; i++) {
      this.indexIndices[i * INDICES_PER_QUAD] = i * VERTICES_PER_QUAD;
      this.indexIndices[i * INDICES_PER_QUAD + 1] = i * VERTICES_PER_QUAD + 1;
      this.indexIndices[i * INDICES_PER_QUAD + 2] = i * VERTICES_PER_QUAD + 2;
      this.indexIndices[i * INDICES_PER_QUAD + 3] = i * VERTICES_PER_QUAD;
      this.indexIndices[i * INDICES_PER_QUAD + 4] = i * VERTICES_PER_QUAD + 2;
      this.indexIndices[i * INDICES_PER_QUAD + 5] = i * VERTICES_PER_QUAD + 3;
    }

    this.createDefaultShader();
  }

  /**
   * Set the current shader.
   * @param shader - The shader to use. If not provided, the default shader will be used.
   */
  override setShader(shader?: Shader): void {
    if (shader) {
      if (shader.type === 'image') {
        super.setShader(shader);
      }
    } else {
      super.setShader();
    }
  }

  start(): void {
    this.index = 0;
    this.currentImage = undefined;
    this.currentTarget = undefined;
  }

  /**
   * Draw the current batch to the screen.
   */
  commit(): void {
    if (this.index === 0 || (!this.currentImage && !this.currentTarget)) {
      return;
    }

    this.shader.use();
    this.shader.applyBlendMode();

    const gl = this.context.gl;
    gl.uniformMatrix4fv(this.shader.uniforms.u_projectionMatrix, false, this.projection.value);
    gl.activeTexture(gl.TEXTURE0);
    if (this.currentTarget) {
      gl.bindTexture(gl.TEXTURE_2D, this.currentTarget.texture);
      this.shader.applyTextureParameters(0);
    } else if (this.currentImage) {
      gl.bindTexture(gl.TEXTURE_2D, this.currentImage.texture);
      this.shader.applyTextureParameters(0);
      if (this.shader.uniforms.u_texture) {
        gl.uniform1i(this.shader.uniforms.u_texture, 0);
      }
    }

    gl.bindBuffer(gl.ARRAY_BUFFER, this.vertexBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, this.vertexIndices, gl.DYNAMIC_DRAW);
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.indexBuffer);
    gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, this.indexIndices, gl.STATIC_DRAW);

    gl.vertexAttribPointer(this.shader.vertexPositionLocation, 3, gl.FLOAT, false, this.FLOAT_SIZE * 9, 0);
    gl.enableVertexAttribArray(this.shader.vertexPositionLocation);
    gl.vertexAttribPointer(
      this.shader.vertexColorLocation,
      4,
      gl.FLOAT,
      false,
      this.FLOAT_SIZE * 9,
      this.FLOAT_SIZE * 3,
    );
    gl.enableVertexAttribArray(this.shader.vertexColorLocation);
    gl.vertexAttribPointer(this.shader.vertexUVLocation, 2, gl.FLOAT, false, this.FLOAT_SIZE * 9, this.FLOAT_SIZE * 7);
    gl.enableVertexAttribArray(this.shader.vertexUVLocation);

    gl.drawElements(gl.TRIANGLES, this.index * INDICES_PER_QUAD, gl.UNSIGNED_INT, 0);

    gl.bindBuffer(gl.ARRAY_BUFFER, null);
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, null);
    gl.disableVertexAttribArray(this.shader.vertexPositionLocation);
    gl.disableVertexAttribArray(this.shader.vertexColorLocation);
    gl.disableVertexAttribArray(this.shader.vertexUVLocation);

    this.index = 0;
    this.currentImage = undefined;
    this.currentTarget = undefined;
  }

  /**
   * Draw an image to the screen.
   * @param x - The x-coordinate to draw the image at.
   * @param y - The y-coordinate to draw the image at.
   * @param image - The image to draw.
   * @param frame - Optional region of the image to draw. Defaults to the full image.
   */
  drawImage(x: number, y: number, image: Image, frame?: Rectangle): void {
    if (this.index >= this.BUFFER_SIZE || this.currentTarget || (this.currentImage && this.currentImage !== image)) {
      this.commit();
    }

    if (frame) {
      this.tempFrame.copyFrom(frame);
    } else {
      this.tempFrame.set(0, 0, image.width, image.height);
    }

    this.currentImage = image;

    let u = this.tempFrame.x / image.width;
    let v = this.tempFrame.y / image.height;
    this.updateBuffer(x, y, u, v, this.color, 0);

    u = (this.tempFrame.x + this.tempFrame.width) / image.width;
    v = this.tempFrame.y / image.height;
    this.updateBuffer(x + this.tempFrame.width, y, u, v, this.color, 1);

    u = (this.tempFrame.x + this.tempFrame.width) / image.width;
    v = (this.tempFrame.y + this.tempFrame.height) / image.height;
    this.updateBuffer(x + this.tempFrame.width, y + this.tempFrame.height, u, v, this.color, 2);

    u = this.tempFrame.x / image.width;
    v = (this.tempFrame.y + this.tempFrame.height) / image.height;
    this.updateBuffer(x, y + this.tempFrame.height, u, v, this.color, 3);

    this.index++;
  }

  /**
   * Draws an image on the canvas using the specified corner points.
   * @param tlX - The x-coordinate of the top-left corner.
   * @param tlY - The y-coordinate of the top-left corner.
   * @param trX - The x-coordinate of the top-right corner.
   * @param trY - The y-coordinate of the top-right corner.
   * @param brX - The x-coordinate of the bottom-right corner.
   * @param brY - The y-coordinate of the bottom-right corner.
   * @param blX - The x-coordinate of the bottom-left corner.
   * @param blY - The y-coordinate of the bottom-left corner.
   * @param image - The image to draw.
   * @param frame - Optional region of the image to draw. Defaults to the full image.
   */
  drawImagePoints(
    tlX: number,
    tlY: number,
    trX: number,
    trY: number,
    brX: number,
    brY: number,
    blX: number,
    blY: number,
    image: Image,
    frame?: Rectangle,
  ): void {
    if (this.index >= this.BUFFER_SIZE || this.currentTarget || (this.currentImage && this.currentImage !== image)) {
      this.commit();
    }

    if (frame) {
      this.tempFrame.copyFrom(frame);
    } else {
      this.tempFrame.set(0, 0, image.width, image.height);
    }

    this.currentImage = image;

    let u = this.tempFrame.x / image.width;
    let v = this.tempFrame.y / image.height;
    this.updateBuffer(tlX, tlY, u, v, this.color, 0);

    u = (this.tempFrame.x + this.tempFrame.width) / image.width;
    v = this.tempFrame.y / image.height;
    this.updateBuffer(trX, trY, u, v, this.color, 1);

    u = (this.tempFrame.x + this.tempFrame.width) / image.width;
    v = (this.tempFrame.y + this.tempFrame.height) / image.height;
    this.updateBuffer(brX, brY, u, v, this.color, 2);

    u = this.tempFrame.x / image.width;
    v = (this.tempFrame.y + this.tempFrame.height) / image.height;
    this.updateBuffer(blX, blY, u, v, this.color, 3);

    this.index++;
  }

  /**
   * Draw a render target to the screen.
   * @param x - The x-coordinate to draw the render target at.
   * @param y - The y-coordinate to draw the render target at.
   * @param target - The render target to draw.
   */
  drawRenderTarget(x: number, y: number, target: RenderTarget): void {
    if (this.index >= this.BUFFER_SIZE || this.currentImage || (this.currentTarget && this.currentTarget !== target)) {
      this.commit();
    }
    this.currentTarget = target;

    const width = target.width;
    const height = target.height;

    this.updateBuffer(x, y, 0, 1, this.color, 0);
    this.updateBuffer(x + width, y, 1, 1, this.color, 1);
    this.updateBuffer(x + width, y + height, 1, 0, this.color, 2);
    this.updateBuffer(x, y + height, 0, 0, this.color, 3);

    this.index++;
  }

  /**
   * Draw a string of text to the screen.
   * @param x - The x-coordinate to draw the text at.
   * @param font - The font to use.
   * @param text - The text to draw.
   */
  drawBitmapText(x: number, y: number, font: BitmapFont, text: string): void {
    if (!text) {
      return;
    }

    if (
      this.index >= this.BUFFER_SIZE ||
      this.currentTarget ||
      (this.currentImage && this.currentImage !== font.image)
    ) {
      this.commit();
    }
    this.currentImage = font.image;

    let xOffset = 0;
    for (let i = 0; i < text.length; i++) {
      const char = text[i];
      const charData = font.getCharData(char);
      if (!charData) {
        continue;
      }

      if (this.index >= this.BUFFER_SIZE) {
        this.commit();
      }

      let kerning = 0;
      if (i > 0) {
        const prevChar = text[i - 1];
        kerning = font.getKerning(prevChar, char);
      }
      xOffset += kerning;

      let pX = x + xOffset + charData.xOffset;
      let pY = y + charData.yOffset;
      let u = charData.x / font.image.width;
      let v = charData.y / font.image.height;
      this.updateBuffer(pX, pY, u, v, this.color, 0);

      pX = x + xOffset + charData.xOffset + charData.width;
      pY = y + charData.yOffset;
      u = (charData.x + charData.width) / font.image.width;
      v = charData.y / font.image.height;
      this.updateBuffer(pX, pY, u, v, this.color, 1);

      pX = x + xOffset + charData.xOffset + charData.width;
      pY = y + charData.yOffset + charData.height;
      u = (charData.x + charData.width) / font.image.width;
      v = (charData.y + charData.height) / font.image.height;
      this.updateBuffer(pX, pY, u, v, this.color, 2);

      pX = x + xOffset + charData.xOffset;
      pY = y + charData.yOffset + charData.height;
      u = charData.x / font.image.width;
      v = (charData.y + charData.height) / font.image.height;
      this.updateBuffer(pX, pY, u, v, this.color, 3);

      xOffset += charData.xAdvance;
      this.index++;
    }
  }

  /**
   * Update the buffer with a position and color.
   * @param x - The x-coordinate of the point.
   * @param y - The y-coordinate of the point.
   * @param u - The u texture coordinate of the point.
   * @param v - The v texture coordinate of the point.
   * @param color - The color of the point.
   * @param pointOffset - The offset of the point in the triangle.
   */
  private updateBuffer(x: number, y: number, u: number, v: number, color: Color, pointOffset: number): void {
    this.tempVec3.transformMat4(this.transform, x, y, 0);
    const i = this.index * QUAD_OFFSET + pointOffset * OFFSET;

    this.vertexIndices[i] = this.tempVec3.x;
    this.vertexIndices[i + 1] = this.tempVec3.y;
    this.vertexIndices[i + 2] = 0;

    this.vertexIndices[i + 3] = color.red;
    this.vertexIndices[i + 4] = color.green;
    this.vertexIndices[i + 5] = color.blue;
    this.vertexIndices[i + 6] = color.alpha;

    this.vertexIndices[i + 7] = u;
    this.vertexIndices[i + 8] = v;
  }

  /**
   * Create the default shader for the image renderer.
   */
  private createDefaultShader(): void {
    this.defaultShader = new Shader('image', getImageFragmentSource(this.context.isGL1));
    this.shader = this.defaultShader;
  }
}
