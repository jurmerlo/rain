---
editUrl: false
next: false
prev: false
title: "Vec2"
---

Defined in: [math/vec2.ts:6](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/rain/src/math/vec2.ts#L6)

A 2D vector class.
A vector is a two-dimensional object that contains an x and a y position.
Vectors are used to represent directions and positions in 2D space.

## Constructors

### Constructor

> **new Vec2**(`x`, `y`): `Vec2`

Defined in: [math/vec2.ts:138](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/rain/src/math/vec2.ts#L138)

Create a new vector.

#### Parameters

##### x

`number` = `0`

The x axis position of the vector.

##### y

`number` = `0`

The y axis position of the vector.

#### Returns

`Vec2`

## Properties

### x

> **x**: `number`

Defined in: [math/vec2.ts:10](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/rain/src/math/vec2.ts#L10)

The x axis position of the vector.

***

### y

> **y**: `number`

Defined in: [math/vec2.ts:15](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/rain/src/math/vec2.ts#L15)

The y axis position of the vector.

## Accessors

### isDown

#### Get Signature

> **get** **isDown**(): `boolean`

Defined in: [math/vec2.ts:41](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/rain/src/math/vec2.ts#L41)

Check if the vector is pointing down.

##### Returns

`boolean`

***

### isLeft

#### Get Signature

> **get** **isLeft**(): `boolean`

Defined in: [math/vec2.ts:20](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/rain/src/math/vec2.ts#L20)

Check if the vector is pointing to the left.

##### Returns

`boolean`

***

### isRight

#### Get Signature

> **get** **isRight**(): `boolean`

Defined in: [math/vec2.ts:27](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/rain/src/math/vec2.ts#L27)

Check if the vector is pointing to the right.

##### Returns

`boolean`

***

### isUp

#### Get Signature

> **get** **isUp**(): `boolean`

Defined in: [math/vec2.ts:34](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/rain/src/math/vec2.ts#L34)

Check if the vector is pointing up.

##### Returns

`boolean`

***

### isZero

#### Get Signature

> **get** **isZero**(): `boolean`

Defined in: [math/vec2.ts:48](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/rain/src/math/vec2.ts#L48)

Check if the vector is a zero vector.

##### Returns

`boolean`

***

### magnitude

#### Get Signature

> **get** **magnitude**(): `number`

Defined in: [math/vec2.ts:55](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/rain/src/math/vec2.ts#L55)

Get the magnitude of the vector.

##### Returns

`number`

#### Set Signature

> **set** **magnitude**(`value`): `void`

Defined in: [math/vec2.ts:69](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/rain/src/math/vec2.ts#L69)

Set the new magnitude of the vector.

##### Parameters

###### value

`number`

##### Returns

`void`

***

### magnitudeSquared

#### Get Signature

> **get** **magnitudeSquared**(): `number`

Defined in: [math/vec2.ts:62](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/rain/src/math/vec2.ts#L62)

Get the squared magnitude of the vector (faster than magnitude as it avoids sqrt).

##### Returns

`number`

## Methods

### add()

> **add**(`other`): `Vec2`

Defined in: [math/vec2.ts:201](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/rain/src/math/vec2.ts#L201)

Add another vector to this vector.

#### Parameters

##### other

`Vec2`

The vector to add.

#### Returns

`Vec2`

The vector.

***

### clone()

> **clone**(`out?`): `Vec2`

Defined in: [math/vec2.ts:167](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/rain/src/math/vec2.ts#L167)

Clone the vector.

#### Parameters

##### out?

`Vec2`

Optional vector to clone into.

#### Returns

`Vec2`

The cloned vector.

***

### copyFrom()

> **copyFrom**(`other`): `Vec2`

Defined in: [math/vec2.ts:179](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/rain/src/math/vec2.ts#L179)

Copy the values from another vector.

#### Parameters

##### other

`Vec2`

The vector to copy from.

#### Returns

`Vec2`

The vector.

***

### divide()

> **divide**(`other`): `Vec2`

Defined in: [math/vec2.ts:237](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/rain/src/math/vec2.ts#L237)

Divide this vector by another vector.

#### Parameters

##### other

`Vec2`

The vector to divide by.

#### Returns

`Vec2`

The vector.

***

### dot()

> **dot**(`other`): `number`

Defined in: [math/vec2.ts:264](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/rain/src/math/vec2.ts#L264)

Calculate the dot product of this vector and another vector.

#### Parameters

##### other

`Vec2`

The vector to calculate the dot product with.

#### Returns

`number`

The dot product.

***

### equals()

> **equals**(`other`): `boolean`

Defined in: [math/vec2.ts:148](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/rain/src/math/vec2.ts#L148)

Check if this vector is equal to another vector.

#### Parameters

##### other

`Vec2`

The vector to compare with.

#### Returns

`boolean`

True if the vectors are equal.

***

### fuzzyEquals()

> **fuzzyEquals**(`other`, `epsilon`): `boolean`

Defined in: [math/vec2.ts:158](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/rain/src/math/vec2.ts#L158)

Check if this vector is almost equal to another vector.

#### Parameters

##### other

`Vec2`

The vector to compare with.

##### epsilon

`number` = `0.0001`

The precision of the comparison.

#### Returns

`boolean`

True if the vectors are almost equal.

***

### multiply()

> **multiply**(`other`): `Vec2`

Defined in: [math/vec2.ts:225](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/rain/src/math/vec2.ts#L225)

Multiply this vector by another vector.

#### Parameters

##### other

`Vec2`

The vector to multiply by.

#### Returns

`Vec2`

The vector.

***

### normalize()

> **normalize**(): `void`

Defined in: [math/vec2.ts:271](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/rain/src/math/vec2.ts#L271)

Normalize the vector. A normalized vector has a magnitude of 1.

#### Returns

`void`

***

### scale()

> **scale**(`scalar`): `Vec2`

Defined in: [math/vec2.ts:252](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/rain/src/math/vec2.ts#L252)

Scale this vector by a scalar value.

#### Parameters

##### scalar

`number`

The value to scale by.

#### Returns

`Vec2`

The vector.

***

### set()

> **set**(`x`, `y`): `void`

Defined in: [math/vec2.ts:191](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/rain/src/math/vec2.ts#L191)

Update the x and y axis position of the vector.

#### Parameters

##### x

`number`

The new x axis position.

##### y

`number`

The new y axis position.

#### Returns

`void`

***

### subtract()

> **subtract**(`other`): `Vec2`

Defined in: [math/vec2.ts:213](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/rain/src/math/vec2.ts#L213)

Subtract another vector from this vector.

#### Parameters

##### other

`Vec2`

The vector to subtract.

#### Returns

`Vec2`

The vector.

***

### toString()

> **toString**(): `string`

Defined in: [math/vec2.ts:283](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/rain/src/math/vec2.ts#L283)

Get a string representation of the vector.

#### Returns

`string`

The string representation of the vector.

***

### distance()

> `static` **distance**(`a`, `b`): `number`

Defined in: [math/vec2.ts:113](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/rain/src/math/vec2.ts#L113)

Calculate the distance between two vectors.

#### Parameters

##### a

`Vec2`

The first vector.

##### b

`Vec2`

The second vector.

#### Returns

`number`

The distance.

***

### distanceSquared()

> `static` **distanceSquared**(`a`, `b`): `number`

Defined in: [math/vec2.ts:126](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/rain/src/math/vec2.ts#L126)

Calculate the squared distance between two vectors (faster than distance as it avoids sqrt).

#### Parameters

##### a

`Vec2`

The first vector.

##### b

`Vec2`

The second vector.

#### Returns

`number`

The squared distance.

***

### get()

> `static` **get**(`x`, `y`): `Vec2`

Defined in: [math/vec2.ts:89](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/rain/src/math/vec2.ts#L89)

Get a vector from the object pool. If the pool is empty, create a new vector.

#### Parameters

##### x

`number` = `0`

The x axis position of the vector.

##### y

`number` = `0`

The y axis position of the vector.

#### Returns

`Vec2`

The vector.

***

### put()

> `static` **put**(`vec`): `void`

Defined in: [math/vec2.ts:103](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/rain/src/math/vec2.ts#L103)

Put this vector back into the object pool.

#### Parameters

##### vec

`Vec2`

#### Returns

`void`
