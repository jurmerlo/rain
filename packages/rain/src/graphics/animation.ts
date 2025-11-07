export type AnimationPlayMode = 'forward' | 'loop' | 'pingpong' | 'reversed' | 'loop_reversed';

export class Animation {
  readonly name: string;

  readonly frameNames: string[];

  frameDuration: number;

  playMode: AnimationPlayMode;

  constructor(name: string, frameNames: string[], frameDuration: number, playMode: AnimationPlayMode = 'forward') {
    this.name = name;
    this.frameNames = frameNames;
    this.frameDuration = frameDuration;
    this.playMode = playMode;
  }

  getFrame(time: number): string {
    const index = this.getFrameIndex(time);
    return this.frameNames[index];
  }

  isFinished(time: number): boolean {
    if (this.playMode === 'forward' || this.playMode === 'reversed') {
      return Math.floor(time / this.frameDuration) + 1 >= this.frameNames.length;
    }

    return false;
  }

  private getFrameIndex(time: number): number {
    if (this.frameNames.length <= 1) {
      return 0;
    }

    let index = Math.floor(time / this.frameDuration);

    switch (this.playMode) {
      case 'forward':
        index = Math.floor(Math.min(this.frameNames.length, index));
        break;

      case 'loop':
        index = index % this.frameNames.length;
        break;

      case 'reversed':
        index = Math.floor(Math.max(this.frameNames.length - index - 1, 0));
        break;

      case 'loop_reversed':
        index = index % this.frameNames.length;
        index = this.frameNames.length - index - 1;
        break;

      case 'pingpong':
        if (index >= this.frameNames.length) {
          index = this.frameNames.length - 2 - (index - this.frameNames.length);
        }
        break;

      default:
        break;
    }

    return index;
  }
}
