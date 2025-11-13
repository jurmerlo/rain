import { Color } from '@rain2d/rain/graphics';
import type { Ease } from './easing.js';
import { Tween } from './tween.js';

export class TweenColor {
  start: Color;
  end: Color;

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

  constructor(start: Color, end: Color, duration: number, ease?: Ease) {
    this.start = start;
    this.end = end;
    this.tween = new Tween(0, 1, duration, ease);
  }

  update(dt: number, out?: Color): Color {
    const position = this.tween.update(dt);
    return Color.interpolate(this.start, this.end, position, out);
  }

  reset(): void {
    this.tween.reset();
  }

  setOnComplete(callback: () => void): void {
    this.tween.setOnComplete(callback);
  }
}
