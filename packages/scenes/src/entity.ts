import type { Graphics } from '@rain2d/rain/graphics';
import { Transform } from '@rain2d/rain/math';
import type { Camera } from '@rain2d/view';

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
   * A tag to identify the entity.
   */
  tag: string;

  /**
   * Child entities that belong to this entity.
   */
  readonly entities: Entity[];

  /**
   * Internal queue of entities pending removal on the next update cycle.
   */
  private readonly entitiesToRemove: Entity[];

  /**
   * Indicates whether this entity should be destroyed when removed.
   */
  private shouldDestroy: boolean;

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
    this.shouldDestroy = false;
    this.tag = 'default';
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
    entity.onAdded();
  }

  /**
   * Removes a child entity from this entity.
   * The entity will be queued for removal and destroyed on the next update cycle.
   * @param entity - The entity to remove.
   * @param destroy - Whether to destroy the entity after removal. Defaults to true.
   */
  remove(entity: Entity, destroy: boolean = true): void {
    if (entity.parent === this) {
      entity.parent = null;
    }
    entity.shouldDestroy = destroy;
    this.entitiesToRemove.push(entity);
  }

  /**
   * Called when this entity is added to a parent entity.
   */
  onAdded(): void {}

  /**
   * Called when this entity is removed from its parent entity.
   */
  onRemoved(): void {}

  /**
   * Updates this entity and all active child entities.
   * @param deltaTime - Delta time in seconds since the last update.
   */
  update(deltaTime: number): void {
    while (this.entitiesToRemove.length > 0) {
      const entity = this.entitiesToRemove.pop();
      if (entity) {
        const index = this.entities.indexOf(entity);
        if (index !== -1) {
          this.entities.splice(index, 1);
        }
        entity.onRemoved();
        if (entity.shouldDestroy) {
          entity.destroy();
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
   * @param camera - Optional camera used for rendering.
   */
  draw(graphics: Graphics, camera?: Camera): void {
    if (this.useTransform) {
      this.transform.update();
      graphics.pushTransform();
      graphics.applyTransform(this.transform.matrix);
      this.drawWithTransform(graphics, camera);
    }
    for (const entity of this.entities) {
      if (entity.active) {
        entity.draw(graphics, camera);
      }
    }
    if (this.useTransform) {
      graphics.popTransform();
    }
  }

  /**
   * Override this method to implement custom drawing with the entity's transform applied.
   * Called after the transform is pushed but before child entities are drawn.
   * @param graphics - The graphics context to draw to.
   * @param camera - Optional camera used for rendering.
   */

  drawWithTransform(_graphics: Graphics, _camera?: Camera): void {}

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
