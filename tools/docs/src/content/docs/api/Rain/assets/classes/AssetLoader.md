---
editUrl: false
next: false
prev: false
title: "AssetLoader"
---

Defined in: [assets/assetLoader.ts:25](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/rain/src/assets/assetLoader.ts#L25)

Base class for custom asset loaders.

## Extended by

- [`AtlasLoader`](/api/rain/assets/classes/atlasloader/)
- [`BitmapFontLoader`](/api/rain/assets/classes/bitmapfontloader/)
- [`ImageLoader`](/api/rain/assets/classes/imageloader/)
- [`SoundLoader`](/api/rain/assets/classes/soundloader/)
- [`TextLoader`](/api/rain/assets/classes/textloader/)

## Type Parameters

### T

`T`

## Constructors

### Constructor

> **new AssetLoader**\<`T`\>(`assetType`): `AssetLoader`\<`T`\>

Defined in: [assets/assetLoader.ts:40](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/rain/src/assets/assetLoader.ts#L40)

Create a new loader instance.

#### Parameters

##### assetType

[`ClassType`](/api/rain/assets/type-aliases/classtype/)\<`T`\>

The type of asset to manage.

#### Returns

`AssetLoader`\<`T`\>

## Properties

### assetType

> `readonly` **assetType**: [`ClassType`](/api/rain/assets/type-aliases/classtype/)\<`T`\>

Defined in: [assets/assetLoader.ts:29](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/rain/src/assets/assetLoader.ts#L29)

The type of asset the loader manages.

***

### loadedAssets

> `protected` **loadedAssets**: `Record`\<`string`, `T`\> = `{}`

Defined in: [assets/assetLoader.ts:34](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/rain/src/assets/assetLoader.ts#L34)

The map of loaded assets for this loader.

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

`T`

The asset instance to add.

##### overwrite

`boolean` = `false`

Whether to overwrite existing assets. Defaults to false.

#### Returns

`void`

#### Throws

Error if asset with the same id already exists and overwrite is false.

***

### get()

> **get**(`id`): `T`

Defined in: [assets/assetLoader.ts:72](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/rain/src/assets/assetLoader.ts#L72)

Get a loaded asset by id.

#### Parameters

##### id

`string`

The id of the asset to get.

#### Returns

`T`

The loaded asset. Will throw if the asset does not exist.

#### Throws

Error if the asset is not loaded.

***

### getLoadedCount()

> **getLoadedCount**(): `number`

Defined in: [assets/assetLoader.ts:110](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/rain/src/assets/assetLoader.ts#L110)

Get the count of loaded assets.

#### Returns

`number`

Number of loaded assets.

***

### getLoadedIds()

> **getLoadedIds**(): `string`[]

Defined in: [assets/assetLoader.ts:102](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/rain/src/assets/assetLoader.ts#L102)

Get all loaded asset ids.

#### Returns

`string`[]

Array of asset ids.

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

***

### load()

> `abstract` **load**(`id`, `path`, `options?`): `Promise`\<`T`\>

Defined in: [assets/assetLoader.ts:50](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/rain/src/assets/assetLoader.ts#L50)

Load an asset. This needs to be implemented per loader.

#### Parameters

##### id

`string`

The id used to reference the asset.

##### path

`string`

The url path to the asset.

##### options?

[`AssetLoadOptions`](/api/rain/assets/type-aliases/assetloadoptions/)

Any other properties needed to load the asset.

#### Returns

`Promise`\<`T`\>

***

### tryGet()

> **tryGet**(`id`): `T` \| `undefined`

Defined in: [assets/assetLoader.ts:94](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/rain/src/assets/assetLoader.ts#L94)

Get a loaded asset by id if it exists.

#### Parameters

##### id

`string`

The id of the asset to get.

#### Returns

`T` \| `undefined`

The loaded asset or undefined if not found.

***

### unload()

> **unload**(`id`): `boolean`

Defined in: [assets/assetLoader.ts:119](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/rain/src/assets/assetLoader.ts#L119)

Unload a loaded asset.

#### Parameters

##### id

`string`

The id of the asset to unload.

#### Returns

`boolean`

True if the asset was found and unloaded, false if not found.

***

### unloadAll()

> **unloadAll**(): `number`

Defined in: [assets/assetLoader.ts:132](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/rain/src/assets/assetLoader.ts#L132)

Unload all loaded assets.

#### Returns

`number`

The number of assets that were unloaded.
