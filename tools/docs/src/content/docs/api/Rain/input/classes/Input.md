---
editUrl: false
next: false
prev: false
title: "Input"
---

Defined in: [input/input.ts:42](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/rain/src/input/input.ts#L42)

Handles all input events including keyboard, mouse, touch, and gamepad.

## Constructors

### Constructor

> **new Input**(`canvas`): `Input`

Defined in: [input/input.ts:62](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/rain/src/input/input.ts#L62)

Create a new input handler.

#### Parameters

##### canvas

`HTMLCanvasElement`

The canvas element to attach input listeners to.

#### Returns

`Input`

## Methods

### clearListeners()

> **clearListeners**(): `void`

Defined in: [input/input.ts:94](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/rain/src/input/input.ts#L94)

Clears all registered event listeners.

#### Returns

`void`

***

### destroy()

> **destroy**(): `void`

Defined in: [input/input.ts:138](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/rain/src/input/input.ts#L138)

Destroys the input handler and removes all event listeners.

#### Returns

`void`

***

### off()

> **off**\<`K`\>(`event`, `handler`): `void`

Defined in: [input/input.ts:87](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/rain/src/input/input.ts#L87)

Unregister an event listener for a specific input event.

#### Type Parameters

##### K

`K` *extends* keyof `InputEvents`

#### Parameters

##### event

`K`

The event to unregister the listener from.

##### handler

[`EmitHandler`](/api/rain/emitter/type-aliases/emithandler/)

The handler to remove.

#### Returns

`void`

***

### on()

> **on**\<`K`\>(`event`, `callback`, `filter?`): [`EmitHandler`](/api/rain/emitter/type-aliases/emithandler/)

Defined in: [input/input.ts:74](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/rain/src/input/input.ts#L74)

Registers an event listener for a specific input event.

#### Type Parameters

##### K

`K` *extends* keyof `InputEvents`

#### Parameters

##### event

`K`

The event to register the listener for.

##### callback

(...`event`) => `void`

The callback function to execute when the event is emitted.

##### filter?

(...`event`) => `boolean`

An optional filter function to determine if the callback should be executed.

#### Returns

[`EmitHandler`](/api/rain/emitter/type-aliases/emithandler/)

The handler for the event listener.

***

### update()

> **update**(): `void`

Defined in: [input/input.ts:101](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/rain/src/input/input.ts#L101)

Updates the gamepad state and emits events for axis and button changes.

#### Returns

`void`
