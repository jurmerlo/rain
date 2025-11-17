---
editUrl: false
next: false
prev: false
title: "Random"
---

Defined in: [math/random.ts:11](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/rain/src/math/random.ts#L11)

Lehmer seeded random number generator.

## Constructors

### Constructor

> **new Random**(`seed?`): `Random`

Defined in: [math/random.ts:40](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/rain/src/math/random.ts#L40)

Create a new random number generator.

#### Parameters

##### seed?

`number`

The seed to use for the random number generator.

#### Returns

`Random`

## Accessors

### seed

#### Get Signature

> **get** **seed**(): `number`

Defined in: [math/random.ts:15](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/rain/src/math/random.ts#L15)

The seed used to generate random numbers.

##### Returns

`number`

#### Set Signature

> **set** **seed**(`value`): `void`

Defined in: [math/random.ts:22](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/rain/src/math/random.ts#L22)

Set a new seed for the random number generator.

##### Parameters

###### value

`number`

##### Returns

`void`

## Methods

### color()

> **color**(`min`, `max`, `rndAlpha`): [`Color`](/api/rain/graphics/classes/color/)

Defined in: [math/random.ts:114](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/rain/src/math/random.ts#L114)

Generate a random color.

#### Parameters

##### min

`number` = `0`

The minimum intensity.

##### max

`number` = `1`

The maximum intensity.

##### rndAlpha

`boolean` = `true`

Should the alpha be random.

#### Returns

[`Color`](/api/rain/graphics/classes/color/)

The random color.

***

### float()

> **float**(`min`, `max`): `number`

Defined in: [math/random.ts:86](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/rain/src/math/random.ts#L86)

Generate a random float between min and max.

#### Parameters

##### min

`number` = `0`

The minimum value.

##### max

`number` = `1`

The maximum value.

#### Returns

`number`

The random float.

***

### int()

> **int**(`min`, `max`): `number`

Defined in: [math/random.ts:60](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/rain/src/math/random.ts#L60)

Generate a random integer between min and max (inclusive).

#### Parameters

##### min

`number` = `0`

The minimum value.

##### max

`number` = `MODULUS`

The maximum value.

#### Returns

`number`

The random integer.

***

### resetSeed()

> **resetSeed**(): `void`

Defined in: [math/random.ts:50](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/rain/src/math/random.ts#L50)

Reset the seed to a random value.

#### Returns

`void`
