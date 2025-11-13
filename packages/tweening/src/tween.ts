import { type Ease, easeLinear } from './easing.js';

export class Tween {
  start: number;
  end: number;
  duration: number;
  ease: Ease;

  get finished(): boolean {
    return this._finished;
  }

  private time: number;

  private onComplete?: () => void;

  private _finished: boolean;

  constructor(start: number, end: number, duration: number, ease?: Ease) {
    this.start = start;
    this.end = end;
    this.duration = duration;
    this.ease = ease ?? easeLinear;

    this.time = 0;
    this._finished = false;
  }

  update(dt: number): number {
    if (this._finished) {
      return this.end;
    }

    this.time += dt;
    if (this.time >= this.duration) {
      this.time = this.duration;
      this._finished = true;
      this.onComplete?.();
    }

    return this.start + (this.end - this.start) * this.ease(this.time / this.duration);
  }

  reset(): void {
    this.time = 0;
    this._finished = false;
  }

  setOnComplete(callback: () => void): void {
    this.onComplete = callback;
  }
}
