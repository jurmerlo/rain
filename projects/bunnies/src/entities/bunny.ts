import {
  type Assets,
  type Color,
  Entity,
  type Graphics,
  Image,
  inject,
  Mat4,
  type Random,
  toRad,
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

  private position: Vec2;

  private rotation: number;

  private speed: Vec2;

  private rotationSpeed: number;

  private readonly gravity: number;

  private bunnyImage: Image;

  private color: Color;

  constructor() {
    super();

    this.gravity = 0.5;
    this.position = new Vec2(0, 0);
    this.speed = new Vec2(this.random.float(0.2, 5), this.random.float(0, 5) - 2.5);
    this.rotation = 0;
    this.rotationSpeed = this.random.float(-4, 4);
    this.bunnyImage = this.assets.get(Image, 'bunny');
    this.color = this.random.color(0.2);
  }

  override update(_dt: number): void {
    this.position.x += this.speed.x;
    this.position.y += this.speed.y;
    this.speed.y += this.gravity;
    this.rotation += this.rotationSpeed;

    if (this.position.x > this.view.viewWidth) {
      this.position.x = this.view.viewWidth;
      this.speed.x *= -1;
    } else if (this.position.x < 0) {
      this.position.x = 0;
      this.speed.x *= -1;
    }

    if (this.position.y < 0) {
      this.position.y = 0;
      this.speed.y = 0;
    } else if (this.position.y > this.view.viewHeight) {
      this.position.y = this.view.viewHeight;
      this.speed.y *= -0.8;

      if (this.random.float(0, 1) > 0.5) {
        this.speed.y -= 3 * this.random.float(0, 4);
      }
    }
  }

  override draw(graphics: Graphics): void {
    graphics.color.copyFrom(this.color);
    Mat4.from2dRotationTranslationScale(
      toRad(this.rotation),
      this.position.x,
      this.position.y,
      1,
      1,
      graphics.transform,
    );
    graphics.drawImage(-this.bunnyImage.width / 2, -this.bunnyImage.height / 2, this.bunnyImage);
  }
}
