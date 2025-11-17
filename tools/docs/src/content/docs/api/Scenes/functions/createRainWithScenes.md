---
editUrl: false
next: false
prev: false
title: "createRainWithScenes"
---

> **createRainWithScenes**(`options`): [`Rain`](/api/rain/classes/rain/)

Defined in: [rainWithScenes.ts:60](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/scenes/src/rainWithScenes.ts#L60)

Creates and initializes a Rain game instance with scene management and view scaling.

This function sets up:
- A View service for handling canvas scaling and aspect ratio
- A Scenes service for managing scene lifecycle and transitions
- Automatic wiring of update, draw, resize, focus, and blur callbacks

The created Rain instance is automatically started and the initial scene is loaded.

## Parameters

### options

[`RainWithScenesOptions`](/api/scenes/type-aliases/rainwithscenesoptions/)

Configuration options for the Rain instance, view, and initial scene.

## Returns

[`Rain`](/api/rain/classes/rain/)

The configured and started Rain instance.

## Example

```typescript
const rain = createRainWithScenes({
  designWidth: 800,
  designHeight: 600,
  startScene: MainMenuScene,
  fillWindow: false
});
```
