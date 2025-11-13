/** biome-ignore-all lint/nursery/useMaxParams: Not passing objects to help performance. */
import type { Vec2 } from '../../math/vec2.js';
import { Vec3 } from '../../math/vec3.js';
import type { Color } from '../color.js';
import { getShapeFragmentSource } from '../defaultShaders.js';
import type { GLContext } from '../glContext.js';
import { Shader } from '../shader.js';
import type { LineAlign } from '../types.js';
import { BaseRenderer } from './baseRenderer.js';

/**
 * The buffer offset per vertex.
 * position: x, y, z.
 * color: r, g, b, a.
 */
const OFFSET = 7;

/**
 * The buffer offset per triangle.
 */
const TRIANGLE_OFFSET: number = OFFSET * 3;

/**
 * The amount of vertices per triangle.
 */
const VERTICES_PER_TRI = 3;

/**
 * The shape renderer can render triangles, rectangles, circles, and lines.
 * Each shape is made up of triangles. And they are batched together to reduce draw calls.
 */
export class ShapeRenderer extends BaseRenderer {
  /**
   * The current batch index in the buffer.
   */
  private index = 0;

  /**
   * Temporary vector to store a vertex position.
   */
  private readonly tempVec3: Vec3;

  /**
   * Create a new shape renderer.
   */
  constructor(glContext: GLContext) {
    super(glContext);

    this.tempVec3 = new Vec3();

    this.vertexBuffer = glContext.gl.createBuffer();
    this.vertexIndices = new Float32Array(this.BUFFER_SIZE * TRIANGLE_OFFSET);

    this.indexBuffer = glContext.gl.createBuffer();
    this.indexIndices = new Int32Array(this.BUFFER_SIZE * VERTICES_PER_TRI);

    // The indices are the same for all triangles.
    for (let i = 0; i < this.indexIndices.length; i++) {
      this.indexIndices[i * VERTICES_PER_TRI] = i * VERTICES_PER_TRI;
      this.indexIndices[i * VERTICES_PER_TRI + 1] = i * VERTICES_PER_TRI + 1;
      this.indexIndices[i * VERTICES_PER_TRI + 2] = i * VERTICES_PER_TRI + 2;
    }

    this.createDefaultShader();
  }

  /**
   * Set the current shader.
   * @param shader - The shader to use. If not provided, the default shader will be used.
   */
  override setShader(shader?: Shader): void {
    if (shader) {
      if (shader.type === 'shape') {
        super.setShader(shader);
      }
    } else {
      super.setShader();
    }
  }

  start(): void {
    this.index = 0;
  }

