/**
 * Created by Administrator on 2017/2/25.
 */
import JSComponent from './JSComponent'
class JSTaskBar extends JSComponent {

  constructor() {
    super();
    this.el = $("#bottomBar");
    this.initEvent();
  }

  initEvent() {
    this.el.smartMenu(this.contextMenuData(), {
      name: "task_bar"
    });
  }

  contextMenuData() {
    return [[{
      text: "工具栏"
    }, {
      text: "任务管理器"
    }, {
      text: "显示桌面"
    }], [{
      text: "属性"
    }]]
  }

}
export default JSTaskBar;
