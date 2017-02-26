/**
 * Created by Administrator on 2017/2/25.
 */
import JSComponent from './JSComponent';
class JSContentPanel extends JSComponent {

  constructor() {
    super();
    this.el = $("#contentPane");
    this.initEvent();
    this.initApps();
  }

  initEvent() {
    let _top = 20;
    let _left = 20;
    let windowHeight = $("#app-grid").height();
    //循环ul，操作每一个li
    $("#appItemUL").find("li").each(function () {

      // $(this).css({
      //   "left": _left,
      //   "top": _top
      // });
      // _top += 90;
      // if (_top + 20 + 57 > windowHeight) {
      //   _top = 20;
      //   _left += 90;
      // }

    });
  }

  initApps() {


  }

}
export default JSContentPanel;
