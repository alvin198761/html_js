/**
 * Created by Administrator on 2017/2/25.
 */
import JSComponent from './JSComponent';
export class JSMenuBar extends JSComponent {

}

export class JSFloatMenuBar extends JSMenuBar {

  constructor() {
    super();
    this.el = $('#floatMenubar');

    this.initEvent();
  }

  initEvent() {
    $('#dock').Fisheye({
      maxWidth: 80,
      items: 'a',
      itemsText: 'span',
      container: '.dock-container',
      itemWidth: 40,
      proximity: 90,
      halign: 'center'
    })
  }

}

export class DockMenuBar extends JSMenuBar {

}

