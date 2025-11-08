import { type Assets, BitmapFont, Image, inject, State, type States } from '@rainengine/rain';
import { GameState } from './gameState';

export class LoadState extends State {
  @inject()
  private readonly assets!: Assets;

  @inject()
  private readonly states!: States;

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
        this.states.changeTo(GameState);
      });
  }
}
