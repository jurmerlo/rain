import type { Graphics } from '@rain2d/rain/graphics';
import { Transform } from '@rain2d/rain/math';

export class Entity {
  active: boolean;

  transform: Transform;

  useTransform: boolean;

  parent: Entity | null = null;

  readonly entities: Entity[];

  private readonly entitiesToRemove: Entity[];

  constructor(active: boolean = true) {
    this.active = active;
    this.entities = [];
    this.entitiesToRemove = [];
    this.transform = new Transform();
    this.useTransform = true;
  }

  add(entity: Entity, index?: number): void {
    entity.parent = this;
    if (index !== undefined && index >= 0 && index < this.entities.length) {
      this.entities.splice(index, 0, entity);
    } else {
      this.entities.push(entity);
    }
  }

  remove(entity: Entity): void {
    if (entity.parent === this) {
      entity.parent = null;
    }
    this.entitiesToRemove.push(entity);
  }

  update(dt: number): void {
    while (this.entitiesToRemove.length > 0) {
      const entity = this.entitiesToRemove.pop();
      if (entity) {
        entity.destroy();
        const index = this.entities.indexOf(entity);
        if (index !== -1) {
          this.entities.splice(index, 1);
        }
      }
    }

    for (const entity of this.entities) {
      if (entity.active) {
        entity.update(dt);
      }
    }
  }

  draw(graphics: Graphics): void {
    if (this.useTransform) {
      this.transform.update();
      graphics.pushTransform();
      graphics.applyTransform(this.transform.matrix);
      this.drawWithTransform(graphics);
    }
    for (const entity of this.entities) {
      if (entity.active) {
        entity.draw(graphics);
      }
    }
    if (this.useTransform) {
      graphics.popTransform();
    }
  }

  drawWithTransform(_graphics: Graphics): void {}

  destroy(): void {
    for (const entity of this.entities) {
      entity.destroy();
    }
    this.entities.length = 0;
    this.entitiesToRemove.length = 0;
  }
}
