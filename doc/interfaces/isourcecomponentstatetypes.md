[seinjs-audio](../README.md) > [ISourceComponentStateTypes](../interfaces/isourcecomponentstatetypes.md)

# Interface: ISourceComponentStateTypes

音频源组件的类型接口。

## Hierarchy

 `ISceneComponentState`

**↳ ISourceComponentStateTypes**

↳  [ISourceComponentStateTypes](_seinjs_.audio.isourcecomponentstatetypes.md)

## Index

### Properties

* [__fromGlTF](isourcecomponentstatetypes.md#__fromgltf)
* [autoPlay](isourcecomponentstatetypes.md#autoplay)
* [clips](isourcecomponentstatetypes.md#clips)
* [matrix](isourcecomponentstatetypes.md#matrix)
* [pivot](isourcecomponentstatetypes.md#pivot)
* [position](isourcecomponentstatetypes.md#position)
* [quaternion](isourcecomponentstatetypes.md#quaternion)
* [rotatable](isourcecomponentstatetypes.md#rotatable)
* [rotation](isourcecomponentstatetypes.md#rotation)
* [scale](isourcecomponentstatetypes.md#scale)
* [spaceOptions](isourcecomponentstatetypes.md#spaceoptions)
* [system](isourcecomponentstatetypes.md#system)
* [visible](isourcecomponentstatetypes.md#visible)

---

## Properties

<a id="__fromgltf"></a>

### `<Optional>` __fromGlTF

**● __fromGlTF**: *`boolean`*

*Inherited from ISceneComponentState.__fromGlTF*

*Defined in /Users/dtysky/Projects/Sein.js/lib/seinjs.d.ts:4376*

是否是从GlTF中实例化的，**不要自己使用！**

___
<a id="autoplay"></a>

### `<Optional>` autoPlay

**● autoPlay**: *`object`*

*Defined in SourceComponent.ts:60*

是否要自动播放以及配置。

#### Type declaration

`Optional`  end: `number`

`Optional`  loop: `boolean`

`Optional`  start: `number`

___
<a id="clips"></a>

### `<Optional>` clips

**● clips**: *`object`[]*

*Defined in SourceComponent.ts:64*

可选的设置多个默认的Clip。

___
<a id="matrix"></a>

### `<Optional>` matrix

**● matrix**: *`Matrix4`*

*Inherited from ISceneComponentState.matrix*

*Defined in /Users/dtysky/Projects/Sein.js/lib/seinjs.d.ts:4368*

初始本地矩阵数据。

___
<a id="pivot"></a>

### `<Optional>` pivot

**● pivot**: *`Vector3`*

*Inherited from ISceneComponentState.pivot*

*Defined in /Users/dtysky/Projects/Sein.js/lib/seinjs.d.ts:4360*

初始锚点数据。

___
<a id="position"></a>

### `<Optional>` position

**● position**: *`Vector3`*

*Inherited from ISceneComponentState.position*

*Defined in /Users/dtysky/Projects/Sein.js/lib/seinjs.d.ts:4348*

初始位置数据。

___
<a id="quaternion"></a>

### `<Optional>` quaternion

**● quaternion**: *`Quaternion`*

*Inherited from ISceneComponentState.quaternion*

*Defined in /Users/dtysky/Projects/Sein.js/lib/seinjs.d.ts:4364*

初始四元数数据。

___
<a id="rotatable"></a>

### `<Optional>` rotatable

**● rotatable**: *`boolean`*

*Defined in SourceComponent.ts:56*

若是空间音源，是否是可旋转的，即是否同步朝向。

___
<a id="rotation"></a>

### `<Optional>` rotation

**● rotation**: *`Vector3`*

*Inherited from ISceneComponentState.rotation*

*Defined in /Users/dtysky/Projects/Sein.js/lib/seinjs.d.ts:4352*

初始旋转数据。

___
<a id="scale"></a>

### `<Optional>` scale

**● scale**: *`Vector3`*

*Inherited from ISceneComponentState.scale*

*Defined in /Users/dtysky/Projects/Sein.js/lib/seinjs.d.ts:4356*

初始缩放数据。

___
<a id="spaceoptions"></a>

### `<Optional>` spaceOptions

**● spaceOptions**: *[ISourceSpaceOptions](isourcespaceoptions.md)*

*Defined in SourceComponent.ts:52*

是否是空间音源，以及其配置。

___
<a id="system"></a>

###  system

**● system**: *[SystemActor](../classes/systemactor.md)*

*Defined in SourceComponent.ts:48*

需要添加到的音频系统。

___
<a id="visible"></a>

### `<Optional>` visible

**● visible**: *`boolean`*

*Inherited from ISceneComponentState.visible*

*Defined in /Users/dtysky/Projects/Sein.js/lib/seinjs.d.ts:4372*

初始是否可见。

___

