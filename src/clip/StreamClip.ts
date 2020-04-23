/**
 * @File   : StreamClip.ts
 * @Author : dtysky (dtysky@outlook.com)
 * @Date   : 4/23/2019, 8:10:52 PM
 * @Description:
 */
import * as Sein from 'seinjs';

import Clip, {IClipStateTypes} from './Clip';

export interface IStreamClipStateTypes extends IClipStateTypes {
  element: HTMLMediaElement;
}

@Sein.SClass({className: 'AudioStreamClip'})
export default class StreamClip extends Clip<IStreamClipStateTypes> {
  public isAudioStreamClip = true;

  protected _element: HTMLMediaElement;
  protected _stopt: boolean = true;
  protected _track: MediaElementAudioSourceNode;
  protected _startAt: number = 0;
  protected _endAt: number = 0;

  /**
   * 返回是否暂停。
   */
  get paused(): boolean {
    return this._element.paused;
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
    return this._element.duration;
  }

  /**
   * 返回音频当前播放时间。
   */
  get currentTime() {
    return this._element.currentTime;
  }

  /**
   * 返回音频当前是否循环。
   */
  get loop() {
    return this._element.loop;
  }

  /**
   * 返回音频当前播放区间。
   */
  get range() {
    return [this._startAt, this._endAt];
  }

  public onInit(initState: IStreamClipStateTypes) {
    const {context} = this.system;

    this._element = initState.element.cloneNode() as HTMLMediaElement;
    this._track = context.createMediaElementSource(this._element);
    this._track.connect(this.audioSource.inNode);
    this._element.onended = () => {
      this.handleEnd(this, this.actor);
      this._stopt = true;
    };
    this._element.ontimeupdate = this.onTimeUpdate;
  }

  private onTimeUpdate = () => {
    if (isNaN(this._endAt)) {
      this._endAt = this.duration;
    }

    const {currentTime} = this._element;

    if (!this.loop) {
      if (currentTime >= this._endAt) {
        this.stop();
      }

      return;
    }

    if (this._startAt <= 0.1 && this.duration - this._endAt < .1) {
      return;
    }

    if (currentTime > this._endAt || currentTime < this._startAt) {
      this._element.currentTime = this._startAt;
    }
  }

  public onPlay(loop: boolean, from?: number, to?: number) {
    this._element.loop = loop;
    this._startAt = from || 0;
    this._endAt = to || this.duration;
    this._element.currentTime = this._startAt;
    this._stopt = false;
    this._element.play().catch(error => Sein.throwException(error, this));
  }

  public onPause() {
    if (this._stopt) {
      return;
    }

    this._element.pause();
  }

  public onResume() {
    if (this._stopt) {
      return;
    }

    this._element.play();
  }

  public onStop() {
    this._element.pause();
    this._element.currentTime = 0;
    this._stopt = true;
  }

  public onDestroy() {
    if (this._track) {
      this._track.disconnect(this.audioSource.inNode);
    }
  }
}
