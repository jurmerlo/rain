---
editUrl: false
next: false
prev: false
title: "Emitter"
---

Defined in: [emitter/emitter.ts:28](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/rain/src/emitter/emitter.ts#L28)

Class representing an event emitter.

## Type Parameters

### T

`T` *extends* `Record`\<`string`, `any`[]\>

## Constructors

### Constructor

> **new Emitter**\<`T`\>(): `Emitter`\<`T`\>

#### Returns

`Emitter`\<`T`\>

## Methods

### clear()

> **clear**(): `void`

Defined in: [emitter/emitter.ts:92](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/rain/src/emitter/emitter.ts#L92)

Clears all event handlers.

#### Returns

`void`

***

### emit()

> **emit**\<`K`\>(`event`, ...`data`): `void`

Defined in: [emitter/emitter.ts:77](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/rain/src/emitter/emitter.ts#L77)

Emits an event.

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### event

`K`

The event to emit.

##### data

...`T`\[`K`\]

The data to pass to the event handlers.

#### Returns

`void`

***

### off()

> **off**\<`K`\>(`event`, `handler`): `void`

Defined in: [emitter/emitter.ts:61](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/rain/src/emitter/emitter.ts#L61)

Unregisters an event handler.

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### event

`K`

The event to unregister the handler from.

##### handler

[`EmitHandler`](/api/rain/emitter/type-aliases/emithandler/)

The handler to unregister.

#### Returns

`void`

***

### on()

> **on**\<`K`\>(`event`, `callback`, `filter?`): [`EmitHandler`](/api/rain/emitter/type-aliases/emithandler/)

Defined in: [emitter/emitter.ts:41](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/rain/src/emitter/emitter.ts#L41)

Registers an event handler.

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### event

`K`

The event to register the handler for.

##### callback

(...`event`) => `void`

The callback function to execute when the event is emitted.

##### filter?

(...`event`) => `boolean`

An optional filter function to determine if the callback should be executed.

#### Returns

[`EmitHandler`](/api/rain/emitter/type-aliases/emithandler/)

The registered event handler.
