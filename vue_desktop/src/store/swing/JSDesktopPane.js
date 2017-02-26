/**
 * Created by Administrator on 2017/2/25.
 */
import JSComponent from './JSComponent';
import JSRootPane from './JSRootPane';
import JSTaskBar from './JSTaskBar';

class JSDesktopPane extends JSComponent {

  rootPane = null;
  taskBar = null;
  constructor() {
    super();
    this.el = $('#desktop');
    this.initComponent();
    this.initEvent();
    this.bingEvent();
    this.initContextMenu();
  }

  initComponent() {
    this.rootPane = new JSRootPane();
    this.taskBar = new JSTaskBar();
  }

  initContextMenu() {
    var menuData = this.menuData();
    this.el.smartMenu(menuData, {name: "image"});
  }

  menuData() {
    return [
      [{
        text: "显示桌面",
        func: function () {
          // Windows.showWindowDesk();
        }
      }, {
        text: "关闭所有",
        func: function () {
          // Windows.closeAllWindow();
        }
      }, {
        text: "锁屏",
        func: function () {

        }
      }], [{
        text: "系统设置",
        func: function () {

        }
      }, {
        text: "主题设置",
        func: function () {
          // Windows.openSys({
          //   id: 'themSetting',
          //   title: '设置主题',
          //   width: 650,
          //   height: 500,
          //   content: document.getElementById("themeSetting_wrap")
          // });
        }
      },
        {
          text: "图标设置",
          data: [[{
            text: "大图标",
            func: function () {
              // Deskpanel.desktopsContainer.removeClass("desktopSmallIcon");
            }
          }, {
            text: "小图标",
            func: function () {
              // Deskpanel.desktopsContainer.addClass("desktopSmallIcon");
            }
          }]]
        }],
      [{
        text: "注销",
        func: function () {

        }
      }]
    ];
  }

  bingEvent() {
    function move(evt) {
      window.getSelection ? window.getSelection().removeAllRanges() : document.selection.empty();
    }

    function up(evt) {
      $(document).unbind('mousemove', move).unbind('mouseup', up);
    }

    $(document).bind('mousedown', function () {
      $(document).bind('mousemove', move).bind('mouseup', up);
    });

    $(".notes").draggable({
      containment: "#desktop", start: function () {
        var zindex = $("#mome").css("z-index");
        var z = parseInt(zindex) + 1;
        $("#inform").css({"z-index": z});
      }
    });

    $(".notes").click(function () {
      var zindex = $("#mome").css("z-index");
      var z = parseInt(zindex) + 1;
      $("#inform").css({"z-index": z});
    });
  }

  initEvent() {
    document.oncontextmenu = function () {//屏蔽浏览器右键事件
      return false;
    };
    var isIE = navigator.appName;
    //判断是否是IE浏览器
    if (isIE == "Microsoft Internet Explorer") {
      //添加IE右击事件
      $("body").bind("mousedown", function (event) {
        if (event.which == 3) {
          console.log("ie 右键菜单")
          // var md = Desktop.MenuData();
          // $("body").smartMenu(md, {
          //   name: "image"
          // });
        }
      });
    }
    $(document).bind('mousemove', function (e) {
      var area = $(window).width() - 50;
      if (e.pageX > area) {
        e.pageX = area;
      }
    });

    $(window).bind('resize', function () {
      if ($(window).width() < 800 || $(window).height() < 400) {
        ZENG.msgbox.show("浏览器当前窗口过小，可能会影响正常操作！", 1, 2000);
      }
    })
  }


}

export default JSDesktopPane;
