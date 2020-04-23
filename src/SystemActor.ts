/**
 * @File   : SystemActor.ts
 * @Author : dtysky (dtysky@outlook.com)
 * @Date   : 4/22/2019, 6:37:35 PM
 * @Description:
 */
import * as Sein from 'seinjs';
import SourceComponent from './SourceComponent';
import ListenerComponent from './ListenerComponent';

/**
 * 判断一个实例是否为`SystemActor`。
 */
export function isSystemActor(value: Sein.SObject): value is SystemActor {
  return (value as SystemActor).isAudioSystemActor;
}

/**
 * @hidden
 */
const UP = Sein.World.UP;

/**
 * @hidden
 */
const FORWARD = Sein.World.FORWARD;

/**
 * 音频系统Actor，用于控制整个游戏全局的音频。是使用音频系统的先决条件！
 * 
 * 你可以添加多个此Actor，但最多**不超过6个！**
 */
@Sein.SClass({className: 'AudioSystemActor'})
export default class SystemActor<
  IOptionTypes extends Object = {}
> extends Sein.SystemActor<IOptionTypes> {
  public isAudioSystemActor = true;

  protected _context: AudioContext;
  protected _gain: GainNode;
  protected _listener: ListenerComponent;
  protected _sources: SourceComponent[] = [];
  protected _connected: boolean = false;

  get context(): AudioContext {
    return this._context;
  }

  /**
   * 设置全局音量。
   */
  set volume(value: number) {
    this._gain.gain.value = value;
  }

  /**
   * 设置全局音量。
   */
  get volume() {
    return this._gain.gain.value;
  }

  /**
   * 当前的监听器。
   */
  get listener() {
    return this._listener;
  }

  /**
   * 当前所有的音频源。
   */
  get sources() {
    return this._sources;
  }

  /**
   * 是否正在运行
  */
  get running() {
    return this._context.state === 'running';
  }

  /**
   * 是否已经关闭
  */
  get closed() {
    return this._context.state === 'closed';
  }

  /**
   * **不要自己调用！！！**
   */
  public addSource(source: SourceComponent) {
    this._sources.push(source);
    source.outNode.connect(this._gain);
  }

  /**
   * **不要自己调用！！！**
   */
  public enableSource(source: SourceComponent) {
    source.outNode.connect(this._gain);
  }

  /**
   * **不要自己调用！！！**
   */
  public disableSource(source: SourceComponent) {
    source.outNode.disconnect(this._gain);
  }

  /**
   * **不要自己调用！！！**
   */
  public removeSource(source: SourceComponent) {
    const index = this._sources.indexOf(source);

    if (index < 0) {
      return;
    }

    source.outNode.disconnect(this._gain);
    this._sources.splice(index, 1);
  }

  /**
   * **不要自己调用！！！**
   */
  public setListener(listener: ListenerComponent, gain?: GainNode) {
    if (this._connected) {
      const listenerGain = this._listener.gains[this.name.value];
      this._gain.disconnect(listenerGain);
      listenerGain.disconnect(this._context.destination);
    }

    this._listener = listener;

    if (!listener) {
      this._connected = false;
      return;
    }

    this._gain.connect(gain);
    gain.connect(this._context.destination);
    this._connected = true;
  }

  /**
   * 在无法自动播放的场合，比如移动设备，你可能需要在监听到用户的行为后，手动调用此方法来启动整个音频系统。
   * 
   * 一般来讲系统会自动执行以上流程，如果实在不行则需要自行调用。
   */
  public start() {
    // 'interrupted' is for iOS
    if (this._context.state === 'suspended' || (this._context.state as any) === 'interrupted') {
      this._context.resume();
    }
  }

  /**
   * 暂停所有Source
   */
  public pause() {
    if (this.running) {
      this._context.suspend();
    }
  }

  /**
   * 唤醒所有Source
   */
  public resume() {
    if (!this.running) {
      this._context.resume();
    }
  }

  /**
   * 初始化，继承请先`super.onInit()`。
   */
  public onInit() {
    const AudioContext = (window as any).AudioContext || (window as any).webkitAudioContext;
    this._context = new AudioContext();
    this._gain = this._context.createGain();

    let game = this.getGame();
    game.hid.addOnce('MouseClick', () => this.start());
    game.hid.addOnce('TouchEnd', () => this.start());
    game.event.addOnce('GameWillPause', () => {
      game.event.addOnce('GameDidResume', () => this.start());
    });
  }

  /**
   * 加入游戏，继承请先`super.onAdd()`。
   */
  public onAdd() {
    const preSystem = Sein.findActorByClass(this.getGame(), SystemActor);

    if (SystemActor) {
      this.setListener(preSystem.listener);
    }
  }

  /**
   * 每一帧更新，继承请先`super.onUpdate()`。
   */
  public onUpdate() {
    if (!this._listener) {
      return;
    }

    const {listener} = this._context;
    const {absolutePosition: pos} = this._listener;

    listener.setPosition(pos.x, pos.y, pos.z);

    let forward: Sein.Vector3;
    let up: Sein.Vector3;

    if (!this._listener.rotatable) {
      forward = FORWARD;
      up = UP;
    } else {
      const {absoluteRotation: rtt} = this._listener;
      const {forwardVector, upVector} = this.getWorld();
      forward = forwardVector.transformQuat(rtt);
      up = upVector.transformQuat(rtt);
    }

    listener.setOrientation(forward.x, forward.y, forward.z, up.x, up.y, up.z);
  }

  /**
   * 验证是否允许移除，如果还有隶属于此系统的音频组件则不允许。
   * 继承请先`super.verifyRemoving()`。
   */
  public verifyRemoving() {
    if (this._sources.length > 0) {
      throw new Error(`This audio system ${this.name} has been linked in ${this._sources.length} sources, you cannot remove it !`);
    }
  }

  /**
   * 销毁，继承请先`super.onDestroy()`。
   */
  public onDestroy() {
    this._gain.disconnect();
    this._context.close();
  }
}
