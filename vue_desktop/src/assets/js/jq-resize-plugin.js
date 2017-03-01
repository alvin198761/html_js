/**
 * Created by tangzhichao on 2017/3/1.
 */
/*
 * jQuery.Resize by wuxinxi007
 * Date: 2011-5-14
 * blog : http://wuxinxi007.cnblogs.com/
 */
(function ($) {
  $.resizeable = $.noop;
  $.fn.resizeable = function () {
    var bound = {
      x: this.offsetX,
      y: this.offsetY,
      w: this.offsetWidth,
      h: this.offsetHeight
    }
    var obj = this;
    this.mousedown(function (e) {
      //按下元素后，计算当前鼠标与对象计算后的坐标
      bound = {
        x: obj.offsetX,
        y: obj.offsetY,
        w: obj.offsetWidth,
        h: obj.offsetHeight
      }

      obj.setCapture ? (
          obj.setCapture(),
            obj.onmousemove = function (ev) {
              mouseMove(ev || event);
            },
            obj.onmouseup = mouseUp
        ) : (
          $(document).bind("mousemove", mouseMove).bind("mouseup", mouseUp)
        );
      e.preventDefault();
    });
    //移动事件
    function mouseMove(e) {
      obj.css({
        width: e.clientX - bound.x + 'px',
        height: e.clientY - bound.y + 'px'
      })
    }

    //停止事件
    function mouseUp() {
      //在支持 releaseCapture 做些东东
      obj.releaseCapture ? (
          //释放焦点
          obj.releaseCapture(),
            //移除事件
            obj.onmousemove = obj.onmouseup = null
        ) : (
          //卸载事件
          $(document).unbind("mousemove", mouseMove).unbind("mouseup", mouseUp)
        );
    }
  }
})(jQuery);
