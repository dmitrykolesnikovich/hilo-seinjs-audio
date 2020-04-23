[seinjs-audio](../README.md) > [IListenerComponentStateTypes](../interfaces/ilistenercomponentstatetypes.md)

# Interface: IListenerComponentStateTypes

监听器组件的类型接口。

## Hierarchy

 `ISceneComponentState`

**↳ IListenerComponentStateTypes**

↳  [IListenerComponentStateTypes](_seinjs_.audio.ilistenercomponentstatetypes.md)

## Index

### Properties

* [__fromGlTF](ilistenercomponentstatetypes.md#__fromgltf)
* [matrix](ilistenercomponentstatetypes.md#matrix)
* [pivot](ilistenercomponentstatetypes.md#pivot)
* [position](ilistenercomponentstatetypes.md#position)
* [quaternion](ilistenercomponentstatetypes.md#quaternion)
* [rotatable](ilistenercomponentstatetypes.md#rotatable)
* [rotation](ilistenercomponentstatetypes.md#rotation)
* [scale](ilistenercomponentstatetypes.md#scale)
* [visible](ilistenercomponentstatetypes.md#visible)

---

## Properties

<a id="__fromgltf"></a>

### `<Optional>` __fromGlTF

**● __fromGlTF**: *`boolean`*

*Inherited from ISceneComponentState.__fromGlTF*

*Defined in /Users/dtysky/Projects/Sein.js/lib/seinjs.d.ts:4376*

是否是从GlTF中实例化的，**不要自己使用！**

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

*Defined in ListenerComponent.ts:19*

此监听器是否是和旋转朝向相关的，如果不是，则无论父级如何旋转，都不会改变音频监听的朝向。

*__default__*: true

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
<a id="visible"></a>

### `<Optional>` visible

**● visible**: *`boolean`*

*Inherited from ISceneComponentState.visible*

*Defined in /Users/dtysky/Projects/Sein.js/lib/seinjs.d.ts:4372*

初始是否可见。

___

