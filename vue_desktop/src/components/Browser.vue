<template>
  <div style="width: 740px; height: 500px; top: 0px; left: 288px; z-index: 3;" class="window-container window-current"
       window="8" id="window_8_warp">
    <div style="height: 100%;" id="window_8_inner">
      <div class="title-bar">脚本之家
        <div class="title-handle"><a class="ha-min" btn="hide" href="javascript:;">最小化</a><a class="ha-max" btn="max"
                                                                                             href="javascript:;">最大化</a><a
          class="ha-revert" btn="revert" href="javascript:;" style="display:none">还原</a><a class="ha-close" btn="close"
                                                                                           href="javascript:;"
                                                                                           title="关闭">关闭</a>
        </div>
      </div>
      <div class="window-frame" id="window-frame_8">
        <div
          style="z-index:9000000;background:none;height:100%;position:absolute;width:100%;filter:alpha(opacity=0);-moz-opacity:0;opacity:0;display:none"></div>
        <iframe frameborder="0" id="frame8" src="http://www.jb51.net/"></iframe>
      </div>
      <div class="set-bar">
        <div class="fr"><a class="btn" id="refresh"><i class="icon ico-refresh"></i><span class="btn-con">刷新</span></a>
        </div>
      </div>
      <div resize="t"
           style="position:absolute;overflow:hidden;background:url(../assets/images/transparent.gif) repeat;display:block;left:0;top:-3px;width:100%;height:5px;z-index:1;cursor:n-resize"></div>
      <div resize="r"
           style="position:absolute;overflow:hidden;background:url(../assets/images/transparent.gif) repeat;display:block;right:-3px;top:0;width:5px;height:100%;z-index:1;cursor:e-resize"></div>
      <div resize="b"
           style="position:absolute;overflow:hidden;background:url(../assets/images/transparent.gif) repeat;display:block;left:0;bottom:-3px;width:100%;height:5px;z-index:1;cursor:s-resize"></div>
      <div resize="l"
           style="position:absolute;overflow:hidden;background:url(../assets/images/transparent.gif) repeat;display:block;left:-3px;top:0;width:5px;height:100%;z-index:1;cursor:w-resize"></div>
      <div resize="rt"
           style="position:absolute;overflow:hidden;background:url(../assets/images/transparent.gif) repeat;display:block;right:-3px;top:-3px;width:10px;height:10px;z-index:2;cursor:ne-resize"></div>
      <div resize="rb"
           style="position:absolute;overflow:hidden;background:url(../assets/images/transparent.gif) repeat;display:block;right:-3px;bottom:-3px;width:10px;height:10px;z-index:2;cursor:se-resize"></div>
      <div resize="lt"
           style="position:absolute;overflow:hidden;background:url(../assets/images/transparent.gif) repeat;display:block;left:-3px;top:-3px;width:10px;height:10px;z-index:2;cursor:nw-resize"></div>
      <div resize="lb"
           style="position:absolute;overflow:hidden;background:url(../assets/images/transparent.gif) repeat;display:block;left:-3px;bottom:-3px;width:10px;height:10px;z-index:2;cursor:sw-resize"></div>
      <div
        style="position:absolute;overflow:hidden;background:url(../assets/images/transparent.gif) repeat;display:block"
        resize="min_width"></div>
      <div
        style="position:absolute;overflow:hidden;background:url(../assets/images/transparent.gif) repeat;display:block"
        resize="min_height"></div>
    </div>
  </div>
</template>
<script>
  import {mapGetters} from 'vuex';
  var createIndexid = 999999;
  export default{
    data: function () {
      return {}
    },
    computed: {
      ...mapGetters({})
    },
    mounted: function () {
      var obj = $("#window_8_warp");
      //改变窗口样式
      $('.window-container').removeClass('window-current');
      obj.addClass('window-current').css({
        'z-index': createIndexid
      });
      createIndexid += 1;

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
        obj.css({
          width: "100%",
          height: "100%",
          top: 0,
          left: 0
        });
        $(this).hide().next(".ha-revert").show();
        ZENG.msgbox.show("按F11体验浏览器全屏模式！", 4, 2000);
      });
      //还原
      obj.find(".ha-revert").bind("click", function (e) {
        obj.css({
          width: obj.data("info").width + "px",
          height: obj.data("info").height + "px",
          left: obj.data("info").left + "px",
          top: obj.data("info").top + "px"
        });
        $(this).hide().prev(".ha-max").show();
      });
      //双击
      obj.find(".title-bar").bind("dblclick", function (e) {
        //判断当前窗口是否已经是最大化
        if ($(this).find(".ha-max").is(":visible")) {
          $(this).find(".ha-max").click();
        } else {
          $(this).find(".ha-revert").click();
        }
      });
      //关闭
      obj.find(".ha-close").bind("click", function (e) {
        $('.task-window li[window="' + obj.attr('window') + '"]').remove();
        obj.remove();
      });
      //刷新
      obj.find("#refresh").bind("click", function (e) {
        $("#frame" + obj.attr('window')).attr("src", $("#frame" + obj.attr('window')).attr("src"));
      });

      obj.find(".title-bar").bind("mousedown", function (e) {
        //改变窗口为选中样式
        $('.window-container').removeClass('window-current');
        obj.addClass('window-current').css({
          'z-index': createIndexid
        });
        createIndexid += 1;
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
    }
  }
</script>
<style>


</style>
