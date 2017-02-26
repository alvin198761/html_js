/**
 * Created by Administrator on 2017/2/25.
 */
import JSComponent from './JSComponent';
import * as menu from './JSMenuBar';
import JSContentPanel from './JSContentPanel';
class JSRootPane extends JSComponent {

  floatMenuBar = null;
  dockMenuBar = null;
  contentPane = null;

  constructor() {
    super();
    this.floatMenuBar = new menu.JSFloatMenuBar();
    this.contentPane = new JSContentPanel();
  }

}

export default JSRootPane;
