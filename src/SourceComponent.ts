/**
 * @File   : SourceComponent.ts
 * @Author : dtysky (dtysky@outlook.com)
 * @Date   : 4/22/2019, 8:12:53 PM
 * @Description:
 */
import * as Sein from 'seinjs';
import Clip from './clip/Clip';
import SystemActor from './SystemActor';

/**
 * 空间音源的配置类型接口。
 * 
 * 详情可参照[PannerNode](https://developer.mozilla.org/en-US/docs/Web/API/PannerNode)。
 */
export interface ISourceSpaceOptions {
  panningModel?: PanningModelType;
  distanceModel?: DistanceModelType;
  refDistance?: number;
  maxDistance?: number;
  rolloffFactor?: number;
  coneInnerAngle?: number;
  coneOuterAngle?: number;
  coneOuterGain?: number;
}

/**
 * @hidden
 */
const DEFAULT_SPACE_OPTIONS: ISourceSpaceOptions = {
  panningModel: 'HRTF',
  distanceModel: 'linear',
  refDistance: 1,
  maxDistance: 10000,
  rolloffFactor: 1,
  coneInnerAngle: 360,
  coneOuterAngle: 0,
  coneOuterGain: 0
};

/**
 * 音频源组件的类型接口。
 */
export interface ISourceComponentStateTypes extends Sein.ISceneComponentState {
  /**
   * 需要添加到的音频系统。
   */
  system: SystemActor;
  /**
   * 是否是空间音源，以及其配置。
   */
  spaceOptions?: ISourceSpaceOptions;
  /**
   * 若是空间音源，是否是可旋转的，即是否同步朝向。
   */
  rotatable?: boolean;
  /**
   * 是否要自动播放以及配置。
   */
  autoPlay?: {loop?: boolean, start?: number, end?: number};
  /**
   * 可选的设置多个默认的Clip。
   */
  clips?: {name: string, clip: Clip, isDefault?: boolean}[];
}

/**
 * Clip事件的类型接口。
 */
export interface ISourceEvent {
  /**
   * 当前Clip名称。
   */
  name: string;
  /**
   * 当前Cip。
   */
  clip: Clip;
  /**
   * 当前影响的Actor。
   */
  actor: Sein.SceneActor;
}

/**
 * 判断一个实例是否为`SourceComponent`。
 */
export function isSourceComponent(value: Sein.SObject): value is SourceComponent {
  return (value as SourceComponent).isAudioSourceComponent;
}

/**
 * 判断一个实例是否为`SourceActor`。
 */
export function isSourceActor(value: Sein.SObject): value is Sein.SceneActor<ISourceComponentStateTypes, SourceComponent> {
  return (value as Sein.SceneActor<ISourceComponentStateTypes, SourceComponent>).root.isAudioSourceComponent;
}

/**
 * 音频源组件类。
 * 
 * @noInheritDoc
 */
@Sein.SClass({className: 'AudioSourceComponent'})
export default class SourceComponent extends Sein.SceneComponent<ISourceComponentStateTypes> {
  public isAudioSourceComponent = true;

  /**
   * 若是空间音源，是否是可旋转的，即是否同步朝向。
   */
  public rotatable: boolean = false;

  protected _gain: GainNode;
  protected _panner: PannerNode;
  protected _clips: {[name: string]: Clip} = {};
  protected _current: Clip = null;
  protected _default: string = null;
  protected _system: SystemActor;
  protected _event: Sein.EventManager<{
    Start: ISourceEvent,
    Pause: ISourceEvent,
    Resume: ISourceEvent,
    End: ISourceEvent
  }>;
  protected _disabled: boolean = false;

  /**
   * 开发者无需关心。
   * 
   * @hidden
   */
  get inNode(): AudioNode {
    return this._gain;
  }

  /**
   * 开发者无需关心。
   * 
   * @hidden
   */
  get outNode(): AudioNode {
    return this._panner || this._gain;
  }

  /**
   * 开发者无需关心。
   * 
   * @hidden
   */
  get system() {
    return this._system;
  }

  /**
   * SourceComponent的事件管理器。
   * 
   * ```ts
   * EventManager<{
   *  Start: ISourceEvent;
   *  Pause: ISourceEvent;
   *  Resume: ISourceEvent;
   *  End: ISourceEvent;
   * }>
   * ```
   */
  get event() {
    return this._event;
  }

  /**
   * 设置音量。
   */
  set volume(value: number) {
    this._gain.gain.value = value;
  }

  /**
   * 获取音量。
   */
  get volume() {
    return this._gain.gain.value;
  }

  /**
   * 若开启空间音频，可用于修改空间音频配置。
   */
  get spaceOption(): ISourceSpaceOptions {
    return this._panner;
  }

  /**
   * 获取当前Clip。
   */
  get current() {
    return this._current;
  }

  /**
   * 获取当前所有的Clip名字。
   */
  get clipNames() {
    return Object.keys(this._clips);
  }

  /**
   *
   * 该音频是否有效。
   */
  get disabled(): boolean {
    return this._disabled;
  }

  /**
   * 添加一个Clip。
   */
  public add(name: string, clip: Clip, isDefault?: boolean): this {
    clip.audioSource = this;
    clip.initialize();

    this._clips[name] = clip;

    if (isDefault || this._default === null) {
      this._default = name;
    }

    return this;
  }

