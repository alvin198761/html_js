/**
 * Created by tangzhichao on 2017/2/27.
 */
/**
 * Created by tangzhichao on 2017/2/27.
 */
import {Notification} from 'element-ui';
export default {
  state: {
    zIndex: 999999,
    browsers: [],
    browserData: {},
    currentBrowser: null,
  },
  getters: {
    ['browser/_zIndex'](state){
      return state.zIndex;
    },
    ['browser/currentBrowserId'](state){
      console.log(state.currentBrowser)
      return '001';
    }
  },
  mutations: {
    ['browser/initComponent'](state, payload){
      //添加浏览器元素
      state.browsers.push(payload);
      state.currentBrowser = payload;
    },
    ['browser/initEvent'](state, payload){
      var obj = payload;
      //改变窗口样式
      $('.window-container').removeClass('window-current');
      obj.addClass('window-current').css({
        'z-index': state.zIndex
      });
      state.zIndex++;
    },
    ['browser/bindEvent'](state, payload){
      var obj = payload;
      //最小化
      obj.find(".ha-min").bind("click", function (e) {
        //阻止冒泡
        e.stopPropagation();
        obj.hide();
        //改变任务栏样式
        $('.task-window li[window="' + obj.attr('window') + '"] b').removeClass('focus');
      });
      //最大化
      obj.find(".ha-max").bind("click", function (e) {
        e.stopPropagation();
        state.browserData[obj[0].id] = {
          width: obj[0].offsetWidth,
          height: obj[0].offsetHeight,
          top: obj[0].offsetTop,
          left: obj[0].offsetLeft
        }
        obj.css({
          width: "100%",
          height: "100%",
          top: 0,
          left: 0
        });
        $(this).hide().next(".ha-revert").show();
        Notification.info({
          message: '按F11体验浏览器全屏模式！'
        });
      });
      //还原
      obj.find(".ha-revert").bind("click", function (e) {
        e.stopPropagation();
        let data = state.browserData[obj[0].id];
        obj.css({
          width: data.width + "px",
          height: data.height + "px",
          left: data.left + "px",
          top: data.top + "px"
        });
        $(this).hide().prev(".ha-max").show();
      });
      //双击
      obj.find(".title-bar").bind("dblclick", function (e) {
        e.stopPropagation();
        //判断当前窗口是否已经是最大化
        if ($(this).find(".ha-max").is(":visible")) {
          $(this).find(".ha-max").click();
        } else {
          $(this).find(".ha-revert").click();
        }
      });
      //关闭
      obj.find(".ha-close").bind("click", function (e) {
        e.stopPropagation();
        $('.task-window li[window="' + obj.attr('window') + '"]').remove();
        obj.remove();
      });
      //刷新
      obj.find("#refresh").bind("click", function (e) {
        e.stopPropagation();
        $("#frame" + obj.attr('window')).attr("src", $("#frame" + obj.attr('window')).attr("src"));
      });

      obj.find(".title-bar").bind("mousedown", function (e) {
        e.stopPropagation();
        //改变窗口为选中样式
        $('.window-container').removeClass('window-current');
        obj.addClass('window-current').css({
          'z-index': state.zIndex
        });
        state.zIndex++;
        var x = e.screenX;	//鼠标位于屏幕的left
        var y = e.screenY;	//鼠标位于屏幕的top
        var sT = obj.offset().top;
        var sL = obj.offset().left;
//        //增加背景遮罩层
//        _cache.MoveLayOut = GetLayOutBox();
//        var lay = ($.browser.msie) ? _cache.MoveLayOut : $(window);
//        //绑定鼠标移动事件
//        lay.unbind("mousemove").bind("mousemove", function (e) {
//          _cache.MoveLayOut.show();
//          //强制把右上角还原按钮隐藏，最大化按钮显示
//          obj.find(".ha-revert").hide().prev(".ha-max").show();
//          var eX = e.screenX;	//鼠标位于屏幕的left
//          var eY = e.screenY;	//鼠标位于屏幕的top
//          var lessX = eX - x;	//距初始位置的偏移量
//          var lessY = eY - y;	//距初始位置的偏移量
//          var _l = sL + lessX;
//          var _t = sT + lessY;
//          var _w = obj.data("info").width;
//          var _h = obj.data("info").height;
//
//          //窗口贴屏幕顶部10px内
//          if (_t <= 10) {
//            _t = 0;
//          }
//          //窗口贴屏幕左边10px内
//          if (_l <= 10) {
//            _l = 0;
//          }
//          //窗口贴屏幕右边10px内
//          if (_l >= lay.width() - _w - 10) {
//            _l = lay.width() - _w;
//          }
//          //窗口贴屏幕下边10px内 //30px 下方还有task-bar任务栏
//          if (_t >= lay.height() - _h - 30 - 10) {
//            _t = lay.height() - _h - 30;
//          }
//
//          obj.css({
//            width: _w,
//            height: _h,
//            left: _l,
//            top: _t
//          });
//          obj.data("info", {
//            width: obj.data("info").width,
//            height: obj.data("info").height,
//            left: obj.offset().left,
//            top: obj.offset().top,
//            emptyW: $(window).width() - obj.data("info").width,
//            emptyH: $(window).height() - obj.data("info").height
//          });
//        });
//        //绑定鼠标抬起事件
//        lay.unbind("mouseup").bind("mouseup", function () {
//          _cache.MoveLayOut.hide();
//          if ($.browser.msie) {
//            _cache.MoveLayOut[0].releaseCapture();
//          }
//          $(this).unbind("mousemove");
//        });
//        if ($.browser.msie) {
//          _cache.MoveLayOut[0].setCapture();
//        }
      });
    },
    ['browser/initComponent'](state, payload){
      let index = state.browsers.indexOf(payload);
      if (index != -1) {
        state.browsers.splice(index, 1);
      }
    }
  },
  actions: {
    ['browser/init']({commit}, payload){
      commit('browser/initComponent', payload);
      commit('browser/initEvent', payload);
      commit('browser/bindEvent', payload);
    }
  }
};
