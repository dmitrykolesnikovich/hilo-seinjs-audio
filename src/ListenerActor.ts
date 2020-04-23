/**
 * @File   : ListenerActor.ts
 * @Author : dtysky (dtysky@outlook.com)
 * @Date   : 4/22/2019, 6:38:07 PM
 * @Description:
 */
import * as Sein from 'seinjs';

import ListenerComponent, {IListenerComponentStateTypes} from './ListenerComponent';

/**
 * ListenerComponent的一个简单封装容器。
 */
@Sein.SClass({className: 'AudioListenerActor'})
export default class ListenerActor extends Sein.SceneActor<IListenerComponentStateTypes, ListenerComponent> {
  get listener(): ListenerComponent {
    return this._root;
  }

  public onCreateRoot(initState: Sein.ISceneComponentState) {
    return this.addComponent('root', ListenerComponent, initState);
  }

  /**
   * 使其成为主监听器，默认将指定第一个添加的为主监听器。
   */
  public enable(): this {
    this.root.enable();

    return this;
  }

  /**
   * 取消为主监听器，若不指定其他的监听器，将会使得音频失效。
   */
  public disable(): this {
    this.root.disable();

    return this;
  }
}
