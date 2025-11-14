import { Mat4 } from './mat4.js';
import { toRad } from './mathUtils.js';
import { Vec2 } from './vec2.js';

/**
 * Represents a 2D transformation with position, rotation, and scale.
 */
export class Transform {
  /**
   * The position of the transform.
   */
  position: Vec2;

  /**
   * The rotation of the transform in degrees.
   */
  rotation: number;

  /**
   * The scale of the transform.
   */
  scale: Vec2;

  /**
   * The transformation matrix.
   */
  matrix: Mat4;

  /**
   * Create a new transform with default values.
   */
  constructor() {
    this.position = new Vec2(0, 0);
    this.rotation = 0;
    this.scale = new Vec2(1, 1);
    this.matrix = new Mat4();
  }

  /**
   * Update the transformation matrix based on position, rotation, and scale.
   */
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
