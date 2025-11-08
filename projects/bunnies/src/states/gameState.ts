import { type Input, inject, State } from '@rainengine/rain';
import { Text } from '../entities/text';
import { BunnyLayer } from '../layers/bunnyLayer';
import { TextLayer } from '../layers/textLayer';
import { Bunny } from '../entities/bunny';

export class GameState extends State {
  @inject()
  private readonly input!: Input;

  private buttonDown: boolean;

  private text: Text;

  private bunnyLayer: BunnyLayer;

  constructor() {
    super();

    this.buttonDown = false;

    this.bunnyLayer = new BunnyLayer();
    this.addEntity(this.bunnyLayer);

    const textLayer = new TextLayer();
    this.text = new Text();
    textLayer.addEntity(this.text);
    this.addEntity(textLayer);

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

  private createBunny(): void {
    const bunny = new Bunny();
    this.bunnyLayer.addEntity(bunny);
    this.text.bunnyCount++;
  }
}
