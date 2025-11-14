import { inject } from '@rain2d/rain/di';
import { type GLContext, RenderTarget } from '@rain2d/rain/graphics';
import { Vec2 } from '@rain2d/rain/math';
import type { Graphics } from '../../rain/dist/graphics/graphics.js';
import { type ScaleMode, scaleModeFitView } from './scaleModes.js';

/**
 * Manages the game view, handling canvas sizing, scaling, and rendering.
 * Provides utilities for responsive scaling and coordinate systems.
 */
export class View {
  /**
   * The pixel ratio used for high-DPI displays.
   */
  readonly pixelRatio: number;

  /**
   * The render target for the view.
   */
  target: RenderTarget;

  /**
   * Whether the view should fill the entire window.
   * @returns True if the view fills the window, false otherwise.
   */
  get fillWindow(): boolean {
    return this._fillWindow;
  }

  /**
   * Sets whether the view should fill the entire window.
   * @param value - True to fill the window, false to use original canvas size.
   */
  set fillWindow(value: boolean) {
    this._fillWindow = value;
    this.resize(window.innerWidth, window.innerHeight);
  }

  /**
   * The design width of the game in pixels.
   * @returns The design width.
   */
  get designWidth(): number {
    return this.designSize.x;
  }

  /**
   * The design height of the game in pixels.
   * @returns The design height.
   */
  get designHeight(): number {
    return this.designSize.y;
  }

  /**
   * The actual canvas width in pixels.
   * @returns The canvas width.
   */
  get canvasWidth(): number {
    return this.canvas.width;
  }

  /**
   * The actual canvas height in pixels.
   * @returns The canvas height.
   */
  get canvasHeight(): number {
    return this.canvas.height;
  }

  /**
   * The horizontal center of the canvas in pixels.
   * @returns The canvas center X coordinate.
   */
  get canvasCenterX(): number {
    return this.canvasWidth * 0.5;
  }

  /**
   * The vertical center of the canvas in pixels.
   * @returns The canvas center Y coordinate.
   */
  get canvasCenterY(): number {
    return this.canvasHeight * 0.5;
  }

  /**
   * The scaled view width in pixels.
   * @returns The view width.
   */
  get viewWidth(): number {
    return this.viewSize.x;
  }

  /**
   * The scaled view height in pixels.
   * @returns The view height.
   */
  get viewHeight(): number {
    return this.viewSize.y;
  }

  /**
   * The horizontal center of the view in pixels.
   * @returns The view center X coordinate.
   */
  get viewCenterX(): number {
    return this.viewSize.x * 0.5;
  }

  /**
   * The vertical center of the view in pixels.
   * @returns The view center Y coordinate.
   */
  get viewCenterY(): number {
    return this.viewSize.y * 0.5;
  }

  /**
   * The horizontal scale factor applied to the view.
   * @returns The view scale X factor.
   */
  get viewScaleX(): number {
    return this.viewScale.x;
  }

  /**
   * The vertical scale factor applied to the view.
   * @returns The view scale Y factor.
   */
  get viewScaleY(): number {
    return this.viewScale.y;
  }

  /**
   * The horizontal offset of the view within the canvas in pixels.
   * @returns The view offset X.
   */
  get viewOffsetX(): number {
    return this.viewOffset.x;
  }

  /**
   * The vertical offset of the view within the canvas in pixels.
   * @returns The view offset Y.
   */
  get viewOffsetY(): number {
    return this.viewOffset.y;
  }

  /**
   * The current scale mode function used for scaling calculations.
   * @returns The scale mode function.
   */
  get scaleMode(): ScaleMode {
    return this._scaleMode;
  }

  /**
   * Sets the scale mode function used for scaling calculations.
   * @param mode - The scale mode function to use.
   */
  set scaleMode(mode: ScaleMode) {
    this._scaleMode = mode;
    this.resize(window.innerWidth, window.innerHeight);
  }

  /**
   * The horizontal anchor point for view positioning (0-1).
   * @returns The view anchor X.
   */
  get viewAnchorX(): number {
    return this.viewAnchor.x;
  }

  /**
   * The vertical anchor point for view positioning (0-1).
   * @returns The view anchor Y.
   */
  get viewAnchorY(): number {
    return this.viewAnchor.y;
  }

  /**
   * The HTML canvas element.
   */
  private canvas: HTMLCanvasElement;

  /**
   * The design size of the game.
   */
  private designSize = new Vec2();

  /**
   * The current scaled view size.
   */
  private viewSize = new Vec2();

