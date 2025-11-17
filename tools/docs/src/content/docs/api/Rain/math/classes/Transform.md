---
editUrl: false
next: false
prev: false
title: "Transform"
---

Defined in: [math/transform.ts:8](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/rain/src/math/transform.ts#L8)

Represents a 2D transformation with position, rotation, and scale.

## Constructors

### Constructor

> **new Transform**(): `Transform`

Defined in: [math/transform.ts:32](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/rain/src/math/transform.ts#L32)

Create a new transform with default values.

#### Returns

`Transform`

## Properties

### matrix

> **matrix**: [`Mat4`](/api/rain/math/classes/mat4/)

Defined in: [math/transform.ts:27](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/rain/src/math/transform.ts#L27)

The transformation matrix.

***

### position

> **position**: [`Vec2`](/api/rain/math/classes/vec2/)

Defined in: [math/transform.ts:12](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/rain/src/math/transform.ts#L12)

The position of the transform.

***

### rotation

> **rotation**: `number`

Defined in: [math/transform.ts:17](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/rain/src/math/transform.ts#L17)

The rotation of the transform in degrees.

***

### scale

> **scale**: [`Vec2`](/api/rain/math/classes/vec2/)

Defined in: [math/transform.ts:22](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/rain/src/math/transform.ts#L22)

The scale of the transform.

## Methods

### update()

> **update**(): `void`

Defined in: [math/transform.ts:42](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/rain/src/math/transform.ts#L42)

Update the transformation matrix based on position, rotation, and scale.

#### Returns

`void`
