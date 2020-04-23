/**
 * @File   : AudioLoader.ts
 * @Author : dtysky (dtysky@outlook.com)
 * @Date   : 4/22/2019, 6:39:12 PM
 * @Description:
 */
import * as Sein from 'seinjs';

import Clip from './clip/Clip';
import StreamClip from './clip/StreamClip';
import BufferClip from './clip/BufferClip';
import SystemActor from './SystemActor';

/**
 * `AudioLoader`的资源实体类型。
 */
export interface IResourceEntity extends Sein.IResourceEntity {
  type: 'Audio';
  /**
   * 音频类型。
   * 一般`Stream`用于大且不需要细致控制的音频，比如BGM等。
   * 而`Buffer`用于需要精确控制的音频，但要注意
   * 
   * @default Stream
   */
  mode?: 'Stream' | 'Buffer';
  /**
   * 是否是惰性的。
   * 如果是`Buffer`模式，则在使用时才会进行解码。
   * 如果是`Stream`模式，则不会进行预加载，在使用时才进行流式加载。
   * 
   * @default false
   */
  isLazy?: boolean;
  /**
   * 是否允许资源跨域。
   */
  crossOrigin?: boolean;
  /**
   * 不要自己使用！用于从GLB加载音频的状况。
   * 
   * @hidden
   */
  buffer?: ArrayBuffer;
  /**
   * 加载后的结果。
   */
  result?: Clip;
  /**
   * 开发者无需关心。
   * 
   * @hidden
   */
  blobUrl?: string;
}

/**
 * 判断一个实例是否为`AudioLoader`。
 */
export function isLoader(value: Sein.ResourceLoader): value is Loader {
  return (value as Loader).isAudioLoader;
}

/**
 * @hidden
 */
async function decodeAudioData(data: ArrayBuffer, audioSystem: SystemActor): Promise<AudioBuffer> {
  try {
    return audioSystem.context.decodeAudioData(data);
  } catch {
    return new Promise((resolve, reject) => {
      try {
        audioSystem.context.decodeAudioData(data, buffer => resolve(buffer));
      } catch (error) {
        reject(error);
      }
    });
  }
}

/**
 * 音频加载器。
 * 
 * @noInheritDoc
 */
@Sein.SClass({className: 'AudioLoader'})
export default class Loader extends Sein.ResourceLoader<IResourceEntity> {
  public isAudioLoader = true;

  /**
   * 加载一个资源，并根据情况执行`callbacks`中的回调。
   */
  public load(
    entity: IResourceEntity,
    callbacks: {
      onLoading(entity: IResourceEntity, progress: number): void;
      onLoaded(entity: IResourceEntity): void;
      onError(entity: IResourceEntity, error: Error): void;
    }
  ): void {
    const audioSystem = Sein.findActorByClass(this.game, SystemActor);

    if (!audioSystem) {
      throw new Error(`Before using 'AudioLoader', you must add an 'Audio.SystemActor' to game !`);
    }

    entity.mode = entity.mode || 'Stream';

    if (entity.mode === 'Stream') {
      const element = document.createElement('audio');

      if (entity.isLazy) {
        if (entity.buffer && !entity.canceled) {
          const url = URL.createObjectURL(new Blob([entity.buffer as ArrayBuffer]));
          entity.blobUrl = url;
          element.src = url;
        } else {
          element.src = entity.url;
        }

        element.crossOrigin = (entity.crossOrigin || false) ? 'Anonymous' : '';
        entity.result = new StreamClip({isLazy: true, element});

        setTimeout(() => callbacks.onLoaded(entity), 0);
        return;
      }

      if (entity.buffer && !entity.canceled) {
        const url = URL.createObjectURL(new Blob([entity.buffer]));
        entity.blobUrl = url;
        element.src = url;
        entity.result = new StreamClip({isLazy: false, element});

        setTimeout(() => callbacks.onLoaded(entity), 0);
        return;
      }

      Sein.HTTP.get(entity.url, {
        responseType: 'arraybuffer',
        onDownloadProgress: ({loaded, total}) => callbacks.onLoading(entity, loaded / total)
      })
        .then(({data}) => {
          if (entity.canceled) {
            callbacks.onLoaded(entity);
            return;
          }

          const url = URL.createObjectURL(new Blob([data as ArrayBuffer]));
          entity.blobUrl = url;
          element.src = url;
          entity.result = new StreamClip({isLazy: false, element});

          callbacks.onLoaded(entity);
        })
        .catch(error => {
          callbacks.onError(entity, error);
        });

      return;
    }

    if (entity.buffer && !entity.canceled) {
      if (entity.isLazy) {
        entity.result = new BufferClip({isLazy: true, buffer: entity.buffer});

        setTimeout(() => callbacks.onLoaded(entity), 0);
        return;
      } else {
        decodeAudioData(entity.buffer, audioSystem)
          .then(buffer => {
            entity.result = new BufferClip({isLazy: false, buffer});
            callbacks.onLoaded(entity);
          });
      }
      return;
    }

    Sein.HTTP.get(entity.url, {
      responseType: 'arraybuffer',
      onDownloadProgress: ({loaded, total}) => callbacks.onLoading(entity, loaded / total)
    })
      .then(async ({data}) => {
        if (entity.canceled) {
          callbacks.onLoaded(entity);
          return;
        }

        if (entity.isLazy) {
          entity.result = new BufferClip({isLazy: true, buffer: data});
        } else {
          const audioBuffer = await decodeAudioData(data, audioSystem);
          entity.result = new BufferClip({isLazy: false, buffer: audioBuffer});
        }

        callbacks.onLoaded(entity);
      })
      .catch(error => {
        Sein.throwException(error, this);
      });
  }

  /**
   * 释放资源时将会调用，用于自定义释放逻辑。
   */
  public release(entity: IResourceEntity) {
    if (entity.blobUrl) {
      URL.revokeObjectURL(entity.blobUrl);
    }
  }
}
