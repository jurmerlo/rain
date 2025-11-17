---
editUrl: false
next: false
prev: false
title: "Shader"
---

Defined in: [graphics/shader.ts:14](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/rain/src/graphics/shader.ts#L14)

A shader program that can be used to render shapes or images.

## Constructors

### Constructor

> **new Shader**(`type`, `source`): `Shader`

Defined in: [graphics/shader.ts:81](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/rain/src/graphics/shader.ts#L81)

Create a new shader.

#### Parameters

##### type

[`ShaderType`](/api/rain/graphics/type-aliases/shadertype/)

The type of shader to create.

##### source

`string`

The fragment shader source.

#### Returns

`Shader`

## Properties

### blendParameters

> **blendParameters**: [`BlendParameters`](/api/rain/graphics/type-aliases/blendparameters/)

Defined in: [graphics/shader.ts:43](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/rain/src/graphics/shader.ts#L43)

All blending parameters for the shader.

***

### colorLocation

> `readonly` **colorLocation**: `1` = `1`

Defined in: [graphics/shader.ts:28](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/rain/src/graphics/shader.ts#L28)

The location of the vertex color attribute.

***

### positionLocation

> `readonly` **positionLocation**: `0` = `0`

Defined in: [graphics/shader.ts:23](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/rain/src/graphics/shader.ts#L23)

The location of the vertex position attribute.

***

### textureParameters

> **textureParameters**: [`TextureParameters`](/api/rain/graphics/type-aliases/textureparameters/)

Defined in: [graphics/shader.ts:48](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/rain/src/graphics/shader.ts#L48)

All texture filtering and wrapping parameters for the shader.

***

### type

> `readonly` **type**: [`ShaderType`](/api/rain/graphics/type-aliases/shadertype/)

Defined in: [graphics/shader.ts:18](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/rain/src/graphics/shader.ts#L18)

The type of shader.

***

### uniforms

> `readonly` **uniforms**: `Record`\<`string`, `WebGLUniformLocation`\>

Defined in: [graphics/shader.ts:38](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/rain/src/graphics/shader.ts#L38)

All uniform locations for the shader.

***

### uvLocation

> `readonly` **uvLocation**: `2` = `2`

Defined in: [graphics/shader.ts:33](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/rain/src/graphics/shader.ts#L33)

The location of the vertex UV attribute if this is an image shader.

## Methods

### applyBlendMode()

> **applyBlendMode**(): `void`

Defined in: [graphics/shader.ts:172](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/rain/src/graphics/shader.ts#L172)

Apply the shader blend mode.

#### Returns

`void`

***

### applyTextureParameters()

> **applyTextureParameters**(`textUnit`): `void`

Defined in: [graphics/shader.ts:146](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/rain/src/graphics/shader.ts#L146)

Apply the texture parameters to a texture.

#### Parameters

##### textUnit

`number`

The texture unit to apply the parameters to.

#### Returns

`void`

***

### destroy()

> **destroy**(): `void`

Defined in: [graphics/shader.ts:194](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/rain/src/graphics/shader.ts#L194)

Destroy the shader.

#### Returns

`void`

***

### getUniformLocation()

> **getUniformLocation**(`id`): `WebGLUniformLocation` \| `null`

Defined in: [graphics/shader.ts:138](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/rain/src/graphics/shader.ts#L138)

Get the location of a uniform in the shader program.

#### Parameters

##### id

`string`

The uniform identifier.

#### Returns

`WebGLUniformLocation` \| `null`

The uniform location or null if it does not exist.

***

### use()

> **use**(): `void`

Defined in: [graphics/shader.ts:129](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/rain/src/graphics/shader.ts#L129)

Use the shader program.

#### Returns

`void`
