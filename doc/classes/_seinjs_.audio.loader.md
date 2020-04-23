[seinjs-audio](../README.md) > ["seinjs"](../modules/_seinjs_.md) > [Audio](../modules/_seinjs_.audio.md) > [Loader](../classes/_seinjs_.audio.loader.md)

# Class: Loader

## Type parameters
#### IInstant :  `IInstantOptions`
## Hierarchy

↳  [Loader](loader.md)

**↳ Loader**

## Index

### Properties

* [isAudioLoader](_seinjs_.audio.loader.md#isaudioloader)

### Methods

* [load](_seinjs_.audio.loader.md#load)
* [release](_seinjs_.audio.loader.md#release)

---

## Properties

<a id="isaudioloader"></a>

###  isAudioLoader

**● isAudioLoader**: *`boolean`* = true

*Inherited from [Loader](loader.md).[isAudioLoader](loader.md#isaudioloader)*

*Defined in Loader.ts:88*

___

## Methods

<a id="load"></a>

###  load

▸ **load**(entity: *[IResourceEntity](../interfaces/iresourceentity.md)*, callbacks: *`object`*): `void`

*Inherited from [Loader](loader.md).[load](loader.md#load)*

*Overrides ResourceLoader.load*

*Defined in Loader.ts:93*

加载一个资源，并根据情况执行`callbacks`中的回调。

**Parameters:**

**entity: [IResourceEntity](../interfaces/iresourceentity.md)**

**callbacks: `object`**

| Name | Type |
| ------ | ------ |
| onError |  |
| onLoaded |  |
| onLoading |  |

**Returns:** `void`

___
<a id="release"></a>

###  release

▸ **release**(entity: *[IResourceEntity](../interfaces/iresourceentity.md)*): `void`

*Inherited from [Loader](loader.md).[release](loader.md#release)*

*Overrides ResourceLoader.release*

*Defined in Loader.ts:205*

释放资源时将会调用，用于自定义释放逻辑。

**Parameters:**

| Name | Type |
| ------ | ------ |
| entity | [IResourceEntity](../interfaces/iresourceentity.md) |

**Returns:** `void`

___

