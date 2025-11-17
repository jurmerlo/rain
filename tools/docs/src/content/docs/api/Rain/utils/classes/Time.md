---
editUrl: false
next: false
prev: false
title: "Time"
---

Defined in: [utils/time.ts:4](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/rain/src/utils/time.ts#L4)

Time management class for tracking frame timing and delta time.

## Constructors

### Constructor

> **new Time**(): `Time`

#### Returns

`Time`

## Properties

### timeScale

> **timeScale**: `number` = `1`

Defined in: [utils/time.ts:8](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/rain/src/utils/time.ts#L8)

The time scale multiplier for scaled delta time. Default is 1.

## Accessors

### deltaTime

#### Get Signature

> **get** **deltaTime**(): `number`

Defined in: [utils/time.ts:13](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/rain/src/utils/time.ts#L13)

Get the scaled delta time (affected by timeScale).

##### Returns

`number`

***

### deltaTimeUnscaled

#### Get Signature

> **get** **deltaTimeUnscaled**(): `number`

Defined in: [utils/time.ts:20](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/rain/src/utils/time.ts#L20)

Get the unscaled delta time (not affected by timeScale).

##### Returns

`number`

***

### fps

#### Get Signature

> **get** **fps**(): `number`

Defined in: [utils/time.ts:27](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/rain/src/utils/time.ts#L27)

Get the current frames per second.

##### Returns

`number`

## Methods

### update()

> **update**(`deltaTime`): `void`

Defined in: [utils/time.ts:55](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/rain/src/utils/time.ts#L55)

Update the time with the current frame's delta time.

#### Parameters

##### deltaTime

`number`

The delta time for this frame in seconds.

#### Returns

`void`
