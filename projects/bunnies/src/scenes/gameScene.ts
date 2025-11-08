import { type Graphics, type Input, inject, Scene } from '@rainengine/rain';
import { Bunny } from '../entities/bunny';
import { Text } from '../entities/text';
import { BunnyLayer } from '../layers/bunnyLayer';
import { TextLayer } from '../layers/textLayer';

export class GameScene extends Scene {
  @inject()
  private readonly input!: Input;

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

  private createBunny(): void {
    const bunny = new Bunny();
    this.bunnyLayer.add(bunny);
    this.text.bunnyCount++;
  }
}
