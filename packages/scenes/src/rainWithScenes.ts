import { Rain, type RainOptions } from '@rain2d/rain';
import { addService } from '@rain2d/rain/di';
import type { Graphics } from '@rain2d/rain/graphics';
import { View } from '@rain2d/view';
import type { SceneClass } from './scene.js';
import { Scenes } from './scenes.js';

/**
 * Options for creating a Rain instance with scene management and view scaling.
 * Extends the base RainOptions with additional scene and view configuration.
 */
export type RainWithScenesOptions = RainOptions & {
  /**
   * The design width of the game in pixels.
   * The view will scale content to match this logical width.
   */
  designWidth: number;

  /**
   * The design height of the game in pixels.
   * The view will scale content to match this logical height.
   */
  designHeight: number;

  /**
   * The initial scene class to start with.
   */
  startScene: SceneClass;

  /**
   * Whether the view should fill the entire window.
   * @default false
   */
  fillWindow?: boolean;
};

/**
 * Creates and initializes a Rain game instance with scene management and view scaling.
 *
 * This function sets up:
 * - A View service for handling canvas scaling and aspect ratio
 * - A Scenes service for managing scene lifecycle and transitions
 * - Automatic wiring of update, draw, resize, focus, and blur callbacks
 *
 * The created Rain instance is automatically started and the initial scene is loaded.
 *
 * @param options - Configuration options for the Rain instance, view, and initial scene.
 * @returns The configured and started Rain instance.
 *
 * @example
 * ```typescript
 * const rain = createRainWithScenes({
 *   designWidth: 800,
 *   designHeight: 600,
 *   startScene: MainMenuScene,
 *   fillWindow: false
 * });
 * ```
 */
export function createRainWithScenes(options: RainWithScenesOptions): Rain {
  const rain = new Rain(options);

  const { designWidth, designHeight, startScene, fillWindow = false } = options;

  const view = new View(designWidth, designHeight, fillWindow, rain.pixelRatio);
  addService('view', view);

  const scenes = new Scenes();
  addService('scenes', scenes);

  rain.callbacks.update = (deltaTime: number): void => {
    scenes.update(deltaTime);
  };

  rain.callbacks.draw = (graphics: Graphics): void => {
    view.setAsTarget(graphics);
    scenes.draw(graphics);
    view.drawTarget(graphics);
  };

  rain.callbacks.resize = (width: number, height: number): void => {
    view.resize(width, height);
    scenes.resize(width, height);
  };

  rain.callbacks.focus = (): void => {
    scenes.focus();
  };

  rain.callbacks.blur = (): void => {
    scenes.blur();
  };

  scenes.changeTo(startScene);

  rain.start();

  return rain;
}
