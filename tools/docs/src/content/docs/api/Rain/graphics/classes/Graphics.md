---
editUrl: false
next: false
prev: false
title: "Graphics"
---

Defined in: [graphics/graphics.ts:28](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/rain/src/graphics/graphics.ts#L28)

The main graphics class used to draw shapes and images.

## Constructors

### Constructor

> **new Graphics**(`glContext`): `Graphics`

Defined in: [graphics/graphics.ts:87](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/rain/src/graphics/graphics.ts#L87)

Create a new graphics instance.

#### Parameters

##### glContext

[`GLContext`](/api/rain/graphics/classes/glcontext/)

The WebGL context.

#### Returns

`Graphics`

## Properties

### color

> **color**: [`Color`](/api/rain/graphics/classes/color/)

Defined in: [graphics/graphics.ts:32](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/rain/src/graphics/graphics.ts#L32)

The current color tint.

***

### transformStack

> **transformStack**: [`Mat4`](/api/rain/math/classes/mat4/)[]

Defined in: [graphics/graphics.ts:37](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/rain/src/graphics/graphics.ts#L37)

The transform stack.

## Accessors

### target

#### Get Signature

> **get** **target**(): [`RenderTarget`](/api/rain/graphics/classes/rendertarget/)

Defined in: [graphics/graphics.ts:49](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/rain/src/graphics/graphics.ts#L49)

The current render target.

##### Returns

[`RenderTarget`](/api/rain/graphics/classes/rendertarget/)

***

### transform

#### Get Signature

> **get** **transform**(): [`Mat4`](/api/rain/math/classes/mat4/)

Defined in: [graphics/graphics.ts:42](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/rain/src/graphics/graphics.ts#L42)

The current transform matrix.

##### Returns

[`Mat4`](/api/rain/math/classes/mat4/)

## Methods

### applyTransform()

> **applyTransform**(`transform`): `void`

Defined in: [graphics/graphics.ts:158](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/rain/src/graphics/graphics.ts#L158)

Multiply the current transform by the given transform.

#### Parameters

##### transform

[`Mat4`](/api/rain/math/classes/mat4/)

The transform to apply.

#### Returns

`void`

***

### clearTargets()

> **clearTargets**(): `void`

Defined in: [graphics/graphics.ts:131](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/rain/src/graphics/graphics.ts#L131)

Clear all render targets from the stack.

#### Returns

`void`

***

### commit()

> **commit**(): `void`

Defined in: [graphics/graphics.ts:218](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/rain/src/graphics/graphics.ts#L218)

Draw the current batch to the screen or target.

#### Returns

`void`

***

### drawBitmapText()

> **drawBitmapText**(`x`, `y`, `font`, `text`): `void`

Defined in: [graphics/graphics.ts:413](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/rain/src/graphics/graphics.ts#L413)

Draw a string of text to the screen.

#### Parameters

##### x

`number`

The x-coordinate to draw the text at.

##### y

`number`

##### font

[`BitmapFont`](/api/rain/graphics/classes/bitmapfont/)

The font to use.

##### text

`string`

The text to draw.

#### Returns

`void`

***

### drawCircle()

> **drawCircle**(`centerX`, `centerY`, `radius`, `segments`, `lineWidth`): `void`

Defined in: [graphics/graphics.ts:315](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/rain/src/graphics/graphics.ts#L315)

Draw a circle.

#### Parameters

##### centerX

`number`

The x-coordinate of the center of the circle.

##### centerY

`number`

The y-coordinate of the center of the circle.

##### radius

`number`

The radius of the circle.

##### segments

`number`

The number of segments in the circle.

##### lineWidth

`number`

The width of the line.

#### Returns

`void`

***

### drawFilledCircle()

> **drawFilledCircle**(`centerX`, `centerY`, `radius`, `segments`): `void`

Defined in: [graphics/graphics.ts:300](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/rain/src/graphics/graphics.ts#L300)

Draw a filled circle.

#### Parameters

##### centerX

`number`

The x-coordinate of the center of the circle.

##### centerY

`number`

The y-coordinate of the center of the circle.

##### radius

`number`

The radius of the circle.

##### segments

`number`

The number of segments in the circle.

#### Returns

`void`

***

### drawFilledPolygon()

> **drawFilledPolygon**(`centerX`, `centerY`, `vertices`): `void`

Defined in: [graphics/graphics.ts:328](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/rain/src/graphics/graphics.ts#L328)

Draw a filled polygon.

#### Parameters

##### centerX

`number`

The x-coordinate of the center of the circle.

##### centerY

`number`

The y-coordinate of the center of the circle.

##### vertices

[`Vec2`](/api/rain/math/classes/vec2/)[]

The vertices of the polygon.

#### Returns

`void`

***

### drawFilledRect()

> **drawFilledRect**(`x`, `y`, `width`, `height`): `void`

Defined in: [graphics/graphics.ts:271](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/rain/src/graphics/graphics.ts#L271)

Draw a filled rectangle.

#### Parameters

##### x

`number`

The x-coordinate of the rectangle.

##### y

`number`

The y-coordinate of the rectangle.

##### width

`number`

The width of the rectangle.

##### height

`number`

The height of the rectangle.

#### Returns

`void`

***

### drawFilledTriangle()

> **drawFilledTriangle**(`p1X`, `p1Y`, `p2X`, `p2Y`, `p3X`, `p3Y`): `void`

Defined in: [graphics/graphics.ts:241](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/rain/src/graphics/graphics.ts#L241)

Draw a filled triangle.

#### Parameters

##### p1X

`number`

The x-coordinate of the first point.

##### p1Y

`number`

The y-coordinate of the first point.

##### p2X

`number`

The x-coordinate of the second point.

##### p2Y

`number`

The y-coordinate of the second point.

##### p3X

`number`

The x-coordinate of the third point.

##### p3Y

`number`

The y-coordinate of the third point.

#### Returns

`void`

***

### drawImage()

> **drawImage**(`x`, `y`, `image`, `frame?`): `void`

Defined in: [graphics/graphics.ts:356](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/rain/src/graphics/graphics.ts#L356)

Draw an image to the screen.

#### Parameters

##### x

`number`

The x-coordinate to draw the image at.

##### y

`number`

The y-coordinate to draw the image at.

##### image

[`Image`](/api/rain/graphics/classes/image/)

The image to draw.

##### frame?

[`Rectangle`](/api/rain/math/classes/rectangle/)

Optional region of the image to draw. Defaults to the full image.

#### Returns

`void`

***

### drawImagePoints()

> **drawImagePoints**(`tlX`, `tlY`, `trX`, `trY`, `brX`, `brY`, `blX`, `blY`, `image`, `frame?`): `void`

Defined in: [graphics/graphics.ts:376](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/rain/src/graphics/graphics.ts#L376)

Draws an image on the canvas using the specified corner points.

#### Parameters

##### tlX

`number`

The x-coordinate of the top-left corner.

##### tlY

`number`

The y-coordinate of the top-left corner.

##### trX

`number`

The x-coordinate of the top-right corner.

##### trY

`number`

The y-coordinate of the top-right corner.

##### brX

`number`

The x-coordinate of the bottom-right corner.

##### brY

`number`

The y-coordinate of the bottom-right corner.

##### blX

`number`

The x-coordinate of the bottom-left corner.

##### blY

`number`

The y-coordinate of the bottom-left corner.

##### image

[`Image`](/api/rain/graphics/classes/image/)

The image to draw.

##### frame?

[`Rectangle`](/api/rain/math/classes/rectangle/)

Optional region of the image to draw. Defaults to the full image.

#### Returns

`void`

***

### drawLine()

> **drawLine**(`p1X`, `p1Y`, `p2X`, `p2Y`, `align`, `lineWidth`): `void`

Defined in: [graphics/graphics.ts:257](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/rain/src/graphics/graphics.ts#L257)

Draw a line.

#### Parameters

##### p1X

`number`

The x-coordinate of the first point.

##### p1Y

`number`

The y-coordinate of the first point.

##### p2X

`number`

The x-coordinate of the second point.

##### p2Y

`number`

The y-coordinate of the second point.

##### align

[`LineAlign`](/api/rain/graphics/type-aliases/linealign/)

The alignment of the line.

##### lineWidth

`number`

The width of the line.

#### Returns

`void`

***

### drawPolygon()

> **drawPolygon**(`centerX`, `centerY`, `vertices`, `lineWidth`): `void`

Defined in: [graphics/graphics.ts:342](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/rain/src/graphics/graphics.ts#L342)

Draw a polygon.

#### Parameters

##### centerX

`number`

The x-coordinate of the center of the circle.

##### centerY

`number`

The y-coordinate of the center of the circle.

##### vertices

[`Vec2`](/api/rain/math/classes/vec2/)[]

The vertices of the polygon.

##### lineWidth

`number`

The width of the line.

#### Returns

`void`

***

### drawRect()

> **drawRect**(`x`, `y`, `width`, `height`, `lineWidth`): `void`

Defined in: [graphics/graphics.ts:286](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/rain/src/graphics/graphics.ts#L286)

Draw a rectangle.

#### Parameters

##### x

`number`

The x-coordinate of the rectangle.

##### y

`number`

The y-coordinate of the rectangle.

##### width

`number`

The width of the rectangle.

##### height

`number`

The height of the rectangle.

##### lineWidth

`number`

The width of the line.

#### Returns

`void`

***

### drawRenderTarget()

> **drawRenderTarget**(`x`, `y`, `target`): `void`

Defined in: [graphics/graphics.ts:400](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/rain/src/graphics/graphics.ts#L400)

Draw a render target to the screen.

#### Parameters

##### x

`number`

The x-coordinate to draw the render target at.

##### y

`number`

The y-coordinate to draw the render target at.

##### target

[`RenderTarget`](/api/rain/graphics/classes/rendertarget/)

The render target to draw.

#### Returns

`void`

***

### popTarget()

> **popTarget**(): `void`

Defined in: [graphics/graphics.ts:117](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/rain/src/graphics/graphics.ts#L117)

Pop the current render target off the stack.

#### Returns

`void`

***

### popTransform()

> **popTransform**(): `void`

Defined in: [graphics/graphics.ts:165](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/rain/src/graphics/graphics.ts#L165)

Pop the current transform off the stack.

#### Returns

`void`

***

### pushTarget()

> **pushTarget**(`target`): `void`

Defined in: [graphics/graphics.ts:105](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/rain/src/graphics/graphics.ts#L105)

Push a new render target onto the stack.

#### Parameters

##### target

[`RenderTarget`](/api/rain/graphics/classes/rendertarget/)

The new render target.

#### Returns

`void`

***

### pushTransform()

> **pushTransform**(`transform?`): `void`

Defined in: [graphics/graphics.ts:142](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/rain/src/graphics/graphics.ts#L142)

Push a new transform onto the stack.

#### Parameters

##### transform?

[`Mat4`](/api/rain/math/classes/mat4/)

Optional transform to push. If not provided, the current transform will be pushed.

#### Returns

`void`

***

### setBool()

> **setBool**(`location`, `value`): `void`

Defined in: [graphics/graphics.ts:425](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/rain/src/graphics/graphics.ts#L425)

Set a boolean uniform variable.

#### Parameters

##### location

The location of the uniform variable.

`WebGLUniformLocation` | `null`

##### value

`boolean`

The boolean value to set.

#### Returns

`void`

***

### setFloat()

> **setFloat**(`location`, `value`): `void`

Defined in: [graphics/graphics.ts:485](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/rain/src/graphics/graphics.ts#L485)

Set a float uniform variable.

#### Parameters

##### location

The location of the uniform variable.

`WebGLUniformLocation` | `null`

##### value

`number`

The float value to set.

#### Returns

`void`

***

### setFloat2()

> **setFloat2**(`location`, `value1`, `value2`): `void`

Defined in: [graphics/graphics.ts:495](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/rain/src/graphics/graphics.ts#L495)

Set a vec2 float uniform variable.

#### Parameters

##### location

The location of the uniform variable.

`WebGLUniformLocation` | `null`

##### value1

`number`

The first float value.

##### value2

`number`

The second float value.

#### Returns

`void`

***

### setFloat3()

> **setFloat3**(`location`, `value1`, `value2`, `value3`): `void`

Defined in: [graphics/graphics.ts:506](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/rain/src/graphics/graphics.ts#L506)

Set a vec3 float uniform variable.

#### Parameters

##### location

The location of the uniform variable.

`WebGLUniformLocation` | `null`

##### value1

`number`

The first float value.

##### value2

`number`

The second float value.

##### value3

`number`

The third float value.

#### Returns

`void`

***

### setFloat4()

> **setFloat4**(`location`, `value1`, `value2`, `value3`, `value4`): `void`

Defined in: [graphics/graphics.ts:518](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/rain/src/graphics/graphics.ts#L518)

Set a vec4 float uniform variable.

#### Parameters

##### location

The location of the uniform variable.

`WebGLUniformLocation` | `null`

##### value1

`number`

The first float value.

##### value2

`number`

The second float value.

##### value3

`number`

The third float value.

##### value4

`number`

The fourth float value.

#### Returns

`void`

***

### setFloats()

> **setFloats**(`location`, `value`): `void`

Defined in: [graphics/graphics.ts:533](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/rain/src/graphics/graphics.ts#L533)

Set an array of float uniform variables.

#### Parameters

##### location

The location of the uniform variable.

`WebGLUniformLocation` | `null`

##### value

`Float32Array`

The array of float values to set.

#### Returns

`void`

***

### setInt()

> **setInt**(`location`, `value`): `void`

Defined in: [graphics/graphics.ts:434](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/rain/src/graphics/graphics.ts#L434)

Set an integer uniform variable.

#### Parameters

##### location

The location of the uniform variable.

`WebGLUniformLocation` | `null`

##### value

`number`

The integer value to set.

#### Returns

`void`

***

### setInt2()

> **setInt2**(`location`, `value1`, `value2`): `void`

Defined in: [graphics/graphics.ts:444](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/rain/src/graphics/graphics.ts#L444)

Set a vec2 integer uniform variable.

#### Parameters

##### location

The location of the uniform variable.

`WebGLUniformLocation` | `null`

##### value1

`number`

The first integer value.

##### value2

`number`

The second integer value.

#### Returns

`void`

***

### setInt3()

> **setInt3**(`location`, `value1`, `value2`, `value3`): `void`

Defined in: [graphics/graphics.ts:455](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/rain/src/graphics/graphics.ts#L455)

Set a vec3 integer uniform variable.

#### Parameters

##### location

The location of the uniform variable.

`WebGLUniformLocation` | `null`

##### value1

`number`

The first integer value.

##### value2

`number`

The second integer value.

##### value3

`number`

The third integer value.

#### Returns

`void`

***

### setInt4()

> **setInt4**(`location`, `value1`, `value2`, `value3`, `value4`): `void`

Defined in: [graphics/graphics.ts:467](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/rain/src/graphics/graphics.ts#L467)

Set a vec4 integer uniform variable.

#### Parameters

##### location

The location of the uniform variable.

`WebGLUniformLocation` | `null`

##### value1

`number`

The first integer value.

##### value2

`number`

The second integer value.

##### value3

`number`

The third integer value.

##### value4

`number`

The fourth integer value.

#### Returns

`void`

***

### setInts()

> **setInts**(`location`, `value`): `void`

Defined in: [graphics/graphics.ts:476](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/rain/src/graphics/graphics.ts#L476)

Set an array of integer uniform variables.

#### Parameters

##### location

The location of the uniform variable.

`WebGLUniformLocation` | `null`

##### value

`Int32Array`

The array of integer values to set.

#### Returns

`void`

***

### setMatrix()

> **setMatrix**(`location`, `value`): `void`

Defined in: [graphics/graphics.ts:542](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/rain/src/graphics/graphics.ts#L542)

Set a 4x4 matrix uniform variable.

#### Parameters

##### location

The location of the uniform variable.

`WebGLUniformLocation` | `null`

##### value

[`Mat4`](/api/rain/math/classes/mat4/)

The 4x4 matrix to set.

#### Returns

`void`

***

### setShader()

> **setShader**(`shader?`): `void`

Defined in: [graphics/graphics.ts:227](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/rain/src/graphics/graphics.ts#L227)

Set the current shader.

#### Parameters

##### shader?

[`Shader`](/api/rain/graphics/classes/shader/)

The shader to use. If not provided, the default shader will be used.

#### Returns

`void`

***

### setTexture()

> **setTexture**(`unit`, `value?`): `void`

Defined in: [graphics/graphics.ts:551](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/rain/src/graphics/graphics.ts#L551)

Set a texture uniform variable.

#### Parameters

##### unit

`number`

The texture unit to set.

##### value?

[`Image`](/api/rain/graphics/classes/image/)

The image to set as the texture.

#### Returns

`void`

***

### start()

> **start**(`clear`, `newClearColor?`): `void`

Defined in: [graphics/graphics.ts:181](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/rain/src/graphics/graphics.ts#L181)

Start a new rendering batch.

#### Parameters

##### clear

`boolean` = `true`

Should the screen or target be cleared.

##### newClearColor?

[`Color`](/api/rain/graphics/classes/color/)

The color to use when clearing. If not provided, the default clear color will be used.

#### Returns

`void`
