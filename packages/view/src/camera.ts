import { inject } from '@rain2d/rain/di';
import { Color, type Graphics, RenderTarget } from '@rain2d/rain/graphics';
import { clamp, Mat4, Rectangle, rotateAround, toRad, Vec2 } from '@rain2d/rain/math';
import type { View } from './view.js';

/**
 * The camera creation options.
 */
export type CameraOptions = {
  /**
   * The x-coordinate of the camera's center position.
   */
  x?: number;

  /**
   * The y-coordinate of the camera's center position.
   */
  y?: number;

  /**
   * The rotation angle of the camera in degrees.
   */
  rotation?: number;

  /**
   * The zoom level of the camera.
   */
  zoom?: number;

  /**
   * The x-coordinate of the view rectangle compared to the screen (0 - 1).
   */
  viewX?: number;

  /**
   * The y-coordinate of the view rectangle compared to the screen (0 - 1).
   */
  viewY?: number;

  /**
   * The width of the view rectangle compared to the screen (0 - 1).
   */
  viewWidth?: number;

  /**
   * The height of the view rectangle compared to the screen (0 - 1).
   */
  viewHeight?: number;

  /**
   * The background color of the camera.
   */
  bgColor?: Color;

  /**
   * A tag to identify the camera.
   */
  tag?: string;
};

/**
 * A camera that controls the view and rendering of a scene.
 * Manages viewport positioning, rotation, zoom, and provides coordinate transformation utilities.
 */
export class Camera {
  /**
   * Indicates if the camera is used to render.
   */
  active = true;

  /**
   * The center position of the camera.
   */
  position: Vec2;

  /**
   * The rotation angle of the camera in degrees.
   */
  rotation: number;

  /**
   * The zoom level of the camera.
   */
  zoom: number;

  /**
   * The transformation matrix of the camera.
   */
  transform: Mat4;

  /**
   * The background color of the camera.
   */
  bgColor: Color;

  /**
   * The screen bounds of the camera.
   */
  screenBounds: Rectangle;

  /**
   * The render canvas used by the camera.
   */
  target!: RenderTarget;

  /**
   * The view rectangle of the camera.
   */
  viewRect: Rectangle;

  /**
   * A tag to identify the camera.
   */
  tag: string;

  /**
   * Temporary matrix for calculations.
   */
  private tempMatrix: Mat4;

  /**
   * The screen position of the camera.
   */
  private screenPosition: Vec2;

  /**
   * The view instance.
   */
  @inject()
  private view!: View;

  /**
   * Creates a new Camera instance.
   * @param options - The camera creation options.
   */
  constructor({ bgColor, rotation, tag, viewX, viewY, viewHeight, viewWidth, x, y, zoom }: CameraOptions = {}) {
    this.position = new Vec2(x ?? this.view.viewWidth * 0.5, y ?? this.view.viewHeight * 0.5);
    this.rotation = rotation ?? 0;
    this.zoom = zoom ?? 1;
    this.bgColor = bgColor ?? new Color(0, 0, 0);
    this.tag = tag ?? 'default';
    this.transform = new Mat4();
    this.screenBounds = new Rectangle();
    this.viewRect = new Rectangle();
    this.tempMatrix = new Mat4();
    this.screenPosition = new Vec2();
    this.updateView(viewX ?? 0, viewY ?? 0, viewWidth ?? 1, viewHeight ?? 1);
  }

  /**
   * Updates the transformation matrix of the camera.
   */
  updateTransform(): void {
    Mat4.fromTranslation(this.screenBounds.width * 0.5, this.screenBounds.height * 0.5, 0, this.transform);
    Mat4.fromZRotation(toRad(this.rotation), this.tempMatrix);
    Mat4.multiply(this.transform, this.tempMatrix, this.transform);

    Mat4.fromScale(this.zoom, this.zoom, 1, this.tempMatrix);
    Mat4.multiply(this.transform, this.tempMatrix, this.transform);

    Mat4.fromTranslation(-this.position.x, -this.position.y, 0, this.tempMatrix);
    Mat4.multiply(this.transform, this.tempMatrix, this.transform);
  }

  /**
   * Converts screen coordinates to world coordinates.
   * @param x - The x-coordinate on the screen.
   * @param y - The y-coordinate on the screen.
   * @param out - Optional Vec2 to store the result. If not provided, a new Vec2 is created.
   * @returns The corresponding world coordinates.
   */
  screenToWorld(x: number, y: number, out?: Vec2): Vec2 {
    const tempX =
      this.position.x -
      (this.screenBounds.width * 0.5) / this.zoom +
      (x / (this.view.canvasWidth / this.view.pixelRatio)) * (this.screenBounds.width / this.zoom);

    const tempY =
      this.position.y -
      (this.screenBounds.height * 0.5) / this.zoom +
      (y / (this.view.canvasHeight / this.view.pixelRatio)) * (this.screenBounds.height / this.zoom);

    const tempPos = Vec2.get(tempX, tempY);
    const tempCenter = Vec2.get(this.position.x, this.position.y);

    const result = rotateAround(tempPos, tempCenter, -this.rotation, out);

    Vec2.put(tempPos);
    Vec2.put(tempCenter);

    return result;
  }

  /**
   * Updates the view rectangle and screen bounds of the camera.
   * @param x - The x-coordinate of the view rectangle.
   * @param y - The y-coordinate of the view rectangle.
   * @param width - The width of the view rectangle.
   * @param height - The height of the view rectangle.
   */
  updateView(x: number, y: number, width: number, height: number): void {
    const xCl = clamp(x, 0, 1);
    const yCl = clamp(y, 0, 1);
    const widthCl = clamp(width, 0, 1);
    const heightCl = clamp(height, 0, 1);

    this.viewRect.set(xCl, yCl, widthCl, heightCl);

    this.screenBounds.set(
      xCl * this.view.viewWidth,
      yCl * this.view.viewHeight,
      widthCl * this.view.viewWidth,
      heightCl * this.view.viewHeight,
    );
    this.screenPosition.set(this.screenBounds.x, this.screenBounds.y);

    // Destroy old render target if it exists to prevent memory leak
    if (this.target) {
      this.target.destroy();
    }

    this.target = new RenderTarget(widthCl * this.view.viewWidth, heightCl * this.view.viewHeight);
  }

  /**
   * Resizes the camera view.
   */
  resize(): void {
    this.updateView(this.viewRect.x, this.viewRect.y, this.viewRect.width, this.viewRect.height);
  }

  /**
   * Draws camera content to the target using the provided graphics context.
   * @param graphics - The graphics context to draw with.
   * @param drawFunc - The function that performs the drawing operations.
   */
  drawContent(graphics: Graphics, drawFunc: (graphics: Graphics, camera?: Camera) => void): void {
    if (!this.active) {
      return;
    }

    this.updateTransform();
    graphics.pushTarget(this.target);
    graphics.start(true, this.bgColor);

    graphics.pushTransform(this.transform);
    graphics.color.set(1, 1, 1, 1);
    drawFunc(graphics, this);
    graphics.commit();
    graphics.popTransform();
    graphics.popTarget();
  }

  /**
   * Draws the camera content to the screen.
   * @param graphics - The graphics context to draw with.
   */
  drawSelf(graphics: Graphics): void {
    if (!this.active) {
      return;
    }

    graphics.drawRenderTarget(this.screenPosition.x, this.screenPosition.y, this.target);
  }

  /**
   * Destroys the camera and releases its resources.
   */
  destroy(): void {
    if (this.target) {
      this.target.destroy();
    }
  }
}
