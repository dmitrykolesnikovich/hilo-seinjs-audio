[seinjs-audio](../README.md) > [Loader](../classes/loader.md)

# Class: Loader

音频加载器。

## Type parameters
#### IInstant :  `IInstantOptions`
## Hierarchy

 `ResourceLoader`<[IResourceEntity](../interfaces/iresourceentity.md)>

**↳ Loader**

↳  [Loader](_seinjs_.audio.loader.md)

## Index

### Properties

* [isAudioLoader](loader.md#isaudioloader)

### Methods

* [load](loader.md#load)
* [release](loader.md#release)

---

## Properties

<a id="isaudioloader"></a>

###  isAudioLoader

**● isAudioLoader**: *`boolean`* = true

*Defined in Loader.ts:88*

___

## Methods

<a id="load"></a>

###  load

▸ **load**(entity: *[IResourceEntity](../interfaces/iresourceentity.md)*, callbacks: *`object`*): `void`

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

*Overrides ResourceLoader.release*

*Defined in Loader.ts:205*

释放资源时将会调用，用于自定义释放逻辑。

**Parameters:**

| Name | Type |
| ------ | ------ |
| entity | [IResourceEntity](../interfaces/iresourceentity.md) |

**Returns:** `void`

___

