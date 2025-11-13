import { Rain, type RainOptions } from '@rain2d/rain';
import { addService } from '@rain2d/rain/di';
import type { Graphics } from '@rain2d/rain/graphics';
import { View } from '@rain2d/view';
import type { SceneClass } from './scene.js';
import { Scenes } from './scenes.js';

export type RainWithScenesOptions = RainOptions & {
  designWidth: number;
  designHeight: number;
  startScene: SceneClass;
  fillWindow?: boolean;
};

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
