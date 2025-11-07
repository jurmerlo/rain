import { Camera } from '../view/camera.js';
import { Entity } from './entities.js';

export class State extends Entity {
  readonly cameras: Camera[] = [];

  get mainCamera(): Camera | null {
    return this.cameras.length > 0 ? this.cameras[0] : null;
  }

  constructor() {
    super();
    this.cameras.push(new Camera());
  }

  create(): void {}

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
