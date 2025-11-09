import { Mat4 } from './mat4.js';
import { toRad } from './mathUtils.js';
import { Vec2 } from './vec2.js';

export class Transform {
  position: Vec2;

  rotation: number;

  scale: Vec2;

  matrix: Mat4;

  constructor() {
    this.position = new Vec2(0, 0);
    this.rotation = 0;
    this.scale = new Vec2(1, 1);
    this.matrix = new Mat4();
  }

  update(): void {
    Mat4.from2dRotationTranslationScale(
      toRad(this.rotation),
      this.position.x,
      this.position.y,
      this.scale.x,
      this.scale.y,
      this.matrix,
    );
  }
}
