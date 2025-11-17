---
editUrl: false
next: false
prev: false
title: "Atlas"
---

Defined in: [graphics/atlas.ts:91](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/rain/src/graphics/atlas.ts#L91)

Class representing a sprite atlas.

## Constructors

### Constructor

> **new Atlas**(`image`, `data`): `Atlas`

Defined in: [graphics/atlas.ts:107](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/rain/src/graphics/atlas.ts#L107)

Create a new sprite atlas.

#### Parameters

##### image

[`Image`](/api/rain/graphics/classes/image/)

The atlas image.

##### data

`string`

The atlas JSON data.

#### Returns

`Atlas`

## Properties

### image

> `readonly` **image**: [`Image`](/api/rain/graphics/classes/image/)

Defined in: [graphics/atlas.ts:95](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/rain/src/graphics/atlas.ts#L95)

The image containing the atlas textures.

## Methods

### drawFrame()

> **drawFrame**(`graphics`, `name`, `x`, `y`, `anchorX`, `anchorY`): `void`

Defined in: [graphics/atlas.ts:140](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/rain/src/graphics/atlas.ts#L140)

Draw a frame from the atlas.

#### Parameters

##### graphics

[`Graphics`](/api/rain/graphics/classes/graphics/)

The graphics context to draw on.

##### name

`string`

The name of the frame to draw.

##### x

`number`

The x position to draw the frame.

##### y

`number`

The y position to draw the frame.

##### anchorX

`number` = `0.5`

The anchor x point (0 to 1).

##### anchorY

`number` = `0.5`

The anchor y point (0 to 1).

#### Returns

`void`

***

### getFrame()

> **getFrame**(`name`): [`AtlasFrame`](/api/rain/graphics/classes/atlasframe/)

Defined in: [graphics/atlas.ts:122](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/rain/src/graphics/atlas.ts#L122)

Get a frame by its name.

#### Parameters

##### name

`string`

The name of the frame.

#### Returns

[`AtlasFrame`](/api/rain/graphics/classes/atlasframe/)

The atlas frame.
