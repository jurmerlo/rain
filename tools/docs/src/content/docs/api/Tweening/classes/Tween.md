---
editUrl: false
next: false
prev: false
title: "Tween"
---

Defined in: [tween.ts:7](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/tweening/src/tween.ts#L7)

A tween that interpolates between two numeric values over time.
Supports custom easing functions and completion callbacks.

## Constructors

### Constructor

> **new Tween**(`start`, `end`, `duration`, `ease?`): `Tween`

Defined in: [tween.ts:58](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/tweening/src/tween.ts#L58)

Creates a new Tween instance.

#### Parameters

##### start

`number`

The starting value.

##### end

`number`

The ending value.

##### duration

`number`

The duration in milliseconds.

##### ease?

[`Ease`](/api/tweening/type-aliases/ease/)

Optional easing function (defaults to linear).

#### Returns

`Tween`

## Properties

### duration

> **duration**: `number`

Defined in: [tween.ts:21](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/tweening/src/tween.ts#L21)

The duration of the tween in milliseconds.

***

### ease

> **ease**: [`Ease`](/api/tweening/type-aliases/ease/)

Defined in: [tween.ts:26](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/tweening/src/tween.ts#L26)

The easing function used to interpolate between start and end values.

***

### end

> **end**: `number`

Defined in: [tween.ts:16](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/tweening/src/tween.ts#L16)

The ending value of the tween.

***

### start

> **start**: `number`

Defined in: [tween.ts:11](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/tweening/src/tween.ts#L11)

The starting value of the tween.

## Accessors

### finished

#### Get Signature

> **get** **finished**(): `boolean`

Defined in: [tween.ts:32](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/tweening/src/tween.ts#L32)

Whether the tween has completed.

##### Returns

`boolean`

True if the tween has finished, false otherwise.

## Methods

### destroy()

> **destroy**(): `void`

Defined in: [tween.ts:109](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/tweening/src/tween.ts#L109)

Cleans up resources used by the tween.

#### Returns

`void`

***

### reset()

> **reset**(): `void`

Defined in: [tween.ts:93](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/tweening/src/tween.ts#L93)

Resets the tween to its initial state.
Sets the elapsed time to 0 and marks the tween as not finished.

#### Returns

`void`

***

### setOnComplete()

> **setOnComplete**(`callback`): `void`

Defined in: [tween.ts:102](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/tweening/src/tween.ts#L102)

Sets a callback function to be invoked when the tween completes.

#### Parameters

##### callback

() => `void`

The function to call when the tween finishes.

#### Returns

`void`

***

### update()

> **update**(`deltaTime`): `number`

Defined in: [tween.ts:74](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/tweening/src/tween.ts#L74)

Updates the tween by the given delta time and returns the current interpolated value.
Automatically completes the tween when the duration is reached and invokes the completion callback if set.

#### Parameters

##### deltaTime

`number`

The time elapsed since the last update in milliseconds.

#### Returns

`number`

The current interpolated value between start and end.
