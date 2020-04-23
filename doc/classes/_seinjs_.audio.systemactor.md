[seinjs-audio](../README.md) > ["seinjs"](../modules/_seinjs_.md) > [Audio](../modules/_seinjs_.audio.md) > [SystemActor](../classes/_seinjs_.audio.systemactor.md)

# Class: SystemActor

## Type parameters
#### IOptionTypes :  `Object`
#### TRootComponent :  `Component`
## Hierarchy

↳  [SystemActor](systemactor.md)

**↳ SystemActor**

## Index

### Constructors

* [constructor](_seinjs_.audio.systemactor.md#constructor)

### Properties

* [className](_seinjs_.audio.systemactor.md#classname)
* [classType](_seinjs_.audio.systemactor.md#classtype)
* [emitComponentsDestroy](_seinjs_.audio.systemactor.md#emitcomponentsdestroy)
* [event](_seinjs_.audio.systemactor.md#event)
* [isActor](_seinjs_.audio.systemactor.md#isactor)
* [isAudioSystemActor](_seinjs_.audio.systemactor.md#isaudiosystemactor)
* [isInfoActor](_seinjs_.audio.systemactor.md#isinfoactor)
* [isSObject](_seinjs_.audio.systemactor.md#issobject)
* [isSystemActor](_seinjs_.audio.systemactor.md#issystemactor)
* [linked](_seinjs_.audio.systemactor.md#linked)
* [name](_seinjs_.audio.systemactor.md#name)
* [parent](_seinjs_.audio.systemactor.md#parent)
* [root](_seinjs_.audio.systemactor.md#root)
* [tag](_seinjs_.audio.systemactor.md#tag)
* [updateOnEverTick](_seinjs_.audio.systemactor.md#updateonevertick)
* [updatePriority](_seinjs_.audio.systemactor.md#updatepriority)
* [uuid](_seinjs_.audio.systemactor.md#uuid)
* [CLASS_NAME](_seinjs_.audio.systemactor.md#class_name)
* [CLASS_TYPE](_seinjs_.audio.systemactor.md#class_type)
* [UPDATE_PRIORITY](_seinjs_.audio.systemactor.md#update_priority)

### Accessors

* [closed](_seinjs_.audio.systemactor.md#closed)
* [context](_seinjs_.audio.systemactor.md#context)
* [listener](_seinjs_.audio.systemactor.md#listener)
* [running](_seinjs_.audio.systemactor.md#running)
* [sources](_seinjs_.audio.systemactor.md#sources)
* [volume](_seinjs_.audio.systemactor.md#volume)

### Methods

* [addChild](_seinjs_.audio.systemactor.md#addchild)
* [addComponent](_seinjs_.audio.systemactor.md#addcomponent)
* [addSource](_seinjs_.audio.systemactor.md#addsource)
* [clone](_seinjs_.audio.systemactor.md#clone)
* [deserialize](_seinjs_.audio.systemactor.md#deserialize)
* [disableSource](_seinjs_.audio.systemactor.md#disablesource)
* [enableSource](_seinjs_.audio.systemactor.md#enablesource)
* [findComponentByClass](_seinjs_.audio.systemactor.md#findcomponentbyclass)
* [findComponentByFilter](_seinjs_.audio.systemactor.md#findcomponentbyfilter)
* [findComponentByName](_seinjs_.audio.systemactor.md#findcomponentbyname)
* [findComponentsByClass](_seinjs_.audio.systemactor.md#findcomponentsbyclass)
* [findComponentsByFilter](_seinjs_.audio.systemactor.md#findcomponentsbyfilter)
* [getGame](_seinjs_.audio.systemactor.md#getgame)
* [getLevel](_seinjs_.audio.systemactor.md#getlevel)
* [getPhysicWorld](_seinjs_.audio.systemactor.md#getphysicworld)
* [getWorld](_seinjs_.audio.systemactor.md#getworld)
* [onAdd](_seinjs_.audio.systemactor.md#onadd)
* [onCreateRoot](_seinjs_.audio.systemactor.md#oncreateroot)
* [onDestroy](_seinjs_.audio.systemactor.md#ondestroy)
* [onError](_seinjs_.audio.systemactor.md#onerror)
* [onInit](_seinjs_.audio.systemactor.md#oninit)
* [onReLink](_seinjs_.audio.systemactor.md#onrelink)
* [onUnLink](_seinjs_.audio.systemactor.md#onunlink)
* [onUpdate](_seinjs_.audio.systemactor.md#onupdate)
* [pause](_seinjs_.audio.systemactor.md#pause)
* [reLink](_seinjs_.audio.systemactor.md#relink)
* [removeChild](_seinjs_.audio.systemactor.md#removechild)
* [removeComponent](_seinjs_.audio.systemactor.md#removecomponent)
* [removeFromParent](_seinjs_.audio.systemactor.md#removefromparent)
* [removeSource](_seinjs_.audio.systemactor.md#removesource)
* [rename](_seinjs_.audio.systemactor.md#rename)
* [resume](_seinjs_.audio.systemactor.md#resume)
* [serialize](_seinjs_.audio.systemactor.md#serialize)
* [setListener](_seinjs_.audio.systemactor.md#setlistener)
* [start](_seinjs_.audio.systemactor.md#start)
* [unLink](_seinjs_.audio.systemactor.md#unlink)
* [verifyAdding](_seinjs_.audio.systemactor.md#verifyadding)
* [verifyRemoving](_seinjs_.audio.systemactor.md#verifyremoving)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new SystemActor**(name: *`string`*, game: *`Game`*, initOptions?: *`IOptionTypes`*): [SystemActor](_seinjs_.audio.systemactor.md)

*Inherited from Actor.__constructor*

*Overrides SObject.__constructor*

*Defined in /Users/dtysky/Projects/Sein.js/lib/seinjs.d.ts:1320*

构造Actor，**不可自行构造！！！**请参见`game.addActor`或`world.addActor`方法。

**Parameters:**

| Name | Type |
| ------ | ------ |
| name | `string` |
| game | `Game` |
| `Optional` initOptions | `IOptionTypes` |

**Returns:** [SystemActor](_seinjs_.audio.systemactor.md)

___

## Properties

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
<a id="emitcomponentsdestroy"></a>

###  emitComponentsDestroy

**● emitComponentsDestroy**: *`boolean`*

*Inherited from Actor.emitComponentsDestroy*

*Defined in /Users/dtysky/Projects/Sein.js/lib/seinjs.d.ts:1307*

在Actor自身销毁时，是否同时需要触发其下挂载的所有Component的销毁，也就是`onDestroy`生命周期的调用。 用于性能优化。

___
<a id="event"></a>

###  event

**● event**: *`TRootComponent["event"]`*

*Inherited from Actor.event*

*Defined in /Users/dtysky/Projects/Sein.js/lib/seinjs.d.ts:1336*

Actor自身范围内的事件系统管理器，将会直接代理到其的根组件`root`。

___
<a id="isactor"></a>

###  isActor

**● isActor**: *`boolean`*

*Inherited from Actor.isActor*

*Defined in /Users/dtysky/Projects/Sein.js/lib/seinjs.d.ts:1293*

___
<a id="isaudiosystemactor"></a>

###  isAudioSystemActor

**● isAudioSystemActor**: *`boolean`* = true

*Inherited from [SystemActor](systemactor.md).[isAudioSystemActor](systemactor.md#isaudiosystemactor)*

*Defined in SystemActor.ts:37*

___
<a id="isinfoactor"></a>

###  isInfoActor

**● isInfoActor**: *`boolean`*

*Inherited from InfoActor.isInfoActor*

*Defined in /Users/dtysky/Projects/Sein.js/lib/seinjs.d.ts:2888*

___
<a id="issobject"></a>

###  isSObject

**● isSObject**: *`boolean`*

*Inherited from SObject.isSObject*

*Defined in /Users/dtysky/Projects/Sein.js/lib/seinjs.d.ts:1202*

一个实例是否为SObject的判据。

___
<a id="issystemactor"></a>

###  isSystemActor

**● isSystemActor**: *`boolean`*

*Inherited from SystemActor.isSystemActor*

*Defined in /Users/dtysky/Projects/Sein.js/lib/seinjs.d.ts:3017*

___
<a id="linked"></a>

###  linked

**● linked**: *`boolean`*

*Inherited from Actor.linked*

*Defined in /Users/dtysky/Projects/Sein.js/lib/seinjs.d.ts:1332*

Actor是否被连接到了舞台上。

___
<a id="name"></a>

###  name

**● name**: *`SName`*

*Inherited from SObject.name*

*Defined in /Users/dtysky/Projects/Sein.js/lib/seinjs.d.ts:1206*

实例的名字。

___
<a id="parent"></a>

###  parent

**● parent**: *`Game`<`StateActor`<`__type`>> \| `Level`<`StateActor`<`__type`>> \| `World`<`StateActor`<`__type`>> \| `ChildActorComponent`<`Actor`<`__type`, `Component`<`any`>>>*

*Inherited from Actor.parent*

*Defined in /Users/dtysky/Projects/Sein.js/lib/seinjs.d.ts:1328*

获取自身的父级实例，根据情况不同可能有不同的类型，一般不需要自己使用。

___
<a id="root"></a>

###  root

**● root**: *`TRootComponent`*

*Inherited from Actor.root*

*Defined in /Users/dtysky/Projects/Sein.js/lib/seinjs.d.ts:1340*

Actor自身的根组件。一般来讲创建后就不会变更。

___
<a id="tag"></a>

###  tag

**● tag**: *`SName`*

*Inherited from Actor.tag*

*Defined in /Users/dtysky/Projects/Sein.js/lib/seinjs.d.ts:1311*

用于给Actor归类的标签，可以用于后续的快速索引。

___
<a id="updateonevertick"></a>

###  updateOnEverTick

**● updateOnEverTick**: *`boolean`*

*Inherited from Actor.updateOnEverTick*

*Defined in /Users/dtysky/Projects/Sein.js/lib/seinjs.d.ts:1302*

Actor是否需要在每一帧进行进行`update`调用，如果为`false`，则将不会触发`onUpdate`生命周期（包括挂载在其下的所有Component）。 用于性能优化。

___
<a id="updatepriority"></a>

###  updatePriority

**● updatePriority**: *`number`*

*Inherited from SystemActor.updatePriority*

*Overrides InfoActor.updatePriority*

*Defined in /Users/dtysky/Projects/Sein.js/lib/seinjs.d.ts:3018*

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
<a id="update_priority"></a>

### `<Static>` UPDATE_PRIORITY

**● UPDATE_PRIORITY**: *`object`*

*Inherited from InfoActor.UPDATE_PRIORITY*

*Defined in /Users/dtysky/Projects/Sein.js/lib/seinjs.d.ts:2881*

默认的更新优先级。

*__member__*: System 约定占用1000 ~ 2000

*__member__*: GameMode 约定占用2000 ~ 3000

*__member__*: LevelScript 约定占用3000 ~ 4000

*__member__*: State 约定占用4000 ~ 5000

*__member__*: Others 其他，默认直接追加到最后

#### Type declaration

 GameMode: `number`

 LevelScript: `number`

 Others: `number`

 State: `number`

 System: `number`

___

## Accessors

<a id="closed"></a>

###  closed

**get closed**(): `boolean`

*Inherited from [SystemActor](systemactor.md).[closed](systemactor.md#closed)*

*Defined in SystemActor.ts:87*

是否已经关闭

**Returns:** `boolean`

___
<a id="context"></a>

###  context

**get context**(): `AudioContext`

*Inherited from [SystemActor](systemactor.md).[context](systemactor.md#context)*

*Defined in SystemActor.ts:45*

**Returns:** `AudioContext`

___
<a id="listener"></a>

###  listener

**get listener**(): [ListenerComponent](listenercomponent.md)

*Inherited from [SystemActor](systemactor.md).[listener](systemactor.md#listener)*

*Defined in SystemActor.ts:66*

当前的监听器。

**Returns:** [ListenerComponent](listenercomponent.md)

___
<a id="running"></a>

###  running

**get running**(): `boolean`

*Inherited from [SystemActor](systemactor.md).[running](systemactor.md#running)*

*Defined in SystemActor.ts:80*

是否正在运行

**Returns:** `boolean`

___
<a id="sources"></a>

###  sources

**get sources**(): [SourceComponent](sourcecomponent.md)[]

*Inherited from [SystemActor](systemactor.md).[sources](systemactor.md#sources)*

*Defined in SystemActor.ts:73*

当前所有的音频源。

**Returns:** [SourceComponent](sourcecomponent.md)[]

___
<a id="volume"></a>

###  volume

**get volume**(): `number`

**set volume**(value: *`number`*): `void`

*Inherited from [SystemActor](systemactor.md).[volume](systemactor.md#volume)*

*Defined in SystemActor.ts:59*

设置全局音量。

**Returns:** `number`

*Inherited from [SystemActor](systemactor.md).[volume](systemactor.md#volume)*

*Defined in SystemActor.ts:52*

设置全局音量。

**Parameters:**

| Name | Type |
| ------ | ------ |
| value | `number` |

**Returns:** `void`

___

## Methods

<a id="addchild"></a>

###  addChild

▸ **addChild**(actor: *`Actor`*): `void`

*Inherited from Actor.addChild*

*Defined in /Users/dtysky/Projects/Sein.js/lib/seinjs.d.ts:1471*

将一个Actor作为自身的子级，注意子级Actor将仍然存在于`game`或者`world`中，并拥有自身独立的生命周期，这里只是建立了一个连接关系。 如果父子为`SceneActor`，那么这层链接关系还会反映到渲染层。

**Parameters:**

| Name | Type |
| ------ | ------ |
| actor | `Actor` |

**Returns:** `void`

___
<a id="addcomponent"></a>

###  addComponent

▸ **addComponent**<`IComponent`>(name: *`string`*, ComponentClass: *`TConstructor`<`IComponent`>*, initState?: *`IComponent["STATE_TYPE"]`*, parent?: *`SceneComponent`*): `IComponent`

*Inherited from Actor.addComponent*

*Defined in /Users/dtysky/Projects/Sein.js/lib/seinjs.d.ts:1458*

根据指定的`ComponentClass`和其初始化参数`initState`来添加一个Component。**注意这里要求每个Component的名字`name`是唯一的**。 如果是在`world`中添加一个`SceneComponent`，你可以指定一个`parent`作为要添加的Component的父级，让它们在渲染层连接起来。

**Type parameters:**

#### IComponent :  `Component`<`any`>
**Parameters:**

| Name | Type |
| ------ | ------ |
| name | `string` |
| ComponentClass | `TConstructor`<`IComponent`> |
| `Optional` initState | `IComponent["STATE_TYPE"]` |
| `Optional` parent | `SceneComponent` |

**Returns:** `IComponent`

___
<a id="addsource"></a>

###  addSource

▸ **addSource**(source: *[SourceComponent](sourcecomponent.md)*): `void`

*Inherited from [SystemActor](systemactor.md).[addSource](systemactor.md#addsource)*

*Defined in SystemActor.ts:94*

**不要自己调用！！！**

**Parameters:**

| Name | Type |
| ------ | ------ |
| source | [SourceComponent](sourcecomponent.md) |

**Returns:** `void`

___
<a id="clone"></a>

###  clone

▸ **clone**(object: *`this`*): `this`

*Inherited from SObject.clone*

*Defined in /Users/dtysky/Projects/Sein.js/lib/seinjs.d.ts:1234*

克隆一个实例，交由子类实现。

**Parameters:**

| Name | Type |
| ------ | ------ |
| object | `this` |

**Returns:** `this`

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
<a id="disablesource"></a>

###  disableSource

▸ **disableSource**(source: *[SourceComponent](sourcecomponent.md)*): `void`

*Inherited from [SystemActor](systemactor.md).[disableSource](systemactor.md#disablesource)*

*Defined in SystemActor.ts:109*

**不要自己调用！！！**

**Parameters:**

| Name | Type |
| ------ | ------ |
| source | [SourceComponent](sourcecomponent.md) |

**Returns:** `void`

___
<a id="enablesource"></a>

###  enableSource

▸ **enableSource**(source: *[SourceComponent](sourcecomponent.md)*): `void`

*Inherited from [SystemActor](systemactor.md).[enableSource](systemactor.md#enablesource)*

*Defined in SystemActor.ts:102*

**不要自己调用！！！**

**Parameters:**

| Name | Type |
| ------ | ------ |
| source | [SourceComponent](sourcecomponent.md) |

**Returns:** `void`

___
<a id="findcomponentbyclass"></a>

###  findComponentByClass

▸ **findComponentByClass**<`TComponent`>(ComponentClass: *`TConstructor`<`TComponent`>*): `TComponent`

*Inherited from Actor.findComponentByClass*

*Defined in /Users/dtysky/Projects/Sein.js/lib/seinjs.d.ts:1485*

根据某个类查找一个Component。

**Type parameters:**

#### TComponent :  `Component`
**Parameters:**

| Name | Type |
| ------ | ------ |
| ComponentClass | `TConstructor`<`TComponent`> |

**Returns:** `TComponent`

___
<a id="findcomponentbyfilter"></a>

###  findComponentByFilter

▸ **findComponentByFilter**<`TComponent`>(filter: *`function`*): `TComponent`

*Inherited from Actor.findComponentByFilter*

*Defined in /Users/dtysky/Projects/Sein.js/lib/seinjs.d.ts:1493*

通过一个Filter来查找组件。

**Type parameters:**

#### TComponent :  `Component`
**Parameters:**

| Name | Type |
| ------ | ------ |
| filter | `function` |

**Returns:** `TComponent`

___
<a id="findcomponentbyname"></a>

###  findComponentByName

▸ **findComponentByName**<`TComponent`>(name: *`string`*): `TComponent`

*Inherited from Actor.findComponentByName*

*Defined in /Users/dtysky/Projects/Sein.js/lib/seinjs.d.ts:1481*

根据名字查找一个Component。

**Type parameters:**

#### TComponent :  `Component`
**Parameters:**

| Name | Type |
| ------ | ------ |
| name | `string` |

**Returns:** `TComponent`

___
<a id="findcomponentsbyclass"></a>

###  findComponentsByClass

▸ **findComponentsByClass**<`TComponent`>(ComponentClass: *`TConstructor`<`TComponent`>*): `TComponent`[]

*Inherited from Actor.findComponentsByClass*

*Defined in /Users/dtysky/Projects/Sein.js/lib/seinjs.d.ts:1489*

查找某个类的所有实例Component。

**Type parameters:**

#### TComponent :  `Component`
**Parameters:**

| Name | Type |
| ------ | ------ |
| ComponentClass | `TConstructor`<`TComponent`> |

**Returns:** `TComponent`[]

___
<a id="findcomponentsbyfilter"></a>

###  findComponentsByFilter

▸ **findComponentsByFilter**<`TComponent`>(filter: *`function`*): `TComponent`[]

*Inherited from Actor.findComponentsByFilter*

*Defined in /Users/dtysky/Projects/Sein.js/lib/seinjs.d.ts:1497*

通过一个Filter来查找所有。

**Type parameters:**

#### TComponent :  `Component`
**Parameters:**

| Name | Type |
| ------ | ------ |
| filter | `function` |

**Returns:** `TComponent`[]

___
<a id="getgame"></a>

###  getGame

▸ **getGame**<`IGameState`>(): `Game`<`IGameState`>

*Inherited from Actor.getGame*

*Defined in /Users/dtysky/Projects/Sein.js/lib/seinjs.d.ts:1432*

获取当前`Game`实例。

*__template__*: IGameState 当前游戏状态管理器的类型。

**Type parameters:**

#### IGameState :  `StateActor`

**Returns:** `Game`<`IGameState`>

___
<a id="getlevel"></a>

###  getLevel

▸ **getLevel**<`ILevelState`>(): `Level`<`ILevelState`>

*Inherited from Actor.getLevel*

*Defined in /Users/dtysky/Projects/Sein.js/lib/seinjs.d.ts:1444*

获取当前`Level`实例。

*__template__*: ILevelState 当前关卡状态管理器的类型。

**Type parameters:**

#### ILevelState :  `StateActor`

**Returns:** `Level`<`ILevelState`>

___
<a id="getphysicworld"></a>

###  getPhysicWorld

▸ **getPhysicWorld**(): `IPhysicWorld`

*Inherited from Actor.getPhysicWorld*

*Defined in /Users/dtysky/Projects/Sein.js/lib/seinjs.d.ts:1449*

仅在初始化了物理引擎之后，用于获取当前物理世界`PhysicWorld`实例。 如何使用物理引擎请见**Guide**和**Demo**。

**Returns:** `IPhysicWorld`

___
<a id="getworld"></a>

###  getWorld

▸ **getWorld**<`IWorldState`>(): `World`<`IWorldState`>

*Inherited from Actor.getWorld*

*Defined in /Users/dtysky/Projects/Sein.js/lib/seinjs.d.ts:1438*

获取当前`World`实例。

*__template__*: IWorldState 当前世界状态管理器的类型。

**Type parameters:**

#### IWorldState :  `StateActor`

**Returns:** `World`<`IWorldState`>

___
<a id="onadd"></a>

###  onAdd

▸ **onAdd**(): `void`

*Inherited from [SystemActor](systemactor.md).[onAdd](systemactor.md#onadd)*

*Overrides Actor.onAdd*

*Defined in SystemActor.ts:198*

加入游戏，继承请先`super.onAdd()`。

**Returns:** `void`

___
<a id="oncreateroot"></a>

###  onCreateRoot

▸ **onCreateRoot**(initOptions: *`IOptionTypes`*): `TRootComponent`

*Inherited from Actor.onCreateRoot*

*Defined in /Users/dtysky/Projects/Sein.js/lib/seinjs.d.ts:1357*

生命周期，将在Actor被创建时最先调用，用于创建从属于该Actor的根组件。 在原生Actor中均有默认值，你可以用此周期来定义你自己的Actor。

**Parameters:**

| Name | Type |
| ------ | ------ |
| initOptions | `IOptionTypes` |

**Returns:** `TRootComponent`

___
<a id="ondestroy"></a>

###  onDestroy

▸ **onDestroy**(): `void`

*Inherited from [SystemActor](systemactor.md).[onDestroy](systemactor.md#ondestroy)*

*Overrides Actor.onDestroy*

*Defined in SystemActor.ts:248*

销毁，继承请先`super.onDestroy()`。

**Returns:** `void`

___
<a id="onerror"></a>

###  onError

▸ **onError**(error: *`BaseException`*, details?: *`any`*): `boolean` \| `void`

*Inherited from Actor.onError*

*Defined in /Users/dtysky/Projects/Sein.js/lib/seinjs.d.ts:1375*

生命周期，用于错误边界处理。将在游戏中大部分可预知错误发生时被调用（通常是生命周期中的非异步错误）。 错误将会根据一定的路径向上传递，一直到`Engine`的层次，你可以在确保完美处理了问题后返回`true`来通知引擎不再向上传递。 当然你也可以将自定义的一些错误加入错误边界机制中，详见[Exception](../../guide/exception)。

**Parameters:**

| Name | Type |
| ------ | ------ |
| error | `BaseException` |
| `Optional` details | `any` |

**Returns:** `boolean` \| `void`

___
<a id="oninit"></a>

###  onInit

▸ **onInit**(): `void`

*Inherited from [SystemActor](systemactor.md).[onInit](systemactor.md#oninit)*

*Overrides Actor.onInit*

*Defined in SystemActor.ts:182*

初始化，继承请先`super.onInit()`。

**Returns:** `void`

___
<a id="onrelink"></a>

###  onReLink

▸ **onReLink**(parent: *`Actor` \| `World` \| `Game`*): `void`

*Inherited from Actor.onReLink*

*Defined in /Users/dtysky/Projects/Sein.js/lib/seinjs.d.ts:1385*

生命周期，将在调用`actor.reLink`方法后触发。

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| parent | `Actor` \| `World` \| `Game` |  要恢复连接到的父级。 |

**Returns:** `void`

___
<a id="onunlink"></a>

###  onUnLink

▸ **onUnLink**(): `void`

*Inherited from Actor.onUnLink*

*Defined in /Users/dtysky/Projects/Sein.js/lib/seinjs.d.ts:1379*

生命周期，将在调用`actor.unLink`方法后触发。

**Returns:** `void`

___
<a id="onupdate"></a>

###  onUpdate

▸ **onUpdate**(): `void`

*Inherited from [SystemActor](systemactor.md).[onUpdate](systemactor.md#onupdate)*

*Overrides Actor.onUpdate*

*Defined in SystemActor.ts:209*

每一帧更新，继承请先`super.onUpdate()`。

**Returns:** `void`

___
<a id="pause"></a>

###  pause

▸ **pause**(): `void`

*Inherited from [SystemActor](systemactor.md).[pause](systemactor.md#pause)*

*Defined in SystemActor.ts:164*

暂停所有Source

**Returns:** `void`

___
<a id="relink"></a>

###  reLink

▸ **reLink**(parent?: *`Actor` \| `World` \| `Game`*): `this`

*Inherited from Actor.reLink*

*Defined in /Users/dtysky/Projects/Sein.js/lib/seinjs.d.ts:1420*

将一个已经使用`unLink`方法和游戏世界断开连接的`actor`恢复连接，将其重新加入世界中。 这一般用于性能优化，比如对象池的创建。

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| `Optional` parent | `Actor` \| `World` \| `Game` |  指定要恢复连接到的父级，不指定则使用上一次的父级。 |

**Returns:** `this`

___
<a id="removechild"></a>

###  removeChild

▸ **removeChild**(actor: *`Actor`*): `void`

*Inherited from Actor.removeChild*

*Defined in /Users/dtysky/Projects/Sein.js/lib/seinjs.d.ts:1476*

解除自身和一个子级Actor的链接。注意此方法也会直接将子级Actor从游戏中销毁！ 如果只是想要改变一个SceneActor的归属，请使用`SceneActor`下的`changeParent`方法。

**Parameters:**

| Name | Type |
| ------ | ------ |
| actor | `Actor` |

**Returns:** `void`

___
<a id="removecomponent"></a>

###  removeComponent

▸ **removeComponent**(name: *`string`*): `void`

▸ **removeComponent**(component: *`Component`*): `void`

*Inherited from Actor.removeComponent*

*Defined in /Users/dtysky/Projects/Sein.js/lib/seinjs.d.ts:1462*

通过名字移除一个Component。

**Parameters:**

| Name | Type |
| ------ | ------ |
| name | `string` |

**Returns:** `void`

*Inherited from Actor.removeComponent*

*Defined in /Users/dtysky/Projects/Sein.js/lib/seinjs.d.ts:1466*

移除一个指定的Component。

**Parameters:**

| Name | Type |
| ------ | ------ |
| component | `Component` |

**Returns:** `void`

___
<a id="removefromparent"></a>

###  removeFromParent

▸ **removeFromParent**(): `void`

*Inherited from Actor.removeFromParent*

*Defined in /Users/dtysky/Projects/Sein.js/lib/seinjs.d.ts:1453*

将自己从父级移除，基本等同于`destroy`方法，从游戏中销毁自身。

**Returns:** `void`

___
<a id="removesource"></a>

###  removeSource

▸ **removeSource**(source: *[SourceComponent](sourcecomponent.md)*): `void`

*Inherited from [SystemActor](systemactor.md).[removeSource](systemactor.md#removesource)*

*Defined in SystemActor.ts:116*

**不要自己调用！！！**

**Parameters:**

| Name | Type |
| ------ | ------ |
| source | [SourceComponent](sourcecomponent.md) |

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
<a id="resume"></a>

###  resume

▸ **resume**(): `void`

*Inherited from [SystemActor](systemactor.md).[resume](systemactor.md#resume)*

*Defined in SystemActor.ts:173*

唤醒所有Source

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
<a id="setlistener"></a>

###  setListener

▸ **setListener**(listener: *[ListenerComponent](listenercomponent.md)*, gain?: *`GainNode`*): `void`

*Inherited from [SystemActor](systemactor.md).[setListener](systemactor.md#setlistener)*

*Defined in SystemActor.ts:130*

**不要自己调用！！！**

**Parameters:**

| Name | Type |
| ------ | ------ |
| listener | [ListenerComponent](listenercomponent.md) |
| `Optional` gain | `GainNode` |

**Returns:** `void`

___
<a id="start"></a>

###  start

▸ **start**(): `void`

*Inherited from [SystemActor](systemactor.md).[start](systemactor.md#start)*

*Defined in SystemActor.ts:154*

在无法自动播放的场合，比如移动设备，你可能需要在监听到用户的行为后，手动调用此方法来启动整个音频系统。

一般来讲系统会自动执行以上流程，如果实在不行则需要自行调用。

**Returns:** `void`

___
<a id="unlink"></a>

###  unLink

▸ **unLink**(): `this`

*Inherited from Actor.unLink*

*Defined in /Users/dtysky/Projects/Sein.js/lib/seinjs.d.ts:1413*

将一个已经创建的`actor`从游戏世界中移除，但仍然保留其状态。之后可以用`reLink`方法让其重新和游戏世界建立连接。 注意如果有子级`actor`，并不会自动`unLink`！ 这一般用于性能优化，比如对象池的创建。

**Returns:** `this`

___
<a id="verifyadding"></a>

###  verifyAdding

▸ **verifyAdding**(initOptions: *`IOptionTypes`*): `void`

*Inherited from Actor.verifyAdding*

*Defined in /Users/dtysky/Projects/Sein.js/lib/seinjs.d.ts:1346*

用于验证改Actor在当前状态是否可被添加，一般用于防止重复添加不可重复的系统Actor等。 你可以重写此方法来达成验证，如果验证不通过请抛出异常。 注意，此验证仅会在`development`环境下被执行！

**Parameters:**

| Name | Type |
| ------ | ------ |
| initOptions | `IOptionTypes` |

**Returns:** `void`

___
<a id="verifyremoving"></a>

###  verifyRemoving

▸ **verifyRemoving**(): `void`

*Inherited from [SystemActor](systemactor.md).[verifyRemoving](systemactor.md#verifyremoving)*

*Overrides Actor.verifyRemoving*

*Defined in SystemActor.ts:239*

验证是否允许移除，如果还有隶属于此系统的音频组件则不允许。 继承请先`super.verifyRemoving()`。

**Returns:** `void`

___

