---
editUrl: false
next: false
prev: false
title: "EmitHandler"
---

> **EmitHandler** = `object`

Defined in: [emitter/emitter.ts:6](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/rain/src/emitter/emitter.ts#L6)

Type representing an event handler.

## Properties

### active

> **active**: `boolean`

Defined in: [emitter/emitter.ts:22](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/rain/src/emitter/emitter.ts#L22)

Whether the handler is active.

***

### callback()

> **callback**: (...`args`) => `void`

Defined in: [emitter/emitter.ts:11](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/rain/src/emitter/emitter.ts#L11)

The callback function to execute when the event is emitted.

#### Parameters

##### args

...`any`[]

The arguments passed to the callback.

#### Returns

`void`

***

### filter()?

> `optional` **filter**: (...`args`) => `boolean`

Defined in: [emitter/emitter.ts:17](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/rain/src/emitter/emitter.ts#L17)

The optional filter function to determine if the callback should be executed.

#### Parameters

##### args

...`any`[]

The arguments passed to the filter function.

#### Returns

`boolean`

A boolean indicating whether the callback should be executed.
