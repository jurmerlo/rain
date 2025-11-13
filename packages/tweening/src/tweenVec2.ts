import { Vec2 } from '@rainengine/rain/math';
import type { Ease } from './easing.js';
import { Tween } from './tween.js';

export class TweenVec2 {
  start: Vec2;
  end: Vec2;

  get finished(): boolean {
    return this.tween.finished;
  }

  get ease(): Ease {
    return this.tween.ease;
  }

  set ease(value: Ease) {
    this.tween.ease = value;
  }

  get duration(): number {
    return this.tween.duration;
  }

  set duration(value: number) {
    this.tween.duration = value;
  }

  private tween: Tween;

  constructor(start: Vec2, end: Vec2, duration: number, ease?: Ease) {
    this.start = start;
    this.end = end;
    this.tween = new Tween(0, 1, duration, ease);
  }

  update(dt: number, out?: Vec2): Vec2 {
    const position = this.tween.update(dt);
    if (!out) {
      out = Vec2.get();
    }

    out.x = this.start.x + (this.end.x - this.start.x) * position;
    out.y = this.start.y + (this.end.y - this.start.y) * position;

    return out;
  }

  reset(): void {
    this.tween.reset();
  }

  setOnComplete(callback: () => void): void {
    this.tween.setOnComplete(callback);
  }
}
