---
editUrl: false
next: false
prev: false
title: "inject"
---

> **inject**(`name?`): (`_value`, `context`) => () => `any` \| `undefined`

Defined in: [di/inject.ts:9](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/rain/src/di/inject.ts#L9)

Inject a service into a class field. Will replace the field with a getter that returns the required service.

## Parameters

### name?

`string`

The name of the service to inject. If not provided, the field name will be used.

## Returns

A function that returns the required service.

> (`_value`, `context`): () => `any` \| `undefined`

### Parameters

#### \_value

`undefined`

#### context

`ClassMemberDecoratorContext`

### Returns

() => `any` \| `undefined`
