[seinjs-audio](../README.md) > [SourceComponent](../classes/sourcecomponent.md)

# Class: SourceComponent

音频源组件类。

## Hierarchy

 `SceneComponent`<[ISourceComponentStateTypes](../interfaces/isourcecomponentstatetypes.md)>

**↳ SourceComponent**

↳  [SourceComponent](_seinjs_.audio.sourcecomponent.md)

## Implements

* `ISceneComponent`<`ISceneComponentState`>

## Index

### Properties

* [isAudioSourceComponent](sourcecomponent.md#isaudiosourcecomponent)
* [rotatable](sourcecomponent.md#rotatable)

### Accessors

* [clipNames](sourcecomponent.md#clipnames)
* [current](sourcecomponent.md#current)
* [disabled](sourcecomponent.md#disabled)
* [event](sourcecomponent.md#event)
* [spaceOption](sourcecomponent.md#spaceoption)
* [volume](sourcecomponent.md#volume)

### Methods

* [add](sourcecomponent.md#add)
* [disable](sourcecomponent.md#disable)
* [enable](sourcecomponent.md#enable)
* [get](sourcecomponent.md#get)
* [getCurrent](sourcecomponent.md#getcurrent)
* [has](sourcecomponent.md#has)
* [onAdd](sourcecomponent.md#onadd)
* [onDestroy](sourcecomponent.md#ondestroy)
* [onInit](sourcecomponent.md#oninit)
* [onReLink](sourcecomponent.md#onrelink)
* [onUnLink](sourcecomponent.md#onunlink)
* [onUpdate](sourcecomponent.md#onupdate)
* [pause](sourcecomponent.md#pause)
* [play](sourcecomponent.md#play)
* [remove](sourcecomponent.md#remove)
* [resume](sourcecomponent.md#resume)
* [stop](sourcecomponent.md#stop)
* [verifyAdding](sourcecomponent.md#verifyadding)

---

## Properties

<a id="isaudiosourcecomponent"></a>

###  isAudioSourceComponent

**● isAudioSourceComponent**: *`boolean`* = true

*Defined in SourceComponent.ts:106*

___
<a id="rotatable"></a>

###  rotatable

**● rotatable**: *`boolean`* = false

*Defined in SourceComponent.ts:111*

若是空间音源，是否是可旋转的，即是否同步朝向。

___

## Accessors

<a id="clipnames"></a>

###  clipNames

**get clipNames**(): `string`[]

*Defined in SourceComponent.ts:201*

获取当前所有的Clip名字。

**Returns:** `string`[]

___
<a id="current"></a>

###  current

**get current**(): [Clip](clip.md)<[IClipStateTypes](../interfaces/iclipstatetypes.md)>

*Defined in SourceComponent.ts:194*

获取当前Clip。

**Returns:** [Clip](clip.md)<[IClipStateTypes](../interfaces/iclipstatetypes.md)>

___
<a id="disabled"></a>

###  disabled

**get disabled**(): `boolean`

*Defined in SourceComponent.ts:209*

该音频是否有效。

**Returns:** `boolean`

___
<a id="event"></a>

###  event

**get event**(): `EventManager`<`object`>

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

*Defined in SourceComponent.ts:187*

若开启空间音频，可用于修改空间音频配置。

**Returns:** [ISourceSpaceOptions](../interfaces/isourcespaceoptions.md)

___
<a id="volume"></a>

###  volume

**get volume**(): `number`

**set volume**(value: *`number`*): `void`

*Defined in SourceComponent.ts:180*

获取音量。

**Returns:** `number`

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

*Defined in SourceComponent.ts:348*

将该音频关闭。

**Returns:** `void`

___
<a id="enable"></a>

###  enable

▸ **enable**(): `void`

*Defined in SourceComponent.ts:340*

将该音频重新开启。

**Returns:** `void`

___
<a id="get"></a>

###  get

▸ **get**<`TClip`>(name: *`string`*): `TClip`

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

*Defined in SourceComponent.ts:269*

获取当前Clip。

**Type parameters:**

#### TClip :  [Clip](clip.md)

**Returns:** `TClip`

___
<a id="has"></a>

###  has

▸ **has**(name: *`string`*): `boolean`

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

*Overrides SceneComponent.onDestroy*

*Defined in SourceComponent.ts:487*

销毁，继承请先`super.onDestroy()`。

**Returns:** `void`

___
<a id="oninit"></a>

###  onInit

▸ **onInit**(initState: *[ISourceComponentStateTypes](../interfaces/isourcecomponentstatetypes.md)*): `void`

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

*Overrides Component.onReLink*

*Defined in SourceComponent.ts:443*

继承请先`super.onReLink()`。

**Returns:** `void`

___
<a id="onunlink"></a>

###  onUnLink

▸ **onUnLink**(): `void`

*Overrides Component.onUnLink*

*Defined in SourceComponent.ts:436*

继承请先`super.onUnLink()`。

**Returns:** `void`

___
<a id="onupdate"></a>

###  onUpdate

▸ **onUpdate**(delta: *`number`*): `void`

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

*Defined in SourceComponent.ts:306*

暂停。

**Returns:** `void`

___
<a id="play"></a>

###  play

▸ **play**(name?: *`string`*, options?: *`object`*): `this`

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

*Defined in SourceComponent.ts:317*

恢复。

**Returns:** `void`

___
<a id="stop"></a>

###  stop

▸ **stop**(): `void`

*Defined in SourceComponent.ts:328*

停止。

**Returns:** `void`

___
<a id="verifyadding"></a>

###  verifyAdding

▸ **verifyAdding**(): `void`

*Overrides Component.verifyAdding*

*Defined in SourceComponent.ts:362*

验证是否允许添加，至少要有一个`Audio.SystemActor`才可以。 继承请先`super.verifyAdding()`。

**Returns:** `void`

___

