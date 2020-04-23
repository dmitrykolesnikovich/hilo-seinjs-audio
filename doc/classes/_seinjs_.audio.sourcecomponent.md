[seinjs-audio](../README.md) > ["seinjs"](../modules/_seinjs_.md) > [Audio](../modules/_seinjs_.audio.md) > [SourceComponent](../classes/_seinjs_.audio.sourcecomponent.md)

# Class: SourceComponent

## Hierarchy

↳  [SourceComponent](sourcecomponent.md)

**↳ SourceComponent**

## Implements

* `ISceneComponent`<`ISceneComponentState`>

## Index

### Properties

* [isAudioSourceComponent](_seinjs_.audio.sourcecomponent.md#isaudiosourcecomponent)
* [rotatable](_seinjs_.audio.sourcecomponent.md#rotatable)

### Accessors

* [clipNames](_seinjs_.audio.sourcecomponent.md#clipnames)
* [current](_seinjs_.audio.sourcecomponent.md#current)
* [disabled](_seinjs_.audio.sourcecomponent.md#disabled)
* [event](_seinjs_.audio.sourcecomponent.md#event)
* [spaceOption](_seinjs_.audio.sourcecomponent.md#spaceoption)
* [volume](_seinjs_.audio.sourcecomponent.md#volume)

### Methods

* [add](_seinjs_.audio.sourcecomponent.md#add)
* [disable](_seinjs_.audio.sourcecomponent.md#disable)
* [enable](_seinjs_.audio.sourcecomponent.md#enable)
* [get](_seinjs_.audio.sourcecomponent.md#get)
* [getCurrent](_seinjs_.audio.sourcecomponent.md#getcurrent)
* [has](_seinjs_.audio.sourcecomponent.md#has)
* [onAdd](_seinjs_.audio.sourcecomponent.md#onadd)
* [onDestroy](_seinjs_.audio.sourcecomponent.md#ondestroy)
* [onInit](_seinjs_.audio.sourcecomponent.md#oninit)
* [onReLink](_seinjs_.audio.sourcecomponent.md#onrelink)
* [onUnLink](_seinjs_.audio.sourcecomponent.md#onunlink)
* [onUpdate](_seinjs_.audio.sourcecomponent.md#onupdate)
* [pause](_seinjs_.audio.sourcecomponent.md#pause)
* [play](_seinjs_.audio.sourcecomponent.md#play)
* [remove](_seinjs_.audio.sourcecomponent.md#remove)
* [resume](_seinjs_.audio.sourcecomponent.md#resume)
* [stop](_seinjs_.audio.sourcecomponent.md#stop)
* [verifyAdding](_seinjs_.audio.sourcecomponent.md#verifyadding)

---

## Properties

<a id="isaudiosourcecomponent"></a>

###  isAudioSourceComponent

**● isAudioSourceComponent**: *`boolean`* = true

*Inherited from [SourceComponent](sourcecomponent.md).[isAudioSourceComponent](sourcecomponent.md#isaudiosourcecomponent)*

*Defined in SourceComponent.ts:106*

___
<a id="rotatable"></a>

###  rotatable

**● rotatable**: *`boolean`* = false

*Inherited from [SourceComponent](sourcecomponent.md).[rotatable](sourcecomponent.md#rotatable)*

*Defined in SourceComponent.ts:111*

若是空间音源，是否是可旋转的，即是否同步朝向。

___

## Accessors

<a id="clipnames"></a>

###  clipNames

**get clipNames**(): `string`[]

*Inherited from [SourceComponent](sourcecomponent.md).[clipNames](sourcecomponent.md#clipnames)*

*Defined in SourceComponent.ts:201*

获取当前所有的Clip名字。

**Returns:** `string`[]

___
<a id="current"></a>

###  current

**get current**(): [Clip](clip.md)<[IClipStateTypes](../interfaces/iclipstatetypes.md)>

*Inherited from [SourceComponent](sourcecomponent.md).[current](sourcecomponent.md#current)*

*Defined in SourceComponent.ts:194*

获取当前Clip。

**Returns:** [Clip](clip.md)<[IClipStateTypes](../interfaces/iclipstatetypes.md)>

___
<a id="disabled"></a>

###  disabled

**get disabled**(): `boolean`

*Inherited from [SourceComponent](sourcecomponent.md).[disabled](sourcecomponent.md#disabled)*

*Defined in SourceComponent.ts:209*

该音频是否有效。

**Returns:** `boolean`

___
<a id="event"></a>

###  event

**get event**(): `EventManager`<`object`>

*Inherited from [SourceComponent](sourcecomponent.md).[event](sourcecomponent.md#event)*

*Overrides Component.event*

*Defined in SourceComponent.ts:166*

SourceComponent的事件管理器。

```ts
EventManager<{
 Start: ISourceEvent;
 Pause: ISourceEvent;
 Resume: ISourceEvent;
 End: ISourceEvent;
}>
```

**Returns:** `EventManager`<`object`>

___
<a id="spaceoption"></a>

###  spaceOption

**get spaceOption**(): [ISourceSpaceOptions](../interfaces/isourcespaceoptions.md)

*Inherited from [SourceComponent](sourcecomponent.md).[spaceOption](sourcecomponent.md#spaceoption)*

*Defined in SourceComponent.ts:187*

若开启空间音频，可用于修改空间音频配置。

**Returns:** [ISourceSpaceOptions](../interfaces/isourcespaceoptions.md)

___
<a id="volume"></a>

###  volume

**get volume**(): `number`

**set volume**(value: *`number`*): `void`

*Inherited from [SourceComponent](sourcecomponent.md).[volume](sourcecomponent.md#volume)*

*Defined in SourceComponent.ts:180*

获取音量。

**Returns:** `number`

*Inherited from [SourceComponent](sourcecomponent.md).[volume](sourcecomponent.md#volume)*

*Defined in SourceComponent.ts:173*

设置音量。

**Parameters:**

| Name | Type |
| ------ | ------ |
| value | `number` |

**Returns:** `void`

___

## Methods

<a id="add"></a>

###  add

▸ **add**(name: *`string`*, clip: *[Clip](clip.md)*, isDefault?: *`boolean`*): `this`

*Inherited from [SourceComponent](sourcecomponent.md).[add](sourcecomponent.md#add)*

*Defined in SourceComponent.ts:216*

添加一个Clip。

**Parameters:**

| Name | Type |
| ------ | ------ |
| name | `string` |
| clip | [Clip](clip.md) |
| `Optional` isDefault | `boolean` |

**Returns:** `this`

___
<a id="disable"></a>

###  disable

▸ **disable**(): `void`

*Inherited from [SourceComponent](sourcecomponent.md).[disable](sourcecomponent.md#disable)*

*Defined in SourceComponent.ts:348*

将该音频关闭。

**Returns:** `void`

___
<a id="enable"></a>

###  enable

▸ **enable**(): `void`

*Inherited from [SourceComponent](sourcecomponent.md).[enable](sourcecomponent.md#enable)*

*Defined in SourceComponent.ts:340*

将该音频重新开启。

**Returns:** `void`

___
<a id="get"></a>

###  get

▸ **get**<`TClip`>(name: *`string`*): `TClip`

*Inherited from [SourceComponent](sourcecomponent.md).[get](sourcecomponent.md#get)*

*Defined in SourceComponent.ts:258*

获取Clip。

**Type parameters:**

#### TClip :  [Clip](clip.md)
**Parameters:**

| Name | Type |
| ------ | ------ |
| name | `string` |

**Returns:** `TClip`

___
<a id="getcurrent"></a>

###  getCurrent

▸ **getCurrent**<`TClip`>(): `TClip`

*Inherited from [SourceComponent](sourcecomponent.md).[getCurrent](sourcecomponent.md#getcurrent)*

*Defined in SourceComponent.ts:269*

获取当前Clip。

**Type parameters:**

#### TClip :  [Clip](clip.md)

**Returns:** `TClip`

___
<a id="has"></a>

###  has

▸ **has**(name: *`string`*): `boolean`

*Inherited from [SourceComponent](sourcecomponent.md).[has](sourcecomponent.md#has)*

*Defined in SourceComponent.ts:251*

判断一个Clip是否在内。

**Parameters:**

| Name | Type |
| ------ | ------ |
| name | `string` |

**Returns:** `boolean`

___
<a id="onadd"></a>

###  onAdd

▸ **onAdd**(initState: *[ISourceComponentStateTypes](../interfaces/isourcecomponentstatetypes.md)*): `void`

*Inherited from [SourceComponent](sourcecomponent.md).[onAdd](sourcecomponent.md#onadd)*

*Overrides Component.onAdd*

*Defined in SourceComponent.ts:399*

加入世界，继承请先`super.onUpdate()`。

**Parameters:**

| Name | Type |
| ------ | ------ |
| initState | [ISourceComponentStateTypes](../interfaces/isourcecomponentstatetypes.md) |

**Returns:** `void`

___
<a id="ondestroy"></a>

###  onDestroy

▸ **onDestroy**(): `void`

*Inherited from [SourceComponent](sourcecomponent.md).[onDestroy](sourcecomponent.md#ondestroy)*

*Overrides SceneComponent.onDestroy*

*Defined in SourceComponent.ts:487*

销毁，继承请先`super.onDestroy()`。

**Returns:** `void`

___
<a id="oninit"></a>

###  onInit

▸ **onInit**(initState: *[ISourceComponentStateTypes](../interfaces/isourcecomponentstatetypes.md)*): `void`

*Inherited from [SourceComponent](sourcecomponent.md).[onInit](sourcecomponent.md#oninit)*

*Overrides SceneComponent.onInit*

*Defined in SourceComponent.ts:373*

初始化，继承请先`super.onUpdate()`。

**Parameters:**

| Name | Type |
| ------ | ------ |
| initState | [ISourceComponentStateTypes](../interfaces/isourcecomponentstatetypes.md) |

**Returns:** `void`

___
<a id="onrelink"></a>

###  onReLink

▸ **onReLink**(): `void`

*Inherited from [SourceComponent](sourcecomponent.md).[onReLink](sourcecomponent.md#onrelink)*

*Overrides Component.onReLink*

*Defined in SourceComponent.ts:443*

继承请先`super.onReLink()`。

**Returns:** `void`

___
<a id="onunlink"></a>

###  onUnLink

▸ **onUnLink**(): `void`

*Inherited from [SourceComponent](sourcecomponent.md).[onUnLink](sourcecomponent.md#onunlink)*

*Overrides Component.onUnLink*

*Defined in SourceComponent.ts:436*

继承请先`super.onUnLink()`。

**Returns:** `void`

___
<a id="onupdate"></a>

###  onUpdate

▸ **onUpdate**(delta: *`number`*): `void`

*Inherited from [SourceComponent](sourcecomponent.md).[onUpdate](sourcecomponent.md#onupdate)*

*Overrides Component.onUpdate*

*Defined in SourceComponent.ts:450*

每一帧更新，继承请先`super.onUpdate()`。

**Parameters:**

| Name | Type |
| ------ | ------ |
| delta | `number` |

**Returns:** `void`

___
<a id="pause"></a>

###  pause

▸ **pause**(): `void`

*Inherited from [SourceComponent](sourcecomponent.md).[pause](sourcecomponent.md#pause)*

*Defined in SourceComponent.ts:306*

暂停。

**Returns:** `void`

___
<a id="play"></a>

###  play

▸ **play**(name?: *`string`*, options?: *`object`*): `this`

*Inherited from [SourceComponent](sourcecomponent.md).[play](sourcecomponent.md#play)*

*Defined in SourceComponent.ts:279*

通过名字和配置播放一个Clip，没有指定名字或为`null`则播放默认Clip。 注意如果是`Buffer`模式且为`isLazy`的Clip，则播放请求会被缓存，**直到解码完毕时**才会开始播放。

**Parameters:**

**`Optional` name: `string`**

**`Optional` options: `object`**

播放配置，`loop`控制是否循环，`start`与`end`分别控制播放区间的开始和结束。

| Name | Type |
| ------ | ------ |
| `Optional` end | `number` |
| `Optional` loop | `boolean` |
| `Optional` start | `number` |

**Returns:** `this`

___
<a id="remove"></a>

###  remove

▸ **remove**(name: *`string`*, clip: *[Clip](clip.md)*, isDefault: *`boolean`*): `this`

*Inherited from [SourceComponent](sourcecomponent.md).[remove](sourcecomponent.md#remove)*

*Defined in SourceComponent.ts:232*

移除一个Clip。

**Parameters:**

| Name | Type |
| ------ | ------ |
| name | `string` |
| clip | [Clip](clip.md) |
| isDefault | `boolean` |

**Returns:** `this`

___
<a id="resume"></a>

###  resume

▸ **resume**(): `void`

*Inherited from [SourceComponent](sourcecomponent.md).[resume](sourcecomponent.md#resume)*

*Defined in SourceComponent.ts:317*

恢复。

**Returns:** `void`

___
<a id="stop"></a>

###  stop

▸ **stop**(): `void`

*Inherited from [SourceComponent](sourcecomponent.md).[stop](sourcecomponent.md#stop)*

*Defined in SourceComponent.ts:328*

停止。

**Returns:** `void`

___
<a id="verifyadding"></a>

###  verifyAdding

▸ **verifyAdding**(): `void`

*Inherited from [SourceComponent](sourcecomponent.md).[verifyAdding](sourcecomponent.md#verifyadding)*

*Overrides Component.verifyAdding*

*Defined in SourceComponent.ts:362*

验证是否允许添加，至少要有一个`Audio.SystemActor`才可以。 继承请先`super.verifyAdding()`。

**Returns:** `void`

___