  /**
   * 移除一个Clip。
   */
  public remove(name: string, clip: Clip, isDefault: boolean): this {
    if (this._current === clip) {
      Sein.Debug.warn(`Clip ${name} is using, stop it before removing !`);
      return this;
    }

    this._clips[name].destroy();
    delete this._clips[name];

    if (name === this._default) {
      this._default = this.clipNames[0] || null;
    }

    return this;
  }

  /**
   * 判断一个Clip是否在内。
   */
  public has(name: string): boolean {
    return !!this._clips[name];
  }

  /**
   * 获取Clip。
   */
  public get<TClip extends Clip = Clip>(name: string): TClip {
    if (!this._clips[name]) {
      Sein.Debug.warn(`Clip ${name} is not existed in ${this._owner && this._owner.name}`);
    }

    return this._clips[name] as TClip;
  }

  /**
   * 获取当前Clip。
   */
  public getCurrent<TClip extends Clip = Clip>(): TClip {
    return this._current as TClip;
  }

  /**
   * 通过名字和配置播放一个Clip，没有指定名字或为`null`则播放默认Clip。
   * 注意如果是`Buffer`模式且为`isLazy`的Clip，则播放请求会被缓存，**直到解码完毕时**才会开始播放。
   * 
   * @param options 播放配置，`loop`控制是否循环，`start`与`end`分别控制播放区间的开始和结束。
   */
  public play(name?: string, options?: {
    loop?: boolean,
    start?: number,
    end?: number
  }): this {
    if (this._disabled) {
      Sein.Debug.warn(`Audio ${this.name} in actor ${this._owner && this._owner.name} is disabled !`);
      return this;
    }

    options = options || {};
    name = name || this._default;

    if (!this.has(name)) {
      Sein.Debug.warn(`Clip ${name} is not added !`);
      return this;
    }

    this._current = this._clips[name];
    this._current.play(options.loop || false, options.start, options.end);

    return this;
  }

  /**
   * 暂停。
   */
  public pause() {
    if (!this._current) {
      return;
    }

    this._current.pause();
  }

  /**
   * 恢复。
   */
  public resume() {
    if (!this._current) {
      return;
    }

    this._current.resume();
  }

  /**
   * 停止。
   */
  public stop() {
    if (!this._current) {
      return;
    }

    this._current.stop();
    this._current = null;
  }

  /**
   * 将该音频重新开启。
   */
  public enable() {
    this._system.enableSource(this);
    this._disabled = false;
  }

  /**
   * 将该音频关闭。
   */
  public disable() {
    this._disabled = true;

    if (this._current) {
      this._current.stop();
    }

    this._system.disableSource(this);
  }

  /**
   * 验证是否允许添加，至少要有一个`Audio.SystemActor`才可以。
   * 继承请先`super.verifyAdding()`。
   */
  public verifyAdding() {
    const system = Sein.findActorByClass(this.getGame(), SystemActor);

    if (!system) {
      throw new Error(`Before using 'Source', you must add an 'Audio.SystemActor' to game !`);
    }
  }

  /**
   * 初始化，继承请先`super.onUpdate()`。
   */
  public onInit(initState: ISourceComponentStateTypes) {
    super.onInit(initState);
    this.rotatable = initState.rotatable;

    this._event.register('Start');
    this._event.register('End');
    this._event.register('Pause');
    this._event.register('Resume');

    const game = this.getGame();
    game.event.addOnce('GameWillPause', () => {
      if (this._current.paused) {
        return;
      }

      game.event.addOnce('GameDidResume', () => {
        this._current.resume();
      });

      this._current.pause();
    });
  }

  /**
   * 加入世界，继承请先`super.onUpdate()`。
   */
  public onAdd(initState: ISourceComponentStateTypes) {
    const {system, clips, autoPlay, spaceOptions} = initState;

    this._system = system;
    this._gain = system.context.createGain();

    if (spaceOptions) {
      this._panner = system.context.createPanner();

      for (const key in DEFAULT_SPACE_OPTIONS) {
        if (DEFAULT_SPACE_OPTIONS.hasOwnProperty(key)) {
          this._panner[key] = spaceOptions[key] || DEFAULT_SPACE_OPTIONS[key];
        }
      }

      this._gain.connect(this._panner);
      this.syncSpace();
    }

    system.addSource(this);

    if (clips) {
      const length = clips.length;
      for (let index = 0; index < length; index += 1) {
        const {name, clip, isDefault} = clips[index];
        this.add(name, clip, isDefault);
      }

      if (length && autoPlay) {
        this.play(null, autoPlay);
      }
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
   * 每一帧更新，继承请先`super.onUpdate()`。
   */
  public onUpdate(delta: number) {
    if (this._disabled) {
      return;
    }

    if (this._current) {
      this._current.update(delta);
    }

    if (this._owner.isStatic) {
      return;
    }

    this.syncSpace();
  }

  protected syncSpace() {
    const panner = this._panner;

    if (!this._panner) {
      return;
    }

    const {x, y, z} = this.absolutePosition;
    panner.setPosition(x, y, z);

    if (this.rotatable) {
      const {x: rx, y: ry, z: rz} = this.worldForwardVector;
      panner.setOrientation(rx, ry, rz);
    } else {
      panner.setOrientation(0, 0, 0);
    }
  }

  /**
   * 销毁，继承请先`super.onDestroy()`。
   */
  public onDestroy() {
    this._system.removeSource(this);
  }
}
