---
editUrl: false
next: false
prev: false
title: "Scene"
---

Defined in: [scene.ts:17](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/scenes/src/scene.ts#L17)

Base class for game scenes.

Scenes are top-level entities that manage cameras and provide lifecycle hooks
for focus, blur, and resize events. Each scene has at least one camera by default.

## Extends

- [`Entity`](/api/scenes/classes/entity/)

## Constructors

### Constructor

> **new Scene**(): `Scene`

Defined in: [scene.ts:34](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/scenes/src/scene.ts#L34)

Creates a new scene with transform disabled and one default camera.

#### Returns

`Scene`

#### Overrides

[`Entity`](/api/scenes/classes/entity/).[`constructor`](/api/scenes/classes/entity/#constructor)

## Properties

### active

> **active**: `boolean`

Defined in: [entity.ts:13](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/scenes/src/entity.ts#L13)

Whether this entity is active and should be updated and drawn.

#### Inherited from

[`Entity`](/api/scenes/classes/entity/).[`active`](/api/scenes/classes/entity/#active)

***

### cameras

> `readonly` **cameras**: `Camera`[] = `[]`

Defined in: [scene.ts:22](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/scenes/src/scene.ts#L22)

Array of cameras attached to this scene.
By default, a scene is created with one camera.

***

### entities

> `readonly` **entities**: [`Entity`](/api/scenes/classes/entity/)[]

Defined in: [entity.ts:38](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/scenes/src/entity.ts#L38)

Child entities that belong to this entity.

#### Inherited from

[`Entity`](/api/scenes/classes/entity/).[`entities`](/api/scenes/classes/entity/#entities)

***

### parent

> **parent**: [`Entity`](/api/scenes/classes/entity/) \| `null` = `null`

Defined in: [entity.ts:28](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/scenes/src/entity.ts#L28)

The parent entity in the hierarchy, or null if this is a root entity.

#### Inherited from

[`Entity`](/api/scenes/classes/entity/).[`parent`](/api/scenes/classes/entity/#parent)

***

### tag

> **tag**: `string`

Defined in: [entity.ts:33](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/scenes/src/entity.ts#L33)

A tag to identify the entity.

#### Inherited from

[`Entity`](/api/scenes/classes/entity/).[`tag`](/api/scenes/classes/entity/#tag)

***

### transform

> **transform**: [`Transform`](/api/rain/math/classes/transform/)

Defined in: [entity.ts:18](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/scenes/src/entity.ts#L18)

The transform (position, rotation, scale) of this entity.

#### Inherited from

[`Entity`](/api/scenes/classes/entity/).[`transform`](/api/scenes/classes/entity/#transform)

***

### useTransform

> **useTransform**: `boolean`

Defined in: [entity.ts:23](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/scenes/src/entity.ts#L23)

Whether to apply the transform matrix when drawing this entity and its children.

#### Inherited from

[`Entity`](/api/scenes/classes/entity/).[`useTransform`](/api/scenes/classes/entity/#usetransform)

## Accessors

### mainCamera

#### Get Signature

> **get** **mainCamera**(): `Camera` \| `null`

Defined in: [scene.ts:27](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/scenes/src/scene.ts#L27)

Gets the main (first) camera of the scene, or null if no cameras exist.

##### Returns

`Camera` \| `null`

## Methods

### add()

> **add**(`entity`, `index?`): `void`

Defined in: [entity.ts:69](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/scenes/src/entity.ts#L69)

Adds a child entity to this entity.

#### Parameters

##### entity

[`Entity`](/api/scenes/classes/entity/)

The entity to add as a child.

##### index?

`number`

Optional index at which to insert the entity. If not provided or out of bounds, the entity is added to the end.

#### Returns

`void`

#### Inherited from

[`Entity`](/api/scenes/classes/entity/).[`add`](/api/scenes/classes/entity/#add)

***

### blur()

> **blur**(): `void`

Defined in: [scene.ts:80](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/scenes/src/scene.ts#L80)

Called when the scene loses focus (e.g., browser tab becomes inactive).
Override this method to implement custom blur behavior.

#### Returns

`void`

***

### destroy()

> **destroy**(): `void`

Defined in: [scene.ts:63](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/scenes/src/scene.ts#L63)

Destroys the scene and all its cameras.
Cleans up all child entities and camera resources.

#### Returns

`void`

#### Overrides

[`Entity`](/api/scenes/classes/entity/).[`destroy`](/api/scenes/classes/entity/#destroy)

***

### draw()

> **draw**(`graphics`): `void`

Defined in: [scene.ts:44](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/scenes/src/scene.ts#L44)

Draws the scene by rendering all cameras and their content.

#### Parameters

##### graphics

[`Graphics`](/api/rain/graphics/classes/graphics/)

The graphics context to draw to.

#### Returns

`void`

#### Overrides

[`Entity`](/api/scenes/classes/entity/).[`draw`](/api/scenes/classes/entity/#draw)

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

#### Inherited from

[`Entity`](/api/scenes/classes/entity/).[`drawWithTransform`](/api/scenes/classes/entity/#drawwithtransform)

***

### focus()

> **focus**(): `void`

Defined in: [scene.ts:74](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/scenes/src/scene.ts#L74)

Called when the scene gains focus (e.g., browser tab becomes active).
Override this method to implement custom focus behavior.

#### Returns

`void`

***

### onAdded()

> **onAdded**(): `void`

Defined in: [entity.ts:96](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/scenes/src/entity.ts#L96)

Called when this entity is added to a parent entity.

#### Returns

`void`

#### Inherited from

[`Entity`](/api/scenes/classes/entity/).[`onAdded`](/api/scenes/classes/entity/#onadded)

***

### onRemoved()

> **onRemoved**(): `void`

Defined in: [entity.ts:101](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/scenes/src/entity.ts#L101)

Called when this entity is removed from its parent entity.

#### Returns

`void`

#### Inherited from

[`Entity`](/api/scenes/classes/entity/).[`onRemoved`](/api/scenes/classes/entity/#onremoved)

***

### remove()

> **remove**(`entity`, `destroy`): `void`

Defined in: [entity.ts:85](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/scenes/src/entity.ts#L85)

Removes a child entity from this entity.
The entity will be queued for removal and destroyed on the next update cycle.

#### Parameters

##### entity

[`Entity`](/api/scenes/classes/entity/)

The entity to remove.

##### destroy

`boolean` = `true`

Whether to destroy the entity after removal. Defaults to true.

#### Returns

`void`

#### Inherited from

[`Entity`](/api/scenes/classes/entity/).[`remove`](/api/scenes/classes/entity/#remove)

***

### resize()

> **resize**(`_width`, `_height`): `void`

Defined in: [scene.ts:87](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/scenes/src/scene.ts#L87)

Called when the window is resized.

#### Parameters

##### \_width

`number`

##### \_height

`number`

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

#### Inherited from

[`Entity`](/api/scenes/classes/entity/).[`update`](/api/scenes/classes/entity/#update)
