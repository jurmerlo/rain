import { inject } from '@rainengine/rain/di';
import type { Graphics } from '@rainengine/rain/graphics';
import type { Input } from '@rainengine/rain/input';
import { Scene } from '@rainengine/rain/scenes';
import type { View } from '@rainengine/rain/view';
import { Bunny } from '../entities/bunny';
import { Text } from '../entities/text';
import { BunnyLayer } from '../layers/bunnyLayer';
import { TextLayer } from '../layers/textLayer';

export class GameScene extends Scene {
  @inject()
  private readonly input!: Input;

  @inject()
  private view!: View;

  private buttonDown: boolean;

  private text: Text;

  private bunnyLayer: BunnyLayer;

  constructor() {
    super();

    this.buttonDown = false;

    this.bunnyLayer = new BunnyLayer();
    this.add(this.bunnyLayer);

    const textLayer = new TextLayer();
    this.text = new Text();
    textLayer.add(this.text);
    this.add(textLayer);

    this.input.on('mousePressed', () => {
      this.buttonDown = true;
    });

    this.input.on('mouseReleased', () => {
      this.buttonDown = false;
    });
    this.createBunny();
  }

  override update(dt: number): void {
    super.update(dt);
    if (this.buttonDown) {
      for (let i = 0; i < 20; i++) {
        this.createBunny();
      }
    }
  }

  override draw(graphics: Graphics): void {
    super.draw(graphics);
  }

  override resize(width: number, height: number): void {
    super.resize(width, height);
    this.mainCamera?.position.set(this.view.viewWidth * 0.5, this.view.viewHeight * 0.5);
  }

  private createBunny(): void {
    const bunny = new Bunny();
    this.bunnyLayer.add(bunny);
    this.text.bunnyCount++;
  }
}
