[seinjs-audio](../README.md) > ["seinjs"](../modules/_seinjs_.md) > [Audio](../modules/_seinjs_.audio.md) > [SourceActor](../classes/_seinjs_.audio.sourceactor.md)

# Class: SourceActor

## Hierarchy

↳  [SourceActor](sourceactor.md)

**↳ SourceActor**

## Implements

* `ISceneActor`<[ISourceComponentStateTypes](../interfaces/isourcecomponentstatetypes.md), [SourceComponent](sourcecomponent.md)>

## Index

### Constructors

* [constructor](_seinjs_.audio.sourceactor.md#constructor)

### Properties

* [animator](_seinjs_.audio.sourceactor.md#animator)
* [className](_seinjs_.audio.sourceactor.md#classname)
* [classType](_seinjs_.audio.sourceactor.md#classtype)
* [emitComponentsDestroy](_seinjs_.audio.sourceactor.md#emitcomponentsdestroy)
* [event](_seinjs_.audio.sourceactor.md#event)
* [isActor](_seinjs_.audio.sourceactor.md#isactor)
* [isSObject](_seinjs_.audio.sourceactor.md#issobject)
* [isSceneActor](_seinjs_.audio.sourceactor.md#issceneactor)
* [isStatic](_seinjs_.audio.sourceactor.md#isstatic)
* [layers](_seinjs_.audio.sourceactor.md#layers)
* [linked](_seinjs_.audio.sourceactor.md#linked)
* [name](_seinjs_.audio.sourceactor.md#name)
* [needReleaseGlRes](_seinjs_.audio.sourceactor.md#needreleaseglres)
* [parent](_seinjs_.audio.sourceactor.md#parent)
* [persistent](_seinjs_.audio.sourceactor.md#persistent)
* [rigidBody](_seinjs_.audio.sourceactor.md#rigidbody)
* [root](_seinjs_.audio.sourceactor.md#root)
* [tag](_seinjs_.audio.sourceactor.md#tag)
* [transform](_seinjs_.audio.sourceactor.md#transform)
* [updateOnEverTick](_seinjs_.audio.sourceactor.md#updateonevertick)
* [uuid](_seinjs_.audio.sourceactor.md#uuid)
* [visible](_seinjs_.audio.sourceactor.md#visible)
* [CLASS_NAME](_seinjs_.audio.sourceactor.md#class_name)
* [CLASS_TYPE](_seinjs_.audio.sourceactor.md#class_type)

### Accessors

* [audio](_seinjs_.audio.sourceactor.md#audio)

### Methods

* [addChild](_seinjs_.audio.sourceactor.md#addchild)
* [addComponent](_seinjs_.audio.sourceactor.md#addcomponent)
* [changeParent](_seinjs_.audio.sourceactor.md#changeparent)
* [clone](_seinjs_.audio.sourceactor.md#clone)
* [deserialize](_seinjs_.audio.sourceactor.md#deserialize)
* [findComponentByClass](_seinjs_.audio.sourceactor.md#findcomponentbyclass)
* [findComponentByFilter](_seinjs_.audio.sourceactor.md#findcomponentbyfilter)
* [findComponentByName](_seinjs_.audio.sourceactor.md#findcomponentbyname)
* [findComponentsByClass](_seinjs_.audio.sourceactor.md#findcomponentsbyclass)
* [findComponentsByFilter](_seinjs_.audio.sourceactor.md#findcomponentsbyfilter)
* [getBounds](_seinjs_.audio.sourceactor.md#getbounds)
* [getController](_seinjs_.audio.sourceactor.md#getcontroller)
* [getGame](_seinjs_.audio.sourceactor.md#getgame)
* [getLevel](_seinjs_.audio.sourceactor.md#getlevel)
* [getPhysicWorld](_seinjs_.audio.sourceactor.md#getphysicworld)
* [getWorld](_seinjs_.audio.sourceactor.md#getworld)
* [lookAt](_seinjs_.audio.sourceactor.md#lookat)
* [onAdd](_seinjs_.audio.sourceactor.md#onadd)
* [onCreateRoot](_seinjs_.audio.sourceactor.md#oncreateroot)
* [onDestroy](_seinjs_.audio.sourceactor.md#ondestroy)
* [onError](_seinjs_.audio.sourceactor.md#onerror)
* [onInit](_seinjs_.audio.sourceactor.md#oninit)
* [onInstantiate](_seinjs_.audio.sourceactor.md#oninstantiate)
* [onReLink](_seinjs_.audio.sourceactor.md#onrelink)
* [onUnLink](_seinjs_.audio.sourceactor.md#onunlink)
* [onUpdate](_seinjs_.audio.sourceactor.md#onupdate)
* [reLink](_seinjs_.audio.sourceactor.md#relink)
* [removeChild](_seinjs_.audio.sourceactor.md#removechild)
* [removeComponent](_seinjs_.audio.sourceactor.md#removecomponent)
* [removeFromParent](_seinjs_.audio.sourceactor.md#removefromparent)
* [rename](_seinjs_.audio.sourceactor.md#rename)
* [serialize](_seinjs_.audio.sourceactor.md#serialize)
* [unLink](_seinjs_.audio.sourceactor.md#unlink)
* [verifyAdding](_seinjs_.audio.sourceactor.md#verifyadding)
* [verifyRemoving](_seinjs_.audio.sourceactor.md#verifyremoving)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new SourceActor**(name: *`string`*, game: *`Game`*, initOptions?: *[ISourceComponentStateTypes](../interfaces/isourcecomponentstatetypes.md)*): [SourceActor](_seinjs_.audio.sourceactor.md)

*Inherited from Actor.__constructor*

*Overrides SObject.__constructor*

*Defined in /Users/dtysky/Projects/Sein.js/lib/seinjs.d.ts:1320*

构造Actor，**不可自行构造！！！**请参见`game.addActor`或`world.addActor`方法。

**Parameters:**

| Name | Type |
| ------ | ------ |
| name | `string` |
| game | `Game` |
| `Optional` initOptions | [ISourceComponentStateTypes](../interfaces/isourcecomponentstatetypes.md) |

**Returns:** [SourceActor](_seinjs_.audio.sourceactor.md)

___

## Properties

<a id="animator"></a>

###  animator

**● animator**: *`AnimatorComponent`<`object`>*

*Inherited from SceneActor.animator*

*Defined in /Users/dtysky/Projects/Sein.js/lib/seinjs.d.ts:4775*

获取自身的动画组件实例引用，需要有模型动画或自己创建，详见[AnimatorComponent](../animatorcomponent)。

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
<a id="issobject"></a>

###  isSObject

**● isSObject**: *`boolean`*

*Inherited from SObject.isSObject*

*Defined in /Users/dtysky/Projects/Sein.js/lib/seinjs.d.ts:1202*

一个实例是否为SObject的判据。

___
<a id="issceneactor"></a>

###  isSceneActor

**● isSceneActor**: *`boolean`*

*Inherited from SceneActor.isSceneActor*

*Defined in /Users/dtysky/Projects/Sein.js/lib/seinjs.d.ts:4750*

___
<a id="isstatic"></a>

###  isStatic

**● isStatic**: *`boolean`*

*Inherited from SceneActor.isStatic*

*Defined in /Users/dtysky/Projects/Sein.js/lib/seinjs.d.ts:4789*

获取是否为静态对象，代理到根组件的同属性。详见`SceneComponent`的同属性。

___
<a id="layers"></a>

###  layers

**● layers**: *`Layers`*

*Inherited from SceneActor.layers*

*Defined in /Users/dtysky/Projects/Sein.js/lib/seinjs.d.ts:4781*

图层属性，详见[Layers](../layers)。

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
<a id="needreleaseglres"></a>

###  needReleaseGlRes

**● needReleaseGlRes**: *`boolean`*

*Inherited from SceneActor.needReleaseGlRes*

*Defined in /Users/dtysky/Projects/Sein.js/lib/seinjs.d.ts:4793*

代理到根节点的同名属性，决定其下所有SceneComponent销毁时是否要同时释放Gl资源。

___
<a id="parent"></a>

###  parent

**● parent**: *`Level` \| `ChildActorComponent`<`SceneActor`>*

*Inherited from SceneActor.parent*

*Overrides Actor.parent*

*Defined in /Users/dtysky/Projects/Sein.js/lib/seinjs.d.ts:4763*

获取自身的父级实例，根据情况不同可能有不同的类型，一般不需要自己使用。

___
<a id="persistent"></a>

###  persistent

**● persistent**: *`boolean`*

*Inherited from SceneActor.persistent*

*Defined in /Users/dtysky/Projects/Sein.js/lib/seinjs.d.ts:4754*

指定此实例是否为**持久的**，如果是，则此实例可以在关卡切换时被继承，或者在特殊状况时再世界切换时被继承。

___
<a id="rigidbody"></a>

###  rigidBody

**● rigidBody**: *`RigidBodyComponent`*

*Inherited from SceneActor.rigidBody*

*Defined in /Users/dtysky/Projects/Sein.js/lib/seinjs.d.ts:4771*

获取自身的刚体组件实例引用，需要开启物理引擎并初始化刚体，详见[RigidBodyComponent](../rigidbodycomponent)。

___
<a id="root"></a>

###  root

**● root**: *[SourceComponent](sourcecomponent.md)*

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
<a id="transform"></a>

###  transform

**● transform**: *[SourceComponent](sourcecomponent.md)*

*Inherited from SceneActor.transform*

*Defined in /Users/dtysky/Projects/Sein.js/lib/seinjs.d.ts:4767*

获取自身的`transform`实例引用，本质上是根组件的一个代理。

___
<a id="updateonevertick"></a>

###  updateOnEverTick

**● updateOnEverTick**: *`boolean`*

*Inherited from Actor.updateOnEverTick*

*Defined in /Users/dtysky/Projects/Sein.js/lib/seinjs.d.ts:1302*

Actor是否需要在每一帧进行进行`update`调用，如果为`false`，则将不会触发`onUpdate`生命周期（包括挂载在其下的所有Component）。 用于性能优化。

___
<a id="uuid"></a>

###  uuid

**● uuid**: *`number`*

*Inherited from SObject.uuid*

*Defined in /Users/dtysky/Projects/Sein.js/lib/seinjs.d.ts:1217*

所有继承自`SObject`的类的实例的唯一ID。

___
<a id="visible"></a>

###  visible

**● visible**: *`boolean`*

*Inherited from SceneActor.visible*

*Defined in /Users/dtysky/Projects/Sein.js/lib/seinjs.d.ts:4785*

获取是否可见，代理到根组件的同属性。详见`SceneComponent`的同属性。

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

<a id="audio"></a>

###  audio

**get audio**(): [SourceComponent](sourcecomponent.md)

*Inherited from [SourceActor](sourceactor.md).[audio](sourceactor.md#audio)*

*Defined in SourceActor.ts:23*

获取默认的音频源组件实例。

**Returns:** [SourceComponent](sourcecomponent.md)

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
<a id="changeparent"></a>

###  changeParent

▸ **changeParent**(parent: *`Level` \| `World` \| `SceneActor`*): `this`

*Inherited from SceneActor.changeParent*

*Defined in /Users/dtysky/Projects/Sein.js/lib/seinjs.d.ts:4844*

修改自身的父级实例，通常用于Actor的复用。 **注意修改了之后自身的渲染节点也会重新挂载！**

**Parameters:**

| Name | Type |
| ------ | ------ |
| parent | `Level` \| `World` \| `SceneActor` |

**Returns:** `this`

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
<a id="getbounds"></a>

###  getBounds

▸ **getBounds**(bounds?: *`Bounds`*, currentMatrix?: *`Matrix4`*): `Bounds`

*Inherited from SceneActor.getBounds*

*Defined in /Users/dtysky/Projects/Sein.js/lib/seinjs.d.ts:4821*

获取根组件的的包围盒(AABB)信息。

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| `Optional` bounds | `Bounds` |  当前计算的包围盒信息，可用于节省开销 |
| `Optional` currentMatrix | `Matrix4` |  当前计算的矩阵，可用于节省开销 |

**Returns:** `Bounds`

___
<a id="getcontroller"></a>

###  getController

▸ **getController**<`TController`>(): `TController`

*Inherited from SceneActor.getController*

*Defined in /Users/dtysky/Projects/Sein.js/lib/seinjs.d.ts:4815*

获取自身的`Controller`实例，涉及到玩家系统，详见[Player](./player)。

**Type parameters:**

#### TController :  `ControllerActor`

**Returns:** `TController`

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
<a id="lookat"></a>

###  lookAt

▸ **lookAt**(target: *`Vector3` \| `SceneActor` \| `SceneComponent`*): `this`

*Inherited from SceneActor.lookAt*

*Defined in /Users/dtysky/Projects/Sein.js/lib/seinjs.d.ts:4848*

修改自身的朝向，直接代理到根组件的同名方法。

**Parameters:**

| Name | Type |
| ------ | ------ |
| target | `Vector3` \| `SceneActor` \| `SceneComponent` |

**Returns:** `this`

___
<a id="onadd"></a>

###  onAdd

▸ **onAdd**(initOptions: *[ISourceComponentStateTypes](../interfaces/isourcecomponentstatetypes.md)*): `void`

*Inherited from Actor.onAdd*

*Defined in /Users/dtysky/Projects/Sein.js/lib/seinjs.d.ts:1365*

生命周期，将在Actor被正式加入到游戏中之后被调用。

**Parameters:**

| Name | Type |
| ------ | ------ |
| initOptions | [ISourceComponentStateTypes](../interfaces/isourcecomponentstatetypes.md) |

**Returns:** `void`

___
<a id="oncreateroot"></a>

###  onCreateRoot

▸ **onCreateRoot**(initState: *[ISourceComponentStateTypes](../interfaces/isourcecomponentstatetypes.md)*): [SourceComponent](sourcecomponent.md)

*Inherited from [SourceActor](sourceactor.md).[onCreateRoot](sourceactor.md#oncreateroot)*

*Overrides SceneActor.onCreateRoot*

*Defined in SourceActor.ts:16*

**Parameters:**

| Name | Type |
| ------ | ------ |
| initState | [ISourceComponentStateTypes](../interfaces/isourcecomponentstatetypes.md) |

**Returns:** [SourceComponent](sourcecomponent.md)

___
<a id="ondestroy"></a>

###  onDestroy

▸ **onDestroy**(): `void`

*Inherited from Actor.onDestroy*

*Overrides SObject.onDestroy*

*Defined in /Users/dtysky/Projects/Sein.js/lib/seinjs.d.ts:1389*

生命周期，将在Actor被销毁时触发。

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

▸ **onInit**(initOptions: *[ISourceComponentStateTypes](../interfaces/isourcecomponentstatetypes.md)*): `void`

*Inherited from Actor.onInit*

*Defined in /Users/dtysky/Projects/Sein.js/lib/seinjs.d.ts:1361*

生命周期，将在Actor创建了根组件后、在正式被添加到游戏中之前被调用。

**Parameters:**

| Name | Type |
| ------ | ------ |
| initOptions | [ISourceComponentStateTypes](../interfaces/isourcecomponentstatetypes.md) |

**Returns:** `void`

___
<a id="oninstantiate"></a>

###  onInstantiate

▸ **onInstantiate**(options: *[ISourceComponentStateTypes](../interfaces/isourcecomponentstatetypes.md)*): `void`

*Inherited from SceneActor.onInstantiate*

*Defined in /Users/dtysky/Projects/Sein.js/lib/seinjs.d.ts:4803*

专属于`SceneActor`的生命周期，一般用于从GlTF模型中实例化对象(使用`resource.instantiate`方法)的情景。 如果不是从资源中实例化的，将按顺序正常触发。 此回调将在真正完成实例化后被触发，时机在`onAdd`之后，确保实例已经完全就绪（包括世界矩阵的首次运算）。

**Parameters:**

| Name | Type |
| ------ | ------ |
| options | [ISourceComponentStateTypes](../interfaces/isourcecomponentstatetypes.md) |

**Returns:** `void`

___
<a id="onrelink"></a>

###  onReLink

▸ **onReLink**(parent: *`SceneActor` \| `World`*): `void`

*Inherited from SceneActor.onReLink*

*Overrides Actor.onReLink*

*Defined in /Users/dtysky/Projects/Sein.js/lib/seinjs.d.ts:4811*

重新链接，继承请先`super.onReLink()`。

**Parameters:**

| Name | Type |
| ------ | ------ |
| parent | `SceneActor` \| `World` |

**Returns:** `void`

___
<a id="onunlink"></a>

###  onUnLink

▸ **onUnLink**(): `void`

*Inherited from SceneActor.onUnLink*

*Overrides Actor.onUnLink*

*Defined in /Users/dtysky/Projects/Sein.js/lib/seinjs.d.ts:4807*

取消链接，继承请先`super.onUnLink()`。

**Returns:** `void`

___
<a id="onupdate"></a>

###  onUpdate

▸ **onUpdate**(delta: *`number`*): `void`

*Inherited from Actor.onUpdate*

*Defined in /Users/dtysky/Projects/Sein.js/lib/seinjs.d.ts:1369*

生命周期，将在Actor被正式加入到游戏中之后，并且`updateOnEverTick`为`true`时在每一帧被调用。

**Parameters:**

| Name | Type |
| ------ | ------ |
| delta | `number` |

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

▸ **verifyAdding**(initOptions: *[ISourceComponentStateTypes](../interfaces/isourcecomponentstatetypes.md)*): `void`

*Inherited from Actor.verifyAdding*

*Defined in /Users/dtysky/Projects/Sein.js/lib/seinjs.d.ts:1346*

用于验证改Actor在当前状态是否可被添加，一般用于防止重复添加不可重复的系统Actor等。 你可以重写此方法来达成验证，如果验证不通过请抛出异常。 注意，此验证仅会在`development`环境下被执行！

**Parameters:**

| Name | Type |
| ------ | ------ |
| initOptions | [ISourceComponentStateTypes](../interfaces/isourcecomponentstatetypes.md) |

**Returns:** `void`

___
<a id="verifyremoving"></a>

###  verifyRemoving

▸ **verifyRemoving**(): `void`

*Inherited from Actor.verifyRemoving*

*Defined in /Users/dtysky/Projects/Sein.js/lib/seinjs.d.ts:1352*

用于验证该Actor在当前状态是否可被移除。 你可以重写此方法来达成验证，如果验证不通过请抛出异常。 注意，此验证仅会在`development`环境下被执行！

**Returns:** `void`

___

