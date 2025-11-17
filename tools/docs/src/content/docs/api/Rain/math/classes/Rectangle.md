---
editUrl: false
next: false
prev: false
title: "Rectangle"
---

Defined in: [math/rectangle.ts:10](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/rain/src/math/rectangle.ts#L10)

Rectangle class.

## Constructors

### Constructor

> **new Rectangle**(`x`, `y`, `width`, `height`): `Rectangle`

Defined in: [math/rectangle.ts:38](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/rain/src/math/rectangle.ts#L38)

Create a new Rectangle.

#### Parameters

##### x

`number` = `0`

The top left x position.

##### y

`number` = `0`

The top left y position.

##### width

`number` = `0`

The rectangle width.

##### height

`number` = `0`

The rectangle height.

#### Returns

`Rectangle`

## Properties

### height

> **height**: `number`

Defined in: [math/rectangle.ts:29](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/rain/src/math/rectangle.ts#L29)

The height of the rectangle.

***

### width

> **width**: `number`

Defined in: [math/rectangle.ts:24](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/rain/src/math/rectangle.ts#L24)

The width of the rectangle.

***

### x

> **x**: `number`

Defined in: [math/rectangle.ts:14](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/rain/src/math/rectangle.ts#L14)

The x axis position of the rectangle.

***

### y

> **y**: `number`

Defined in: [math/rectangle.ts:19](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/rain/src/math/rectangle.ts#L19)

The y axis position of the rectangle.

## Methods

### clone()

> **clone**(`out?`): `Rectangle`

Defined in: [math/rectangle.ts:61](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/rain/src/math/rectangle.ts#L61)

Clone this rectangle.

#### Parameters

##### out?

`Rectangle`

Optional rectangle to store the result.

#### Returns

`Rectangle`

The cloned rectangle.

***

### copyFrom()

> **copyFrom**(`rect`): `void`

Defined in: [math/rectangle.ts:49](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/rain/src/math/rectangle.ts#L49)

Copy values from another rectangle into this rectangle.

#### Parameters

##### rect

`Rectangle`

The rectangle to copy from.

#### Returns

`void`

***

### hasPoint()

> **hasPoint**(`x`, `y`): `boolean`

Defined in: [math/rectangle.ts:77](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/rain/src/math/rectangle.ts#L77)

Check if a point is inside a rectangle.

#### Parameters

##### x

`number`

The x position to check.

##### y

`number`

The y position to check.

#### Returns

`boolean`

True if the point is inside the rectangle.

***

### intersects()

> **intersects**(`rect`): `boolean`

Defined in: [math/rectangle.ts:86](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/rain/src/math/rectangle.ts#L86)

Check if two rectangles intersect.

#### Parameters

##### rect

`Rectangle`

The rectangle to check with.

#### Returns

`boolean`

True if the rectangles intersect.

***

### intersectsLine()

> **intersectsLine**(`origin`, `target`, `out?`): `boolean`

Defined in: [math/rectangle.ts:102](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/rain/src/math/rectangle.ts#L102)

Check if a line intersects with this rectangle.

#### Parameters

##### origin

[`Vec2`](/api/rain/math/classes/vec2/)

The start point of the line.

##### target

[`Vec2`](/api/rain/math/classes/vec2/)

The end point of the line.

##### out?

[`Vec2`](/api/rain/math/classes/vec2/)

The intersect point.

#### Returns

`boolean`

True if the line intersects.

***

### set()

> **set**(`x`, `y`, `width`, `height`): `void`

Defined in: [math/rectangle.ts:143](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/rain/src/math/rectangle.ts#L143)

Update the rectangle values.

#### Parameters

##### x

`number`

The new x position.

##### y

`number`

The new y position.

##### width

`number`

The new width.

##### height

`number`

The new height.

#### Returns

`void`

***

### toString()

> **toString**(): `string`

Defined in: [math/rectangle.ts:154](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/rain/src/math/rectangle.ts#L154)

Get the string representation of the rectangle. Used for debugging.

#### Returns

`string`

The rectangle as a string.
