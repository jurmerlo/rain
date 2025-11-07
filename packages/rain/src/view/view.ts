import { Vec2 } from '../math/vec2.js';
import { type ScaleMode, scaleModeFitView } from './scaleModes.js';

export type ViewOptions = {
  designWidth: number;
  designHeight: number;
  pixelRatio: number;
  canvas: HTMLCanvasElement;
  targetFps: number;
  fillWindow: boolean;
};

export class View {
  readonly pixelRatio: number;

  readonly canvas: HTMLCanvasElement;

  targetFps: number;

  debugRender = false;

  fillWindow = false;

  get designWidth(): number {
    return this.designSize.x;
  }

  get designHeight(): number {
    return this.designSize.y;
  }

  get canvasWidth(): number {
    return this.canvas.width * this.pixelRatio;
  }

  get canvasHeight(): number {
    return this.canvas.height * this.pixelRatio;
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
    this.scaleToFit();
  }

  get viewAnchorX(): number {
    return this.viewAnchor.x;
  }

  get viewAnchorY(): number {
    return this.viewAnchor.y;
  }

  private designSize = new Vec2();

  private viewSize = new Vec2();

  private viewScale = new Vec2();

  private viewOffset = new Vec2();

  private viewAnchor = new Vec2();

  private _scaleMode: ScaleMode;

  constructor({ designWidth, designHeight, fillWindow, pixelRatio, canvas, targetFps }: ViewOptions) {
    this.designSize.set(designWidth, designHeight);
    this.canvas = canvas;
    this.pixelRatio = pixelRatio;
    this.targetFps = targetFps;
    this.fillWindow = fillWindow;

    this._scaleMode = scaleModeFitView;
    this.scaleToFit();
  }

  scaleToFit(): void {
    const styleWidth = +this.canvas.style.width.replace('px', '');
    const styleHeight = +this.canvas.style.height.replace('px', '');
    const { viewWidth, viewHeight, scaleFactorX, scaleFactorY, offsetX, offsetY } = this.scaleMode({
      designWidth: this.designWidth,
      designHeight: this.designHeight,
      canvasWidth: styleWidth,
      canvasHeight: styleHeight,
      anchorX: this.viewAnchor.x,
      anchorY: this.viewAnchor.y,
    });

    this.canvas.width = (styleWidth / scaleFactorX) * this.pixelRatio;
    this.canvas.height = (styleHeight / scaleFactorY) * this.pixelRatio;

    this.viewSize.set(viewWidth, viewHeight);
    this.viewScale.set(scaleFactorX, scaleFactorY);
    this.viewOffset.set(offsetX, offsetY);
  }

  setViewAnchor(x: number, y: number): void {
    this.viewAnchor.set(x, y);
    this.scaleToFit();
  }
}
