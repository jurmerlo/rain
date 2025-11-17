---
editUrl: false
next: false
prev: false
title: "BitmapFont"
---

Defined in: [graphics/bitmapFont.ts:71](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/rain/src/graphics/bitmapFont.ts#L71)

Bitmap font class used to draw text.

## Constructors

### Constructor

> **new BitmapFont**(`image`, `data`): `BitmapFont`

Defined in: [graphics/bitmapFont.ts:93](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/rain/src/graphics/bitmapFont.ts#L93)

#### Parameters

##### image

[`Image`](/api/rain/graphics/classes/image/)

Font image.

##### data

`string`

content of .fnt data file.

#### Returns

`BitmapFont`

## Properties

### image

> `readonly` **image**: [`Image`](/api/rain/graphics/classes/image/)

Defined in: [graphics/bitmapFont.ts:75](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/rain/src/graphics/bitmapFont.ts#L75)

The image with the font characters.

## Accessors

### height

#### Get Signature

> **get** **height**(): `number`

Defined in: [graphics/bitmapFont.ts:80](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/rain/src/graphics/bitmapFont.ts#L80)

The font height in pixels.

##### Returns

`number`

## Methods

### getCharData()

> **getCharData**(`char`): [`BitmapFontChar`](/api/rain/graphics/type-aliases/bitmapfontchar/) \| `null`

Defined in: [graphics/bitmapFont.ts:103](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/rain/src/graphics/bitmapFont.ts#L103)

Get render data for a character.

#### Parameters

##### char

`string`

The char to check.

#### Returns

[`BitmapFontChar`](/api/rain/graphics/type-aliases/bitmapfontchar/) \| `null`

The character render data.

***

### getKerning()

> **getKerning**(`left`, `right`): `number`

Defined in: [graphics/bitmapFont.ts:113](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/rain/src/graphics/bitmapFont.ts#L113)

Get the offset between two characters.

#### Parameters

##### left

`string`

The current character.

##### right

`string`

The next character to the right.

#### Returns

`number`

The offset.

***

### width()

> **width**(`text`): `number`

Defined in: [graphics/bitmapFont.ts:122](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/rain/src/graphics/bitmapFont.ts#L122)

Get the width in pixels of the string using this font.

#### Parameters

##### text

`string`

The string to check.

#### Returns

`number`

The width in pixels.