  /**
   * Draw the current batch of triangles.
   */
  commit(): void {
    if (this.index === 0) {
      return;
    }

    this.shader.use();
    this.shader.applyBlendMode();

    const gl = this.glContext.gl;
    gl.uniformMatrix4fv(this.shader.uniforms.u_projectionMatrix, false, this.projection.value);
    gl.bindBuffer(gl.ARRAY_BUFFER, this.vertexBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, this.vertexIndices, gl.DYNAMIC_DRAW);

    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.indexBuffer);
    gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, this.indexIndices, gl.STATIC_DRAW);

    gl.vertexAttribPointer(this.shader.vertexPositionLocation, 3, gl.FLOAT, false, 7 * this.FLOAT_SIZE, 0);
    gl.enableVertexAttribArray(this.shader.vertexPositionLocation);

    gl.vertexAttribPointer(
      this.shader.vertexColorLocation,
      4,
      gl.FLOAT,
      false,
      7 * this.FLOAT_SIZE,
      3 * this.FLOAT_SIZE,
    );
    gl.enableVertexAttribArray(this.shader.vertexColorLocation);

    gl.drawElements(gl.TRIANGLES, this.index * VERTICES_PER_TRI, gl.UNSIGNED_INT, 0);

    gl.bindBuffer(gl.ARRAY_BUFFER, null);
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, null);

    gl.disableVertexAttribArray(this.shader.vertexPositionLocation);
    gl.disableVertexAttribArray(this.shader.vertexColorLocation);

    this.index = 0;
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
    if (this.index >= this.BUFFER_SIZE) {
      this.commit();
    }

    this.updateBuffer(p1X, p1Y, this.color, 0);
    this.updateBuffer(p2X, p2Y, this.color, 1);
    this.updateBuffer(p3X, p3Y, this.color, 2);
    this.index++;
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
    const dx = p2X - p1X;
    const dy = p2Y - p1Y;
    const lineLength = Math.sqrt(dx * dx + dy * dy);
    if (!lineLength) {
      return;
    }

    const scale = lineWidth / (2 * lineLength);
    const ddx = -scale * dy;
    const ddy = scale * dx;
    switch (align) {
      case 'inside':
        this.drawFilledTriangle(p1X, p1Y, p1X + ddx * 2, p1Y + ddy * 2, p2X, p2Y);
        this.drawFilledTriangle(p2X, p2Y, p1X + ddx * 2, p1Y + ddy * 2, p2X + ddx * 2, p2Y + ddy * 2);
        break;

      case 'center':
        this.drawFilledTriangle(p1X + ddx, p1Y + ddy, p1X - ddx, p1Y - ddy, p2X + ddx, p2Y + ddy);
        this.drawFilledTriangle(p2X + ddx, p2Y + ddy, p1X - ddx, p1Y - ddy, p2X - ddx, p2Y - ddy);
        break;

      case 'outside':
        this.drawFilledTriangle(p1X, p1Y, p1X - ddx * 2, p1Y - ddy * 2, p2X, p2Y);
        this.drawFilledTriangle(p2X, p2Y, p1X - ddx * 2, p1Y - ddy * 2, p2X - ddx * 2, p2Y - ddy * 2);
        break;
    }
  }

  /**
   * Draw a filled rectangle.
   * @param x - The x-coordinate of the rectangle.
   * @param y - The y-coordinate of the rectangle.
   * @param width - The width of the rectangle.
   * @param height - The height of the rectangle.
   */
  drawFilledRect(x: number, y: number, width: number, height: number): void {
    this.drawFilledTriangle(x, y, x + width, y, x, y + height);
    this.drawFilledTriangle(x, y + height, x + width, y, x + width, y + height);
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
    // Top.
    this.drawLine(x, y, x + width, y, 'inside', lineWidth);

    // Right.
    this.drawLine(x + width, y, x + width, y + height, 'inside', lineWidth);

    // Bottom.
    this.drawLine(x + width, y + height, x, y + height, 'inside', lineWidth);

    // Left.
    this.drawLine(x, y + height, x, y, 'inside', lineWidth);
  }

  /**
   * Draw a filled circle.
   * @param centerX - The x-coordinate of the center of the circle.
   * @param centerY - The y-coordinate of the center of the circle.
   * @param radius - The radius of the circle.
   * @param segments - The number of segments in the circle.
   */
  drawFilledCircle(centerX: number, centerY: number, radius: number, segments: number): void {
    if (radius <= 0) {
      console.error('ShapeRenderer: Radius must be positive.');
      return;
    }

    if (segments < 3) {
      console.error('ShapeRenderer: Segments must be at least 3.');
      return;
    }

    const theta = (2 * Math.PI) / segments;
    const cos = Math.cos(theta);
    const sin = Math.sin(theta);
    let sx = radius;
    let sy = 0.0;
    for (let i = 0; i < segments; i++) {
      const px = sx + centerX;
      const py = sy + centerY;
      const t = sx;
      sx = cos * sx - sin * sy;
      sy = cos * sy + sin * t;
      this.drawFilledTriangle(px, py, sx + centerX, sy + centerY, centerX, centerY);
    }
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
    if (radius <= 0) {
      console.error('ShapeRenderer: Radius must be positive.');
      return;
    }

    if (segments < 3) {
      console.error('ShapeRenderer: Segments must be at least 3.');
      return;
    }

    if (lineWidth <= 0) {
      console.error('ShapeRenderer: Line width must be positive.');
      return;
    }

    const theta = (2 * Math.PI) / segments;
    const cos = Math.cos(theta);
    const sin = Math.sin(theta);
    let sx = radius;
    let sy = 0.0;
    for (let i = 0; i < segments; i++) {
      const px = sx + centerX;
      const py = sy + centerY;
      const t = sx;
      sx = cos * sx - sin * sy;
      sy = cos * sy + sin * t;
      this.drawLine(px, py, sx + centerX, sy + centerY, 'outside', lineWidth);
    }
  }

  /**
   * Draw a filled polygon.
   * @param centerX - The x-coordinate of the center of the circle.
   * @param centerY - The y-coordinate of the center of the circle.
   * @param vertices - The vertices of the polygon.
   */
  drawFilledPolygon(centerX: number, centerY: number, vertices: Vec2[]): void {
    if (vertices.length < 3) {
      console.log('Cannot draw polygon with less than 3 points');
      return;
    }

    const first = vertices[0];
    let last = vertices[1];

    for (let i = 2; i < vertices.length; i++) {
      const current = vertices[i];
      this.drawFilledTriangle(
        first.x + centerX,
        first.y + centerY,
        last.x + centerX,
        last.y + centerY,
        current.x + centerX,
        current.y + centerY,
      );
      last = current;
    }
  }

  /**
   * Draw a polygon.
   * @param centerX - The x-coordinate of the center of the circle.
   * @param centerY - The y-coordinate of the center of the circle.
   * @param vertices - The vertices of the polygon.
   * @param lineWidth - The width of the line.
   */
  drawPolygon(centerX: number, centerY: number, vertices: Vec2[], lineWidth: number): void {
    if (vertices.length < 3) {
      console.log('Cannot draw polygon with less than 3 points');
      return;
    }

    const start = vertices[0];
    let last = start;

    for (let i = 1; i < vertices.length; i++) {
      const current = vertices[i];
      this.drawLine(last.x + centerX, last.y + centerY, current.x + centerX, current.y + centerY, 'inside', lineWidth);
      last = current;
    }

    // Connect the last vertex to the first.
    this.drawLine(last.x + centerX, last.y + centerY, start.x + centerX, start.y + centerY, 'inside', lineWidth);
  }

  /**
   * Update the buffer with a point and color.
   * @param x - The x-coordinate of the point.
   * @param y - The y-coordinate of the point.
   * @param color - The color of the point.
   * @param pointOffset - The offset of the point in the triangle.
   */
  private updateBuffer(x: number, y: number, color: Color, pointOffset: number): void {
    this.tempVec3.transformMat4(this.transform, x, y, 0);
    const i = this.index * TRIANGLE_OFFSET + pointOffset * OFFSET;

    this.vertexIndices[i] = this.tempVec3.x;
    this.vertexIndices[i + 1] = this.tempVec3.y;
    this.vertexIndices[i + 2] = 0;
    this.vertexIndices[i + 3] = color.red;
    this.vertexIndices[i + 4] = color.green;
    this.vertexIndices[i + 5] = color.blue;
    this.vertexIndices[i + 6] = color.alpha;
  }

  /**
   * Create the default shader for the shape renderer.
   */
  private createDefaultShader(): void {
    this.defaultShader = new Shader('shape', getShapeFragmentSource(this.glContext.isGL1));
    this.shader = this.defaultShader;
  }
}
