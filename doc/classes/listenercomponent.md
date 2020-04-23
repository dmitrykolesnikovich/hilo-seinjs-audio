[seinjs-audio](../README.md) > [ListenerComponent](../classes/listenercomponent.md)

# Class: ListenerComponent

音频源组件类。

## Hierarchy

 `SceneComponent`<[IListenerComponentStateTypes](../interfaces/ilistenercomponentstatetypes.md)>

**↳ ListenerComponent**

↳  [ListenerComponent](_seinjs_.audio.listenercomponent.md)

## Implements

* `ISceneComponent`<`ISceneComponentState`>

## Index

### Properties

* [isAudioListenerComponent](listenercomponent.md#isaudiolistenercomponent)
* [rotatable](listenercomponent.md#rotatable)

### Accessors

* [volume](listenercomponent.md#volume)

### Methods

* [disable](listenercomponent.md#disable)
* [enable](listenercomponent.md#enable)
* [onAdd](listenercomponent.md#onadd)
* [onDestroy](listenercomponent.md#ondestroy)
* [onReLink](listenercomponent.md#onrelink)
* [onUnLink](listenercomponent.md#onunlink)
* [verifyAdding](listenercomponent.md#verifyadding)

---

## Properties

<a id="isaudiolistenercomponent"></a>

###  isAudioListenerComponent

**● isAudioListenerComponent**: *`boolean`* = true

*Defined in ListenerComponent.ts:43*

___
<a id="rotatable"></a>

###  rotatable

**● rotatable**: *`boolean`* = true

*Defined in ListenerComponent.ts:48*

此监听器是否是和旋转朝向相关的，如果不是，则无论父级如何旋转，都不会改变音频监听的朝向。

___

## Accessors

<a id="volume"></a>

###  volume

**get volume**(): `number`

**set volume**(value: *`number`*): `void`

*Defined in ListenerComponent.ts:74*

获取监听器音量。

**Returns:** `number`

*Defined in ListenerComponent.ts:65*

设置监听器音量。

**Parameters:**

| Name | Type |
| ------ | ------ |
| value | `number` |

**Returns:** `void`

___

## Methods

<a id="disable"></a>

###  disable

▸ **disable**(): `this`

*Defined in ListenerComponent.ts:113*

取消为主监听器，若不指定其他的监听器，将会使得音频失效。

**Returns:** `this`

___
<a id="enable"></a>

###  enable

▸ **enable**(): `this`

*Defined in ListenerComponent.ts:87*

使其成为主监听器，默认将指定第一个添加的为主监听器。

**Returns:** `this`

___
<a id="onadd"></a>

###  onAdd

▸ **onAdd**(initState: *[IListenerComponentStateTypes](../interfaces/ilistenercomponentstatetypes.md)*): `void`

*Overrides Component.onAdd*

*Defined in ListenerComponent.ts:148*

加入世界，继承请先`super.onUpdate()`。

**Parameters:**

| Name | Type |
| ------ | ------ |
| initState | [IListenerComponentStateTypes](../interfaces/ilistenercomponentstatetypes.md) |

**Returns:** `void`

___
<a id="ondestroy"></a>

###  onDestroy

▸ **onDestroy**(): `void`

*Overrides SceneComponent.onDestroy*

*Defined in ListenerComponent.ts:175*

销毁，继承请先`super.onDestroy()`。

**Returns:** `void`

___
<a id="onrelink"></a>

###  onReLink

▸ **onReLink**(): `void`

*Overrides Component.onReLink*

*Defined in ListenerComponent.ts:168*

继承请先`super.onReLink()`。

**Returns:** `void`

___
<a id="onunlink"></a>

###  onUnLink

▸ **onUnLink**(): `void`

*Overrides Component.onUnLink*

*Defined in ListenerComponent.ts:161*

继承请先`super.onUnLink()`。

**Returns:** `void`

___
<a id="verifyadding"></a>

###  verifyAdding

▸ **verifyAdding**(): `void`

*Overrides Component.verifyAdding*

*Defined in ListenerComponent.ts:137*

验证是否允许添加，至少要有一个`Audio.SystemActor`才可以。

**Returns:** `void`

___

