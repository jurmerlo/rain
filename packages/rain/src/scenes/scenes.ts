import type { Graphics } from '../graphics/graphics.js';
import type { Scene, SceneClass } from './scene.js';

export class Scenes {
  private nextScene: SceneClass | null = null;

  private currentScene: Scene | null = null;

  changeTo(sceneClass: SceneClass): void {
    this.nextScene = sceneClass;
  }

  focus(): void {
    this.currentScene?.focus();
  }

  blur(): void {
    this.currentScene?.blur();
  }

  resize(width: number, height: number): void {
    this.currentScene?.resize(width, height);
  }

  update(dt: number): void {
    if (this.nextScene) {
      this.change();
    }

    if (this.currentScene?.active) {
      this.currentScene.update(dt);
    }
  }

  draw(graphics: Graphics): void {
    if (this.currentScene?.active) {
      const cameras = this.currentScene.cameras;

      graphics.transform.identity();
      for (const camera of cameras) {
        camera.drawContent(graphics, this.currentScene.draw.bind(this.currentScene));
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

  private change(): void {
    if (this.currentScene) {
      this.currentScene.destroy();
      this.currentScene = null;
    }

    if (this.nextScene) {
      const scene = new this.nextScene();
      this.nextScene = null;
      this.currentScene = scene;
    }
  }
}
