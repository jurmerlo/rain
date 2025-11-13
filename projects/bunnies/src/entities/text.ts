import type { Assets } from '@rainengine/rain/assets';
import { inject } from '@rainengine/rain/di';
import { BitmapFont, type Graphics } from '@rainengine/rain/graphics';
import { Entity } from '@rainengine/rain/scenes';
import type { Time } from '@rainengine/rain/utils';

export class Text extends Entity {
  bunnyCount: number = 0;

  @inject()
  private readonly assets!: Assets;

  @inject()
  private readonly time!: Time;

  private font: BitmapFont;

  constructor() {
    super();
    this.font = this.assets.get(BitmapFont, 'kenny_pixel');
    this.transform.position.set(10, 10);
  }

  override drawWithTransform(graphics: Graphics): void {
    graphics.color.set(1, 1, 1, 1);
    graphics.drawBitmapText(0, 0, this.font, `Bunnies: ${this.bunnyCount}`);
    graphics.drawBitmapText(0, 30, this.font, `FPS: ${this.time.fps}`);
  }
}
