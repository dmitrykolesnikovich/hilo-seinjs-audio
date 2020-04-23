[seinjs-audio](../README.md) > [Clip](../classes/clip.md)

# Class: Clip

## Type parameters
#### IStateTypes :  [IClipStateTypes](../interfaces/iclipstatetypes.md)
## Hierarchy

 `SObject`

**↳ Clip**

↳  [StreamClip](streamclip.md)

↳  [BufferClip](bufferclip.md)

↳  [Clip](_seinjs_.audio.clip.md)

## Index

### Constructors

* [constructor](clip.md#constructor)

### Properties

* [audioSource](clip.md#audiosource)
* [className](clip.md#classname)
* [classType](clip.md#classtype)
* [handleEnd](clip.md#handleend)
* [handlePause](clip.md#handlepause)
* [handleResume](clip.md#handleresume)
* [handleStart](clip.md#handlestart)
* [isAudioClip](clip.md#isaudioclip)
* [isSObject](clip.md#issobject)
* [name](clip.md#name)
* [uuid](clip.md#uuid)
* [CLASS_NAME](clip.md#class_name)
* [CLASS_TYPE](clip.md#class_type)

### Accessors

* [actor](clip.md#actor)
* [currentTime](clip.md#currenttime)
* [duration](clip.md#duration)
* [loop](clip.md#loop)
* [parent](clip.md#parent)
* [paused](clip.md#paused)
* [range](clip.md#range)
* [stopt](clip.md#stopt)
* [system](clip.md#system)

### Methods

* [clone](clip.md#clone)
* [deserialize](clip.md#deserialize)
* [getGame](clip.md#getgame)
* [getLevel](clip.md#getlevel)
* [getWorld](clip.md#getworld)
* [onDestroy](clip.md#ondestroy)
* [onError](clip.md#onerror)
* [onInit](clip.md#oninit)
* [onPause](clip.md#onpause)
* [onPlay](clip.md#onplay)
* [onResume](clip.md#onresume)
* [onStop](clip.md#onstop)
* [onUpdate](clip.md#onupdate)
* [rename](clip.md#rename)
* [serialize](clip.md#serialize)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new Clip**(initState: *`IStateTypes`*): [Clip](clip.md)

*Overrides SObject.__constructor*

*Defined in clip/Clip.ts:34*

**Parameters:**

| Name | Type |
| ------ | ------ |
| initState | `IStateTypes` |

**Returns:** [Clip](clip.md)

___

## Properties

<a id="audiosource"></a>

###  audioSource

**● audioSource**: *[SourceComponent](sourcecomponent.md)* =  null

*Defined in clip/Clip.ts:27*

当前从属的父级音频组件。

___
<a id="classname"></a>

###  className

**● className**: *`SName`*

*Inherited from SObject.className*

*Defined in /Users/dtysky/Projects/Sein.js/lib/seinjs.d.ts:1221*

实例的类名，代理到类的静态属性`CLASS_NAME`。

___
<a id="classtype"></a>

###  classType

**● classType**: *`SName`*

*Inherited from SObject.classType*

*Defined in /Users/dtysky/Projects/Sein.js/lib/seinjs.d.ts:1226*

实例的类型，代理到类的静态属性`CLASS_NAME`。 预留，暂时没啥用。

___
<a id="handleend"></a>

###  handleEnd

**● handleEnd**: *`function`* =  nop

*Defined in clip/Clip.ts:30*

#### Type declaration
▸(clip: *[Clip](clip.md)*, actor: *`SceneActor`*): `any`

**Parameters:**

| Name | Type |
| ------ | ------ |
| clip | [Clip](clip.md) |
| actor | `SceneActor` |

**Returns:** `any`

___
<a id="handlepause"></a>

###  handlePause

**● handlePause**: *`function`* =  nop

*Defined in clip/Clip.ts:31*

#### Type declaration
▸(clip: *[Clip](clip.md)*, actor: *`SceneActor`*): `any`

**Parameters:**

| Name | Type |
| ------ | ------ |
| clip | [Clip](clip.md) |
| actor | `SceneActor` |

**Returns:** `any`

___
<a id="handleresume"></a>

###  handleResume

**● handleResume**: *`function`* =  nop

*Defined in clip/Clip.ts:32*

#### Type declaration
▸(clip: *[Clip](clip.md)*, actor: *`SceneActor`*): `any`

**Parameters:**

| Name | Type |
| ------ | ------ |
| clip | [Clip](clip.md) |
| actor | `SceneActor` |

**Returns:** `any`

___
<a id="handlestart"></a>

###  handleStart

**● handleStart**: *`function`* =  nop

*Defined in clip/Clip.ts:29*

#### Type declaration
▸(clip: *[Clip](clip.md)*, actor: *`SceneActor`*): `any`

**Parameters:**

| Name | Type |
| ------ | ------ |
| clip | [Clip](clip.md) |
| actor | `SceneActor` |

**Returns:** `any`

___
<a id="isaudioclip"></a>

###  isAudioClip

**● isAudioClip**: *`boolean`* = true

*Defined in clip/Clip.ts:23*

___
<a id="issobject"></a>

###  isSObject

**● isSObject**: *`boolean`*

*Inherited from SObject.isSObject*

*Defined in /Users/dtysky/Projects/Sein.js/lib/seinjs.d.ts:1202*

一个实例是否为SObject的判据。

___
<a id="name"></a>

###  name

**● name**: *`SName`*

*Inherited from SObject.name*

*Defined in /Users/dtysky/Projects/Sein.js/lib/seinjs.d.ts:1206*

实例的名字。

___
<a id="uuid"></a>

###  uuid

**● uuid**: *`number`*

*Inherited from SObject.uuid*

*Defined in /Users/dtysky/Projects/Sein.js/lib/seinjs.d.ts:1217*

所有继承自`SObject`的类的实例的唯一ID。

___
<a id="class_name"></a>

### `<Static>` CLASS_NAME

**● CLASS_NAME**: *`SName`*

*Inherited from SObject.CLASS_NAME*

*Defined in /Users/dtysky/Projects/Sein.js/lib/seinjs.d.ts:1192*

实例的类名，用于反射，在类被实例化后有`object.className`作为代理。

___
<a id="class_type"></a>

### `<Static>` CLASS_TYPE

**● CLASS_TYPE**: *`SName`*

*Inherited from SObject.CLASS_TYPE*

*Defined in /Users/dtysky/Projects/Sein.js/lib/seinjs.d.ts:1197*

实例的类型用于反射，在类被实例化后有`object.classType`作为代理。 预留，暂时没用。

___

## Accessors

<a id="actor"></a>

###  actor

**get actor**(): `SceneActor`

*Defined in clip/Clip.ts:52*

获取自身的父级音频组件的Onwer实例引用。

**Returns:** `SceneActor`

___
<a id="currenttime"></a>

###  currentTime

**get currentTime**(): `number`

*Defined in clip/Clip.ts:87*

需要派生类实现，返回音频当前播放时间。

**Returns:** `number`

___
<a id="duration"></a>

###  duration

**get duration**(): `number`

*Defined in clip/Clip.ts:80*

需要派生类实现，返回音频长度。

**Returns:** `number`

___
<a id="loop"></a>

###  loop

**get loop**(): `boolean`

*Defined in clip/Clip.ts:94*

需要派生类实现，返回音频当前是否循环。

**Returns:** `boolean`

___
<a id="parent"></a>

###  parent

**get parent**(): [SourceComponent](sourcecomponent.md)

*Defined in clip/Clip.ts:45*

获取自身的父级音频组件实例引用，一般不需要自己使用。

**Returns:** [SourceComponent](sourcecomponent.md)

___
<a id="paused"></a>

###  paused

**get paused**(): `boolean`

*Defined in clip/Clip.ts:66*

需要派生类实现，返回是否暂停。

**Returns:** `boolean`

___
<a id="range"></a>

###  range

**get range**(): `number`[]

*Defined in clip/Clip.ts:101*

需要派生类实现，返回音频当前播放区间。

**Returns:** `number`[]

___
<a id="stopt"></a>

###  stopt

**get stopt**(): `boolean`

*Defined in clip/Clip.ts:73*

需要派生类实现，返回是否停止。

**Returns:** `boolean`

___
<a id="system"></a>

###  system

**get system**(): [SystemActor](systemactor.md)

*Defined in clip/Clip.ts:59*

当前从属的System。

**Returns:** [SystemActor](systemactor.md)

___

## Methods

<a id="clone"></a>

###  clone

▸ **clone**(): `any`

*Overrides SObject.clone*

*Defined in clip/Clip.ts:268*

复制生成一个新的Clip，如果你想让一段音频被多次使用，便需要Clone。

**Returns:** `any`

___
<a id="deserialize"></a>

###  deserialize

▸ **deserialize**(json: *`any`*): `void`

*Inherited from SObject.deserialize*

*Defined in /Users/dtysky/Projects/Sein.js/lib/seinjs.d.ts:1246*

从一个json序列反序列化，交由子类实现。

*__todo:__*: 暂未实现，预留。

**Parameters:**

| Name | Type |
| ------ | ------ |
| json | `any` |

**Returns:** `void`

___
<a id="getgame"></a>

###  getGame

▸ **getGame**<`IGameState`>(): `Game`<`IGameState`>

*Defined in clip/Clip.ts:110*

获取当前`Game`实例。

*__template__*: IGameState 当前游戏状态管理器的类型。

**Type parameters:**

#### IGameState :  `StateActor`

**Returns:** `Game`<`IGameState`>

___
<a id="getlevel"></a>

###  getLevel

▸ **getLevel**<`ILevelState`>(): `Level`<`ILevelState`>

*Defined in clip/Clip.ts:128*

获取当前`Level`实例。

*__template__*: ILevelState 当前关卡状态管理器的类型。

**Type parameters:**

#### ILevelState :  `StateActor`

**Returns:** `Level`<`ILevelState`>

___
<a id="getworld"></a>

###  getWorld

▸ **getWorld**<`IWorldState`>(): `World`<`IWorldState`>

*Defined in clip/Clip.ts:119*

获取当前`World`实例。

*__template__*: IWorldState 当前世界状态管理器的类型。

**Type parameters:**

#### IWorldState :  `StateActor`

**Returns:** `World`<`IWorldState`>

___
<a id="ondestroy"></a>

###  onDestroy

▸ **onDestroy**(): `void`

*Inherited from SObject.onDestroy*

*Defined in /Users/dtysky/Projects/Sein.js/lib/seinjs.d.ts:1250*

生命周期之一，会在实例将要销毁时被触发。

**Returns:** `void`

___
<a id="onerror"></a>

###  onError

▸ **onError**(error: *`BaseException`*, details: *`any`*): `void`

*Defined in clip/Clip.ts:179*

生命周期，用于错误边界处理。将在游戏中大部分可预知错误发生时被调用（通常是生命周期中的非异步错误）。 错误将会根据一定的路径向上传递，一直到`Engine`的层次，你可以在确保完美处理了问题后返回`true`来通知引擎不再向上传递。 当然你也可以将自定义的一些错误加入错误边界机制中，详见[Exception](../../guide/exception)。

**Parameters:**

| Name | Type |
| ------ | ------ |
| error | `BaseException` |
| details | `any` |

**Returns:** `void`

___
<a id="oninit"></a>

###  onInit

▸ **onInit**(initState: *`IStateTypes`*): `void`

*Defined in clip/Clip.ts:135*

生命周期，将在初始化时触发。

**Parameters:**

| Name | Type |
| ------ | ------ |
| initState | `IStateTypes` |

**Returns:** `void`

___
<a id="onpause"></a>

###  onPause

▸ **onPause**(): `void`

*Defined in clip/Clip.ts:149*

生命周期，将在`pause`时触发。

**Returns:** `void`

___
<a id="onplay"></a>

###  onPlay

▸ **onPlay**(loop: *`boolean`*, from?: *`number`*, to?: *`number`*): `void`

*Defined in clip/Clip.ts:142*

生命周期，将在`play`时触发。

**Parameters:**

| Name | Type |
| ------ | ------ |
| loop | `boolean` |
| `Optional` from | `number` |
| `Optional` to | `number` |

**Returns:** `void`

___
<a id="onresume"></a>

###  onResume

▸ **onResume**(): `void`

*Defined in clip/Clip.ts:156*

生命周期，将在`resume`时触发。

**Returns:** `void`

___
<a id="onstop"></a>

###  onStop

▸ **onStop**(): `void`

*Defined in clip/Clip.ts:163*

生命周期，将在`stop`时触发。

**Returns:** `void`

___
<a id="onupdate"></a>

###  onUpdate

▸ **onUpdate**(delta: *`number`*): `void`

*Defined in clip/Clip.ts:170*

生命周期，将在每一帧`update`时触发。

**Parameters:**

| Name | Type |
| ------ | ------ |
| delta | `number` |

**Returns:** `void`

___
<a id="rename"></a>

###  rename

▸ **rename**(name: *`string`*): `void`

*Inherited from SObject.rename*

*Defined in /Users/dtysky/Projects/Sein.js/lib/seinjs.d.ts:1230*

通过字符串修改实例名字。

**Parameters:**

| Name | Type |
| ------ | ------ |
| name | `string` |

**Returns:** `void`

___
<a id="serialize"></a>

###  serialize

▸ **serialize**(): `any`

*Inherited from SObject.serialize*

*Defined in /Users/dtysky/Projects/Sein.js/lib/seinjs.d.ts:1240*

实例序列化，交由子类实现。

*__todo:__*: 暂未实现，预留。

**Returns:** `any`

___

