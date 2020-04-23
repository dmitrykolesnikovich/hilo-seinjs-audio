/**
 * @File   : Sound.ts
 * @Author : dtysky (dtysky@outlook.com)
 * @Date   : 2018/9/25 上午11:58:00
 * @Description:
 */
import * as Sein from 'seinjs';

import AudioSystemActor, {isSystemActor as isAudioSystemActor} from './SystemActor';
import AudioLoader, {isLoader as isAudioLoader, IResourceEntity as IAudioResourceEntity} from './Loader';
import AudioSourceComponent, {
  isSourceActor as isAudioSourceActor,
  isSourceComponent as isAudioSourceComponent,
  ISourceComponentStateTypes as IAudioSourceComponentStateTypes,
  ISourceEvent as IAudioSourceEvent
} from './SourceComponent';
import AudioSourceActor from './SourceActor';
import AudioListenerComponent, {
  isListenerActor as isAudioListenerActor,
  isListenerComponent as isAudioListenerComponent,
  IListenerComponentStateTypes as IAudioListenerComponentStateTypes
} from './ListenerComponent';
import AudioListenerActor from './ListenerActor';
import AudioClip, {IClipStateTypes as IAudioClipStateTypes} from './clip/Clip';
import AudioStreamClip, {IStreamClipStateTypes as IAudioStreamClipStateTypes} from './clip/StreamClip';
import AudioBufferClip, {IBufferClipStateTypes as IAudioBufferClipStateTypes} from './clip/BufferClip';

import './GlTFExtensions';

declare module 'seinjs' {
  export namespace Audio {
    export class SystemActor extends AudioSystemActor {}
    export function isSystemActor(value: Sein.SObject): value is SystemActor;
    export class Loader extends AudioLoader {}
    export interface IResourceEntity extends IAudioResourceEntity {}
    export function isLoader(value: Sein.SObject): value is Loader;
    export class SourceComponent extends AudioSourceComponent {}
    export function isSourceActor(value: Sein.SObject): value is Sein.SceneActor<ISourceComponentStateTypes, SourceComponent>;
    export function isSourceComponent(value: Sein.SObject): value is SourceComponent;
    export interface ISourceComponentStateTypes extends IAudioSourceComponentStateTypes {}
    export interface ISourceEvent extends IAudioSourceEvent {}
    export class SourceActor extends AudioSourceActor {}
    export class ListenerComponent extends AudioListenerComponent {}
    export interface IListenerComponentStateTypes extends IAudioListenerComponentStateTypes {}
    export function isListenerActor(value: Sein.SObject): value is Sein.SceneActor<IListenerComponentStateTypes, ListenerComponent>;
    export function isListenerComponent(value: Sein.SObject): value is ListenerComponent;
    export class ListenerActor extends AudioListenerActor {}
    export class Clip extends AudioClip {}
    export interface IClipStateTypes extends IAudioClipStateTypes {}
    export class StreamClip extends AudioStreamClip {}
    export interface IStreamClipStateTypes extends IAudioStreamClipStateTypes {}
    export class BufferClip extends AudioBufferClip {}
    export interface IBufferClipStateTypes extends IAudioBufferClipStateTypes {}
  }
}

declare module 'seinjs/types/Global' {
  export interface IGlobalDefaultLoaders {
    Audio: {
      entity: IAudioResourceEntity;
      instantOptions: never;
      instantResult: never;
    };
  }
}

declare module 'seinjs/types/Resource' {
  export interface IGlTFModel {
    audioClips: AudioClip[];
  }
}

(Sein as any).Audio = {
  SystemActor: AudioSystemActor,
  isSystemActor: isAudioSystemActor,
  Loader: AudioLoader,
  isLoader: isAudioLoader,
  SourceComponent: AudioSourceComponent,
  isSourceActor: isAudioSourceActor,
  isSourceComponent: isAudioSourceComponent,
  SourceActor: AudioSourceActor,
  ListenerComponent: AudioListenerComponent,
  isListenerActor: isAudioListenerActor,
  isListenerComponent: isAudioListenerComponent,
  ListenerActor: AudioListenerActor,
  Clip: AudioClip,
  StreamClip: AudioStreamClip,
  BufferClip: AudioBufferClip
};

export {
  AudioSystemActor as SystemActor,
  isAudioSystemActor as isSystemActor,
  AudioLoader as Loader,
  IAudioResourceEntity as IResourceEntity,
  isAudioLoader as isLoader,
  AudioSourceComponent as SourceComponent,
  isAudioSourceActor as isSourceActor,
  isAudioSourceComponent as isSourceComponent,
  IAudioSourceComponentStateTypes as ISourceComponentStateTypes,
  IAudioSourceEvent as ISourceEvent,
  AudioSourceActor as SourceActor,
  AudioListenerComponent as ListenerComponent,
  IAudioListenerComponentStateTypes as IListenerComponentStateTypes,
  isAudioListenerActor as isListenerActor,
  isAudioListenerComponent as isListenerComponent,
  AudioListenerActor as ListenerActor,
  AudioClip as Clip,
  IAudioClipStateTypes as IClipStateTypes,
  AudioStreamClip as StreamClip,
  IAudioStreamClipStateTypes as IStreamClipStateTypes,
  AudioBufferClip as BufferClip,
  IAudioBufferClipStateTypes as IBufferClipStateTypes
};
