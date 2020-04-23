[seinjs-audio](../README.md) > ["seinjs"](../modules/_seinjs_.md) > [Audio](../modules/_seinjs_.audio.md) > [BufferClip](../classes/_seinjs_.audio.bufferclip.md)

# Class: BufferClip

## Hierarchy

↳  [BufferClip](bufferclip.md)

**↳ BufferClip**

## Index

### Constructors

* [constructor](_seinjs_.audio.bufferclip.md#constructor)

### Properties

* [audioSource](_seinjs_.audio.bufferclip.md#audiosource)
* [className](_seinjs_.audio.bufferclip.md#classname)
* [classType](_seinjs_.audio.bufferclip.md#classtype)
* [handleEnd](_seinjs_.audio.bufferclip.md#handleend)
* [handlePause](_seinjs_.audio.bufferclip.md#handlepause)
* [handleResume](_seinjs_.audio.bufferclip.md#handleresume)
* [handleStart](_seinjs_.audio.bufferclip.md#handlestart)
* [isAudioBufferClip](_seinjs_.audio.bufferclip.md#isaudiobufferclip)
* [isAudioClip](_seinjs_.audio.bufferclip.md#isaudioclip)
* [isSObject](_seinjs_.audio.bufferclip.md#issobject)
* [name](_seinjs_.audio.bufferclip.md#name)
* [uuid](_seinjs_.audio.bufferclip.md#uuid)
* [CLASS_NAME](_seinjs_.audio.bufferclip.md#class_name)
* [CLASS_TYPE](_seinjs_.audio.bufferclip.md#class_type)

### Accessors

* [actor](_seinjs_.audio.bufferclip.md#actor)
* [currentTime](_seinjs_.audio.bufferclip.md#currenttime)
* [duration](_seinjs_.audio.bufferclip.md#duration)
* [loop](_seinjs_.audio.bufferclip.md#loop)
* [parent](_seinjs_.audio.bufferclip.md#parent)
* [paused](_seinjs_.audio.bufferclip.md#paused)
* [range](_seinjs_.audio.bufferclip.md#range)
* [stopt](_seinjs_.audio.bufferclip.md#stopt)
* [system](_seinjs_.audio.bufferclip.md#system)

### Methods

* [clone](_seinjs_.audio.bufferclip.md#clone)
* [deserialize](_seinjs_.audio.bufferclip.md#deserialize)
* [getGame](_seinjs_.audio.bufferclip.md#getgame)
* [getLevel](_seinjs_.audio.bufferclip.md#getlevel)
* [getWorld](_seinjs_.audio.bufferclip.md#getworld)
* [onDestroy](_seinjs_.audio.bufferclip.md#ondestroy)
* [onError](_seinjs_.audio.bufferclip.md#onerror)
* [onInit](_seinjs_.audio.bufferclip.md#oninit)
* [onPause](_seinjs_.audio.bufferclip.md#onpause)
* [onPlay](_seinjs_.audio.bufferclip.md#onplay)
* [onResume](_seinjs_.audio.bufferclip.md#onresume)
* [onStop](_seinjs_.audio.bufferclip.md#onstop)
* [onUpdate](_seinjs_.audio.bufferclip.md#onupdate)
* [rename](_seinjs_.audio.bufferclip.md#rename)
* [serialize](_seinjs_.audio.bufferclip.md#serialize)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new BufferClip**(initState: *[IBufferClipStateTypes](../interfaces/ibufferclipstatetypes.md)*): [BufferClip](_seinjs_.audio.bufferclip.md)

*Inherited from [Clip](clip.md).[constructor](clip.md#constructor)*

*Overrides SObject.__constructor*

*Defined in clip/Clip.ts:34*

**Parameters:**

| Name | Type |
| ------ | ------ |
| initState | [IBufferClipStateTypes](../interfaces/ibufferclipstatetypes.md) |

**Returns:** [BufferClip](_seinjs_.audio.bufferclip.md)

___

## Properties

<a id="audiosource"></a>

###  audioSource

**● audioSource**: *[SourceComponent](sourcecomponent.md)* =  null

*Inherited from [Clip](clip.md).[audioSource](clip.md#audiosource)*

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

*Inherited from [Clip](clip.md).[handleEnd](clip.md#handleend)*

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

*Inherited from [Clip](clip.md).[handlePause](clip.md#handlepause)*

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

*Inherited from [Clip](clip.md).[handleResume](clip.md#handleresume)*

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

*Inherited from [Clip](clip.md).[handleStart](clip.md#handlestart)*

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
<a id="isaudiobufferclip"></a>

###  isAudioBufferClip

**● isAudioBufferClip**: *`boolean`* = true

*Inherited from [BufferClip](bufferclip.md).[isAudioBufferClip](bufferclip.md#isaudiobufferclip)*

*Defined in clip/BufferClip.ts:17*

___
<a id="isaudioclip"></a>

###  isAudioClip

**● isAudioClip**: *`boolean`* = true

*Inherited from [Clip](clip.md).[isAudioClip](clip.md#isaudioclip)*

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

*Inherited from [Clip](clip.md).[actor](clip.md#actor)*

*Defined in clip/Clip.ts:52*

获取自身的父级音频组件的Onwer实例引用。

**Returns:** `SceneActor`

___
<a id="currenttime"></a>

###  currentTime

**get currentTime**(): `number`

*Inherited from [BufferClip](bufferclip.md).[currentTime](bufferclip.md#currenttime)*

*Overrides [Clip](clip.md).[currentTime](clip.md#currenttime)*

*Defined in clip/BufferClip.ts:62*

返回音频当前播放时间。

**Returns:** `number`

___
<a id="duration"></a>

###  duration

**get duration**(): `number`

*Inherited from [BufferClip](bufferclip.md).[duration](bufferclip.md#duration)*

*Overrides [Clip](clip.md).[duration](clip.md#duration)*

*Defined in clip/BufferClip.ts:55*

返回音频长度。

**Returns:** `number`

___
<a id="loop"></a>

###  loop

**get loop**(): `boolean`

*Inherited from [BufferClip](bufferclip.md).[loop](bufferclip.md#loop)*

*Overrides [Clip](clip.md).[loop](clip.md#loop)*

*Defined in clip/BufferClip.ts:69*

返回音频当前是否循环。

**Returns:** `boolean`

___
<a id="parent"></a>

###  parent

**get parent**(): [SourceComponent](sourcecomponent.md)

*Inherited from [Clip](clip.md).[parent](clip.md#parent)*

*Defined in clip/Clip.ts:45*

获取自身的父级音频组件实例引用，一般不需要自己使用。

**Returns:** [SourceComponent](sourcecomponent.md)

___
<a id="paused"></a>

###  paused

**get paused**(): `boolean`

*Inherited from [BufferClip](bufferclip.md).[paused](bufferclip.md#paused)*

*Overrides [Clip](clip.md).[paused](clip.md#paused)*

*Defined in clip/BufferClip.ts:41*

返回是否暂停。

**Returns:** `boolean`

___
<a id="range"></a>

###  range

**get range**(): `number`[]

*Inherited from [BufferClip](bufferclip.md).[range](bufferclip.md#range)*

*Overrides [Clip](clip.md).[range](clip.md#range)*

*Defined in clip/BufferClip.ts:76*

返回音频当前播放区间。

**Returns:** `number`[]

___
<a id="stopt"></a>

###  stopt

**get stopt**(): `boolean`

*Inherited from [BufferClip](bufferclip.md).[stopt](bufferclip.md#stopt)*

*Overrides [Clip](clip.md).[stopt](clip.md#stopt)*

*Defined in clip/BufferClip.ts:48*

返回是否停止。

**Returns:** `boolean`

___
<a id="system"></a>

###  system

**get system**(): [SystemActor](systemactor.md)

*Inherited from [Clip](clip.md).[system](clip.md#system)*

*Defined in clip/Clip.ts:59*

当前从属的System。

**Returns:** [SystemActor](systemactor.md)

___

## Methods

<a id="clone"></a>

###  clone

▸ **clone**(): `any`

*Inherited from [Clip](clip.md).[clone](clip.md#clone)*

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

*Inherited from [Clip](clip.md).[getGame](clip.md#getgame)*

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

*Inherited from [Clip](clip.md).[getLevel](clip.md#getlevel)*

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

*Inherited from [Clip](clip.md).[getWorld](clip.md#getworld)*

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

*Inherited from [BufferClip](bufferclip.md).[onDestroy](bufferclip.md#ondestroy)*

*Overrides SObject.onDestroy*

*Defined in clip/BufferClip.ts:226*

**Returns:** `void`

___
<a id="onerror"></a>

###  onError

▸ **onError**(error: *`BaseException`*, details: *`any`*): `void`

*Inherited from [Clip](clip.md).[onError](clip.md#onerror)*

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

▸ **onInit**(initState: *[IBufferClipStateTypes](../interfaces/ibufferclipstatetypes.md)*): `void`

*Inherited from [BufferClip](bufferclip.md).[onInit](bufferclip.md#oninit)*

*Overrides [Clip](clip.md).[onInit](clip.md#oninit)*

*Defined in clip/BufferClip.ts:80*

**Parameters:**

| Name | Type |
| ------ | ------ |
| initState | [IBufferClipStateTypes](../interfaces/ibufferclipstatetypes.md) |

**Returns:** `void`

___
<a id="onpause"></a>

###  onPause

▸ **onPause**(): `void`

*Inherited from [BufferClip](bufferclip.md).[onPause](bufferclip.md#onpause)*

*Overrides [Clip](clip.md).[onPause](clip.md#onpause)*

*Defined in clip/BufferClip.ts:145*

**Returns:** `void`

___
<a id="onplay"></a>

###  onPlay

▸ **onPlay**(loop?: *`boolean`*, from?: *`number`*, to?: *`number`*): `void`

*Inherited from [BufferClip](bufferclip.md).[onPlay](bufferclip.md#onplay)*

*Overrides [Clip](clip.md).[onPlay](clip.md#onplay)*

*Defined in clip/BufferClip.ts:116*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` loop | `boolean` |
| `Optional` from | `number` |
| `Optional` to | `number` |

**Returns:** `void`

___
<a id="onresume"></a>

###  onResume

▸ **onResume**(): `void`

*Inherited from [BufferClip](bufferclip.md).[onResume](bufferclip.md#onresume)*

*Overrides [Clip](clip.md).[onResume](clip.md#onresume)*

*Defined in clip/BufferClip.ts:160*

**Returns:** `void`

___
<a id="onstop"></a>

###  onStop

▸ **onStop**(): `void`

*Inherited from [BufferClip](bufferclip.md).[onStop](bufferclip.md#onstop)*

*Overrides [Clip](clip.md).[onStop](clip.md#onstop)*

*Defined in clip/BufferClip.ts:187*

**Returns:** `void`

___
<a id="onupdate"></a>

###  onUpdate

▸ **onUpdate**(delta: *`number`*): `void`

*Inherited from [BufferClip](bufferclip.md).[onUpdate](bufferclip.md#onupdate)*

*Overrides [Clip](clip.md).[onUpdate](clip.md#onupdate)*

*Defined in clip/BufferClip.ts:208*

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

