---
editUrl: false
next: false
prev: false
title: "Assets"
---

Defined in: [assets/assets.ts:31](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/rain/src/assets/assets.ts#L31)

Class to load and manage assets.

## Constructors

### Constructor

> **new Assets**(): `Assets`

#### Returns

`Assets`

## Methods

### add()

> **add**\<`T`\>(`type`, `id`, `instance`, `overwrite`): `void`

Defined in: [assets/assets.ts:94](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/rain/src/assets/assets.ts#L94)

Add an externally loaded asset to the manager.

#### Type Parameters

##### T

`T`

#### Parameters

##### type

[`ClassType`](/api/rain/assets/type-aliases/classtype/)\<`T`\>

The type of asset to add.

##### id

`string`

The id used to reference the asset.

##### instance

`T`

The asset to add.

##### overwrite

`boolean` = `false`

Whether to overwrite existing assets. Defaults to false.

#### Returns

`void`

#### Throws

Error if a loader is not registered for the type.

***

### get()

> **get**\<`T`\>(`type`, `id`): `T`

Defined in: [assets/assets.ts:106](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/rain/src/assets/assets.ts#L106)

Get a loaded asset.

#### Type Parameters

##### T

`T`

#### Parameters

##### type

[`ClassType`](/api/rain/assets/type-aliases/classtype/)\<`T`\>

The type of asset to get.

##### id

`string`

The id of the asset.

#### Returns

`T`

The loaded asset. Will throw if the asset is not loaded.

#### Throws

Error if a loader is not registered for the type.

***

### getLoadedCount()

> **getLoadedCount**\<`T`\>(`type`): `number`

Defined in: [assets/assets.ts:152](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/rain/src/assets/assets.ts#L152)

Get the count of loaded assets of a specific type.

#### Type Parameters

##### T

`T`

#### Parameters

##### type

[`ClassType`](/api/rain/assets/type-aliases/classtype/)\<`T`\>

The type of asset.

#### Returns

`number`

The count of loaded assets.

#### Throws

Error if a loader is not registered for the type.

***

### getLoadedIds()

> **getLoadedIds**\<`T`\>(`type`): `string`[]

Defined in: [assets/assets.ts:141](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/rain/src/assets/assets.ts#L141)

Get the list of loaded asset IDs of a specific type.

#### Type Parameters

##### T

`T`

#### Parameters

##### type

[`ClassType`](/api/rain/assets/type-aliases/classtype/)\<`T`\>

The type of asset.

#### Returns

`string`[]

The list of loaded asset IDs.

#### Throws

Error if a loader is not registered for the type.

***

### getRegisteredTypes()

> **getRegisteredTypes**(): [`ClassType`](/api/rain/assets/type-aliases/classtype/)\<`unknown`\>[]

Defined in: [assets/assets.ts:193](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/rain/src/assets/assets.ts#L193)

Get all registered loader types.

#### Returns

[`ClassType`](/api/rain/assets/type-aliases/classtype/)\<`unknown`\>[]

Array of registered asset types.

***

### has()

> **has**\<`T`\>(`type`, `id`): `boolean`

Defined in: [assets/assets.ts:130](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/rain/src/assets/assets.ts#L130)

Check if an asset is loaded.

#### Type Parameters

##### T

`T`

#### Parameters

##### type

[`ClassType`](/api/rain/assets/type-aliases/classtype/)\<`T`\>

The type of asset.

##### id

`string`

The id of the asset.

#### Returns

`boolean`

True if the asset is loaded.

#### Throws

Error if a loader is not registered for the type.

***

### hasLoader()

> **hasLoader**\<`T`\>(`type`): `boolean`

Defined in: [assets/assets.ts:185](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/rain/src/assets/assets.ts#L185)

Check if a loader is registered for the given type.

#### Type Parameters

##### T

`T`

#### Parameters

##### type

[`ClassType`](/api/rain/assets/type-aliases/classtype/)\<`T`\>

The type to check.

#### Returns

`boolean`

True if a loader is registered for the type.

***

### load()

> **load**\<`T`\>(`type`, `id`, `path`, `options?`): `Promise`\<`T`\>

Defined in: [assets/assets.ts:54](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/rain/src/assets/assets.ts#L54)

Load an asset.

#### Type Parameters

##### T

`T`

#### Parameters

##### type

[`ClassType`](/api/rain/assets/type-aliases/classtype/)\<`T`\>

The class type of asset to load.

##### id

`string`

The id used to reference the asset.

##### path

`string`

The url path to the asset.

##### options?

[`AssetLoadOptions`](/api/rain/assets/type-aliases/assetloadoptions/)

Additional options for loading the asset.

#### Returns

`Promise`\<`T`\>

The loaded asset.

#### Throws

Error if a loader is not registered for the type.

***

### loadAll()

> **loadAll**(`assets`): `Promise`\<`void`\>

Defined in: [assets/assets.ts:74](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/rain/src/assets/assets.ts#L74)

Load a list of assets in parallel. Returns when all assets are loaded.

#### Parameters

##### assets

[`AssetItem`](/api/rain/assets/type-aliases/assetitem/)[]

The assets to load.

#### Returns

`Promise`\<`void`\>

#### Throws

Error if any asset fails to load.

***

### registerLoader()

> **registerLoader**\<`T`\>(`loader`): `void`

Defined in: [assets/assets.ts:41](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/rain/src/assets/assets.ts#L41)

Register a new loader.

#### Type Parameters

##### T

`T`

#### Parameters

##### loader

[`AssetLoader`](/api/rain/assets/classes/assetloader/)\<`T`\>

The loader to register.

#### Returns

`void`

***

### tryGet()

> **tryGet**\<`T`\>(`type`, `id`): `T` \| `undefined`

Defined in: [assets/assets.ts:118](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/rain/src/assets/assets.ts#L118)

Try to get a loaded asset.

#### Type Parameters

##### T

`T`

#### Parameters

##### type

[`ClassType`](/api/rain/assets/type-aliases/classtype/)\<`T`\>

The type of asset.

##### id

`string`

The id of the asset.

#### Returns

`T` \| `undefined`

The loaded asset or undefined if not loaded.

#### Throws

Error if a loader is not registered for the type.

***

### unload()

> **unload**\<`T`\>(`type`, `id`): `boolean`

Defined in: [assets/assets.ts:164](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/rain/src/assets/assets.ts#L164)

Unload and remove an asset from the manager.

#### Type Parameters

##### T

`T`

#### Parameters

##### type

[`ClassType`](/api/rain/assets/type-aliases/classtype/)\<`T`\>

The type of asset to unload.

##### id

`string`

The id of the asset.

#### Returns

`boolean`

True if the asset was found and unloaded, false if not found.

#### Throws

Error if a loader is not registered for the type.

***

### unloadAll()

> **unloadAll**\<`T`\>(`type`): `number`

Defined in: [assets/assets.ts:175](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/rain/src/assets/assets.ts#L175)

Unload all assets of a specific type.

#### Type Parameters

##### T

`T`

#### Parameters

##### type

[`ClassType`](/api/rain/assets/type-aliases/classtype/)\<`T`\>

The type of asset to unload.

#### Returns

`number`

The number of assets that were unloaded.

#### Throws

Error if a loader is not registered for the type.