  /**
   * The scale factors applied to the view.
   */
  private viewScale = new Vec2();

  /**
   * The offset of the view within the canvas.
   */
  private viewOffset = new Vec2();

  /**
   * The anchor point for view positioning.
   */
  private viewAnchor = new Vec2();

  /**
   * The current scale mode function.
   */
  private _scaleMode: ScaleMode;

  /**
   * Whether the view fills the window.
   */
  private _fillWindow: boolean;

  /**
   * The original canvas size before any resizing.
   */
  private originalCanvasSize: Vec2;

  /**
   * The WebGL context.
   */
  @inject()
  private readonly glContext!: GLContext;

  /**
   * Creates a new View instance.
   * @param designWidth - The design width of the game in pixels.
   * @param designHeight - The design height of the game in pixels.
   * @param fillWindow - Whether the view should fill the entire window.
   * @param pixelRatio - The pixel ratio for high-DPI displays.
   */
  constructor(designWidth: number, designHeight: number, fillWindow: boolean, pixelRatio: number) {
    this.designSize.set(designWidth, designHeight);
    this.canvas = this.glContext.canvas;
    this.originalCanvasSize = new Vec2(
      +this.canvas.style.width.replace('px', ''),
      +this.canvas.style.height.replace('px', ''),
    );
    this.pixelRatio = pixelRatio;
    this._fillWindow = fillWindow;
    if (fillWindow) {
      this.canvas.style.width = `${window.innerWidth}px`;
      this.canvas.style.height = `${window.innerHeight}px`;
    }

    this._scaleMode = scaleModeFitView;
    this.scaleToFit();
    this.target = new RenderTarget(this.viewWidth, this.viewHeight);
  }

  /**
   * Calculates and applies the appropriate scaling to fit the view within the canvas.
   */
  scaleToFit(): void {
    const styleWidth = +this.canvas.style.width.replace('px', '');
    const styleHeight = +this.canvas.style.height.replace('px', '');
    const { viewWidth, viewHeight, scaleFactorX, scaleFactorY, offsetX, offsetY } = this.scaleMode({
      designWidth: this.designWidth,
      designHeight: this.designHeight,
      canvasWidth: styleWidth * this.pixelRatio,
      canvasHeight: styleHeight * this.pixelRatio,
      anchorX: this.viewAnchor.x,
      anchorY: this.viewAnchor.y,
    });

    this.canvas.width = styleWidth * this.pixelRatio;
    this.canvas.height = styleHeight * this.pixelRatio;

    this.viewSize.set(viewWidth, viewHeight);
    this.viewScale.set(scaleFactorX, scaleFactorY);
    this.viewOffset.set(offsetX, offsetY);

    // Destroy old render target before creating new one to prevent memory leak
    if (this.target) {
      this.target.destroy();
    }

    this.target = new RenderTarget(this.viewWidth, this.viewHeight);
  }

  /**
   * Sets the anchor point for view positioning within the canvas.
   * @param x - The horizontal anchor (0-1, where 0 is left and 1 is right).
   * @param y - The vertical anchor (0-1, where 0 is top and 1 is bottom).
   */
  setViewAnchor(x: number, y: number): void {
    this.viewAnchor.set(x, y);
  }

  /**
   * Resizes the canvas and recalculates the view scaling.
   * @param width - The new width in pixels.
   * @param height - The new height in pixels.
   */
  resize(width: number, height: number): void {
    if (this.fillWindow) {
      this.canvas.style.width = `${width}px`;
      this.canvas.style.height = `${height}px`;
    } else {
      this.canvas.style.width = `${this.originalCanvasSize.x}px`;
      this.canvas.style.height = `${this.originalCanvasSize.y}px`;
    }
    this.scaleToFit();
  }

  /**
   * Sets this view's render target as the active target for the graphics context.
   * @param graphics - The graphics context.
   */
  setAsTarget(graphics: Graphics): void {
    graphics.pushTarget(this.target);
  }

  /**
   * Draws the view's render target to the screen with appropriate scaling and offset.
   * @param graphics - The graphics context.
   */
  drawTarget(graphics: Graphics): void {
    if (graphics.target === this.target) {
      graphics.popTarget();
    }

    graphics.transform.identity();
    graphics.color.set(1, 1, 1, 1);

    graphics.start();
    graphics.transform.scale(this.viewScaleX, this.viewScaleY);
    graphics.drawRenderTarget(this.viewOffsetX, this.viewOffsetY, this.target);
    graphics.commit();
  }
}
