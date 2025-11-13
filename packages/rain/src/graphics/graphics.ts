/** biome-ignore-all lint/nursery/useMaxParams: Not passing objects to help performance. */
import { Mat4 } from '../math/mat4.js';
import type { Rectangle } from '../math/rectangle.js';
import type { Vec2 } from '../math/vec2.js';
import type { BitmapFont } from './bitmapFont.js';
import { Color } from './color.js';
import type { GLContext } from './glContext.js';
import type { Image } from './image.js';
import { ImageRenderer } from './renderers/imageRenderer.js';
import { ShapeRenderer } from './renderers/shapeRenderer.js';
import type { RenderTarget } from './renderTarget.js';
import type { Shader } from './shader.js';
import type { LineAlign } from './types.js';

const MAX_TARGET_STACK = 64;
const MAX_TRANSFORM_STACK = 128;

export class Graphics {
  color = new Color(1, 1, 1, 1);

  transformStack: Mat4[] = [];

  get transform(): Mat4 {
    return this.transformStack[this.transformStack.length - 1];
  }

  get target(): RenderTarget {
    return this.targetStack[this.targetStack.length - 1];
  }

  private shapeRenderer: ShapeRenderer;

  private imageRenderer: ImageRenderer;

  private targetStack: RenderTarget[] = [];

  private clearColor = new Color(0, 0, 0, 1);

  private projection: Mat4;

  private glContext: GLContext;

  constructor(glContext: GLContext) {
    this.glContext = glContext;

    this.projection = new Mat4();
    this.transformStack.push(new Mat4());

    this.shapeRenderer = new ShapeRenderer(glContext);
    this.imageRenderer = new ImageRenderer(glContext);
  }

  pushTarget(target: RenderTarget): void {
    if (this.targetStack.length === MAX_TARGET_STACK) {
      throw new Error('Render target stack size exceeded. (more pushes than pulls?)');
    }

    this.targetStack.push(target);
    this.glContext.gl.bindFramebuffer(this.glContext.gl.FRAMEBUFFER, target.buffer);
  }

  popTarget(): void {
    this.targetStack.pop();
    const gl = this.glContext.gl;

    if (this.targetStack.length > 0) {
      gl.bindFramebuffer(gl.FRAMEBUFFER, this.targetStack[this.targetStack.length - 1].buffer);
    } else {
      gl.bindFramebuffer(gl.FRAMEBUFFER, null);
    }
  }

  clearTargets(): void {
    while (this.targetStack.length > 0) {
      this.targetStack.pop();
    }
    this.glContext.gl.bindFramebuffer(this.glContext.gl.FRAMEBUFFER, null);
  }

  pushTransform(transform?: Mat4): void {
    if (this.transformStack.length === MAX_TRANSFORM_STACK) {
      throw new Error('Transform stack size exceeded. (more pushes than pulls?)');
    }

    if (!transform) {
      this.transformStack.push(Mat4.get(this.transform.value));
    } else {
      this.transformStack.push(Mat4.get(transform.value));
    }
  }

  applyTransform(transform: Mat4): void {
    Mat4.multiply(this.transform, transform, this.transform);
  }

  popTransform(): void {
    if (this.transformStack.length <= 1) {
      throw new Error('Cannot pop the last transform off the stack');
    }

    const transform = this.transformStack.pop();
    if (transform) {
      Mat4.put(transform);
    }
  }

  start(clear: boolean = true, newClearColor?: Color): void {
    const gl = this.glContext.gl;
    let width = 0;
    let height = 0;

    if (this.targetStack.length > 0) {
      const target = this.targetStack[this.targetStack.length - 1];
      width = target.width;
      height = target.height;
    } else {
      width = this.glContext.canvas.width;
      height = this.glContext.canvas.height;
    }

    this.projection.ortho(0, width, height, 0, -1, 1);

    gl.viewport(0, 0, width, height);

    this.shapeRenderer.setProjection(this.projection);
    this.imageRenderer.setProjection(this.projection);

    this.shapeRenderer.start();
    this.imageRenderer.start();

    if (clear) {
      if (newClearColor) {
        gl.clearColor(newClearColor.red, newClearColor.green, newClearColor.blue, newClearColor.alpha);
      } else {
        gl.clearColor(this.clearColor.red, this.clearColor.green, this.clearColor.blue, this.clearColor.alpha);
      }
      gl.clear(gl.COLOR_BUFFER_BIT);
    }
  }

  /**
   * Draw the current batch to the screen or target.
   */
  commit(): void {
    this.shapeRenderer.commit();
    this.imageRenderer.commit();
  }

