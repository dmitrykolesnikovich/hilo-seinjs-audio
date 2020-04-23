/**
 * @File   : ListenerComponent.ts
 * @Author : dtysky (dtysky@outlook.com)
 * @Date   : 4/22/2019, 6:37:56 PM
 * @Description:
 */
import * as Sein from 'seinjs';
import SystemActor from './SystemActor';

/**
 * 监听器组件的类型接口。
 */
export interface IListenerComponentStateTypes extends Sein.ISceneComponentState {
  /**
   * 此监听器是否是和旋转朝向相关的，如果不是，则无论父级如何旋转，都不会改变音频监听的朝向。
   * 
   * @default true
   */
  rotatable?: boolean;
}

/**
 * 判断一个实例是否为`ListenerComponent`。
 */
export function isListenerComponent(value: Sein.SObject): value is ListenerComponent {
  return (value as ListenerComponent).isAudioListenerComponent;
}

/**
 * 判断一个实例是否为`ListenerActor`。
 */
export function isListenerActor(value: Sein.SObject): value is Sein.SceneActor<IListenerComponentStateTypes, ListenerComponent> {
  return (value as Sein.SceneActor<IListenerComponentStateTypes, ListenerComponent>).root.isAudioListenerComponent;
}

/**
 * 音频源组件类。
 * 
 * @noInheritDoc
 */
@Sein.SClass({className: 'AudioListenerComponent'})
export default class ListenerComponent extends Sein.SceneComponent<IListenerComponentStateTypes> {
  public isAudioListenerComponent = true;

  /**
   * 此监听器是否是和旋转朝向相关的，如果不是，则无论父级如何旋转，都不会改变音频监听的朝向。
   */
  public rotatable: boolean = true;

  protected _gains: {[systemName: string]: GainNode};
  protected _preVolume: number = 1;

  /**
   * 开发者无需关心。
   * 
   * @hidden
   */
  get gains() {
    return this._gains;
  }

  /**
   * 设置监听器音量。
   */
  set volume(value: number) {
    Object.keys(this._gains).forEach(key => {
      this._gains[key].gain.value = value;
    });
  }

  /**
   * 获取监听器音量。
   */
  get volume() {
    const keys = Object.keys(this._gains);

    if (keys.length === 0) {
      return this._preVolume;
    }

    return this._gains[keys[0]].gain.value;
  }

  /**
   * 使其成为主监听器，默认将指定第一个添加的为主监听器。
   */
  public enable(): this {
    const systems = Sein.findActorsByClass(
      this.getGame(),
      SystemActor,
      (actor: Sein.SystemActor) => actor.updatePriority > Sein.SystemActor.UPDATE_PRIORITY.System
    );

    if (systems.length <= 0 || systems[0].listener === this) {
      return this;
    }

    this._gains = {};

    systems.forEach(system => {
      const gain = system.context.createGain();
      gain.gain.value = this._preVolume;
      system.setListener(this, gain);
      this._gains[system.name.value] = gain;
    });

    return this;
  }

  /**
   * 取消为主监听器，若不指定其他的监听器，将会使得音频失效。
   */
  public disable(): this {
    const systems = Sein.findActorsByClass(
      this.getGame(),
      SystemActor,
      (actor: Sein.SystemActor) => actor.updatePriority > Sein.SystemActor.UPDATE_PRIORITY.System
    );

    if (systems.length <= 0 || systems[0].listener !== this) {
      return this;
    }

    const keys = Object.keys(this._gains);
    if (keys.length !== 0) {
      this._preVolume = this._gains[keys[0]].gain.value;
    }

    systems.forEach(system => system.setListener(null));

    return this;
  }

  /**
   * 验证是否允许添加，至少要有一个`Audio.SystemActor`才可以。
   */
  public verifyAdding() {
    const system = Sein.findActorByClass(this.getGame(), SystemActor);

    if (!system) {
      throw new Error(`Before using 'Listener', you must add an 'Audio.SystemActor' to game !`);
    }
  }

  /**
   * 加入世界，继承请先`super.onUpdate()`。
   */
  public onAdd(initState: IListenerComponentStateTypes) {
    const system = Sein.findActorByClass(this.getGame(), SystemActor);

    this.rotatable = initState.rotatable === false ? false : true;

    if (!system.listener) {
      this.enable();
    }
  }

  /**
   * 继承请先`super.onUnLink()`。
   */
  public onUnLink() {
    this.disable();
  }

  /**
   * 继承请先`super.onReLink()`。
   */
  public onReLink() {
    this.enable();
  }

  /**
   * 销毁，继承请先`super.onDestroy()`。
   */
  public onDestroy() {
    this.disable();
  }
}
