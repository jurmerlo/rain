import type { Graphics } from '@rain2d/rain/graphics';
import { Transform } from '@rain2d/rain/math';

/**
 * Base class for all game entities in a scene hierarchy.
 * Entities can be nested to create parent-child relationships and support transformation matrices.
 */
export class Entity {
  /**
   * Whether this entity is active and should be updated and drawn.
   */
  active: boolean;

  /**
   * The transform (position, rotation, scale) of this entity.
   */
  transform: Transform;

  /**
   * Whether to apply the transform matrix when drawing this entity and its children.
   */
  useTransform: boolean;

  /**
   * The parent entity in the hierarchy, or null if this is a root entity.
   */
  parent: Entity | null = null;

  /**
   * Child entities that belong to this entity.
   */
  readonly entities: Entity[];

  /**
   * Internal queue of entities pending removal on the next update cycle.
   */
  private readonly entitiesToRemove: Entity[];

  /**
   * Creates a new entity.
   * @param active - Whether the entity starts in an active state. Defaults to true.
   */
  constructor(active: boolean = true) {
    this.active = active;
    this.entities = [];
    this.entitiesToRemove = [];
    this.transform = new Transform();
    this.useTransform = true;
  }

  /**
   * Adds a child entity to this entity.
   * @param entity - The entity to add as a child.
   * @param index - Optional index at which to insert the entity. If not provided or out of bounds, the entity is added to the end.
   */
  add(entity: Entity, index?: number): void {
    entity.parent = this;
    if (index !== undefined && index >= 0 && index < this.entities.length) {
      this.entities.splice(index, 0, entity);
    } else {
      this.entities.push(entity);
    }
  }

  /**
   * Removes a child entity from this entity.
   * The entity will be queued for removal and destroyed on the next update cycle.
   * @param entity - The entity to remove.
   */
  remove(entity: Entity): void {
    if (entity.parent === this) {
      entity.parent = null;
    }
    this.entitiesToRemove.push(entity);
  }

  /**
   * Updates this entity and all active child entities.
   * @param deltaTime - Delta time in seconds since the last update.
   */
  update(deltaTime: number): void {
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
        entity.update(deltaTime);
      }
    }
  }

  /**
   * Draws this entity and all active child entities.
   * If useTransform is true, applies the entity's transform matrix before drawing.
   * @param graphics - The graphics context to draw to.
   */
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

  /**
   * Override this method to implement custom drawing with the entity's transform applied.
   * Called after the transform is pushed but before child entities are drawn.
   * @param _graphics - The graphics context to draw to.
   */
  drawWithTransform(_graphics: Graphics): void {}

  /**
   * Destroys this entity and all child entities, cleaning up resources.
   * Clears all entity collections after destruction.
   */
  destroy(): void {
    for (const entity of this.entities) {
      entity.destroy();
    }
    this.entities.length = 0;
    this.entitiesToRemove.length = 0;
  }
}
