import { Camera } from '../view/camera.js';
import { Entity } from './entity.js';

export type SceneClass = new () => Scene;

export class Scene extends Entity {
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
