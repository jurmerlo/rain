---
editUrl: false
next: false
prev: false
title: "Rain"
---

Defined in: [rain.ts:89](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/rain/src/rain.ts#L89)

The main Rain game engine class.

## Constructors

### Constructor

> **new Rain**(`options`): `Rain`

Defined in: [rain.ts:149](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/rain/src/rain.ts#L149)

Create a new Rain instance.

#### Parameters

##### options

[`RainOptions`](/api/rain/type-aliases/rainoptions/)

Configuration options for Rain.

#### Returns

`Rain`

## Properties

### callbacks

> `readonly` **callbacks**: `Callbacks`

Defined in: [rain.ts:93](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/rain/src/rain.ts#L93)

Callback functions for lifecycle events.

***

### hdpi

> `readonly` **hdpi**: `boolean`

Defined in: [rain.ts:103](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/rain/src/rain.ts#L103)

Whether high DPI rendering is enabled.

***

### pixelRatio

> `readonly` **pixelRatio**: `number`

Defined in: [rain.ts:108](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/rain/src/rain.ts#L108)

The device pixel ratio used for rendering.

***

### targetFps

> `readonly` **targetFps**: `number`

Defined in: [rain.ts:98](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/rain/src/rain.ts#L98)

Target frames per second for the game loop.

## Methods

### blur()

> **blur**(): `void`

Defined in: [rain.ts:250](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/rain/src/rain.ts#L250)

Handle canvas blur event.

#### Returns

`void`

***

### focus()

> **focus**(): `void`

Defined in: [rain.ts:236](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/rain/src/rain.ts#L236)

Handle canvas focus event.

#### Returns

`void`

***

### resize()

> **resize**(`width`, `height`): `void`

Defined in: [rain.ts:265](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/rain/src/rain.ts#L265)

Handle window resize event.

#### Parameters

##### width

`number`

The new window width.

##### height

`number`

The new window height.

#### Returns

`void`

***

### start()

> **start**(): `void`

Defined in: [rain.ts:219](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/rain/src/rain.ts#L219)

Start the game loop.

#### Returns

`void`

#### Throws

Error if Rain is already started.
