---
editUrl: false
next: false
prev: false
title: "Audio"
---

Defined in: [audio/audio.ts:14](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/rain/src/audio/audio.ts#L14)

The game audio manager.

## Constructors

### Constructor

> **new Audio**(): `Audio`

Defined in: [audio/audio.ts:43](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/rain/src/audio/audio.ts#L43)

Create a new AudioManager instance.

#### Returns

`Audio`

## Properties

### audioContext

> `readonly` **audioContext**: `AudioContext`

Defined in: [audio/audio.ts:18](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/rain/src/audio/audio.ts#L18)

The web audio context.

## Methods

### decodeSound()

> **decodeSound**(`id`, `buffer`): `Promise`\<[`Sound`](/api/rain/audio/classes/sound/) \| `null`\>

Defined in: [audio/audio.ts:295](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/rain/src/audio/audio.ts#L295)

Decode a buffer and create a Sound instance with it.

#### Parameters

##### id

`string`

The sound id.

##### buffer

`ArrayBuffer`

The sound buffer.

#### Returns

`Promise`\<[`Sound`](/api/rain/audio/classes/sound/) \| `null`\>

The created Sound or null if the buffer could not be decoded.

#### Throws

Error if id or buffer is invalid.

***

### getFreeChannel()

> **getFreeChannel**(): `number`

Defined in: [audio/audio.ts:119](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/rain/src/audio/audio.ts#L119)

Get the next free audio channel.

#### Returns

`number`

The channel id. If -1 is returned there are no free channels.

***

### getLoop()

> **getLoop**(`channelId`): `number`

Defined in: [audio/audio.ts:96](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/rain/src/audio/audio.ts#L96)

Get the current loops left from a channel.

#### Parameters

##### channelId

`number`

The audio channel to check.

#### Returns

`number`

The current loops left.

#### Throws

Error if channelId is invalid.

***

### getVolume()

> **getVolume**(`channelId?`): `number`

Defined in: [audio/audio.ts:66](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/rain/src/audio/audio.ts#L66)

Get the volume of a channel or if no channel is passed get the main volume.

#### Parameters

##### channelId?

`number`

Optional channel id.

#### Returns

`number`

The volume (0 - 1).

#### Throws

Error if channelId is invalid.

***

### isMuted()

> **isMuted**(): `boolean`

Defined in: [audio/audio.ts:263](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/rain/src/audio/audio.ts#L263)

Check if the audio is muted.

#### Returns

`boolean`

True if the audio is muted.

***

### isPlaying()

> **isPlaying**(`channelId`): `boolean`

Defined in: [audio/audio.ts:254](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/rain/src/audio/audio.ts#L254)

Check if a channel is playing a sound.

#### Parameters

##### channelId

`number`

The channel id to check.

#### Returns

`boolean`

True if the sound is playing.

#### Throws

Error if channelId is invalid.

***

### mute()

> **mute**(): `void`

Defined in: [audio/audio.ts:270](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/rain/src/audio/audio.ts#L270)

Mute all audio. This sets the volume to 0, but doesn't stop the audio playing.

#### Returns

`void`

***

### pause()

> **pause**(`channelId?`): `void`

Defined in: [audio/audio.ts:209](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/rain/src/audio/audio.ts#L209)

Pause a channel or if no channel is passed pause all audio.

#### Parameters

##### channelId?

`number`

Optional channel id.

#### Returns

`void`

***

### play()

> **play**(`sound`, `options?`): `number`

Defined in: [audio/audio.ts:136](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/rain/src/audio/audio.ts#L136)

Play a sound.

#### Parameters

##### sound

[`Sound`](/api/rain/audio/classes/sound/)

The sound to play.

##### options?

[`PlayOptions`](/api/rain/audio/type-aliases/playoptions/)

Play options.

#### Returns

`number`

The channel id the sound is playing on.

#### Throws

Error if sound is invalid, options are invalid, or no channels are available.

***

### resume()

> **resume**(`channelId?`): `void`

Defined in: [audio/audio.ts:221](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/rain/src/audio/audio.ts#L221)

Resume a channel or if no channel is passed resume all audio.

#### Parameters

##### channelId?

`number`

Optional channel id.

#### Returns

`void`

***

### resumeContext()

> **resumeContext**(): `Promise`\<`void`\>

Defined in: [audio/audio.ts:314](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/rain/src/audio/audio.ts#L314)

Resume the audio context if it's suspended.
Call this after user interaction to enable audio.

#### Returns

`Promise`\<`void`\>

Promise that resolves when the context is resumed.

***

### setLoop()

> **setLoop**(`value`, `channelId`): `void`

Defined in: [audio/audio.ts:107](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/rain/src/audio/audio.ts#L107)

Set the amount of loops left.

#### Parameters

##### value

`number`

The new loop count (-1 for infinite, 0 for no loop, positive for specific count).

##### channelId

`number`

The channel to set the loops on.

#### Returns

`void`

#### Throws

Error if channelId is invalid or value is invalid.

***

### setVolume()

> **setVolume**(`value`, `channelId?`): `void`

Defined in: [audio/audio.ts:81](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/rain/src/audio/audio.ts#L81)

Set the volume of a channel or the main volume if no channel is passed.

#### Parameters

##### value

`number`

The new volume (0 - 1).

##### channelId?

`number`

Optional channel id.

#### Returns

`void`

#### Throws

Error if volume or channelId is invalid.

***

### stop()

> **stop**(`channelId?`): `void`

Defined in: [audio/audio.ts:198](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/rain/src/audio/audio.ts#L198)

Stop a channel or if no channel is passed stop all audio.

#### Parameters

##### channelId?

`number`

Optional channel id.

#### Returns

`void`

***

### unMute()

> **unMute**(): `void`

Defined in: [audio/audio.ts:281](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/rain/src/audio/audio.ts#L281)

Unmute all audio.

#### Returns

`void`
