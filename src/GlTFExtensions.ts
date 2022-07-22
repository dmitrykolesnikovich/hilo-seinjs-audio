/**
 * @File   : GlTFExtensions.ts
 * @Author : dtysky (dtysky@outlook.com)
 * @Date   : 4/24/2019, 2:37:20 PM
 * @Description:
 */
import * as Sein from 'seinjs';
import Loader from './Loader';
import SourceComponent, {ISourceSpaceOptions, ISourceComponentStateTypes} from './SourceComponent';
import SystemActor from './SystemActor';
import ListenerComponent from './ListenerComponent';

function getRelativePath(basePath: string, path: string) {
  if (/^(?:http|blob|data:|\/)/.test(path)) {
      return path;
  }
  const basePaths = basePath.replace(/\/[^/]*?$/, '').split('/');
  const paths = path.split('/');

  let i = 0;
  for (i = 0; i < paths.length; i += 1) {
      const p = paths[i];
      if (p === '..') {
        basePaths.pop();
      } else if (p !== '.') {
          break;
      }
  }
  return basePaths.join('/') + '/' + paths.slice(i).join('/');
}

export interface ISeinAudioClipsExtension {
  clips: {
    mode: 'Stream' | 'Buffer';
    uri: string;
    isLazy: boolean;
    bufferView?: number;
    mimeType?: string;
  }[];
}

export const SeinAudioClipsExtension: Sein.IGlTFExtension<ISeinAudioClipsExtension> = {
  name: 'SEIN_audioClips',
  init(_, parser: Sein.IGlTFParser) {
    const game = parser.game;
    const audioLoader = game.resource.getLoader<Loader>('Audio');
    if (!audioLoader) {
      throw new Error(`Before load gltf contains audioClips, you must register Audio.Loader for type 'Audio' !`);
    }
    const actions = [];
    const extensions = parser.json.extensions || {};
    const audioClips: ISeinAudioClipsExtension = extensions.SEIN_audioClips || {};
    const clips = audioClips.clips || [];
    parser.audioClips = {};

    let uri: string = '';
    let buffer: ArrayBuffer = null;
    clips.forEach((clip, index) => {
      if (clip.uri) {
        uri = getRelativePath(parser.src, clip.uri);
      } else if (clip.bufferView !== undefined && clip.bufferView !== null) {
        const bv = parser.json.bufferViews[clip.bufferView];
        buffer = (parser.binaryBody as ArrayBuffer).slice(bv.byteOffset, bv.byteOffset + bv.byteLength);
      }

      actions.push(new Promise((resolve, reject) => {
        audioLoader.load({type: 'Audio', url: uri, buffer, name: '', mode: clip.mode, isLazy: clip.isLazy}, {
          onLoading: (_, progress: number) => {},
          onLoaded: entity => {
            parser.audioClips[index] = entity.result;
            resolve();
          },
          onError: (_, error) => reject(error)
        });
      }));
    });

    return Promise.all(actions);
  },
  parseOnEnd(_, parser: any, model: Sein.IGlTFModel) {
    model.audioClips = parser.audioClips;

    return model;
  }
};

export interface ISeinAudioSourceExtension {
  clips: {[key: string]: number};
  defaultClip: string;
  needAutoPlay: boolean;
  autoPlayOptions: ISourceComponentStateTypes['autoPlay'];
  isSpaceAudio: boolean;
  spaceOptions: ISourceSpaceOptions & {rotatable: boolean};
}

export const SeinAudioSourceExtension: Sein.IGlTFExtension<ISeinAudioSourceExtension> = {
  name: 'SEIN_audioSource',
  instantiate(entity: Sein.SceneActor | Sein.SceneComponent, info: ISeinAudioSourceExtension, game: Sein.Game, _, resource: Sein.IGlTFModel) {
    if (Sein.isSceneComponent(entity)) {
      return;
    }

    const {clips, defaultClip, needAutoPlay, autoPlayOptions, spaceOptions, isSpaceAudio} = info;
    const realClips: ISourceComponentStateTypes['clips'] = [];
    Object.keys(clips).forEach(key => {
      realClips.push({
        name: key,
        clip: resource.audioClips[clips[key]],
        isDefault: key === defaultClip
      });
    });

    const audioSystem = Sein.findActorByClass(game, SystemActor);
    entity.addComponent('audioSource', SourceComponent, {
      system: audioSystem,
      autoPlay: needAutoPlay ? autoPlayOptions : null,
      spaceOptions: isSpaceAudio ? spaceOptions : null,
      rotatable: isSpaceAudio ? spaceOptions.rotatable : false,
      clips: realClips
    });
  }
};

export interface ISeinAudioListenerExtension {
  rotatable: boolean;
}

export const SeinAudioListenerExtension: Sein.IGlTFExtension<ISeinAudioListenerExtension> = {
  name: 'SEIN_audioListener',
  instantiate(entity: Sein.SceneActor | Sein.SceneComponent, info: ISeinAudioListenerExtension) {
    if (Sein.isSceneComponent(entity)) {
      return;
    }

    entity.addComponent('audioListener', ListenerComponent, {
      rotatable: info.rotatable
    });
  }
};

Sein.GlTFLoader.REGISTER_EXTENSION(SeinAudioClipsExtension);
Sein.GlTFLoader.REGISTER_EXTENSION(SeinAudioSourceExtension);
Sein.GlTFLoader.REGISTER_EXTENSION(SeinAudioListenerExtension);
