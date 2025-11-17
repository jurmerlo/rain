---
editUrl: false
next: false
prev: false
title: "View"
---

Defined in: [view.ts:11](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/view/src/view.ts#L11)

Manages the game view, handling canvas sizing, scaling, and rendering.
Provides utilities for responsive scaling and coordinate systems.

## Constructors

### Constructor

> **new View**(`designWidth`, `designHeight`, `fillWindow`, `pixelRatio`): `View`

Defined in: [view.ts:242](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/view/src/view.ts#L242)

Creates a new View instance.

#### Parameters

##### designWidth

`number`

The design width of the game in pixels.

##### designHeight

`number`

The design height of the game in pixels.

##### fillWindow

`boolean`

Whether the view should fill the entire window.

##### pixelRatio

`number`

The pixel ratio for high-DPI displays.

#### Returns

`View`

## Properties

### pixelRatio

> `readonly` **pixelRatio**: `number`

Defined in: [view.ts:15](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/view/src/view.ts#L15)

The pixel ratio used for high-DPI displays.

***

### target

> **target**: [`RenderTarget`](/api/rain/graphics/classes/rendertarget/)

Defined in: [view.ts:20](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/view/src/view.ts#L20)

The render target for the view.

## Accessors

### canvasCenterX

#### Get Signature

> **get** **canvasCenterX**(): `number`

Defined in: [view.ts:75](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/view/src/view.ts#L75)

The horizontal center of the canvas in pixels.

##### Returns

`number`

The canvas center X coordinate.

***

### canvasCenterY

#### Get Signature

> **get** **canvasCenterY**(): `number`

Defined in: [view.ts:83](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/view/src/view.ts#L83)

The vertical center of the canvas in pixels.

##### Returns

`number`

The canvas center Y coordinate.

***

### canvasHeight

#### Get Signature

> **get** **canvasHeight**(): `number`

Defined in: [view.ts:67](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/view/src/view.ts#L67)

The actual canvas height in pixels.

##### Returns

`number`

The canvas height.

***

### canvasWidth

#### Get Signature

> **get** **canvasWidth**(): `number`

Defined in: [view.ts:59](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/view/src/view.ts#L59)

The actual canvas width in pixels.

##### Returns

`number`

The canvas width.

***

### designHeight

#### Get Signature

> **get** **designHeight**(): `number`

Defined in: [view.ts:51](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/view/src/view.ts#L51)

The design height of the game in pixels.

##### Returns

`number`

The design height.

***

### designWidth

#### Get Signature

> **get** **designWidth**(): `number`

Defined in: [view.ts:43](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/view/src/view.ts#L43)

The design width of the game in pixels.

##### Returns

`number`

The design width.

***

### fillWindow

#### Get Signature

> **get** **fillWindow**(): `boolean`

Defined in: [view.ts:26](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/view/src/view.ts#L26)

Whether the view should fill the entire window.

##### Returns

`boolean`

True if the view fills the window, false otherwise.

#### Set Signature

> **set** **fillWindow**(`value`): `void`

Defined in: [view.ts:34](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/view/src/view.ts#L34)

Sets whether the view should fill the entire window.

##### Parameters

###### value

`boolean`

True to fill the window, false to use original canvas size.

##### Returns

`void`

***

### scaleMode

#### Get Signature

> **get** **scaleMode**(): [`ScaleMode`](/api/view/type-aliases/scalemode/)

Defined in: [view.ts:155](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/view/src/view.ts#L155)

The current scale mode function used for scaling calculations.

##### Returns

[`ScaleMode`](/api/view/type-aliases/scalemode/)

The scale mode function.

#### Set Signature

> **set** **scaleMode**(`mode`): `void`

Defined in: [view.ts:163](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/view/src/view.ts#L163)

Sets the scale mode function used for scaling calculations.

##### Parameters

###### mode

[`ScaleMode`](/api/view/type-aliases/scalemode/)

The scale mode function to use.

##### Returns

`void`

***

### viewAnchorX

#### Get Signature

> **get** **viewAnchorX**(): `number`

Defined in: [view.ts:172](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/view/src/view.ts#L172)

The horizontal anchor point for view positioning (0-1).

##### Returns

`number`

The view anchor X.

***

### viewAnchorY

#### Get Signature

> **get** **viewAnchorY**(): `number`

Defined in: [view.ts:180](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/view/src/view.ts#L180)

The vertical anchor point for view positioning (0-1).

##### Returns

`number`

The view anchor Y.

***

### viewCenterX

#### Get Signature

> **get** **viewCenterX**(): `number`

Defined in: [view.ts:107](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/view/src/view.ts#L107)

The horizontal center of the view in pixels.

##### Returns

`number`

The view center X coordinate.

***

### viewCenterY

#### Get Signature

> **get** **viewCenterY**(): `number`

Defined in: [view.ts:115](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/view/src/view.ts#L115)

The vertical center of the view in pixels.

##### Returns

`number`

The view center Y coordinate.

***

### viewHeight

#### Get Signature

> **get** **viewHeight**(): `number`

Defined in: [view.ts:99](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/view/src/view.ts#L99)

The scaled view height in pixels.

##### Returns

`number`

The view height.

***

### viewOffsetX

#### Get Signature

> **get** **viewOffsetX**(): `number`

Defined in: [view.ts:139](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/view/src/view.ts#L139)

The horizontal offset of the view within the canvas in pixels.

##### Returns

`number`

The view offset X.

***

### viewOffsetY

#### Get Signature

> **get** **viewOffsetY**(): `number`

Defined in: [view.ts:147](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/view/src/view.ts#L147)

The vertical offset of the view within the canvas in pixels.

##### Returns

`number`

The view offset Y.

***

### viewScaleX

#### Get Signature

> **get** **viewScaleX**(): `number`

Defined in: [view.ts:123](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/view/src/view.ts#L123)

The horizontal scale factor applied to the view.

##### Returns

`number`

The view scale X factor.

***

### viewScaleY

#### Get Signature

> **get** **viewScaleY**(): `number`

Defined in: [view.ts:131](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/view/src/view.ts#L131)

The vertical scale factor applied to the view.

##### Returns

`number`

The view scale Y factor.

***

### viewWidth

#### Get Signature

> **get** **viewWidth**(): `number`

Defined in: [view.ts:91](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/view/src/view.ts#L91)

The scaled view width in pixels.

##### Returns

`number`

The view width.

## Methods

### drawTarget()

> **drawTarget**(`graphics`): `void`

Defined in: [view.ts:328](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/view/src/view.ts#L328)

Draws the view's render target to the screen with appropriate scaling and offset.

#### Parameters

##### graphics

[`Graphics`](/api/rain/graphics/classes/graphics/)

The graphics context.

#### Returns

`void`

***

### resize()

> **resize**(`width`, `height`): `void`

Defined in: [view.ts:305](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/view/src/view.ts#L305)

Resizes the canvas and recalculates the view scaling.

#### Parameters

##### width

`number`

The new width in pixels.

##### height

`number`

The new height in pixels.

#### Returns

`void`

***

### scaleToFit()

> **scaleToFit**(): `void`

Defined in: [view.ts:264](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/view/src/view.ts#L264)

Calculates and applies the appropriate scaling to fit the view within the canvas.

#### Returns

`void`

***

### setAsTarget()

> **setAsTarget**(`graphics`): `void`

Defined in: [view.ts:320](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/view/src/view.ts#L320)

Sets this view's render target as the active target for the graphics context.

#### Parameters

##### graphics

[`Graphics`](/api/rain/graphics/classes/graphics/)

The graphics context.

#### Returns

`void`

***

### setViewAnchor()

> **setViewAnchor**(`x`, `y`): `void`

Defined in: [view.ts:296](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/view/src/view.ts#L296)

Sets the anchor point for view positioning within the canvas.

#### Parameters

##### x

`number`

The horizontal anchor (0-1, where 0 is left and 1 is right).

##### y

`number`

The vertical anchor (0-1, where 0 is top and 1 is bottom).

#### Returns

`void`
