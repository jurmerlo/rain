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

/**
 * Configuration options for initializing Rain.
 */
export type RainOptions = {
  /**
   * The width of the canvas in pixels.
   */
  width?: number;

  /**
   * The height of the canvas in pixels.
   */
  height?: number;

  /**
   * The title of the document/game.
   */
  title?: string;

  /**
   * Whether to enable high DPI rendering.
   */
  hdpi?: boolean;

  /**
   * Target frames per second (-1 for unlimited).
   */
  targetFps?: number;

  /**
   * Whether the game should continue running when not in focus.
   */
  runInBackground?: boolean;
};

/**
 * Callback functions for Rain lifecycle events.
 */
type Callbacks = {
  /**
   * Called every frame with the delta time.
   */
  update?: (deltaTime: number) => void;

  /**
   * Called every frame to render graphics.
   */
  draw?: (graphics: Graphics) => void;

  /**
   * Called when the canvas gains focus.
   */
  focus?: () => void;

  /**
   * Called when the canvas loses focus.
   */
  blur?: () => void;

  /**
   * Called when the window is resized.
   */
  resize?: (width: number, height: number) => void;
};

/**
 * Maximum delta time allowed per frame (1/15th of a second).
 */
const MAX_DT: number = 1.0 / 15;

/**
 * The main Rain game engine class.
 */
export class Rain {
  /**
   * Callback functions for lifecycle events.
   */
  readonly callbacks: Callbacks;

  /**
   * Target frames per second for the game loop.
   */
  readonly targetFps: number;

  /**
   * Whether high DPI rendering is enabled.
   */
  readonly hdpi: boolean;

  /**
   * The device pixel ratio used for rendering.
   */
  readonly pixelRatio: number;

  /**
   * The input manager instance.
   */
  private input: Input;

  /**
   * Whether the game should run when not in focus.
   */
  private runInBackground: boolean;

  /**
   * Timestamp of the last frame in milliseconds.
   */
  private lastFrameTime: number;

  /**
   * The graphics rendering instance.
   */
  private graphics: Graphics;

  /**
   * Whether the game loop has been started.
   */
  private started: boolean;

  /**
   * Whether the canvas currently has focus.
   */
  private inFocus: boolean;

  /**
   * The time manager instance.
   */
  private time: Time;

  /**
   * Create a new Rain instance.
   * @param options - Configuration options for Rain.
   */
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

  /**
   * Start the game loop.
   * @throws Error if Rain is already started.
   */
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

  /**
   * Handle canvas focus event.
   */
  focus(): void {
    if (!this.started) {
      return;
    }

    this.inFocus = true;
    if (this.callbacks.focus) {
      this.callbacks.focus();
    }
  }

  /**
   * Handle canvas blur event.
   */
  blur(): void {
    if (!this.started) {
      return;
    }
    this.inFocus = false;
    if (this.callbacks.blur) {
      this.callbacks.blur();
    }
  }

  /**
   * Handle window resize event.
   * @param width - The new window width.
   * @param height - The new window height.
   */
  resize(width: number, height: number): void {
    if (!this.started) {
      return;
    }

    if (this.callbacks.resize) {
      this.callbacks.resize(width, height);
    }
  }

  /**
   * Main game loop that runs every frame.
   */
  private loop(): void {
    window.requestAnimationFrame(() => this.loop());

    const now = window.performance.now();
    const timePassed = now - this.lastFrameTime;
    if (this.targetFps === -1) {
      this.update(timePassed / 1000.0);
      this.lastFrameTime = now;
    } else {
      const interval = 1000.0 / this.targetFps;
      if (timePassed < interval) {
        return;
      }

      const excess = timePassed % interval;
      this.update(interval / 1000.0);
      this.lastFrameTime = now - excess;
    }
  }

  /**
   * Update game state and trigger draw.
   * @param deltaTime - The time elapsed since the last frame in seconds.
   */
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

  /**
   * Render the current frame.
   */
  private draw(): void {
    if (this.callbacks.draw) {
      this.callbacks.draw(this.graphics);
    }
  }
}
