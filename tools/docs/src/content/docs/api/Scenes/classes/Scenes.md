---
editUrl: false
next: false
prev: false
title: "Scenes"
---

Defined in: [scenes.ts:7](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/scenes/src/scenes.ts#L7)

Manages scene transitions and lifecycle in a Rain game.

## Constructors

### Constructor

> **new Scenes**(): `Scenes`

#### Returns

`Scenes`

## Methods

### blur()

> **blur**(): `void`

Defined in: [scenes.ts:40](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/scenes/src/scenes.ts#L40)

Forwards the blur event to the current scene.
Called when the game loses focus (e.g., browser tab becomes inactive).

#### Returns

`void`

***

### changeTo()

> **changeTo**(`sceneClass`): `void`

Defined in: [scenes.ts:24](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/scenes/src/scenes.ts#L24)

Queues a scene transition.
The scene change will occur on the next update cycle, destroying the current scene

#### Parameters

##### sceneClass

[`SceneClass`](/api/scenes/type-aliases/sceneclass/)

The scene class constructor to transition to.

#### Returns

`void`

***

### draw()

> **draw**(`graphics`): `void`

Defined in: [scenes.ts:73](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/scenes/src/scenes.ts#L73)

Draws the current scene.
Only draws the scene if it is active.

#### Parameters

##### graphics

[`Graphics`](/api/rain/graphics/classes/graphics/)

The graphics context to draw to.

#### Returns

`void`

***

### focus()

> **focus**(): `void`

Defined in: [scenes.ts:32](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/scenes/src/scenes.ts#L32)

Forwards the focus event to the current scene.
Called when the game gains focus (e.g., browser tab becomes active).

#### Returns

`void`

***

### resize()

> **resize**(`width`, `height`): `void`

Defined in: [scenes.ts:50](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/scenes/src/scenes.ts#L50)

Forwards the resize event to the current scene.
Called when the window is resized.

#### Parameters

##### width

`number`

The new window width in pixels.

##### height

`number`

The new window height in pixels.

#### Returns

`void`

***

### update()

> **update**(`deltaTime`): `void`

Defined in: [scenes.ts:58](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/scenes/src/scenes.ts#L58)

Updates the current scene and processes any pending scene transitions.

#### Parameters

##### deltaTime

`number`

Delta time in seconds since the last update.

#### Returns

`void`
