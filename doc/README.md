
Audio
=====

音频系统。使用教程可见[sound](http://seinjs.com/cn/guide/audio)。

[更多请见API文档。](./doc/README.md)

## Index

### Classes

* [BufferClip](classes/bufferclip.md)
* [Clip](classes/clip.md)
* [ListenerActor](classes/listeneractor.md)
* [ListenerComponent](classes/listenercomponent.md)
* [Loader](classes/loader.md)
* [SourceActor](classes/sourceactor.md)
* [SourceComponent](classes/sourcecomponent.md)
* [StreamClip](classes/streamclip.md)
* [SystemActor](classes/systemactor.md)

### Interfaces

* [IBufferClipStateTypes](interfaces/ibufferclipstatetypes.md)
* [IClipStateTypes](interfaces/iclipstatetypes.md)
* [IListenerComponentStateTypes](interfaces/ilistenercomponentstatetypes.md)
* [IResourceEntity](interfaces/iresourceentity.md)
* [ISeinAudioClipsExtension](interfaces/iseinaudioclipsextension.md)
* [ISeinAudioListenerExtension](interfaces/iseinaudiolistenerextension.md)
* [ISeinAudioSourceExtension](interfaces/iseinaudiosourceextension.md)
* [ISourceComponentStateTypes](interfaces/isourcecomponentstatetypes.md)
* [ISourceEvent](interfaces/isourceevent.md)
* [ISourceSpaceOptions](interfaces/isourcespaceoptions.md)
* [IStreamClipStateTypes](interfaces/istreamclipstatetypes.md)

### Functions

* [getRelativePath](#getrelativepath)
* [isListenerActor](#islisteneractor)
* [isListenerComponent](#islistenercomponent)
* [isLoader](#isloader)
* [isSourceActor](#issourceactor)
* [isSourceComponent](#issourcecomponent)
* [isSystemActor](#issystemactor)

### Object literals

* [SeinAudioClipsExtension](#seinaudioclipsextension)
* [SeinAudioListenerExtension](#seinaudiolistenerextension)
* [SeinAudioSourceExtension](#seinaudiosourceextension)

---

## Functions

<a id="getrelativepath"></a>

###  getRelativePath

▸ **getRelativePath**(basePath: *`string`*, path: *`string`*): `string`

*Defined in GlTFExtensions.ts:13*

**Parameters:**

| Name | Type |
| ------ | ------ |
| basePath | `string` |
| path | `string` |

**Returns:** `string`

___
<a id="islisteneractor"></a>

###  isListenerActor

▸ **isListenerActor**(value: *`SObject`*): `boolean`

*Defined in ListenerComponent.ts:32*

判断一个实例是否为`ListenerActor`。

**Parameters:**

| Name | Type |
| ------ | ------ |
| value | `SObject` |

**Returns:** `boolean`

___
<a id="islistenercomponent"></a>

###  isListenerComponent

▸ **isListenerComponent**(value: *`SObject`*): `boolean`

*Defined in ListenerComponent.ts:25*

判断一个实例是否为`ListenerComponent`。

**Parameters:**

| Name | Type |
| ------ | ------ |
| value | `SObject` |

**Returns:** `boolean`

___
<a id="isloader"></a>

###  isLoader

▸ **isLoader**(value: *`ResourceLoader`*): `boolean`

*Defined in Loader.ts:60*

判断一个实例是否为`AudioLoader`。

**Parameters:**

| Name | Type |
| ------ | ------ |
| value | `ResourceLoader` |

**Returns:** `boolean`

___
<a id="issourceactor"></a>

###  isSourceActor

▸ **isSourceActor**(value: *`SObject`*): `boolean`

*Defined in SourceComponent.ts:95*

判断一个实例是否为`SourceActor`。

**Parameters:**

| Name | Type |
| ------ | ------ |
| value | `SObject` |

**Returns:** `boolean`

___
<a id="issourcecomponent"></a>

###  isSourceComponent

▸ **isSourceComponent**(value: *`SObject`*): `boolean`

*Defined in SourceComponent.ts:88*

判断一个实例是否为`SourceComponent`。

**Parameters:**

| Name | Type |
| ------ | ------ |
| value | `SObject` |

**Returns:** `boolean`

___
<a id="issystemactor"></a>

###  isSystemActor

▸ **isSystemActor**(value: *`SObject`*): `boolean`

*Defined in SystemActor.ts:14*

判断一个实例是否为`SystemActor`。

**Parameters:**

| Name | Type |
| ------ | ------ |
| value | `SObject` |

**Returns:** `boolean`

___

## Object literals

<a id="seinaudioclipsextension"></a>

### `<Const>` SeinAudioClipsExtension

**SeinAudioClipsExtension**: *`object`*

*Defined in GlTFExtensions.ts:42*

<a id="seinaudioclipsextension.name"></a>

####  name

**● name**: *`string`* = "Sein_audioClips"

*Defined in GlTFExtensions.ts:43*

___
<a id="seinaudioclipsextension.init"></a>

####  init

▸ **init**(_: *`object`*, parser: *`GlTFParser`*): `Promise`<`any`[]>

*Defined in GlTFExtensions.ts:44*

**Parameters:**

**_: `object`**

| Name | Type |
| ------ | ------ |
| game | `Game` |

**parser: `GlTFParser`**

**Returns:** `Promise`<`any`[]>

___
<a id="seinaudioclipsextension.parse"></a>

####  parse

▸ **parse**(_: *[ISeinAudioClipsExtension](interfaces/iseinaudioclipsextension.md)*, parser: *`any`*, model: *`IGlTFModel`*): `IGlTFModel`

*Defined in GlTFExtensions.ts:80*

**Parameters:**

| Name | Type |
| ------ | ------ |
| _ | [ISeinAudioClipsExtension](interfaces/iseinaudioclipsextension.md) |
| parser | `any` |
| model | `IGlTFModel` |

**Returns:** `IGlTFModel`

___

___
<a id="seinaudiolistenerextension"></a>

### `<Const>` SeinAudioListenerExtension

**SeinAudioListenerExtension**: *`object`*

*Defined in GlTFExtensions.ts:128*

<a id="seinaudiolistenerextension.name"></a>

####  name

**● name**: *`string`* = "Sein_audioListener"

*Defined in GlTFExtensions.ts:129*

___
<a id="seinaudiolistenerextension.instantiate"></a>

####  instantiate

▸ **instantiate**(entity: *`SceneActor` \| `SceneComponent`*, info: *[ISeinAudioListenerExtension](interfaces/iseinaudiolistenerextension.md)*): `void`

*Defined in GlTFExtensions.ts:130*

**Parameters:**

| Name | Type |
| ------ | ------ |
| entity | `SceneActor` \| `SceneComponent` |
| info | [ISeinAudioListenerExtension](interfaces/iseinaudiolistenerextension.md) |

**Returns:** `void`

___

___
<a id="seinaudiosourceextension"></a>

### `<Const>` SeinAudioSourceExtension

**SeinAudioSourceExtension**: *`object`*

*Defined in GlTFExtensions.ts:96*

<a id="seinaudiosourceextension.name"></a>

####  name

**● name**: *`string`* = "Sein_audioSource"

*Defined in GlTFExtensions.ts:97*

___
<a id="seinaudiosourceextension.instantiate"></a>

####  instantiate

▸ **instantiate**(entity: *`SceneActor` \| `SceneComponent`*, info: *[ISeinAudioSourceExtension](interfaces/iseinaudiosourceextension.md)*, game: *`Game`*, _: *`INodeWithGlTFExtensions`*, resource: *`IGlTFModel`*): `void`

*Defined in GlTFExtensions.ts:98*

**Parameters:**

| Name | Type |
| ------ | ------ |
| entity | `SceneActor` \| `SceneComponent` |
| info | [ISeinAudioSourceExtension](interfaces/iseinaudiosourceextension.md) |
| game | `Game` |
| _ | `INodeWithGlTFExtensions` |
| resource | `IGlTFModel` |

**Returns:** `void`

___

___

