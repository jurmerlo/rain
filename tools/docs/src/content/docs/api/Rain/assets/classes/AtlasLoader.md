---
editUrl: false
next: false
prev: false
title: "AtlasLoader"
---

Defined in: [assets/atlasLoader.ts:10](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/rain/src/assets/atlasLoader.ts#L10)

A loader for sprite atlas assets.

## Extends

- [`AssetLoader`](/api/rain/assets/classes/assetloader/)\<[`Atlas`](/api/rain/graphics/classes/atlas/)\>

## Constructors

### Constructor

> **new AtlasLoader**(): `AtlasLoader`

Defined in: [assets/atlasLoader.ts:20](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/rain/src/assets/atlasLoader.ts#L20)

Create a new AtlasLoader.

#### Returns

`AtlasLoader`

#### Overrides

[`AssetLoader`](/api/rain/assets/classes/assetloader/).[`constructor`](/api/rain/assets/classes/assetloader/#constructor)

## Properties

### assetType

> `readonly` **assetType**: [`ClassType`](/api/rain/assets/type-aliases/classtype/)\<[`Atlas`](/api/rain/graphics/classes/atlas/)\>

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

[`Atlas`](/api/rain/graphics/classes/atlas/)

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

> **get**(`id`): [`Atlas`](/api/rain/graphics/classes/atlas/)

Defined in: [assets/assetLoader.ts:72](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/rain/src/assets/assetLoader.ts#L72)

Get a loaded asset by id.

#### Parameters

##### id

`string`

The id of the asset to get.

#### Returns

[`Atlas`](/api/rain/graphics/classes/atlas/)

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

> **load**(`id`, `path`, `options?`): `Promise`\<[`Atlas`](/api/rain/graphics/classes/atlas/)\>

Defined in: [assets/atlasLoader.ts:32](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/rain/src/assets/atlasLoader.ts#L32)

Load a sprite atlas.

#### Parameters

##### id

`string`

The id of the atlas.

##### path

`string`

The path to the atlas (without file extension).

##### options?

[`AssetLoadOptions`](/api/rain/assets/type-aliases/assetloadoptions/)

The load options.

#### Returns

`Promise`\<[`Atlas`](/api/rain/graphics/classes/atlas/)\>

The loaded atlas.

#### Throws

Error if the atlas files cannot be loaded or are invalid.

#### Overrides

[`AssetLoader`](/api/rain/assets/classes/assetloader/).[`load`](/api/rain/assets/classes/assetloader/#load)

***

### tryGet()

> **tryGet**(`id`): [`Atlas`](/api/rain/graphics/classes/atlas/) \| `undefined`

Defined in: [assets/assetLoader.ts:94](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/rain/src/assets/assetLoader.ts#L94)

Get a loaded asset by id if it exists.

#### Parameters

##### id

`string`

The id of the asset to get.

#### Returns

[`Atlas`](/api/rain/graphics/classes/atlas/) \| `undefined`

The loaded asset or undefined if not found.

#### Inherited from

[`AssetLoader`](/api/rain/assets/classes/assetloader/).[`tryGet`](/api/rain/assets/classes/assetloader/#tryget)

***

### unload()

> **unload**(`id`): `boolean`

Defined in: [assets/atlasLoader.ts:77](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/rain/src/assets/atlasLoader.ts#L77)

Unload and remove a sprite atlas.

#### Parameters

##### id

`string`

The id of the atlas.

#### Returns

`boolean`

True if the atlas was found and unloaded, false if not found.

#### Overrides

[`AssetLoader`](/api/rain/assets/classes/assetloader/).[`unload`](/api/rain/assets/classes/assetloader/#unload)

***

### unloadAll()

> **unloadAll**(): `number`

Defined in: [assets/atlasLoader.ts:93](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/rain/src/assets/atlasLoader.ts#L93)

Unload all loaded sprite atlases.

#### Returns

`number`

The number of sprite atlases that were unloaded.

#### Overrides

[`AssetLoader`](/api/rain/assets/classes/assetloader/).[`unloadAll`](/api/rain/assets/classes/assetloader/#unloadall)
