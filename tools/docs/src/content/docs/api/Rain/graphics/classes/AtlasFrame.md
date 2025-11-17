---
editUrl: false
next: false
prev: false
title: "AtlasFrame"
---

Defined in: [graphics/atlas.ts:35](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/rain/src/graphics/atlas.ts#L35)

Class representing a single frame in a sprite atlas.

## Constructors

### Constructor

> **new AtlasFrame**(`name`, `frame`, `trimmed`, `sourceRect`): `AtlasFrame`

Defined in: [graphics/atlas.ts:80](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/rain/src/graphics/atlas.ts#L80)

Create a new atlas frame.

#### Parameters

##### name

`string`

The name of the frame.

##### frame

[`Rectangle`](/api/rain/math/classes/rectangle/)

The rectangle defining the frame within the atlas.

##### trimmed

`boolean`

Whether the frame is trimmed.

##### sourceRect

[`Rectangle`](/api/rain/math/classes/rectangle/)

The source size and offset of the frame.

#### Returns

`AtlasFrame`

## Properties

### frame

> `readonly` **frame**: [`Rectangle`](/api/rain/math/classes/rectangle/)

Defined in: [graphics/atlas.ts:44](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/rain/src/graphics/atlas.ts#L44)

The rectangle defining the frame within the atlas.

***

### name

> `readonly` **name**: `string`

Defined in: [graphics/atlas.ts:39](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/rain/src/graphics/atlas.ts#L39)

The name of the frame.

***

### sourceRect

> `readonly` **sourceRect**: [`Rectangle`](/api/rain/math/classes/rectangle/)

Defined in: [graphics/atlas.ts:54](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/rain/src/graphics/atlas.ts#L54)

The source size and offset of the frame.

***

### trimmed

> `readonly` **trimmed**: `boolean`

Defined in: [graphics/atlas.ts:49](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/rain/src/graphics/atlas.ts#L49)

Whether the frame is trimmed.

## Methods

### fromJsonFrame()

> `static` **fromJsonFrame**(`frameInfo`): `AtlasFrame`

Defined in: [graphics/atlas.ts:61](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/rain/src/graphics/atlas.ts#L61)

Create an AtlasFrame from JSON frame data.

#### Parameters

##### frameInfo

`AtlasFrameInfo`

The frame information from the atlas JSON.

#### Returns

`AtlasFrame`

The atlas frame.
