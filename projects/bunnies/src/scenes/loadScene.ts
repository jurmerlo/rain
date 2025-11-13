import type { Assets } from '@rainengine/rain/assets';
import { inject } from '@rainengine/rain/di';
import { BitmapFont, Image } from '@rainengine/rain/graphics';
import { Scene, type Scenes } from '@rainengine/rain/scenes';
import { GameScene } from './gameScene';

export class LoadState extends Scene {
  @inject()
  private readonly assets!: Assets;

  @inject()
  private readonly scenes!: Scenes;

  constructor() {
    super();
    this.assets
      .loadAll([
        {
          type: BitmapFont,
          id: 'kenny_pixel',
          path: 'assets/kenney_pixel',
        },
        {
          type: Image,
          id: 'bunny',
          path: 'assets/bunny.png',
        },
      ])
      .then(() => {
        this.scenes.changeTo(GameScene);
      });
  }
}
