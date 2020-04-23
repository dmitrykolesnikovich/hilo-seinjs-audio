/**
 * @File   : SourceActor.ts
 * @Author : dtysky (dtysky@outlook.com)
 * @Date   : 4/22/2019, 8:12:59 PM
 * @Description:
 */
import * as Sein from 'seinjs';

import SourceComponent, {ISourceComponentStateTypes} from './SourceComponent';

/**
 * SourceComponent的一个简单封装容器。
 */
@Sein.SClass({className: 'AudioSourceActor'})
export default class SourceActor extends Sein.SceneActor<ISourceComponentStateTypes, SourceComponent> {
  public onCreateRoot(initState: ISourceComponentStateTypes) {
    return this.addComponent('root', SourceComponent, initState);
  }

  /**
   * 获取默认的音频源组件实例。
   */
  get audio() {
    return this._root;
  }
}
