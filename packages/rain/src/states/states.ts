import type { Graphics } from '../graphics/graphics.js';
import type { State } from './state.js';

export type StateClass = new () => State;

export class States {
  private nextState: StateClass | null = null;

  private currentState: State | null = null;

  changeTo(stateClass: StateClass): void {
    this.nextState = stateClass;
  }

  focus(): void {
    this.currentState?.focus();
  }

  blur(): void {
    this.currentState?.blur();
  }

  resize(width: number, height: number): void {
    this.currentState?.resize(width, height);
  }

  update(dt: number): void {
    if (this.nextState) {
      this.changeState();
    }

    if (this.currentState?.active) {
      this.currentState.update(dt);
    }
  }

  draw(graphics: Graphics): void {
    if (this.currentState?.active) {
      const cameras = this.currentState.cameras;

      graphics.transform.identity();
      for (const camera of cameras) {
        camera.drawContent(graphics, this.currentState.draw);
      }

      graphics.color.set(1, 1, 1, 1);
      graphics.transform.identity();
      for (const camera of cameras) {
        camera.drawSelf(graphics);
      }
    }
  }

  private changeState(): void {
    if (this.currentState) {
      this.currentState.destroy();
    }

    if (this.nextState) {
      const state = new this.nextState();
      this.nextState = null;
      state.create();
      this.currentState = state;
    }
  }
}
