---
editUrl: false
next: false
prev: false
title: "Camera"
---

Defined in: [camera.ts:65](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/view/src/camera.ts#L65)

A camera that controls the view and rendering of a scene.
Manages viewport positioning, rotation, zoom, and provides coordinate transformation utilities.

## Constructors

### Constructor

> **new Camera**(`options`): `Camera`

Defined in: [camera.ts:136](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/view/src/camera.ts#L136)

Creates a new Camera instance.

#### Parameters

##### options

[`CameraOptions`](/api/view/type-aliases/cameraoptions/) = `{}`

The camera creation options.

#### Returns

`Camera`

## Properties

### active

> **active**: `boolean` = `true`

Defined in: [camera.ts:69](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/view/src/camera.ts#L69)

Indicates if the camera is used to render.

***

### bgColor

> **bgColor**: [`Color`](/api/rain/graphics/classes/color/)

Defined in: [camera.ts:94](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/view/src/camera.ts#L94)

The background color of the camera.

***

### position

> **position**: [`Vec2`](/api/rain/math/classes/vec2/)

Defined in: [camera.ts:74](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/view/src/camera.ts#L74)

The center position of the camera.

***

### rotation

> **rotation**: `number`

Defined in: [camera.ts:79](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/view/src/camera.ts#L79)

The rotation angle of the camera in degrees.

***

### screenBounds

> **screenBounds**: [`Rectangle`](/api/rain/math/classes/rectangle/)

Defined in: [camera.ts:99](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/view/src/camera.ts#L99)

The screen bounds of the camera.

***

### tag

> **tag**: `string`

Defined in: [camera.ts:114](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/view/src/camera.ts#L114)

A tag to identify the camera.

***

### target

> **target**: [`RenderTarget`](/api/rain/graphics/classes/rendertarget/)

Defined in: [camera.ts:104](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/view/src/camera.ts#L104)

The render canvas used by the camera.

***

### transform

> **transform**: [`Mat4`](/api/rain/math/classes/mat4/)

Defined in: [camera.ts:89](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/view/src/camera.ts#L89)

The transformation matrix of the camera.

***

### viewRect

> **viewRect**: [`Rectangle`](/api/rain/math/classes/rectangle/)

Defined in: [camera.ts:109](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/view/src/camera.ts#L109)

The view rectangle of the camera.

***

### zoom

> **zoom**: `number`

Defined in: [camera.ts:84](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/view/src/camera.ts#L84)

The zoom level of the camera.

## Methods

### destroy()

> **destroy**(): `void`

Defined in: [camera.ts:269](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/view/src/camera.ts#L269)

Destroys the camera and releases its resources.

#### Returns

`void`

***

### drawContent()

> **drawContent**(`graphics`, `drawFunc`): `void`

Defined in: [camera.ts:237](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/view/src/camera.ts#L237)

Draws camera content to the target using the provided graphics context.

#### Parameters

##### graphics

[`Graphics`](/api/rain/graphics/classes/graphics/)

The graphics context to draw with.

##### drawFunc

(`graphics`, `camera?`) => `void`

The function that performs the drawing operations.

#### Returns

`void`

***

### drawSelf()

> **drawSelf**(`graphics`): `void`

Defined in: [camera.ts:258](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/view/src/camera.ts#L258)

Draws the camera content to the screen.

#### Parameters

##### graphics

[`Graphics`](/api/rain/graphics/classes/graphics/)

The graphics context to draw with.

#### Returns

`void`

***

### resize()

> **resize**(): `void`

Defined in: [camera.ts:228](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/view/src/camera.ts#L228)

Resizes the camera view.

#### Returns

`void`

***

### screenToWorld()

> **screenToWorld**(`x`, `y`, `out?`): [`Vec2`](/api/rain/math/classes/vec2/)

Defined in: [camera.ts:172](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/view/src/camera.ts#L172)

Converts screen coordinates to world coordinates.

#### Parameters

##### x

`number`

The x-coordinate on the screen.

##### y

`number`

The y-coordinate on the screen.

##### out?

[`Vec2`](/api/rain/math/classes/vec2/)

Optional Vec2 to store the result. If not provided, a new Vec2 is created.

#### Returns

[`Vec2`](/api/rain/math/classes/vec2/)

The corresponding world coordinates.

***

### updateTransform()

> **updateTransform**(): `void`

Defined in: [camera.ts:153](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/view/src/camera.ts#L153)

Updates the transformation matrix of the camera.

#### Returns

`void`

***

### updateView()

> **updateView**(`x`, `y`, `width`, `height`): `void`

Defined in: [camera.ts:201](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/view/src/camera.ts#L201)

Updates the view rectangle and screen bounds of the camera.

#### Parameters

##### x

`number`

The x-coordinate of the view rectangle.

##### y

`number`

The y-coordinate of the view rectangle.

##### width

`number`

The width of the view rectangle.

##### height

`number`

The height of the view rectangle.

#### Returns

`void`
