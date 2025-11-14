import { Vec2 } from '@rain2d/rain/math';
import type { Ease } from './easing.js';
import { Tween } from './tween.js';

/**
 * A tween that interpolates between two Vec2 values over time.
 * Supports custom easing functions and completion callbacks.
 */
export class TweenVec2 {
  /**
   * The starting vector of the tween.
   */
  start: Vec2;

  /**
   * The ending vector of the tween.
   */
  end: Vec2;

  /**
   * Whether the tween has completed.
   * @returns True if the tween has finished, false otherwise.
   */
  get finished(): boolean {
    return this.tween.finished;
  }

  /**
   * The easing function used to interpolate between start and end vectors.
   * @returns The current easing function.
   */
  get ease(): Ease {
    return this.tween.ease;
  }

  /**
   * Sets the easing function used to interpolate between start and end vectors.
   * @param value - The easing function to use.
   */
  set ease(value: Ease) {
    this.tween.ease = value;
  }

  /**
   * The duration of the tween in milliseconds.
   * @returns The current duration.
   */
  get duration(): number {
    return this.tween.duration;
  }

  /**
   * Sets the duration of the tween in milliseconds.
   * @param value - The duration in milliseconds.
   */
  set duration(value: number) {
    this.tween.duration = value;
  }

  /**
   * Internal tween instance used to manage the interpolation progress.
   */
  private tween: Tween;

  /**
   * Creates a new TweenVec2 instance.
   * @param start - The starting vector.
   * @param end - The ending vector.
   * @param duration - The duration in milliseconds.
   * @param ease - Optional easing function (defaults to linear).
   */
  constructor(start: Vec2, end: Vec2, duration: number, ease?: Ease) {
    this.start = start;
    this.end = end;
    this.tween = new Tween(0, 1, duration, ease);
  }

  /**
   * Updates the tween by the given delta time and returns the current interpolated vector.
   * Automatically completes the tween when the duration is reached and invokes the completion callback if set.
   * @param dt - The time elapsed since the last update in milliseconds.
   * @param out - Optional Vec2 instance to store the result in. If not provided, a new Vec2 is created.
   * @returns The current interpolated vector between start and end.
   */
  update(dt: number, out?: Vec2): Vec2 {
    const position = this.tween.update(dt);
    if (!out) {
      out = Vec2.get();
    }

    out.x = this.start.x + (this.end.x - this.start.x) * position;
    out.y = this.start.y + (this.end.y - this.start.y) * position;

    return out;
  }

  /**
   * Resets the tween to its initial state.
   * Sets the elapsed time to 0 and marks the tween as not finished.
   */
  reset(): void {
    this.tween.reset();
  }

  /**
   * Sets a callback function to be invoked when the tween completes.
   * @param callback - The function to call when the tween finishes.
   */
  setOnComplete(callback: () => void): void {
    this.tween.setOnComplete(callback);
  }
}
