[seinjs-audio](../README.md) > ["seinjs"](../modules/_seinjs_.md) > [Audio](../modules/_seinjs_.audio.md) > [IResourceEntity](../interfaces/_seinjs_.audio.iresourceentity.md)

# Interface: IResourceEntity

## Hierarchy

↳  [IResourceEntity](iresourceentity.md)

**↳ IResourceEntity**

## Indexable

\[key: `string`\]:&nbsp;`any`
## Index

### Properties

* [crossOrigin](_seinjs_.audio.iresourceentity.md#crossorigin)
* [isLazy](_seinjs_.audio.iresourceentity.md#islazy)
* [mode](_seinjs_.audio.iresourceentity.md#mode)
* [name](_seinjs_.audio.iresourceentity.md#name)
* [result](_seinjs_.audio.iresourceentity.md#result)
* [type](_seinjs_.audio.iresourceentity.md#type)
* [url](_seinjs_.audio.iresourceentity.md#url)
* [weight](_seinjs_.audio.iresourceentity.md#weight)

---

## Properties

<a id="crossorigin"></a>

### `<Optional>` crossOrigin

**● crossOrigin**: *`boolean`*

*Inherited from [IResourceEntity](iresourceentity.md).[crossOrigin](iresourceentity.md#crossorigin)*

*Defined in Loader.ts:38*

是否允许资源跨域。

___
<a id="islazy"></a>

### `<Optional>` isLazy

**● isLazy**: *`boolean`*

*Inherited from [IResourceEntity](iresourceentity.md).[isLazy](iresourceentity.md#islazy)*

*Defined in Loader.ts:34*

是否是惰性的。 如果是`Buffer`模式，则在使用时才会进行解码。 如果是`Stream`模式，则不会进行预加载，在使用时才进行流式加载。

*__default__*: false

___
<a id="mode"></a>

### `<Optional>` mode

**● mode**: *"Stream" \| "Buffer"*

*Inherited from [IResourceEntity](iresourceentity.md).[mode](iresourceentity.md#mode)*

*Defined in Loader.ts:26*

音频类型。 一般`Stream`用于大且不需要细致控制的音频，比如BGM等。 而`Buffer`用于需要精确控制的音频，但要注意

*__default__*: Stream

___
<a id="name"></a>

###  name

**● name**: *`string`*

*Inherited from IResourceEntity.name*

*Defined in /Users/dtysky/Projects/Sein.js/lib/seinjs.d.ts:644*

资源名称，唯一索引。

___
<a id="result"></a>

### `<Optional>` result

**● result**: *[Clip](../classes/clip.md)*

*Inherited from [IResourceEntity](iresourceentity.md).[result](iresourceentity.md#result)*

*Overrides IResourceEntity.result*

*Defined in Loader.ts:48*

加载后的结果。

___
<a id="type"></a>

###  type

**● type**: *"Audio"*

*Inherited from [IResourceEntity](iresourceentity.md).[type](iresourceentity.md#type)*

*Overrides IResourceEntity.type*

*Defined in Loader.ts:18*

___
<a id="url"></a>

###  url

**● url**: *`string`*

*Inherited from IResourceEntity.url*

*Defined in /Users/dtysky/Projects/Sein.js/lib/seinjs.d.ts:648*

资源在远端的uri。

___
<a id="weight"></a>

### `<Optional>` weight

**● weight**: *`number`*

*Inherited from IResourceEntity.weight*

*Defined in /Users/dtysky/Projects/Sein.js/lib/seinjs.d.ts:654*

资源加载的权重，可用于计算进度。

*__default__*: 1

___

