---
editUrl: false
next: false
prev: false
title: "Color"
---

Defined in: [graphics/color.ts:9](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/rain/src/graphics/color.ts#L9)

Color represents a color with red, green, blue, and alpha components.
The components are stored as floating point numbers between 0 and 1.

## Constructors

### Constructor

> **new Color**(`red`, `green`, `blue`, `alpha`): `Color`

Defined in: [graphics/color.ts:109](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/rain/src/graphics/color.ts#L109)

Create a new color.

#### Parameters

##### red

`number` = `0.0`

The red component.

##### green

`number` = `0.0`

The green component.

##### blue

`number` = `0.0`

The blue component.

##### alpha

`number` = `1.0`

The alpha component.

#### Returns

`Color`

## Properties

### alpha

> **alpha**: `number`

Defined in: [graphics/color.ts:28](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/rain/src/graphics/color.ts#L28)

The alpha component of the color.

***

### blue

> **blue**: `number`

Defined in: [graphics/color.ts:23](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/rain/src/graphics/color.ts#L23)

The blue component of the color.

***

### green

> **green**: `number`

Defined in: [graphics/color.ts:18](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/rain/src/graphics/color.ts#L18)

The green component of the color.

***

### red

> **red**: `number`

Defined in: [graphics/color.ts:13](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/rain/src/graphics/color.ts#L13)

The red component of the color.

## Methods

### clone()

> **clone**(`out?`): `Color`

Defined in: [graphics/color.ts:135](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/rain/src/graphics/color.ts#L135)

Clone a color.

#### Parameters

##### out?

`Color`

Optional output color.

#### Returns

`Color`

The cloned color.

***

### copyFrom()

> **copyFrom**(`color`): `void`

Defined in: [graphics/color.ts:146](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/rain/src/graphics/color.ts#L146)

Copy the values from another color.

#### Parameters

##### color

`Color`

The color to copy from.

#### Returns

`void`

***

### set()

> **set**(`red`, `green`, `blue`, `alpha`): `void`

Defined in: [graphics/color.ts:123](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/rain/src/graphics/color.ts#L123)

Set new color values.

#### Parameters

##### red

`number`

The red component.

##### green

`number`

The green component.

##### blue

`number`

The blue component.

##### alpha

`number`

The alpha component.

#### Returns

`void`

***

### toString()

> **toString**(): `string`

Defined in: [graphics/color.ts:154](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/rain/src/graphics/color.ts#L154)

Get a string representation of the color.

#### Returns

`string`

A string representation of the color.

***

### fromBytes()

> `static` **fromBytes**(`red`, `green`, `blue`, `alpha`): `Color`

Defined in: [graphics/color.ts:38](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/rain/src/graphics/color.ts#L38)

Create a color from byte values (0 - 255).

#### Parameters

##### red

`number`

The red component.

##### green

`number`

The green component.

##### blue

`number`

The blue component.

##### alpha

`number` = `255`

The alpha component. Defaults to 255.

#### Returns

`Color`

The new color.

***

### fromHex()

> `static` **fromHex**(`hex`): `Color`

Defined in: [graphics/color.ts:53](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/rain/src/graphics/color.ts#L53)

Create a color from a hex string.

#### Parameters

##### hex

`` `#${string}` ``

The hex string.

#### Returns

`Color`

The new color.

***

### fromInt()

> `static` **fromInt**(`color`): `Color`

Defined in: [graphics/color.ts:73](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/rain/src/graphics/color.ts#L73)

Create a color from an integer value.
The integer should be in the format 0xRRGGBBAA.

#### Parameters

##### color

`number`

The integer color value.

#### Returns

`Color`

The new color.

***

### interpolate()

> `static` **interpolate**(`color1`, `color2`, `position`, `out?`): `Color`

Defined in: [graphics/color.ts:90](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/rain/src/graphics/color.ts#L90)

Interpolate between two colors.

#### Parameters

##### color1

`Color`

The start color

##### color2

`Color`

The end color

##### position

`number`

The position to interpolate to (0 - 1).

##### out?

`Color`

Optional output color.

#### Returns

`Color`

The interpolated color.
