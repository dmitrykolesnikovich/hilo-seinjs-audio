/**
 * @File   : BufferClip.ts
 * @Author : dtysky (dtysky@outlook.com)
 * @Date   : 4/23/2019, 8:11:01 PM
 * @Description:
 */
import * as Sein from 'seinjs';

import Clip, {IClipStateTypes} from './Clip';

export interface IBufferClipStateTypes extends IClipStateTypes {
  buffer: AudioBuffer | ArrayBuffer;
}

@Sein.SClass({className: 'AudioBufferClip'})
export default class BufferClip extends Clip<IBufferClipStateTypes> {
  public isAudioBufferClip = true;

  protected _buffer: AudioBuffer;
  protected _source: AudioBufferSourceNode;
  protected _isReady: boolean = false;
  protected _initPlayRequired: {
    required: boolean,
    loop?: boolean,
    from?: number,
    to?: number
  } = {
    required: false
  };
  protected _paused: boolean = true;
  protected _stopt: boolean = true;
  protected _startTime: number = 0;
  protected _currentTime: number = 0;
  protected _startAt: number = 0;
  protected _pauseAt: number = 0;
  protected _endAt: number = 0;

  /**
   * 返回是否暂停。
   */
  get paused(): boolean {
    return this._paused;
  }

  /**
   * 返回是否停止。
   */
  get stopt(): boolean {
    return this._stopt;
  }

  /**
   * 返回音频长度。
   */
  get duration() {
    return this._buffer.duration;
  }

  /**
   * 返回音频当前播放时间。
   */
  get currentTime() {
    return this._currentTime;
  }

  /**
   * 返回音频当前是否循环。
   */
  get loop() {
    return this._source.loop;
  }

  /**
   * 返回音频当前播放区间。
   */
  get range() {
    return [this._startAt, this._endAt];
  }

  public onInit(initState: IBufferClipStateTypes) {
    this.createTrack(initState)
      .catch(error => Sein.throwException(error, this));
  }

  protected async createTrack(state: IBufferClipStateTypes) {
    const {context} = this.system;

    if (state.isLazy) {
      this._buffer = await context.decodeAudioData(state.buffer as ArrayBuffer);
      this._isReady = true;
      // Avoid decode a buffer multiple times.
      state.isLazy = false;
      state.buffer = this._buffer;

      if (this._initPlayRequired.required) {
        const {loop, from, to} = this._initPlayRequired;
        this.play(loop, from, to);
      }
    } else {
      this._buffer = state.buffer as AudioBuffer;
      this._isReady = true;
    }
  }

  private createSource() {
    if (this._source && this._source.numberOfOutputs > 0) {
      this._source.disconnect(this.audioSource.inNode);
    }

    this._source = this.system.context.createBufferSource();
    this._source.buffer = this._buffer;
    this._source.connect(this.audioSource.inNode);
    this._source.onended = () => this.handleEnd(this, this.actor);
  }

  public onPlay(loop?: boolean, from?: number, to?: number) {
    if (!this._isReady) {
      this._initPlayRequired = {required: true, loop, from, to};
      return;
    }

    if (!this._stopt && !this._paused) {
      this.stop();
    }

    this.createSource();
    this._startAt = from || 0;
    this._endAt = to || this._buffer.duration;
    this._source.loop = loop || false;
    this._source.loopStart = this._startAt;
    this._source.loopEnd = this._endAt;

    if (this._source.loop) {
      this._source.start(0, this._startAt);
    } else {
      this._source.start(0, this._startAt, this._endAt - this._startAt);
    }

    this._startTime = Date.now() / 1000;
    this._currentTime = this._startAt;
    this._paused = false;
    this._stopt = false;
  }

  public onPause() {
    if (!this._isReady) {
      this._initPlayRequired.required = false;
      return;
    }

    if (this._stopt || this._paused) {
      return;
    }

    this._source.stop();
    this._pauseAt = Date.now() / 1000 - this._startTime;
    this._paused = true;
  }

  public onResume() {
    if (!this._isReady) {
      this._initPlayRequired.required = true;
      return;
    }

    if (this._stopt || !this._paused) {
      return;
    }

    const {loop, loopStart, loopEnd} = this._source;

    this.createSource();

    if (loop) {
      this._source.loop = loop;
      this._source.loopStart = loopStart;
      this._source.loopEnd = loopEnd;
      this._source.start(0, this._pauseAt);
    } else {
      this._source.start(0, this._pauseAt, this._endAt - this._pauseAt);
    }

    this._startTime = Date.now() / 1000 - this._pauseAt - this._startAt;
    this._paused = false;
  }

  public onStop() {
    if (!this._isReady) {
      this._initPlayRequired.required = false;
      return;
    }

    if (this._stopt) {
      return;
    }

    if (!this._paused) {
      this._source.stop();
    }

    this._startAt = 0;
    this._pauseAt = 0;
    this._currentTime = 0;
    this._paused = true;
    this._stopt = true;
  }

  public onUpdate(delta: number) {
    if (this._paused) {
      return;
    }

    this._currentTime += delta / 1000;

    if (this._currentTime >= this._endAt) {
      if (this._source.loop) {
        this._currentTime -= (this._endAt - this._startAt);
      }
      else {
        this._paused = true;
        this._stopt = true;
      }
    }
  }

  public onDestroy() {
    if (this._source && this._source.numberOfOutputs > 0) {
      this._source.disconnect(this.audioSource.inNode);
    }
  }
}
