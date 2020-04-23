/**
 * @File   : Clip.ts
 * @Author : dtysky (dtysky@outlook.com)
 * @Date   : 4/23/2019, 10:29:13 AM
 * @Description:
 */
import * as Sein from 'seinjs';

import SourceComponent from '../SourceComponent';
import SystemActor from '../SystemActor';

export interface IClipStateTypes {
  isLazy: boolean;
}

/**
 * @hidden
 */
function nop() {}

@Sein.SClass({className: 'AudioClip'})
export default class Clip<IStateTypes extends IClipStateTypes = IClipStateTypes> extends Sein.SObject {
  public isAudioClip = true;
  /**
   * 当前从属的父级音频组件。
   */
  public audioSource: SourceComponent = null;

  public handleStart: (clip: Clip, actor: Sein.SceneActor) => any = nop;
  public handleEnd: (clip: Clip, actor: Sein.SceneActor) => any = nop;
  public handlePause: (clip: Clip, actor: Sein.SceneActor) => any = nop;
  public handleResume: (clip: Clip, actor: Sein.SceneActor) => any = nop;

  protected _initState: IStateTypes = null;

  constructor(initState: IStateTypes) {
    super();

    this._initState = initState;
  }

  /**
   * 获取自身的父级音频组件实例引用，一般不需要自己使用。
   */
  get parent(): SourceComponent {
    return this.audioSource;
  }

  /**
   * 获取自身的父级音频组件的Onwer实例引用。
   */
  get actor(): Sein.SceneActor {
    return this.audioSource.getOwner() as Sein.SceneActor;
  }

  /**
   * 当前从属的System。
   */
  get system(): SystemActor {
    return this.audioSource.system;
  }

  /**
   * 需要派生类实现，返回是否暂停。
   */
  get paused(): boolean {
    return false;
  }

  /**
   * 需要派生类实现，返回是否停止。
   */
  get stopt(): boolean {
    return false;
  }

  /**
   * 需要派生类实现，返回音频长度。
   */
  get duration(): number {
    return 0;
  }

  /**
   * 需要派生类实现，返回音频当前播放时间。
   */
  get currentTime(): number {
    return 0;
  }

  /**
   * 需要派生类实现，返回音频当前是否循环。
   */
  get loop(): boolean {
    return false;
  }

  /**
   * 需要派生类实现，返回音频当前播放区间。
   */
  get range(): number[] {
    return [0, 0];
  }

  /**
   * 获取当前`Game`实例。
   * 
   * @template IGameState 当前游戏状态管理器的类型。
   */
  public getGame<IGameState extends Sein.StateActor = Sein.StateActor>(): Sein.Game<IGameState> {
    return this.actor.getGame<IGameState>();
  }

  /**
   * 获取当前`World`实例。
   * 
   * @template IWorldState 当前世界状态管理器的类型。
   */
  public getWorld<IWorldState extends Sein.StateActor = Sein.StateActor>(): Sein.World<IWorldState> {
    return this.actor.getWorld<IWorldState>();
  }

  /**
   * 获取当前`Level`实例。
   * 
   * @template ILevelState 当前关卡状态管理器的类型。
   */
  public getLevel<ILevelState extends Sein.StateActor = Sein.StateActor>(): Sein.Level<ILevelState> {
    return this.actor.getLevel<ILevelState>();
  }

  /**
   * 生命周期，将在初始化时触发。
   */
  public onInit(initState: IStateTypes) {

  }

  /**
   * 生命周期，将在`play`时触发。
   */
  public onPlay(loop: boolean, from?: number, to?: number) {

  }

  /**
   * 生命周期，将在`pause`时触发。
   */
  public onPause() {

  }

  /**
   * 生命周期，将在`resume`时触发。
   */
  public onResume() {

  }

  /**
   * 生命周期，将在`stop`时触发。
   */
  public onStop() {

  }

  /**
   * 生命周期，将在每一帧`update`时触发。
   */
  public onUpdate(delta: number) {

  }

  /**
   * 生命周期，用于错误边界处理。将在游戏中大部分可预知错误发生时被调用（通常是生命周期中的非异步错误）。
   * 错误将会根据一定的路径向上传递，一直到`Engine`的层次，你可以在确保完美处理了问题后返回`true`来通知引擎不再向上传递。
   * 当然你也可以将自定义的一些错误加入错误边界机制中，详见[Exception](../../guide/exception)。
   */
  public onError(error: Sein.BaseException, details: any) {

  }

  /**
   * **不要自己调用！！**
   * 
   * @hidden
   */
  public initialize() {
    try {
      this.onInit(this._initState);
    } catch (error) {
      Sein.throwException(error, this);
    }
  }

  /**
   * **不要自己调用！！**
   * 
   * @hidden
   */
  public play(loop?: boolean, from?: number, to?: number) {
    try {
      this.onPlay(loop || false, from, to);
      this.handleStart(this, this.actor);
    } catch (error) {
      Sein.throwException(error, this);
    }
  }

  /**
   * **不要自己调用！！**
   * 
   * @hidden
   */
  public pause() {
    try {
      this.onPause();
      this.handlePause(this, this.actor);
    } catch (error) {
      Sein.throwException(error, this);
    }
  }

  /**
   * **不要自己调用！！**
   * 
   * @hidden
   */
  public resume() {
    try {
      this.onResume();
      this.handleResume(this, this.actor);
    } catch (error) {
      Sein.throwException(error, this);
    }
  }

  /**
   * **不要自己调用！！**
   * 
   * @hidden
   */
  public stop() {
    try {
      this.onStop();
      this.handleEnd(this, this.actor);
    } catch (error) {
      Sein.throwException(error, this);
    }
  }

  /**
   * **不要自己调用！！**
   * 
   * @hidden
   */
  public update(delta: number) {
    try {
      this.onUpdate(delta);
    } catch (error) {
      Sein.throwException(error, this);
    }
  }

  /**
   * 复制生成一个新的Clip，如果你想让一段音频被多次使用，便需要Clone。
   */
  public clone() {
    return new (this.constructor as any)(this._initState);
  }
}
