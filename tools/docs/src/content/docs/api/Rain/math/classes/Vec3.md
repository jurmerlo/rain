---
editUrl: false
next: false
prev: false
title: "Vec3"
---

Defined in: [math/vec3.ts:7](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/rain/src/math/vec3.ts#L7)

A 3D vector. A vector is a mathematical object that has a magnitude and a direction.
It is often used to represent a point in 3D space.

## Constructors

### Constructor

> **new Vec3**(`x`, `y`, `z`): `Vec3`

Defined in: [math/vec3.ts:59](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/rain/src/math/vec3.ts#L59)

Create a new vector.

#### Parameters

##### x

`number` = `0`

The x axis position of the vector.

##### y

`number` = `0`

The y axis position of the vector.

##### z

`number` = `0`

The z axis position of the vector.

#### Returns

`Vec3`

## Properties

### x

> **x**: `number`

Defined in: [math/vec3.ts:11](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/rain/src/math/vec3.ts#L11)

The x axis position of the vector.

***

### y

> **y**: `number`

Defined in: [math/vec3.ts:16](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/rain/src/math/vec3.ts#L16)

The y axis position of the vector.

***

### z

> **z**: `number`

Defined in: [math/vec3.ts:21](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/rain/src/math/vec3.ts#L21)

The z axis position of the vector.

## Methods

### clone()

> **clone**(`out?`): `Vec3`

Defined in: [math/vec3.ts:91](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/rain/src/math/vec3.ts#L91)

Clone this vector.

#### Parameters

##### out?

`Vec3`

Optional vector to store the cloned values.

#### Returns

`Vec3`

The cloned vector.

***

### copyFrom()

> **copyFrom**(`vec`): `void`

Defined in: [math/vec3.ts:104](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/rain/src/math/vec3.ts#L104)

Copy values from another vector.

#### Parameters

##### vec

`Vec3`

The vector to copy values from.

#### Returns

`void`

***

### equals()

> **equals**(`vec`): `boolean`

Defined in: [math/vec3.ts:70](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/rain/src/math/vec3.ts#L70)

Check if two vectors are equal.

#### Parameters

##### vec

`Vec3`

The vector to compare with.

#### Returns

`boolean`

True if the vectors are equal.

***

### set()

> **set**(`x`, `y`, `z`): `void`

Defined in: [math/vec3.ts:80](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/rain/src/math/vec3.ts#L80)

Set new values for the vector.

#### Parameters

##### x

`number`

The new x axis position.

##### y

`number`

The new y axis position.

##### z

`number`

The new z axis position.

#### Returns

`void`

***

### toString()

> **toString**(): `string`

Defined in: [math/vec3.ts:136](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/rain/src/math/vec3.ts#L136)

Get a string representation of the vector.

#### Returns

`string`

The string representation of the vector.

***

### transformMat4()

> **transformMat4**(`mat`, `x?`, `y?`, `z?`): `void`

Defined in: [math/vec3.ts:117](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/rain/src/math/vec3.ts#L117)

Transform this vector by a 4x4 matrix and optional x, y, z values.

#### Parameters

##### mat

[`Mat4`](/api/rain/math/classes/mat4/)

The matrix to transform by.

##### x?

`number`

Optional x axis position.

##### y?

`number`

Optional y axis position.

##### z?

`number`

Optional z axis position.

#### Returns

`void`

***

### get()

> `static` **get**(`x`, `y`, `z`): `Vec3`

Defined in: [math/vec3.ts:35](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/rain/src/math/vec3.ts#L35)

Get a vector from the object pool. If the pool is empty, create a new vector.

#### Parameters

##### x

`number` = `0`

The x axis position of the vector.

##### y

`number` = `0`

The y axis position of the vector.

##### z

`number` = `0`

The z axis position of the vector.

#### Returns

`Vec3`

The vector.

***

### put()

> `static` **put**(`vec`): `void`

Defined in: [math/vec3.ts:49](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/rain/src/math/vec3.ts#L49)

Return the vector to the object pool.

#### Parameters

##### vec

`Vec3`

#### Returns

`void`
