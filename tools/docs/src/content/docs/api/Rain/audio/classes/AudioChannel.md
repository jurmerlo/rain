---
editUrl: false
next: false
prev: false
title: "AudioChannel"
---

Defined in: [audio/audioChannel.ts:7](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/rain/src/audio/audioChannel.ts#L7)

An audio channel controls the playback of a sound.

## Constructors

### Constructor

> **new AudioChannel**(`gain`): `AudioChannel`

Defined in: [audio/audioChannel.ts:74](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/rain/src/audio/audioChannel.ts#L74)

Create a new Audio Channel instance.

#### Parameters

##### gain

`GainNode`

The gain node.

#### Returns

`AudioChannel`

#### Throws

Error if gain node is invalid.

## Properties

### ended

> **ended**: `boolean`

Defined in: [audio/audioChannel.ts:36](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/rain/src/audio/audioChannel.ts#L36)

Has the sound ended.

***

### loop

> **loop**: `number`

Defined in: [audio/audioChannel.ts:31](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/rain/src/audio/audioChannel.ts#L31)

How many loops are left. -1 is infinite.

***

### paused

> **paused**: `boolean`

Defined in: [audio/audioChannel.ts:41](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/rain/src/audio/audioChannel.ts#L41)

Is the sound paused.

***

### pauseTime

> **pauseTime**: `number`

Defined in: [audio/audioChannel.ts:26](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/rain/src/audio/audioChannel.ts#L26)

The time when the sound was paused.

***

### sound?

> `optional` **sound**: [`Sound`](/api/rain/audio/classes/sound/)

Defined in: [audio/audioChannel.ts:11](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/rain/src/audio/audioChannel.ts#L11)

The current sound for this channel.

***

### source?

> `optional` **source**: `AudioBufferSourceNode`

Defined in: [audio/audioChannel.ts:16](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/rain/src/audio/audioChannel.ts#L16)

The channel buffer source.

***

### startTime

> **startTime**: `number`

Defined in: [audio/audioChannel.ts:21](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/rain/src/audio/audioChannel.ts#L21)

Where in the sound to start.

## Accessors

### gain

#### Get Signature

> **get** **gain**(): `GainNode`

Defined in: [audio/audioChannel.ts:46](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/rain/src/audio/audioChannel.ts#L46)

The audio gain node.

##### Returns

`GainNode`

***

### volume

#### Get Signature

> **get** **volume**(): `number`

Defined in: [audio/audioChannel.ts:53](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/rain/src/audio/audioChannel.ts#L53)

The channel volume (0 - 1).

##### Returns

`number`

#### Set Signature

> **set** **volume**(`value`): `void`

Defined in: [audio/audioChannel.ts:60](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/rain/src/audio/audioChannel.ts#L60)

Set the channel volume (0 - 1).

##### Parameters

###### value

`number`

##### Returns

`void`

## Methods

### pause()

> **pause**(`time`): `void`

Defined in: [audio/audioChannel.ts:89](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/rain/src/audio/audioChannel.ts#L89)

Pause this channel.

#### Parameters

##### time

`number`

The current sound time.

#### Returns

`void`

#### Throws

Error if time is invalid.

***

### stop()

> **stop**(): `void`

Defined in: [audio/audioChannel.ts:109](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/rain/src/audio/audioChannel.ts#L109)

Stop this channel.

#### Returns

`void`
