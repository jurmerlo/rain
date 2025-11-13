export class Time {
  timeScale = 1;

  get deltaTime(): number {
    return this._deltaTime;
  }

  get deltaTimeUnscaled(): number {
    return this._deltaTimeUnscaled;
  }

  get fps(): number {
    return this._fps;
  }

  private _deltaTime = 0;

  private _deltaTimeUnscaled = 0;

  private _fps = 0;

  private frameTimes: number[] = [];

  update(dt: number): void {
    this._deltaTimeUnscaled = dt;
    this._deltaTime = dt * this.timeScale;

    this.frameTimes.push(dt);
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
