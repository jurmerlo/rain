---
editUrl: false
next: false
prev: false
title: "BitmapFontLoader"
---

Defined in: [assets/bitmapFontLoader.ts:10](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/rain/src/assets/bitmapFontLoader.ts#L10)

A loader for bitmap font assets.

## Extends

- [`AssetLoader`](/api/rain/assets/classes/assetloader/)\<[`BitmapFont`](/api/rain/graphics/classes/bitmapfont/)\>

## Constructors

### Constructor

> **new BitmapFontLoader**(): `BitmapFontLoader`

Defined in: [assets/bitmapFontLoader.ts:20](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/rain/src/assets/bitmapFontLoader.ts#L20)

Create a new BitmapFontLoader.

#### Returns

`BitmapFontLoader`

#### Overrides

[`AssetLoader`](/api/rain/assets/classes/assetloader/).[`constructor`](/api/rain/assets/classes/assetloader/#constructor)

## Properties

### assetType

> `readonly` **assetType**: [`ClassType`](/api/rain/assets/type-aliases/classtype/)\<[`BitmapFont`](/api/rain/graphics/classes/bitmapfont/)\>

Defined in: [assets/assetLoader.ts:29](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/rain/src/assets/assetLoader.ts#L29)

The type of asset the loader manages.

#### Inherited from

[`AssetLoader`](/api/rain/assets/classes/assetloader/).[`assetType`](/api/rain/assets/classes/assetloader/#assettype)

***

### loadedAssets

> `protected` **loadedAssets**: `Record`\<`string`, `T`\> = `{}`

Defined in: [assets/assetLoader.ts:34](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/rain/src/assets/assetLoader.ts#L34)

The map of loaded assets for this loader.

#### Inherited from

[`AssetLoader`](/api/rain/assets/classes/assetloader/).[`loadedAssets`](/api/rain/assets/classes/assetloader/#loadedassets)

## Methods

### add()

> **add**(`id`, `instance`, `overwrite`): `void`

Defined in: [assets/assetLoader.ts:59](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/rain/src/assets/assetLoader.ts#L59)

Add an externally loaded asset to the loader.

#### Parameters

##### id

`string`

The id used to reference the asset.

##### instance

[`BitmapFont`](/api/rain/graphics/classes/bitmapfont/)

The asset instance to add.

##### overwrite

`boolean` = `false`

Whether to overwrite existing assets. Defaults to false.

#### Returns

`void`

#### Throws

Error if asset with the same id already exists and overwrite is false.

#### Inherited from

[`AssetLoader`](/api/rain/assets/classes/assetloader/).[`add`](/api/rain/assets/classes/assetloader/#add)

***

### get()

> **get**(`id`): [`BitmapFont`](/api/rain/graphics/classes/bitmapfont/)

Defined in: [assets/assetLoader.ts:72](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/rain/src/assets/assetLoader.ts#L72)

Get a loaded asset by id.

#### Parameters

##### id

`string`

The id of the asset to get.

#### Returns

[`BitmapFont`](/api/rain/graphics/classes/bitmapfont/)

The loaded asset. Will throw if the asset does not exist.

#### Throws

Error if the asset is not loaded.

#### Inherited from

[`AssetLoader`](/api/rain/assets/classes/assetloader/).[`get`](/api/rain/assets/classes/assetloader/#get)

***

### getLoadedCount()

> **getLoadedCount**(): `number`

Defined in: [assets/assetLoader.ts:110](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/rain/src/assets/assetLoader.ts#L110)

Get the count of loaded assets.

#### Returns

`number`

Number of loaded assets.

#### Inherited from

[`AssetLoader`](/api/rain/assets/classes/assetloader/).[`getLoadedCount`](/api/rain/assets/classes/assetloader/#getloadedcount)

***

### getLoadedIds()

> **getLoadedIds**(): `string`[]

Defined in: [assets/assetLoader.ts:102](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/rain/src/assets/assetLoader.ts#L102)

Get all loaded asset ids.

#### Returns

`string`[]

Array of asset ids.

#### Inherited from

[`AssetLoader`](/api/rain/assets/classes/assetloader/).[`getLoadedIds`](/api/rain/assets/classes/assetloader/#getloadedids)

***

### has()

> **has**(`id`): `boolean`

Defined in: [assets/assetLoader.ts:85](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/rain/src/assets/assetLoader.ts#L85)

Check if an asset is loaded.

#### Parameters

##### id

`string`

The id of the asset to check.

#### Returns

`boolean`

True if the asset is loaded.

#### Inherited from

[`AssetLoader`](/api/rain/assets/classes/assetloader/).[`has`](/api/rain/assets/classes/assetloader/#has)

***

### load()

> **load**(`id`, `path`, `options?`): `Promise`\<[`BitmapFont`](/api/rain/graphics/classes/bitmapfont/)\>

Defined in: [assets/bitmapFontLoader.ts:32](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/rain/src/assets/bitmapFontLoader.ts#L32)

Load a bitmap font.

#### Parameters

##### id

`string`

The id of the bitmap font.

##### path

`string`

The path to the bitmap font (without file extension).

##### options?

[`AssetLoadOptions`](/api/rain/assets/type-aliases/assetloadoptions/)

The load options.

#### Returns

`Promise`\<[`BitmapFont`](/api/rain/graphics/classes/bitmapfont/)\>

The loaded bitmap font.

#### Throws

Error if the bitmap font files cannot be loaded or are invalid.

#### Overrides

[`AssetLoader`](/api/rain/assets/classes/assetloader/).[`load`](/api/rain/assets/classes/assetloader/#load)

***

### tryGet()

> **tryGet**(`id`): [`BitmapFont`](/api/rain/graphics/classes/bitmapfont/) \| `undefined`

Defined in: [assets/assetLoader.ts:94](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/rain/src/assets/assetLoader.ts#L94)

Get a loaded asset by id if it exists.

#### Parameters

##### id

`string`

The id of the asset to get.

#### Returns

[`BitmapFont`](/api/rain/graphics/classes/bitmapfont/) \| `undefined`

The loaded asset or undefined if not found.

#### Inherited from

[`AssetLoader`](/api/rain/assets/classes/assetloader/).[`tryGet`](/api/rain/assets/classes/assetloader/#tryget)

***

### unload()

> **unload**(`id`): `boolean`

Defined in: [assets/bitmapFontLoader.ts:77](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/rain/src/assets/bitmapFontLoader.ts#L77)

Unload and remove a bitmap font.

#### Parameters

##### id

`string`

The id of the bitmap font.

#### Returns

`boolean`

True if the bitmap font was found and unloaded, false if not found.

#### Overrides

[`AssetLoader`](/api/rain/assets/classes/assetloader/).[`unload`](/api/rain/assets/classes/assetloader/#unload)

***

### unloadAll()

> **unloadAll**(): `number`

Defined in: [assets/bitmapFontLoader.ts:91](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/rain/src/assets/bitmapFontLoader.ts#L91)

Unload all loaded bitmap fonts.

#### Returns

`number`

The number of bitmap fonts that were unloaded.

#### Overrides

[`AssetLoader`](/api/rain/assets/classes/assetloader/).[`unloadAll`](/api/rain/assets/classes/assetloader/#unloadall)
