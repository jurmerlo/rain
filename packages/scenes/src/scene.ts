import type { Graphics } from '@rain2d/rain/graphics';
import { Camera } from '@rain2d/view';
import { Entity } from './entity.js';

/**
 * Type representing a Scene constructor.
 * Used for scene class references when changing between scenes.
 */
export type SceneClass = new () => Scene;

/**
 * Base class for game scenes.
 *
 * Scenes are top-level entities that manage cameras and provide lifecycle hooks
 * for focus, blur, and resize events. Each scene has at least one camera by default.
 */
export class Scene extends Entity {
  /**
   * Array of cameras attached to this scene.
   * By default, a scene is created with one camera.
   */
  readonly cameras: Camera[] = [];

  /**
   * Gets the main (first) camera of the scene, or null if no cameras exist.
   */
  get mainCamera(): Camera | null {
    return this.cameras.length > 0 ? this.cameras[0] : null;
  }

  /**
   * Creates a new scene with transform disabled and one default camera.
   */
  constructor() {
    super();
    this.useTransform = false;
    this.cameras.push(new Camera());
  }

  /**
   * Draws the scene by rendering all cameras and their content.
   * @param graphics - The graphics context to draw to.
   */
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

  /**
   * Destroys the scene and all its cameras.
   * Cleans up all child entities and camera resources.
   */
  override destroy(): void {
    super.destroy();
    for (const camera of this.cameras) {
      camera.destroy();
    }
  }

  /**
   * Called when the scene gains focus (e.g., browser tab becomes active).
   * Override this method to implement custom focus behavior.
   */
  focus(): void {}

  /**
   * Called when the scene loses focus (e.g., browser tab becomes inactive).
   * Override this method to implement custom blur behavior.
   */
  blur(): void {}

  /**
   * Called when the window is resized.
   * @param width - The new window width in pixels.
   * @param height - The new window height in pixels.
   */
  resize(_width: number, _height: number): void {
    for (const camera of this.cameras) {
      camera.resize();
    }
  }
}