  /**
   * Set the current shader.
   * @param shader - The shader to use. If not provided, the default shader will be used.
   */
  setShader(shader?: Shader): void {
    this.shapeRenderer.setShader(shader);
    this.imageRenderer.setShader(shader);
  }

  /**
   * Draw a filled triangle.
   * @param p1X - The x-coordinate of the first point.
   * @param p1Y - The y-coordinate of the first point.
   * @param p2X - The x-coordinate of the second point.
   * @param p2Y - The y-coordinate of the second point.
   * @param p3X - The x-coordinate of the third point.
   * @param p3Y - The y-coordinate of the third point.
   */
  drawFilledTriangle(p1X: number, p1Y: number, p2X: number, p2Y: number, p3X: number, p3Y: number): void {
    this.imageRenderer.commit();
    this.shapeRenderer.color = this.color;
    this.shapeRenderer.transform = this.transform;
    this.shapeRenderer.drawFilledTriangle(p1X, p1Y, p2X, p2Y, p3X, p3Y);
  }

  /**
   * Draw a line.
   * @param p1X - The x-coordinate of the first point.
   * @param p1Y - The y-coordinate of the first point.
   * @param p2X - The x-coordinate of the second point.
   * @param p2Y - The y-coordinate of the second point.
   * @param align - The alignment of the line.
   * @param lineWidth - The width of the line.
   */
  drawLine(p1X: number, p1Y: number, p2X: number, p2Y: number, align: LineAlign, lineWidth: number): void {
    this.imageRenderer.commit();
    this.shapeRenderer.color = this.color;
    this.shapeRenderer.transform = this.transform;
    this.shapeRenderer.drawLine(p1X, p1Y, p2X, p2Y, align, lineWidth);
  }

  /**
   * Draw a filled rectangle.
   * @param x - The x-coordinate of the rectangle.
   * @param y - The y-coordinate of the rectangle.
   * @param width - The width of the rectangle.
   * @param height - The height of the rectangle.
   */
  drawFilledRect(x: number, y: number, width: number, height: number): void {
    this.imageRenderer.commit();
    this.shapeRenderer.color = this.color;
    this.shapeRenderer.transform = this.transform;
    this.shapeRenderer.drawFilledRect(x, y, width, height);
  }

  /**
   * Draw a rectangle.
   * @param x - The x-coordinate of the rectangle.
   * @param y - The y-coordinate of the rectangle.
   * @param width - The width of the rectangle.
   * @param height - The height of the rectangle.
   * @param lineWidth - The width of the line.
   */
  drawRect(x: number, y: number, width: number, height: number, lineWidth: number): void {
    this.imageRenderer.commit();
    this.shapeRenderer.color = this.color;
    this.shapeRenderer.transform = this.transform;
    this.shapeRenderer.drawRect(x, y, width, height, lineWidth);
  }

  /**
   * Draw a filled circle.
   * @param centerX - The x-coordinate of the center of the circle.
   * @param centerY - The y-coordinate of the center of the circle.
   * @param radius - The radius of the circle.
   * @param segments - The number of segments in the circle.
   */
  drawFilledCircle(centerX: number, centerY: number, radius: number, segments: number): void {
    this.imageRenderer.commit();
    this.shapeRenderer.color = this.color;
    this.shapeRenderer.transform = this.transform;
    this.shapeRenderer.drawFilledCircle(centerX, centerY, radius, segments);
  }

  /**
   * Draw a circle.
   * @param centerX - The x-coordinate of the center of the circle.
   * @param centerY - The y-coordinate of the center of the circle.
   * @param radius - The radius of the circle.
   * @param segments - The number of segments in the circle.
   * @param lineWidth - The width of the line.
   */
  drawCircle(centerX: number, centerY: number, radius: number, segments: number, lineWidth: number): void {
    this.imageRenderer.commit();
    this.shapeRenderer.color = this.color;
    this.shapeRenderer.transform = this.transform;
    this.shapeRenderer.drawCircle(centerX, centerY, radius, segments, lineWidth);
  }

  /**
   * Draw a filled polygon.
   * @param centerX - The x-coordinate of the center of the circle.
   * @param centerY - The y-coordinate of the center of the circle.
   * @param vertices - The vertices of the polygon.
   */
  drawFilledPolygon(centerX: number, centerY: number, vertices: Vec2[]): void {
    this.imageRenderer.commit();
    this.shapeRenderer.color = this.color;
    this.shapeRenderer.transform = this.transform;
    this.shapeRenderer.drawFilledPolygon(centerX, centerY, vertices);
  }

