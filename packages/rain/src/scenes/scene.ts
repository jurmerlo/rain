import type { Graphics } from '../graphics/graphics.js';
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
    this.useTransform = false;
    this.cameras.push(new Camera());
  }

  override draw(graphics: Graphics): void {
    graphics.transform.identity();
    for (const camera of this.cameras) {
      camera.drawContent(graphics, super.draw.bind(this));
    }

    graphics.color.set(1, 1, 1, 1);
    graphics.transform.identity();
    graphics.start();
    for (const camera of this.cameras) {
      camera.drawSelf(graphics);
    }
    graphics.commit();
  }

  override destroy(): void {
    super.destroy();
    for (const camera of this.cameras) {
      camera.destroy();
    }
  }

  focus(): void {}

  blur(): void {}

  resize(_width: number, _height: number): void {
    for (const camera of this.cameras) {
      camera.resize();
    }
  }
}
