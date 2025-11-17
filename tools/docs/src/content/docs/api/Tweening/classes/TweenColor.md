---
editUrl: false
next: false
prev: false
title: "TweenColor"
---

Defined in: [tweenColor.ts:9](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/tweening/src/tweenColor.ts#L9)

A tween that interpolates between two Color values over time.
Supports custom easing functions and completion callbacks.

## Constructors

### Constructor

> **new TweenColor**(`start`, `end`, `duration`, `ease?`): `TweenColor`

Defined in: [tweenColor.ts:72](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/tweening/src/tweenColor.ts#L72)

Creates a new TweenColor instance.

#### Parameters

##### start

[`Color`](/api/rain/graphics/classes/color/)

The starting color.

##### end

[`Color`](/api/rain/graphics/classes/color/)

The ending color.

##### duration

`number`

The duration in milliseconds.

##### ease?

[`Ease`](/api/tweening/type-aliases/ease/)

Optional easing function (defaults to linear).

#### Returns

`TweenColor`

## Properties

### end

> **end**: [`Color`](/api/rain/graphics/classes/color/)

Defined in: [tweenColor.ts:18](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/tweening/src/tweenColor.ts#L18)

The ending color of the tween.

***

### start

> **start**: [`Color`](/api/rain/graphics/classes/color/)

Defined in: [tweenColor.ts:13](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/tweening/src/tweenColor.ts#L13)

The starting color of the tween.

## Accessors

### duration

#### Get Signature

> **get** **duration**(): `number`

Defined in: [tweenColor.ts:48](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/tweening/src/tweenColor.ts#L48)

The duration of the tween in milliseconds.

##### Returns

`number`

The current duration.

#### Set Signature

> **set** **duration**(`value`): `void`

Defined in: [tweenColor.ts:56](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/tweening/src/tweenColor.ts#L56)

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

Defined in: [tweenColor.ts:32](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/tweening/src/tweenColor.ts#L32)

The easing function used to interpolate between start and end colors.

##### Returns

[`Ease`](/api/tweening/type-aliases/ease/)

The current easing function.

#### Set Signature

> **set** **ease**(`value`): `void`

Defined in: [tweenColor.ts:40](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/tweening/src/tweenColor.ts#L40)

Sets the easing function used to interpolate between start and end colors.

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

Defined in: [tweenColor.ts:24](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/tweening/src/tweenColor.ts#L24)

Whether the tween has completed.

##### Returns

`boolean`

True if the tween has finished, false otherwise.

## Methods

### destroy()

> **destroy**(): `void`

Defined in: [tweenColor.ts:109](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/tweening/src/tweenColor.ts#L109)

Cleans up resources used by the tween.

#### Returns

`void`

***

### reset()

> **reset**(): `void`

Defined in: [tweenColor.ts:94](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/tweening/src/tweenColor.ts#L94)

Resets the tween to its initial state.
Sets the elapsed time to 0 and marks the tween as not finished.

#### Returns

`void`

***

### setOnComplete()

> **setOnComplete**(`callback`): `void`

Defined in: [tweenColor.ts:102](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/tweening/src/tweenColor.ts#L102)

Sets a callback function to be invoked when the tween completes.

#### Parameters

##### callback

() => `void`

The function to call when the tween finishes.

#### Returns

`void`

***

### update()

> **update**(`dt`, `out?`): [`Color`](/api/rain/graphics/classes/color/)

Defined in: [tweenColor.ts:85](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/tweening/src/tweenColor.ts#L85)

Updates the tween by the given delta time and returns the current interpolated color.
Automatically completes the tween when the duration is reached and invokes the completion callback if set.

#### Parameters

##### dt

`number`

The time elapsed since the last update in milliseconds.

##### out?

[`Color`](/api/rain/graphics/classes/color/)

Optional Color instance to store the result in. If not provided, a new Color is created.

#### Returns

[`Color`](/api/rain/graphics/classes/color/)

The current interpolated color between start and end.
