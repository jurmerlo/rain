import { inject } from '@rain2d/rain/di';
import { type GLContext, RenderTarget } from '@rain2d/rain/graphics';
import { Vec2 } from '@rain2d/rain/math';
import type { Graphics } from '../../rain/dist/graphics/graphics.js';
import { type ScaleMode, scaleModeFitView } from './scaleModes.js';

export class View {
  readonly pixelRatio: number;

  target: RenderTarget;

  get fillWindow(): boolean {
    return this._fillWindow;
  }

  set fillWindow(value: boolean) {
    this._fillWindow = value;
    this.resize(window.innerWidth, window.innerHeight);
  }

  get designWidth(): number {
    return this.designSize.x;
  }

  get designHeight(): number {
    return this.designSize.y;
  }

  get canvasWidth(): number {
    return this.canvas.width;
  }

  get canvasHeight(): number {
    return this.canvas.height;
  }

  get canvasCenterX(): number {
    return this.canvasWidth * 0.5;
  }

  get canvasCenterY(): number {
    return this.canvasHeight * 0.5;
  }

  get viewWidth(): number {
    return this.viewSize.x;
  }

  get viewHeight(): number {
    return this.viewSize.y;
  }

  get viewCenterX(): number {
    return this.viewSize.x * 0.5;
  }

  get viewCenterY(): number {
    return this.viewSize.y * 0.5;
  }

  get viewScaleX(): number {
    return this.viewScale.x;
  }

  get viewScaleY(): number {
    return this.viewScale.y;
  }

  get viewOffsetX(): number {
    return this.viewOffset.x;
  }

  get viewOffsetY(): number {
    return this.viewOffset.y;
  }

  get scaleMode(): ScaleMode {
    return this._scaleMode;
  }

  set scaleMode(mode: ScaleMode) {
    this._scaleMode = mode;
    this.resize(window.innerWidth, window.innerHeight);
  }

  get viewAnchorX(): number {
    return this.viewAnchor.x;
  }

  get viewAnchorY(): number {
    return this.viewAnchor.y;
  }

  private canvas: HTMLCanvasElement;

  private designSize = new Vec2();

  private viewSize = new Vec2();

  private viewScale = new Vec2();

  private viewOffset = new Vec2();

  private viewAnchor = new Vec2();

  private _scaleMode: ScaleMode;

  private _fillWindow: boolean;

  private originalCanvasSize: Vec2;

  @inject()
  private readonly glContext!: GLContext;

  constructor(designWidth: number, designHeight: number, fillWindow: boolean, pixelRatio: number) {
    this.designSize.set(designWidth, designHeight);
    this.canvas = this.glContext.canvas;
    this.originalCanvasSize = new Vec2(this.canvas.width, this.canvas.height);
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
    this.target = new RenderTarget(this.viewWidth, this.viewHeight);
  }

  setViewAnchor(x: number, y: number): void {
    this.viewAnchor.set(x, y);
  }

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

  setAsTarget(graphics: Graphics): void {
    graphics.pushTarget(this.target);
  }

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
