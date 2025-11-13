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
import { Input } from './input/input.js';
import { clamp } from './math/mathUtils.js';
import { Random } from './math/random.js';
import { Time } from './utils/time.js';

export type RainOptions = {
  width?: number;
  height?: number;
  title?: string;
  hdpi?: boolean;
  targetFps?: number;
  runInBackground?: boolean;
};

type Callbacks = {
  update?: (deltaTime: number) => void;
  draw?: (graphics: Graphics) => void;
  focus?: () => void;
  blur?: () => void;
  resize?: (width: number, height: number) => void;
};

const MAX_DT: number = 1.0 / 15;

export class Rain {
  readonly callbacks: Callbacks;

  readonly targetFps: number;

  readonly hdpi: boolean;

  readonly pixelRatio: number;

  private input: Input;

  private runInBackground: boolean;

  private lastFrameTime: number;

  private graphics: Graphics;

  private started: boolean;

  private inFocus: boolean;

  private time: Time;

  constructor({
    width = 800,
    height = 600,
    title = 'Rain Game',
    hdpi = true,
    targetFps = -1,
    runInBackground = false,
  }: RainOptions) {
    this.callbacks = {};

    this.runInBackground = runInBackground;
    this.targetFps = targetFps;
    this.hdpi = hdpi;

    document.title = title;
    const canvasId = 'rain';

    this.pixelRatio = hdpi ? window.devicePixelRatio : 1;
    const canvas = document.getElementById(canvasId) as HTMLCanvasElement;

    if (!canvas) {
      throw new Error(`Canvas element with id "${canvasId}" not found`);
    }

    canvas.width = width * this.pixelRatio;
    canvas.height = height * this.pixelRatio;

    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;

    const glContext = new GLContext(canvas);
    addService('glContext', glContext);

    addService('audio', new Audio());

    this.graphics = new Graphics(glContext);
    addService('graphics', this.graphics);

    addService('random', new Random());

    this.input = new Input(canvas);
    addService('input', this.input);

    const assets = new Assets();
    addService('assets', assets);

    this.time = new Time();
    addService('time', this.time);

    assets.registerLoader(new AtlasLoader());
    assets.registerLoader(new BitmapFontLoader());
    assets.registerLoader(new ImageLoader());
    assets.registerLoader(new SoundLoader());
    assets.registerLoader(new TextLoader());

    canvas.addEventListener('focus', () => this.focus());
    canvas.addEventListener('blur', () => this.blur());
    window.addEventListener('resize', () => this.resize(window.innerWidth, window.innerHeight));

    canvas.focus();
    this.inFocus = true;

    this.started = false;
    this.lastFrameTime = 0;
  }

  start(): void {
    if (this.started) {
      throw new Error('Rain is already started');
    }
    this.started = true;

    this.inFocus = true;

    requestAnimationFrame(() => {
      this.lastFrameTime = window.performance.now();
      this.loop();
    });
  }

  focus(): void {
    if (!this.started) {
      return;
    }

    this.inFocus = true;
    if (this.callbacks.focus) {
      this.callbacks.focus();
    }
  }

  blur(): void {
    if (!this.started) {
      return;
    }
    this.inFocus = false;
    if (this.callbacks.blur) {
      this.callbacks.blur();
    }
  }

  resize(width: number, height: number): void {
    if (!this.started) {
      return;
    }

    if (this.callbacks.resize) {
      this.callbacks.resize(width, height);
    }
  }

  private loop(): void {
    window.requestAnimationFrame(() => this.loop());

    const now = window.performance.now();
    const timePassed = now - this.lastFrameTime;
    if (this.targetFps === -1) {
      this.update(timePassed / 1000.0);
      this.lastFrameTime = now;
    } else {
      const interval = 1.0 / this.targetFps;
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

    const clampedDeltaTime = clamp(deltaTime, 0, MAX_DT);
    this.time.update(clampedDeltaTime);
    this.input.update();
    if (this.callbacks.update) {
      this.callbacks.update(this.time.deltaTime);
    }

    this.draw();
  }

  private draw(): void {
    if (this.callbacks.draw) {
      this.callbacks.draw(this.graphics);
    }
  }
}
