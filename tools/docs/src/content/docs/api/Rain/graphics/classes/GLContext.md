---
editUrl: false
next: false
prev: false
title: "GLContext"
---

Defined in: [graphics/glContext.ts:15](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/rain/src/graphics/glContext.ts#L15)

The WebGL context that is used to render graphics.

## Constructors

### Constructor

> **new GLContext**(`canvas`): `GLContext`

Defined in: [graphics/glContext.ts:35](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/rain/src/graphics/glContext.ts#L35)

Create a new WebGL context.

#### Parameters

##### canvas

`HTMLCanvasElement`

#### Returns

`GLContext`

## Properties

### canvas

> `readonly` **canvas**: `HTMLCanvasElement`

Defined in: [graphics/glContext.ts:19](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/rain/src/graphics/glContext.ts#L19)

The canvas element used for rendering.

***

### gl

> **gl**: `WebGL2RenderingContext`

Defined in: [graphics/glContext.ts:29](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/rain/src/graphics/glContext.ts#L29)

The WebGL rendering context.

***

### isGL1

> `readonly` **isGL1**: `boolean`

Defined in: [graphics/glContext.ts:24](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/rain/src/graphics/glContext.ts#L24)

Is the context a WebGL1 context. If WebGL2 is not available, WebGL1 features will be used.

## Methods

### getGLBlendMode()

> **getGLBlendMode**(`mode`): `number`

Defined in: [graphics/glContext.ts:78](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/rain/src/graphics/glContext.ts#L78)

Get the WebGL constant for a blend mode.

#### Parameters

##### mode

[`BlendMode`](/api/rain/graphics/type-aliases/blendmode/)

The blend mode to get.

#### Returns

`number`

The constant.

***

### getGLBlendOperation()

> **getGLBlendOperation**(`operation`): `number`

Defined in: [graphics/glContext.ts:120](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/rain/src/graphics/glContext.ts#L120)

Get the WebGL constant for a blend operation.

#### Parameters

##### operation

[`BlendOperation`](/api/rain/graphics/type-aliases/blendoperation/)

The blend operation to get.

#### Returns

`number`

The constant.

***

### getGLTextureFilter()

> **getGLTextureFilter**(`filter`, `mipmap`): `number`

Defined in: [graphics/glContext.ts:157](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/rain/src/graphics/glContext.ts#L157)

Get the WebGL constant for a texture filter.

#### Parameters

##### filter

[`TextureFilter`](/api/rain/graphics/type-aliases/texturefilter/)

The texture filter.

##### mipmap

[`MipmapFilter`](/api/rain/graphics/type-aliases/mipmapfilter/) = `'none'`

The mipmap filter.

#### Returns

`number`

The constant.

***

### getGLTextureWrap()

> **getGLTextureWrap**(`wrap`): `number`

Defined in: [graphics/glContext.ts:138](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/rain/src/graphics/glContext.ts#L138)

Get the WebGL constant for a texture wrap mode.

#### Parameters

##### wrap

[`TextureWrap`](/api/rain/graphics/type-aliases/texturewrap/)

The texture wrap mode to get.

#### Returns

`number`

The constant.
