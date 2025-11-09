import {
  type Assets,
  type Color,
  Entity,
  type Graphics,
  Image,
  inject,
  type Random,
  Vec2,
  type View,
} from '@rainengine/rain';

export class Bunny extends Entity {
  @inject()
  private readonly assets!: Assets;

  @inject()
  private readonly random!: Random;

  @inject()
  private readonly view!: View;

  private speed: Vec2;

  private rotationSpeed: number;

  private readonly gravity: number;

  private bunnyImage: Image;

  private color: Color;

  constructor() {
    super();

    this.gravity = 0.5;
    this.speed = new Vec2(this.random.float(0.2, 5), this.random.float(0, 5) - 2.5);
    this.rotationSpeed = this.random.float(-4, 4);
    this.bunnyImage = this.assets.get(Image, 'bunny');
    this.color = this.random.color(0.2, 1, false);
  }

  override update(dt: number): void {
    const position = this.transform.position;

    position.x += this.speed.x * dt * 60;
    position.y += this.speed.y * dt * 60;
    this.speed.y += this.gravity * dt * 60;
    this.transform.rotation += this.rotationSpeed * dt * 60;

    if (position.x > this.view.viewWidth) {
      position.x = this.view.viewWidth;
      this.speed.x *= -1;
    } else if (position.x < 0) {
      position.x = 0;
      this.speed.x *= -1;
    }

    if (position.y < 0) {
      position.y = 0;
      this.speed.y = 0;
    } else if (position.y > this.view.viewHeight) {
      position.y = this.view.viewHeight;
      this.speed.y *= -0.8;

      if (this.random.float(0, 1) > 0.5) {
        this.speed.y -= 3 * this.random.float(0, 4);
      }
    }
  }

  override drawWithTransform(graphics: Graphics): void {
    graphics.color.copyFrom(this.color);
    graphics.drawImage(-this.bunnyImage.width / 2, -this.bunnyImage.height / 2, this.bunnyImage);
  }
}
