import type { Graphics } from '../graphics/graphics.js';
import { Camera } from '../view/camera.js';
import { Entity } from './entities.js';

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
        camera.drawContent(graphics, this.currentState.draw.bind(this.currentState));
      }

      graphics.color.set(1, 1, 1, 1);
      graphics.transform.identity();
      graphics.start();
      for (const camera of cameras) {
        camera.drawSelf(graphics);
      }
      graphics.commit();
    }
  }

  private changeState(): void {
    if (this.currentState) {
      this.currentState.destroy();
      this.currentState = null;
    }

    if (this.nextState) {
      const state = new this.nextState();
      this.nextState = null;
      this.currentState = state;
    }
  }
}

export class State extends Entity {
  readonly cameras: Camera[] = [];

  get mainCamera(): Camera | null {
    return this.cameras.length > 0 ? this.cameras[0] : null;
  }

  constructor() {
    super();
    this.cameras.push(new Camera());
  }

  focus(): void {}

  blur(): void {}

  resize(_width: number, _height: number): void {
    for (const camera of this.cameras) {
      camera.resize();
    }
  }

  override destroy(): void {
    super.destroy();
    for (const camera of this.cameras) {
      camera.destroy();
    }
  }
}
