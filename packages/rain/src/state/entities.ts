import type { Graphics } from '../graphics/graphics.js';

export class Entity {
  active: boolean;

  readonly entities: Entities;

  constructor(active: boolean = true) {
    this.active = active;
    this.entities = new Entities();
  }

  addEntity(entity: Entity): void {
    this.entities.add(entity);
  }

  removeEntity(entity: Entity): void {
    this.entities.remove(entity);
  }

  update(dt: number): void {
    this.entities.update(dt);
  }

  draw(graphics: Graphics): void {
    this.entities.draw(graphics);
  }

  destroy(): void {
    this.entities.destroy();
  }
}

export class Entities {
  readonly entities: Entity[] = [];

  private readonly entitiesToRemove: Entity[] = [];

  add(entity: Entity): void {
    this.entities.push(entity);
  }

  remove(entity: Entity): void {
    this.entitiesToRemove.push(entity);
  }

  update(dt: number): void {
    for (const entity of this.entitiesToRemove) {
      entity.destroy();
      const index = this.entities.indexOf(entity);
      if (index !== -1) {
        this.entities.splice(index, 1);
      }
    }

    this.entitiesToRemove.length = 0;
    for (const entity of this.entities) {
      if (entity.active) {
        entity.update(dt);
      }
    }
  }

  draw(graphics: Graphics): void {
    for (const entity of this.entities) {
      if (entity.active) {
        entity.draw(graphics);
      }
    }
  }

  destroy(): void {
    for (const entity of this.entities) {
      entity.destroy();
    }
    this.entities.length = 0;
    this.entitiesToRemove.length = 0;
  }
}
