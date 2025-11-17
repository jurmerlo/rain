---
editUrl: false
next: false
prev: false
title: "Mat4"
---

Defined in: [math/mat4.ts:27](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/rain/src/math/mat4.ts#L27)

A 4x4 matrix class.
Useful for 2D and 3D transformations.

## Constructors

### Constructor

> **new Mat4**(`data?`): `Mat4`

Defined in: [math/mat4.ts:293](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/rain/src/math/mat4.ts#L293)

Create a new matrix.

#### Parameters

##### data?

[`Mat4Value`](/api/rain/math/type-aliases/mat4value/)

Optional values to set the matrix with.

#### Returns

`Mat4`

## Properties

### value

> **value**: [`Mat4Value`](/api/rain/math/type-aliases/mat4value/)

Defined in: [math/mat4.ts:31](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/rain/src/math/mat4.ts#L31)

The 4x4 matrix array.

## Methods

### clone()

> **clone**(`out?`): `Mat4`

Defined in: [math/mat4.ts:371](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/rain/src/math/mat4.ts#L371)

Clone the matrix.

#### Parameters

##### out?

`Mat4`

Optional matrix to clone into.

#### Returns

`Mat4`

The cloned matrix.

***

### copyFrom()

> **copyFrom**(`mat`): `void`

Defined in: [math/mat4.ts:399](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/rain/src/math/mat4.ts#L399)

Copy the values from another matrix.

#### Parameters

##### mat

`Mat4`

The matrix to copy from.

#### Returns

`void`

***

### equals()

> **equals**(`mat`): `boolean`

Defined in: [math/mat4.ts:345](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/rain/src/math/mat4.ts#L345)

Compare this matrix with another matrix.

#### Parameters

##### mat

`Mat4`

The matrix to compare with.

#### Returns

`boolean`

True if the matrices are equal.

***

### get2dScale()

> **get2dScale**(`out?`): [`Vec2`](/api/rain/math/classes/vec2/)

Defined in: [math/mat4.ts:479](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/rain/src/math/mat4.ts#L479)

Get the 2D scale from the matrix.

#### Parameters

##### out?

[`Vec2`](/api/rain/math/classes/vec2/)

Optional vector to store the result.

#### Returns

[`Vec2`](/api/rain/math/classes/vec2/)

The scale vector.

***

### get2dTranslation()

> **get2dTranslation**(`out?`): [`Vec2`](/api/rain/math/classes/vec2/)

Defined in: [math/mat4.ts:466](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/rain/src/math/mat4.ts#L466)

Get the 2D translation from the matrix.

#### Parameters

##### out?

[`Vec2`](/api/rain/math/classes/vec2/)

Optional vector to store the result.

#### Returns

[`Vec2`](/api/rain/math/classes/vec2/)

The translation vector.

***

### getZRotation()

> **getZRotation**(): `number`

Defined in: [math/mat4.ts:491](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/rain/src/math/mat4.ts#L491)

Get the Z-axis rotation from the matrix.

#### Returns

`number`

The rotation angle in radians.

***

### identity()

> **identity**(): `void`

Defined in: [math/mat4.ts:321](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/rain/src/math/mat4.ts#L321)

Set the identity matrix.

#### Returns

`void`

***

### invert()

> **invert**(`out`): `Mat4` \| `null`

Defined in: [math/mat4.ts:533](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/rain/src/math/mat4.ts#L533)

Invert a matrix and return the inverted matrix.

#### Parameters

##### out

`Mat4`

Matrix to store the result.

#### Returns

`Mat4` \| `null`

The inverted matrix, or null if the matrix is not invertible.

***

### ortho()

> **ortho**(`left`, `right`, `bottom`, `top`, `near`, `far`): `void`

Defined in: [math/mat4.ts:505](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/rain/src/math/mat4.ts#L505)

Set an orthographic projection matrix.

#### Parameters

##### left

`number`

The left side of the view.

##### right

`number`

The right side of the view.

##### bottom

`number`

The bottom side of the view.

##### top

`number`

The top side of the view.

##### near

`number`

The near clipping plane.

##### far

`number`

The far clipping plane.

#### Returns

`void`

***

### rotate()

> **rotate**(`angle`): `void`

Defined in: [math/mat4.ts:446](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/rain/src/math/mat4.ts#L446)

Rotate the matrix by an angle around the Z-axis.

#### Parameters

##### angle

`number`

The rotation angle in radians.

#### Returns

`void`

***

### scale()

> **scale**(`x`, `y`): `void`

Defined in: [math/mat4.ts:433](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/rain/src/math/mat4.ts#L433)

Scale the matrix by x and y.

#### Parameters

##### x

`number`

The x scale factor.

##### y

`number`

The y scale factor.

#### Returns

`void`

***

### toString()

> **toString**(): `string`

Defined in: [math/mat4.ts:597](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/rain/src/math/mat4.ts#L597)

Get a string representation of the matrix.

#### Returns

`string`

A string representation of the matrix.

***

### translate()

> **translate**(`x`, `y`): `void`

Defined in: [math/mat4.ts:423](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/rain/src/math/mat4.ts#L423)

Translate the matrix by x and y.

#### Parameters

##### x

`number`

The x translation.

##### y

`number`

The y translation.

#### Returns

`void`

***

### from2dRotationTranslationScale()

> `static` **from2dRotationTranslationScale**(`rotation`, `x`, `y`, `scaleX`, `scaleY`, `out?`): `Mat4`

Defined in: [math/mat4.ts:186](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/rain/src/math/mat4.ts#L186)

Create a matrix from a 2D rotation, translation, and scale.

#### Parameters

##### rotation

`number`

The z rotation in radians.

##### x

`number`

The x axis translation.

##### y

`number`

The y axis translation.

##### scaleX

`number`

The x axis scale.

##### scaleY

`number`

The y axis scale.

##### out?

`Mat4`

Optional matrix to store the result.

#### Returns

`Mat4`

The matrix.

***

### fromScale()

> `static` **fromScale**(`x`, `y`, `z`, `out?`): `Mat4`

Defined in: [math/mat4.ts:151](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/rain/src/math/mat4.ts#L151)

Create a matrix from a scale.

#### Parameters

##### x

`number`

The x axis scale.

##### y

`number`

The y axis scale.

##### z

`number`

The z axis scale.

##### out?

`Mat4`

Optional matrix to store the result.

#### Returns

`Mat4`

The matrix.

***

### fromTranslation()

> `static` **fromTranslation**(`x`, `y`, `z`, `out?`): `Mat4`

Defined in: [math/mat4.ts:88](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/rain/src/math/mat4.ts#L88)

Create a matrix from a translation.

#### Parameters

##### x

`number`

The x axis translation.

##### y

`number`

The y axis translation.

##### z

`number`

The z axis translation.

##### out?

`Mat4`

Optional matrix to store the result.

#### Returns

`Mat4`

The translation matrix.

***

### fromZRotation()

> `static` **fromZRotation**(`rotation`, `out?`): `Mat4`

Defined in: [math/mat4.ts:117](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/rain/src/math/mat4.ts#L117)

Create a matrix from a rotation around the z axis.

#### Parameters

##### rotation

`number`

The rotation in radians.

##### out?

`Mat4`

Optional matrix to store the result.

#### Returns

`Mat4`

The rotation matrix.

***

### get()

> `static` **get**(`data?`): `Mat4`

Defined in: [math/mat4.ts:43](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/rain/src/math/mat4.ts#L43)

Get a matrix from the object pool. If the pool is empty, create a new matrix.

#### Parameters

##### data?

[`Mat4Value`](/api/rain/math/type-aliases/mat4value/)

Optional values to set the matrix with.

#### Returns

`Mat4`

The matrix.

***

### multiply()

> `static` **multiply**(`a`, `b`, `out?`): `Mat4`

Defined in: [math/mat4.ts:230](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/rain/src/math/mat4.ts#L230)

Multiply two matrices.

#### Parameters

##### a

`Mat4`

The left matrix.

##### b

`Mat4`

The right matrix.

##### out?

`Mat4`

Optional matrix to store the result.

#### Returns

`Mat4`

The result matrix.

***

### put()

> `static` **put**(`mat`): `void`

Defined in: [math/mat4.ts:76](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/rain/src/math/mat4.ts#L76)

Put the matrix back into the object pool.

#### Parameters

##### mat

`Mat4`

#### Returns

`void`
