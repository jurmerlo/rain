/**
 * Time management class for tracking frame timing and delta time.
 */
export class Time {
  /**
   * The time scale multiplier for scaled delta time. Default is 1.
   */
  timeScale = 1;

  /**
   * Get the scaled delta time (affected by timeScale).
   */
  get deltaTime(): number {
    return this._deltaTime;
  }

  /**
   * Get the unscaled delta time (not affected by timeScale).
   */
  get deltaTimeUnscaled(): number {
    return this._deltaTimeUnscaled;
  }

  /**
   * Get the current frames per second.
   */
  get fps(): number {
    return this._fps;
  }

  /**
   * The scaled delta time value.
   */
  private _deltaTime = 0;

  /**
   * The unscaled delta time value.
   */
  private _deltaTimeUnscaled = 0;

  /**
   * The current frames per second value.
   */
  private _fps = 0;

  /**
   * Array storing recent frame times for FPS calculation.
   */
  private frameTimes: number[] = [];

  /**
   * Update the time with the current frame's delta time.
   * @param deltaTime - The delta time for this frame in seconds.
   */
  update(deltaTime: number): void {
    this._deltaTimeUnscaled = deltaTime;
    this._deltaTime = deltaTime * this.timeScale;

    this.frameTimes.push(deltaTime);
    if (this.frameTimes.length > 240) {
      this.frameTimes.shift();
    }

    let average = 0;
    for (const frameTime of this.frameTimes) {
      average += frameTime;
    }

    this._fps = Math.round(1 / (average / this.frameTimes.length));
  }
}
