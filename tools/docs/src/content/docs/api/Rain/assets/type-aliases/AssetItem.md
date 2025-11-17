---
editUrl: false
next: false
prev: false
title: "AssetItem"
---

> **AssetItem** = `object`

Defined in: [assets/assets.ts:6](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/rain/src/assets/assets.ts#L6)

An item representing an asset to be loaded. Used in bulk loading.

## Properties

### id

> **id**: `string`

Defined in: [assets/assets.ts:15](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/rain/src/assets/assets.ts#L15)

The id used to reference the asset.

***

### path

> **path**: `string`

Defined in: [assets/assets.ts:20](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/rain/src/assets/assets.ts#L20)

The url path to the asset.

***

### props?

> `optional` **props**: `unknown`

Defined in: [assets/assets.ts:25](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/rain/src/assets/assets.ts#L25)

Any other properties needed to load the asset.

***

### type

> **type**: [`ClassType`](/api/rain/assets/type-aliases/classtype/)\<`unknown`\>

Defined in: [assets/assets.ts:10](https://github.com/jurmerlo/rain/blob/ed1483f42b804f43220f3dc4290616406ff67bce/packages/rain/src/assets/assets.ts#L10)

The class type of the asset to load.
