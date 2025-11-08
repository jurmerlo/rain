import { type Assets, BitmapFont, Entity, type Graphics, inject, type Time } from '@rainengine/rain';

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
  }

  override draw(graphics: Graphics): void {
    graphics.transform.identity();
    graphics.color.set(1, 1, 1, 1);
    graphics.drawBitmapText(10, 10, this.font, `Bunnies: ${this.bunnyCount}`);
    graphics.drawBitmapText(10, 40, this.font, `FPS: ${this.time.fps}`);
  }
}
