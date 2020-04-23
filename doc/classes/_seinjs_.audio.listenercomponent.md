[seinjs-audio](../README.md) > ["seinjs"](../modules/_seinjs_.md) > [Audio](../modules/_seinjs_.audio.md) > [ListenerComponent](../classes/_seinjs_.audio.listenercomponent.md)

# Class: ListenerComponent

## Hierarchy

↳  [ListenerComponent](listenercomponent.md)

**↳ ListenerComponent**

## Implements

* `ISceneComponent`<`ISceneComponentState`>

## Index

### Properties

* [isAudioListenerComponent](_seinjs_.audio.listenercomponent.md#isaudiolistenercomponent)
* [rotatable](_seinjs_.audio.listenercomponent.md#rotatable)

### Accessors

* [volume](_seinjs_.audio.listenercomponent.md#volume)

### Methods

* [disable](_seinjs_.audio.listenercomponent.md#disable)
* [enable](_seinjs_.audio.listenercomponent.md#enable)
* [onAdd](_seinjs_.audio.listenercomponent.md#onadd)
* [onDestroy](_seinjs_.audio.listenercomponent.md#ondestroy)
* [onReLink](_seinjs_.audio.listenercomponent.md#onrelink)
* [onUnLink](_seinjs_.audio.listenercomponent.md#onunlink)
* [verifyAdding](_seinjs_.audio.listenercomponent.md#verifyadding)

---

## Properties

<a id="isaudiolistenercomponent"></a>

###  isAudioListenerComponent

**● isAudioListenerComponent**: *`boolean`* = true

*Inherited from [ListenerComponent](listenercomponent.md).[isAudioListenerComponent](listenercomponent.md#isaudiolistenercomponent)*

*Defined in ListenerComponent.ts:43*

___
<a id="rotatable"></a>

###  rotatable

**● rotatable**: *`boolean`* = true

*Inherited from [ListenerComponent](listenercomponent.md).[rotatable](listenercomponent.md#rotatable)*

*Defined in ListenerComponent.ts:48*

此监听器是否是和旋转朝向相关的，如果不是，则无论父级如何旋转，都不会改变音频监听的朝向。

___

## Accessors

<a id="volume"></a>

###  volume

**get volume**(): `number`

**set volume**(value: *`number`*): `void`

*Inherited from [ListenerComponent](listenercomponent.md).[volume](listenercomponent.md#volume)*

*Defined in ListenerComponent.ts:74*

获取监听器音量。

**Returns:** `number`

*Inherited from [ListenerComponent](listenercomponent.md).[volume](listenercomponent.md#volume)*

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

*Inherited from [ListenerComponent](listenercomponent.md).[disable](listenercomponent.md#disable)*

*Defined in ListenerComponent.ts:113*

取消为主监听器，若不指定其他的监听器，将会使得音频失效。

**Returns:** `this`

___
<a id="enable"></a>

###  enable

▸ **enable**(): `this`

*Inherited from [ListenerComponent](listenercomponent.md).[enable](listenercomponent.md#enable)*

*Defined in ListenerComponent.ts:87*

使其成为主监听器，默认将指定第一个添加的为主监听器。

**Returns:** `this`

___
<a id="onadd"></a>

###  onAdd

▸ **onAdd**(initState: *[IListenerComponentStateTypes](../interfaces/ilistenercomponentstatetypes.md)*): `void`

*Inherited from [ListenerComponent](listenercomponent.md).[onAdd](listenercomponent.md#onadd)*

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

*Inherited from [ListenerComponent](listenercomponent.md).[onDestroy](listenercomponent.md#ondestroy)*

*Overrides SceneComponent.onDestroy*

*Defined in ListenerComponent.ts:175*

销毁，继承请先`super.onDestroy()`。

**Returns:** `void`

___
<a id="onrelink"></a>

###  onReLink

▸ **onReLink**(): `void`

*Inherited from [ListenerComponent](listenercomponent.md).[onReLink](listenercomponent.md#onrelink)*

*Overrides Component.onReLink*

*Defined in ListenerComponent.ts:168*

继承请先`super.onReLink()`。

**Returns:** `void`

___
<a id="onunlink"></a>

###  onUnLink

▸ **onUnLink**(): `void`

*Inherited from [ListenerComponent](listenercomponent.md).[onUnLink](listenercomponent.md#onunlink)*

*Overrides Component.onUnLink*

*Defined in ListenerComponent.ts:161*

继承请先`super.onUnLink()`。

**Returns:** `void`

___
<a id="verifyadding"></a>

###  verifyAdding

▸ **verifyAdding**(): `void`

*Inherited from [ListenerComponent](listenercomponent.md).[verifyAdding](listenercomponent.md#verifyadding)*

*Overrides Component.verifyAdding*

*Defined in ListenerComponent.ts:137*

验证是否允许添加，至少要有一个`Audio.SystemActor`才可以。

**Returns:** `void`

___

