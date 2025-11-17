---
editUrl: false
next: false
prev: false
title: "RainWithScenesOptions"
---

> **RainWithScenesOptions** = [`RainOptions`](/api/rain/type-aliases/rainoptions/) & `object`

Defined in: [rainWithScenes.ts:12](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/scenes/src/rainWithScenes.ts#L12)

Options for creating a Rain instance with scene management and view scaling.
Extends the base RainOptions with additional scene and view configuration.

## Type Declaration

### designHeight

> **designHeight**: `number`

The design height of the game in pixels.
The view will scale content to match this logical height.

### designWidth

> **designWidth**: `number`

The design width of the game in pixels.
The view will scale content to match this logical width.

### fillWindow?

> `optional` **fillWindow**: `boolean`

Whether the view should fill the entire window.

#### Default

```ts
false
```

### startScene

> **startScene**: [`SceneClass`](/api/scenes/type-aliases/sceneclass/)

The initial scene class to start with.
