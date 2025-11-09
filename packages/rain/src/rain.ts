import { Assets } from './assets/assets.js';
import { AtlasLoader } from './assets/atlasLoader.js';
import { BitmapFontLoader } from './assets/bitmapFontLoader.js';
import { ImageLoader } from './assets/imageLoader.js';
import { SoundLoader } from './assets/soundLoader.js';
import { TextLoader } from './assets/textLoader.js';
import { Audio } from './audio/audio.js';
import { addService } from './di/services.js';
import { GLContext } from './graphics/glContext.js';
import { Graphics } from './graphics/graphics.js';
import { RenderTarget } from './graphics/renderTarget.js';
import { Input } from './input/input.js';
import { clamp } from './math/mathUtils.js';
import { Random } from './math/random.js';
import type { SceneClass } from './scenes/scene.js';
import { Scenes } from './scenes/scenes.js';
import { Time } from './utils/time.js';
import { View } from './view/view.js';

export type RainOptions = {
  designWidth: number;
  designHeight: number;
  canvasWidth?: number;
  canvasHeight?: number;
  title?: string;
  targetFps?: number;
  runInBackground?: boolean;
  hdpi?: boolean;
  fillWindow?: boolean;
};

const MAX_DT: number = 1.0 / 15;

export class Rain {
  private input: Input;

  private runInBackground: boolean;

  private lastFrameTime: number;

  private context: GLContext;

  private graphics: Graphics;

  private started: boolean;

  private inFocus: boolean;

  private scenes: Scenes;

  private view: View;

  private target: RenderTarget;

  private time: Time;

  private originalCanvasWidth: number;

  private originalCanvasHeight: number;

  constructor({
    designWidth,
    designHeight,
    canvasWidth,
    canvasHeight,
    title,
    targetFps,
    runInBackground,
    hdpi,
    fillWindow,
  }: RainOptions) {
    title ??= 'Rain Game';
    canvasWidth ??= designWidth;
    canvasHeight ??= designHeight;
    this.originalCanvasWidth = canvasWidth;
    this.originalCanvasHeight = canvasHeight;

    this.runInBackground = runInBackground ?? false;
    targetFps ??= -1;
    hdpi ??= false;
    fillWindow ??= false;
    if (fillWindow) {
      canvasWidth = window.innerWidth;
      canvasHeight = window.innerHeight;
    }

    document.title = title;
    const canvasId = 'rain';

    const pixelRatio = hdpi ? window.devicePixelRatio : 1;
    const canvas = document.getElementById(canvasId) as HTMLCanvasElement;

    if (!canvas) {
      throw new Error(`Canvas element with id "${canvasId}" not found`);
    }

    canvas.width = canvasWidth * pixelRatio;
    canvas.height = canvasHeight * pixelRatio;

    canvas.style.width = `${canvasWidth}px`;
    canvas.style.height = `${canvasHeight}px`;

    this.view = new View({
      designWidth,
      designHeight,
      fillWindow,
      pixelRatio,
      canvas,
      targetFps,
      resizefunc: this.resize.bind(this),
    });

    addService('view', this.view);

    this.context = new GLContext(canvas);
    addService('glContext', this.context);

    addService('audio', new Audio());

    this.graphics = new Graphics(this.context, this.view);
    addService('graphics', this.graphics);

    addService('random', new Random());

    this.input = new Input(canvas);
    addService('input', this.input);

    const assets = new Assets();
    addService('assets', assets);

    this.scenes = new Scenes();
    addService('scenes', this.scenes);

    this.time = new Time();
    addService('time', this.time);

    assets.registerLoader(new AtlasLoader());
    assets.registerLoader(new BitmapFontLoader());
    assets.registerLoader(new ImageLoader());
    assets.registerLoader(new SoundLoader());
    assets.registerLoader(new TextLoader());

    this.target = new RenderTarget(this.view.viewWidth, this.view.viewHeight);

    this.started = false;
    this.lastFrameTime = 0;
    this.inFocus = false;
  }

  start(startScene: SceneClass): void {
    if (this.started) {
      throw new Error('Rain is already started');
    }
    this.started = true;

    this.view.canvas.focus();
    this.inFocus = true;

    this.view.canvas.addEventListener('focus', () => this.focus());
    this.view.canvas.addEventListener('blur', () => this.blur());
    window.addEventListener('resize', () => this.resize(window.innerWidth, window.innerHeight));

    this.scenes.changeTo(startScene);
    requestAnimationFrame(() => {
      this.lastFrameTime = window.performance.now();
      this.loop();
    });
  }

  focus(): void {
    this.inFocus = true;
    this.scenes.focus();
  }

  blur(): void {
    this.inFocus = false;
    this.scenes.blur();
  }

  resize(width: number, height: number): void {
    if (this.view.fillWindow) {
      this.view.canvas.style.width = `${width}px`;
      this.view.canvas.style.height = `${height}px`;
    } else {
      this.view.canvas.style.width = `${this.originalCanvasWidth}px`;
      this.view.canvas.style.height = `${this.originalCanvasHeight}px`;
    }
    this.view.scaleToFit();
    this.target = new RenderTarget(this.view.viewWidth, this.view.viewHeight);
    this.scenes.resize(width, height);
  }

  private loop(): void {
    window.requestAnimationFrame(() => this.loop());

    const now = window.performance.now();
    const timePassed = now - this.lastFrameTime;
    if (this.view.targetFps === -1) {
      this.update(timePassed / 1000.0);
      this.lastFrameTime = now;
    } else {
      const interval = 1.0 / this.view.targetFps;
      if (timePassed < interval) {
        return;
      }

      const excess = timePassed % interval;
      this.update(excess / 1000.0);
      this.lastFrameTime = now - excess;
    }
  }

  private update(deltaTime: number): void {
    if (!this.inFocus && !this.runInBackground) {
      return;
    }

    const clampedDt = clamp(deltaTime, 0, MAX_DT);
    this.time.update(clampedDt);
    this.input.update();
    this.scenes.update(this.time.dt);

    this.draw();
  }

  private draw(): void {
    const graphics = this.graphics;
    graphics.transform.identity();

    graphics.pushTarget(this.target);
    this.scenes.draw(graphics);
    graphics.popTarget();

    graphics.transform.identity();
    graphics.color.set(1, 1, 1, 1);

    graphics.start();
    graphics.transform.scale(this.view.viewScaleX, this.view.viewScaleY);

    graphics.drawRenderTarget(this.view.viewOffsetX, this.view.viewOffsetY, this.target);
    graphics.commit();
  }
}
