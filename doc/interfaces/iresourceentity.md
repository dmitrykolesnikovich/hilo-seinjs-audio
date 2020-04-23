[seinjs-audio](../README.md) > [IResourceEntity](../interfaces/iresourceentity.md)

# Interface: IResourceEntity

`AudioLoader`的资源实体类型。

## Hierarchy

 `IResourceEntity`

**↳ IResourceEntity**

↳  [IResourceEntity](_seinjs_.audio.iresourceentity.md)

## Indexable

\[key: `string`\]:&nbsp;`any`
`AudioLoader`的资源实体类型。

## Index

### Properties

* [crossOrigin](iresourceentity.md#crossorigin)
* [isLazy](iresourceentity.md#islazy)
* [mode](iresourceentity.md#mode)
* [name](iresourceentity.md#name)
* [result](iresourceentity.md#result)
* [type](iresourceentity.md#type)
* [url](iresourceentity.md#url)
* [weight](iresourceentity.md#weight)

---

## Properties

<a id="crossorigin"></a>

### `<Optional>` crossOrigin

**● crossOrigin**: *`boolean`*

*Defined in Loader.ts:38*

是否允许资源跨域。

___
<a id="islazy"></a>

### `<Optional>` isLazy

**● isLazy**: *`boolean`*

*Defined in Loader.ts:34*

是否是惰性的。 如果是`Buffer`模式，则在使用时才会进行解码。 如果是`Stream`模式，则不会进行预加载，在使用时才进行流式加载。

*__default__*: false

___
<a id="mode"></a>

### `<Optional>` mode

**● mode**: *"Stream" \| "Buffer"*

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

*Overrides IResourceEntity.result*

*Defined in Loader.ts:48*

加载后的结果。

___
<a id="type"></a>

###  type

**● type**: *"Audio"*

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

