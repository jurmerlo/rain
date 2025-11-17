---
editUrl: false
next: false
prev: false
title: "TweenVec2"
---

Defined in: [tweenVec2.ts:9](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/tweening/src/tweenVec2.ts#L9)

A tween that interpolates between two Vec2 values over time.
Supports custom easing functions and completion callbacks.

## Constructors

### Constructor

> **new TweenVec2**(`start`, `end`, `duration`, `ease?`): `TweenVec2`

Defined in: [tweenVec2.ts:72](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/tweening/src/tweenVec2.ts#L72)

Creates a new TweenVec2 instance.

#### Parameters

##### start

[`Vec2`](/api/rain/math/classes/vec2/)

The starting vector.

##### end

[`Vec2`](/api/rain/math/classes/vec2/)

The ending vector.

##### duration

`number`

The duration in milliseconds.

##### ease?

[`Ease`](/api/tweening/type-aliases/ease/)

Optional easing function (defaults to linear).

#### Returns

`TweenVec2`

## Properties

### end

> **end**: [`Vec2`](/api/rain/math/classes/vec2/)

Defined in: [tweenVec2.ts:18](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/tweening/src/tweenVec2.ts#L18)

The ending vector of the tween.

***

### start

> **start**: [`Vec2`](/api/rain/math/classes/vec2/)

Defined in: [tweenVec2.ts:13](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/tweening/src/tweenVec2.ts#L13)

The starting vector of the tween.

## Accessors

### duration

#### Get Signature

> **get** **duration**(): `number`

Defined in: [tweenVec2.ts:48](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/tweening/src/tweenVec2.ts#L48)

The duration of the tween in milliseconds.

##### Returns

`number`

The current duration.

#### Set Signature

> **set** **duration**(`value`): `void`

Defined in: [tweenVec2.ts:56](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/tweening/src/tweenVec2.ts#L56)

Sets the duration of the tween in milliseconds.

##### Parameters

###### value

`number`

The duration in milliseconds.

##### Returns

`void`

***

### ease

#### Get Signature

> **get** **ease**(): [`Ease`](/api/tweening/type-aliases/ease/)

Defined in: [tweenVec2.ts:32](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/tweening/src/tweenVec2.ts#L32)

The easing function used to interpolate between start and end vectors.

##### Returns

[`Ease`](/api/tweening/type-aliases/ease/)

The current easing function.

#### Set Signature

> **set** **ease**(`value`): `void`

Defined in: [tweenVec2.ts:40](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/tweening/src/tweenVec2.ts#L40)

Sets the easing function used to interpolate between start and end vectors.

##### Parameters

###### value

[`Ease`](/api/tweening/type-aliases/ease/)

The easing function to use.

##### Returns

`void`

***

### finished

#### Get Signature

> **get** **finished**(): `boolean`

Defined in: [tweenVec2.ts:24](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/tweening/src/tweenVec2.ts#L24)

Whether the tween has completed.

##### Returns

`boolean`

True if the tween has finished, false otherwise.

## Methods

### destroy()

> **destroy**(): `void`

Defined in: [tweenVec2.ts:113](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/tweening/src/tweenVec2.ts#L113)

#### Returns

`void`

***

### reset()

> **reset**(): `void`

Defined in: [tweenVec2.ts:101](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/tweening/src/tweenVec2.ts#L101)

Resets the tween to its initial state.
Sets the elapsed time to 0 and marks the tween as not finished.

#### Returns

`void`

***

### setOnComplete()

> **setOnComplete**(`callback`): `void`

Defined in: [tweenVec2.ts:109](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/tweening/src/tweenVec2.ts#L109)

Sets a callback function to be invoked when the tween completes.

#### Parameters

##### callback

() => `void`

The function to call when the tween finishes.

#### Returns

`void`

***

### update()

> **update**(`dt`, `out?`): [`Vec2`](/api/rain/math/classes/vec2/)

Defined in: [tweenVec2.ts:85](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/tweening/src/tweenVec2.ts#L85)

Updates the tween by the given delta time and returns the current interpolated vector.
Automatically completes the tween when the duration is reached and invokes the completion callback if set.

#### Parameters

##### dt

`number`

The time elapsed since the last update in milliseconds.

##### out?

[`Vec2`](/api/rain/math/classes/vec2/)

Optional Vec2 instance to store the result in. If not provided, a new Vec2 is created.

#### Returns

[`Vec2`](/api/rain/math/classes/vec2/)

The current interpolated vector between start and end.
