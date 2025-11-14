/**
 * Type representing the play mode of an animation.
 */
export type AnimationPlayMode = 'forward' | 'loop' | 'pingpong' | 'reversed' | 'loop_reversed';

/**
 * Class representing a sprite atlas animation.
 */
export class Animation {
  /**
   * The name of the animation.
   */
  readonly name: string;

  /**
   * The names of the frames in the animation.
   */
  readonly frameNames: string[];

  /**
   * The duration of each frame in seconds.
   */
  frameDuration: number;

  /**
   * The play mode of the animation.
   */
  playMode: AnimationPlayMode;

  /**
   * Create a new animation.
   * @param name - The name of the animation.
   * @param frameNames - The names of the frames in the animation.
   * @param frameDuration - The duration of each frame in seconds.
   * @param playMode - The play mode of the animation.
   */
  constructor(name: string, frameNames: string[], frameDuration: number, playMode: AnimationPlayMode = 'forward') {
    this.name = name;
    this.frameNames = [...frameNames]; // Create a copy to prevent external mutation
    this.frameDuration = frameDuration;
    this.playMode = playMode;
  }

  /**
   * Get the name of the current frame based on the time.
   * @param time - The time since the start of the animation.
   * @returns The name of the current frame.
   */
  getFrame(time: number): string {
    const index = this.getFrameIndex(time);
    return this.frameNames[index];
  }

  /**
   * Check if the animation is finished based on the time.
   * @param time - The time since the start of the animation.
   * @returns Whether the animation is finished.
   */
  isFinished(time: number): boolean {
    if (this.playMode === 'forward' || this.playMode === 'reversed') {
      return Math.floor(time / this.frameDuration) + 1 >= this.frameNames.length;
    }

    return false;
  }

  /**
   * Get the index of the current frame based on the time.
   * @param time - The time since the start of the animation.
   * @returns The index of the current frame.
   */
  private getFrameIndex(time: number): number {
    if (this.frameNames.length <= 1) {
      return 0;
    }

    let index = Math.floor(time / this.frameDuration);

    switch (this.playMode) {
      case 'forward':
        index = Math.min(this.frameNames.length - 1, index);
        break;

      case 'loop':
        index = index % this.frameNames.length;
        break;

      case 'reversed':
        index = Math.max(0, this.frameNames.length - index - 1);
        break;

      case 'loop_reversed':
        index = index % this.frameNames.length;
        index = this.frameNames.length - index - 1;
        break;

      case 'pingpong': {
        const cycleLength = this.frameNames.length * 2 - 2;
        const cycleIndex = index % cycleLength;

        if (cycleIndex < this.frameNames.length) {
          index = cycleIndex;
        } else {
          index = this.frameNames.length - 2 - (cycleIndex - this.frameNames.length);
        }
        break;
      }

      default:
        index = 0;
        break;
    }

    return Math.max(0, Math.min(this.frameNames.length - 1, index));
  }
}
