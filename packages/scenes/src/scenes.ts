import type { Graphics } from '@rain2d/rain/graphics';
import type { Scene, SceneClass } from './scene.js';

/**
 * Manages scene transitions and lifecycle in a Rain game.
 */
export class Scenes {
  /**
   * The scene class to transition to on the next update.
   * Set via changeTo() and processed during update().
   */
  private nextScene: SceneClass | null = null;

  /**
   * The currently active scene instance.
   */
  private currentScene: Scene | null = null;

  /**
   * Queues a scene transition.
   * The scene change will occur on the next update cycle, destroying the current scene
   * @param sceneClass - The scene class constructor to transition to.
   */
  changeTo(sceneClass: SceneClass): void {
    this.nextScene = sceneClass;
  }

  /**
   * Forwards the focus event to the current scene.
   * Called when the game gains focus (e.g., browser tab becomes active).
   */
  focus(): void {
    this.currentScene?.focus();
  }

  /**
   * Forwards the blur event to the current scene.
   * Called when the game loses focus (e.g., browser tab becomes inactive).
   */
  blur(): void {
    this.currentScene?.blur();
  }

  /**
   * Forwards the resize event to the current scene.
   * Called when the window is resized.
   * @param width - The new window width in pixels.
   * @param height - The new window height in pixels.
   */
  resize(width: number, height: number): void {
    this.currentScene?.resize(width, height);
  }

  /**
   * Updates the current scene and processes any pending scene transitions.
   * @param deltaTime - Delta time in seconds since the last update.
   */
  update(deltaTime: number): void {
    if (this.nextScene) {
      this.change();
    }

    if (this.currentScene?.active) {
      this.currentScene.update(deltaTime);
    }
  }

  /**
   * Draws the current scene.
   * Only draws the scene if it is active.
   * @param graphics - The graphics context to draw to.
   */
  draw(graphics: Graphics): void {
    if (this.currentScene?.active) {
      this.currentScene.draw(graphics);
    }
  }

  /**
   * Performs the actual scene transition.
   */
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
