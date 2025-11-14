import { type Ease, easeLinear } from './easing.js';

/**
 * A tween that interpolates between two numeric values over time.
 * Supports custom easing functions and completion callbacks.
 */
export class Tween {
  /**
   * The starting value of the tween.
   */
  start: number;

  /**
   * The ending value of the tween.
   */
  end: number;

  /**
   * The duration of the tween in milliseconds.
   */
  duration: number;

  /**
   * The easing function used to interpolate between start and end values.
   */
  ease: Ease;

  /**
   * Whether the tween has completed.
   * @returns True if the tween has finished, false otherwise.
   */
  get finished(): boolean {
    return this._finished;
  }

  /**
   * The current time elapsed in the tween.
   */
  private time: number;

  /**
   * Optional callback to invoke when the tween completes.
   */
  private onComplete?: () => void;

  /**
   * Internal flag tracking whether the tween has finished.
   */
  private _finished: boolean;

  /**
   * Creates a new Tween instance.
   * @param start - The starting value.
   * @param end - The ending value.
   * @param duration - The duration in milliseconds.
   * @param ease - Optional easing function (defaults to linear).
   */
  constructor(start: number, end: number, duration: number, ease?: Ease) {
    this.start = start;
    this.end = end;
    this.duration = duration;
    this.ease = ease ?? easeLinear;

    this.time = 0;
    this._finished = false;
  }

  /**
   * Updates the tween by the given delta time and returns the current interpolated value.
   * Automatically completes the tween when the duration is reached and invokes the completion callback if set.
   * @param deltaTime - The time elapsed since the last update in milliseconds.
   * @returns The current interpolated value between start and end.
   */
  update(deltaTime: number): number {
    if (this._finished) {
      return this.end;
    }

    this.time += deltaTime;
    if (this.time >= this.duration) {
      this.time = this.duration;
      this._finished = true;
      this.onComplete?.();
    }

    return this.start + (this.end - this.start) * this.ease(this.time / this.duration);
  }

  /**
   * Resets the tween to its initial state.
   * Sets the elapsed time to 0 and marks the tween as not finished.
   */
  reset(): void {
    this.time = 0;
    this._finished = false;
  }

  /**
   * Sets a callback function to be invoked when the tween completes.
   * @param callback - The function to call when the tween finishes.
   */
  setOnComplete(callback: () => void): void {
    this.onComplete = callback;
  }
}