  /**
   * Draw a polygon.
   * @param centerX - The x-coordinate of the center of the circle.
   * @param centerY - The y-coordinate of the center of the circle.
   * @param vertices - The vertices of the polygon.
   * @param lineWidth - The width of the line.
   */
  drawPolygon(centerX: number, centerY: number, vertices: Vec2[], lineWidth: number): void {
    this.imageRenderer.commit();
    this.shapeRenderer.color = this.color;
    this.shapeRenderer.transform = this.transform;
    this.shapeRenderer.drawPolygon(centerX, centerY, vertices, lineWidth);
  }

  /**
   * Draw an image to the screen.
   * @param x - The x-coordinate to draw the image at.
   * @param y - The y-coordinate to draw the image at.
   * @param image - The image to draw.
   * @param frame - Optional region of the image to draw. Defaults to the full image.
   */
  drawImage(x: number, y: number, image: Image, frame?: Rectangle): void {
    this.shapeRenderer.commit();
    this.imageRenderer.color = this.color;
    this.imageRenderer.transform = this.transform;
    this.imageRenderer.drawImage(x, y, image, frame);
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
    this.shapeRenderer.commit();
    this.imageRenderer.color = this.color;
    this.imageRenderer.transform = this.transform;
    this.imageRenderer.drawImagePoints(tlX, tlY, trX, trY, brX, brY, blX, blY, image, frame);
  }

  /**
   * Draw a render target to the screen.
   * @param x - The x-coordinate to draw the render target at.
   * @param y - The y-coordinate to draw the render target at.
   * @param target - The render target to draw.
   */
  drawRenderTarget(x: number, y: number, target: RenderTarget): void {
    this.shapeRenderer.commit();
    this.imageRenderer.color = this.color;
    this.imageRenderer.transform = this.transform;
    this.imageRenderer.drawRenderTarget(x, y, target);
  }

  /**
   * Draw a string of text to the screen.
   * @param x - The x-coordinate to draw the text at.
   * @param font - The font to use.
   * @param text - The text to draw.
   */
  drawBitmapText(x: number, y: number, font: BitmapFont, text: string): void {
    this.shapeRenderer.commit();
    this.imageRenderer.color = this.color;
    this.imageRenderer.transform = this.transform;
    this.imageRenderer.drawBitmapText(x, y, font, text);
  }

  setBool(location: WebGLUniformLocation | null, value: boolean): void {
    this.glContext.gl.uniform1i(location, value ? 1 : 0);
  }

  setInt(location: WebGLUniformLocation | null, value: number): void {
    this.glContext.gl.uniform1i(location, value);
  }

  setInt2(location: WebGLUniformLocation | null, value1: number, value2: number): void {
    this.glContext.gl.uniform2i(location, value1, value2);
  }

  setInt3(location: WebGLUniformLocation | null, value1: number, value2: number, value3: number): void {
    this.glContext.gl.uniform3i(location, value1, value2, value3);
  }

  setInt4(location: WebGLUniformLocation | null, value1: number, value2: number, value3: number, value4: number): void {
    this.glContext.gl.uniform4i(location, value1, value2, value3, value4);
  }

  setInts(location: WebGLUniformLocation | null, value: Int32Array): void {
    this.glContext.gl.uniform1iv(location, value);
  }

  setFloat(location: WebGLUniformLocation | null, value: number): void {
    this.glContext.gl.uniform1f(location, value);
  }

  setFloat2(location: WebGLUniformLocation | null, value1: number, value2: number): void {
    this.glContext.gl.uniform2f(location, value1, value2);
  }

  setFloat3(location: WebGLUniformLocation | null, value1: number, value2: number, value3: number): void {
    this.glContext.gl.uniform3f(location, value1, value2, value3);
  }

  setFloat4(
    location: WebGLUniformLocation | null,
    value1: number,
    value2: number,
    value3: number,
    value4: number,
  ): void {
    this.glContext.gl.uniform4f(location, value1, value2, value3, value4);
  }

  setFloats(location: WebGLUniformLocation | null, value: Float32Array): void {
    this.glContext.gl.uniform1fv(location, value);
  }

  setMatrix(location: WebGLUniformLocation | null, value: Mat4): void {
    this.glContext.gl.uniformMatrix4fv(location, false, value.value);
  }

  setTexture(unit: number, value?: Image): void {
    const gl = this.glContext.gl;
    gl.activeTexture(gl.TEXTURE0 + unit);
    if (value) {
      gl.bindTexture(gl.TEXTURE_2D, value.texture);
    } else {
      gl.bindTexture(gl.TEXTURE_2D, null);
    }
  }
}
