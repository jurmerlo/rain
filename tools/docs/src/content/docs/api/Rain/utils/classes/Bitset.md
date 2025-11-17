---
editUrl: false
next: false
prev: false
title: "Bitset"
---

Defined in: [utils/bitset.ts:4](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/rain/src/utils/bitset.ts#L4)

Bitmask helper class for managing bit flags.

## Constructors

### Constructor

> **new Bitset**(`value`): `Bitset`

Defined in: [utils/bitset.ts:14](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/rain/src/utils/bitset.ts#L14)

Create a new bitset instance.

#### Parameters

##### value

`number` = `0`

The bit value.

#### Returns

`Bitset`

## Properties

### value

> **value**: `number`

Defined in: [utils/bitset.ts:8](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/rain/src/utils/bitset.ts#L8)

The bit value.

## Methods

### add()

> **add**(`bit`): `Bitset`

Defined in: [utils/bitset.ts:23](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/rain/src/utils/bitset.ts#L23)

Add a bit to this set.

#### Parameters

##### bit

`number`

The bit to add.

#### Returns

`Bitset`

This bitset for method chaining.

***

### clear()

> **clear**(): `Bitset`

Defined in: [utils/bitset.ts:66](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/rain/src/utils/bitset.ts#L66)

Clear all the bits from this set.

#### Returns

`Bitset`

This bitset for method chaining.

***

### has()

> **has**(`bit`): `boolean`

Defined in: [utils/bitset.ts:43](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/rain/src/utils/bitset.ts#L43)

Check if this set has a bit.

#### Parameters

##### bit

`number`

The bit to check for.

#### Returns

`boolean`

True if the bit is set.

***

### hasAll()

> **hasAll**(`bits`): `boolean`

Defined in: [utils/bitset.ts:52](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/rain/src/utils/bitset.ts#L52)

Check if this set has all bits in an array.

#### Parameters

##### bits

`number`[]

The array of bits to check for.

#### Returns

`boolean`

True if all bits are set.

***

### remove()

> **remove**(`bit`): `Bitset`

Defined in: [utils/bitset.ts:33](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/rain/src/utils/bitset.ts#L33)

Remove a bit from this set.

#### Parameters

##### bit

`number`

The bit to remove.

#### Returns

`Bitset`

This bitset for method chaining.

***

### toString()

> **toString**(): `string`

Defined in: [utils/bitset.ts:75](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/rain/src/utils/bitset.ts#L75)

Get a string representation of the bitset in binary format.

#### Returns

`string`

The binary representation of the bitset.
