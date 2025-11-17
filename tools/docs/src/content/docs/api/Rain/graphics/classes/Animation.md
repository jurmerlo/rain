---
editUrl: false
next: false
prev: false
title: "Animation"
---

Defined in: [graphics/animation.ts:9](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/rain/src/graphics/animation.ts#L9)

Class representing a sprite atlas animation.

## Constructors

### Constructor

> **new Animation**(`name`, `frameNames`, `frameDuration`, `playMode`): `Animation`

Defined in: [graphics/animation.ts:37](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/rain/src/graphics/animation.ts#L37)

Create a new animation.

#### Parameters

##### name

`string`

The name of the animation.

##### frameNames

`string`[]

The names of the frames in the animation.

##### frameDuration

`number`

The duration of each frame in seconds.

##### playMode

[`AnimationPlayMode`](/api/rain/graphics/type-aliases/animationplaymode/) = `'forward'`

The play mode of the animation.

#### Returns

`Animation`

## Properties

### frameDuration

> **frameDuration**: `number`

Defined in: [graphics/animation.ts:23](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/rain/src/graphics/animation.ts#L23)

The duration of each frame in seconds.

***

### frameNames

> `readonly` **frameNames**: `string`[]

Defined in: [graphics/animation.ts:18](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/rain/src/graphics/animation.ts#L18)

The names of the frames in the animation.

***

### name

> `readonly` **name**: `string`

Defined in: [graphics/animation.ts:13](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/rain/src/graphics/animation.ts#L13)

The name of the animation.

***

### playMode

> **playMode**: [`AnimationPlayMode`](/api/rain/graphics/type-aliases/animationplaymode/)

Defined in: [graphics/animation.ts:28](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/rain/src/graphics/animation.ts#L28)

The play mode of the animation.

## Methods

### getFrame()

> **getFrame**(`time`): `string`

Defined in: [graphics/animation.ts:49](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/rain/src/graphics/animation.ts#L49)

Get the name of the current frame based on the time.

#### Parameters

##### time

`number`

The time since the start of the animation.

#### Returns

`string`

The name of the current frame.

***

### isFinished()

> **isFinished**(`time`): `boolean`

Defined in: [graphics/animation.ts:59](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/rain/src/graphics/animation.ts#L59)

Check if the animation is finished based on the time.

#### Parameters

##### time

`number`

The time since the start of the animation.

#### Returns

`boolean`

Whether the animation is finished.
