import type { Assets } from '@rain2d/rain/assets';
import { inject } from '@rain2d/rain/di';
import { BitmapFont, type Graphics } from '@rain2d/rain/graphics';
import type { Time } from '@rain2d/rain/utils';
import { Entity } from '@rain2d/scenes';

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
