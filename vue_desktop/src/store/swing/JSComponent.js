/**
 * Created by Administrator on 2017/2/25.
 */
class JSComponent {

  el = null;
  parent = null;

  constructor() {

  }

  add(component) {
    component.parent = this;
    this.el.append(component);
  }

}
export default JSComponent;
