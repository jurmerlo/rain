---
editUrl: false
next: false
prev: false
title: "Entity"
---

Defined in: [entity.ts:9](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/scenes/src/entity.ts#L9)

Base class for all game entities in a scene hierarchy.
Entities can be nested to create parent-child relationships and support transformation matrices.

## Extended by

- [`Scene`](/api/scenes/classes/scene/)

## Constructors

### Constructor

> **new Entity**(`active`): `Entity`

Defined in: [entity.ts:54](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/scenes/src/entity.ts#L54)

Creates a new entity.

#### Parameters

##### active

`boolean` = `true`

Whether the entity starts in an active state. Defaults to true.

#### Returns

`Entity`

## Properties

### active

> **active**: `boolean`

Defined in: [entity.ts:13](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/scenes/src/entity.ts#L13)

Whether this entity is active and should be updated and drawn.

***

### entities

> `readonly` **entities**: `Entity`[]

Defined in: [entity.ts:38](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/scenes/src/entity.ts#L38)

Child entities that belong to this entity.

***

### parent

> **parent**: `Entity` \| `null` = `null`

Defined in: [entity.ts:28](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/scenes/src/entity.ts#L28)

The parent entity in the hierarchy, or null if this is a root entity.

***

### tag

> **tag**: `string`

Defined in: [entity.ts:33](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/scenes/src/entity.ts#L33)

A tag to identify the entity.

***

### transform

> **transform**: [`Transform`](/api/rain/math/classes/transform/)

Defined in: [entity.ts:18](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/scenes/src/entity.ts#L18)

The transform (position, rotation, scale) of this entity.

***

### useTransform

> **useTransform**: `boolean`

Defined in: [entity.ts:23](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/scenes/src/entity.ts#L23)

Whether to apply the transform matrix when drawing this entity and its children.

## Methods

### add()

> **add**(`entity`, `index?`): `void`

Defined in: [entity.ts:69](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/scenes/src/entity.ts#L69)

Adds a child entity to this entity.

#### Parameters

##### entity

`Entity`

The entity to add as a child.

##### index?

`number`

Optional index at which to insert the entity. If not provided or out of bounds, the entity is added to the end.

#### Returns

`void`

***

### destroy()

> **destroy**(): `void`

Defined in: [entity.ts:165](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/scenes/src/entity.ts#L165)

Destroys this entity and all child entities, cleaning up resources.
Clears all entity collections after destruction.

#### Returns

`void`

***

### draw()

> **draw**(`graphics`, `camera?`): `void`

Defined in: [entity.ts:135](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/scenes/src/entity.ts#L135)

Draws this entity and all active child entities.
If useTransform is true, applies the entity's transform matrix before drawing.

#### Parameters

##### graphics

[`Graphics`](/api/rain/graphics/classes/graphics/)

The graphics context to draw to.

##### camera?

`Camera`

Optional camera used for rendering.

#### Returns

`void`

***

### drawWithTransform()

> **drawWithTransform**(`_graphics`, `_camera?`): `void`

Defined in: [entity.ts:159](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/scenes/src/entity.ts#L159)

Override this method to implement custom drawing with the entity's transform applied.
Called after the transform is pushed but before child entities are drawn.

#### Parameters

##### \_graphics

[`Graphics`](/api/rain/graphics/classes/graphics/)

##### \_camera?

`Camera`

#### Returns

`void`

***

### onAdded()

> **onAdded**(): `void`

Defined in: [entity.ts:96](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/scenes/src/entity.ts#L96)

Called when this entity is added to a parent entity.

#### Returns

`void`

***

### onRemoved()

> **onRemoved**(): `void`

Defined in: [entity.ts:101](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/scenes/src/entity.ts#L101)

Called when this entity is removed from its parent entity.

#### Returns

`void`

***

### remove()

> **remove**(`entity`, `destroy`): `void`

Defined in: [entity.ts:85](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/scenes/src/entity.ts#L85)

Removes a child entity from this entity.
The entity will be queued for removal and destroyed on the next update cycle.

#### Parameters

##### entity

`Entity`

The entity to remove.

##### destroy

`boolean` = `true`

Whether to destroy the entity after removal. Defaults to true.

#### Returns

`void`

***

### update()

> **update**(`deltaTime`): `void`

Defined in: [entity.ts:107](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/scenes/src/entity.ts#L107)

Updates this entity and all active child entities.

#### Parameters

##### deltaTime

`number`

Delta time in seconds since the last update.

#### Returns

`void`
