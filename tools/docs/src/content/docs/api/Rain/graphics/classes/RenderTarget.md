---
editUrl: false
next: false
prev: false
title: "RenderTarget"
---

Defined in: [graphics/renderTarget.ts:8](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/rain/src/graphics/renderTarget.ts#L8)

A render target is an object that can be rendered to and then used as a texture.

## Constructors

### Constructor

> **new RenderTarget**(`width`, `height`): `RenderTarget`

Defined in: [graphics/renderTarget.ts:45](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/rain/src/graphics/renderTarget.ts#L45)

Create a new render target.

#### Parameters

##### width

`number`

The width of the render target in pixels.

##### height

`number`

The height of the render target in pixels.

#### Returns

`RenderTarget`

## Properties

### buffer

> `readonly` **buffer**: `WebGLFramebuffer`

Defined in: [graphics/renderTarget.ts:32](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/rain/src/graphics/renderTarget.ts#L32)

The framebuffer that can be used to render to.

***

### height

> `readonly` **height**: `number`

Defined in: [graphics/renderTarget.ts:17](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/rain/src/graphics/renderTarget.ts#L17)

The height of the render target in pixels.

***

### projection

> **projection**: [`Mat4`](/api/rain/math/classes/mat4/)

Defined in: [graphics/renderTarget.ts:22](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/rain/src/graphics/renderTarget.ts#L22)

The projection matrix.

***

### texture

> `readonly` **texture**: `WebGLTexture`

Defined in: [graphics/renderTarget.ts:27](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/rain/src/graphics/renderTarget.ts#L27)

The texture that can be used to render to.

***

### width

> `readonly` **width**: `number`

Defined in: [graphics/renderTarget.ts:12](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/rain/src/graphics/renderTarget.ts#L12)

The width of the render target in pixels.

## Methods

### destroy()

> **destroy**(): `void`

Defined in: [graphics/renderTarget.ts:73](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/rain/src/graphics/renderTarget.ts#L73)

Destroy the render target.

#### Returns

`void`
