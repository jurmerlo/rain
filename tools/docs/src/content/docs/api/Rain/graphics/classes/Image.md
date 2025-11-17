---
editUrl: false
next: false
prev: false
title: "Image"
---

Defined in: [graphics/image.ts:8](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/rain/src/graphics/image.ts#L8)

An image that can be rendered to the screen.

## Constructors

### Constructor

> **new Image**(`width`, `height`, `data`): `Image`

Defined in: [graphics/image.ts:41](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/rain/src/graphics/image.ts#L41)

Create a new image.

#### Parameters

##### width

`number`

The width of the image in pixels.

##### height

`number`

The height of the image in pixels.

##### data

`Uint8ClampedArray`

The image data.

#### Returns

`Image`

## Properties

### data

> `readonly` **data**: `Uint8ClampedArray`

Defined in: [graphics/image.ts:22](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/rain/src/graphics/image.ts#L22)

The image data.

***

### height

> `readonly` **height**: `number`

Defined in: [graphics/image.ts:17](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/rain/src/graphics/image.ts#L17)

The height of the image in pixels.

***

### texture

> `readonly` **texture**: `WebGLTexture`

Defined in: [graphics/image.ts:27](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/rain/src/graphics/image.ts#L27)

The WebGL texture.

***

### width

> `readonly` **width**: `number`

Defined in: [graphics/image.ts:12](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/rain/src/graphics/image.ts#L12)

The width of the image in pixels.

## Methods

### destroy()

> **destroy**(): `void`

Defined in: [graphics/image.ts:95](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/rain/src/graphics/image.ts#L95)

Destroy the image and texture.

#### Returns

`void`

***

### getPixel()

> **getPixel**(`x`, `y`, `out?`): [`Color`](/api/rain/graphics/classes/color/)

Defined in: [graphics/image.ts:56](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/rain/src/graphics/image.ts#L56)

Get a color from the image data at the specified position.

#### Parameters

##### x

`number`

The x position in pixels.

##### y

`number`

The y position in pixels.

##### out?

[`Color`](/api/rain/graphics/classes/color/)

The color to store the result in.

#### Returns

[`Color`](/api/rain/graphics/classes/color/)

The pixel color.

***

### setPixel()

> **setPixel**(`x`, `y`, `color`): `void`

Defined in: [graphics/image.ts:74](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/rain/src/graphics/image.ts#L74)

Update the image data at the specified position.

#### Parameters

##### x

`number`

The x position in pixels.

##### y

`number`

The y position in pixels.

##### color

[`Color`](/api/rain/graphics/classes/color/)

The color to set the pixel to.

#### Returns

`void`

***

### updateTexture()

> **updateTexture**(): `void`

Defined in: [graphics/image.ts:85](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/rain/src/graphics/image.ts#L85)

Update the texture with the current image data. This should be called after modifying the image data with setPixel.

#### Returns

`void`
