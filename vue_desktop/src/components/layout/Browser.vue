<template>
  <div style="width: 740px; height: 500px; top: 0px; left: 288px; z-index: 3;" class="window-container window-current"
       :window="task.id" :id="'window_'+task.id+'_warp'">
    <div style="height: 100%;" :id="'window_'+task.id+'_inner'">
      <div @dblclick="haDblClick" @mousedown="haMouseDown" @mouseup="haMouseUp" @mouseout="haMouseUp"
           @mousemove="haMouseMove"
           class="title-bar">{{task.title}}
        <div class="title-handle">
          <a @click="haMin" class="ha-min" btn="hide" href="javascript:void(0);">最小化</a>
          <a @click="haMax" class="ha-max" btn="max" href="javascript:void(0);">最大化</a>
          <a @click="haRevert" class="ha-revert" btn="revert" href="javascript:void(0);"
             style="display:none">还原</a>
          <a @click="haClose" class="ha-close" btn="close" href="javascript:void(0);" title="关闭">关闭</a>
        </div>
      </div>
      <div class="window-frame" id="'window-frame_'+task.id">
        <div
          style="z-index:9000000;background:none;height:100%;position:absolute;width:100%;filter:alpha(opacity=0);-moz-opacity:0;opacity:0;display:none"></div>
        <iframe frameborder="0" :id="'frame'+task.id" :src="task.url"></iframe>
      </div>
      <div class="set-bar">
        <div class="fr"><a class="btn" @click="refreshBrowser" id="refresh"><i class="icon ico-refresh"></i>
          <span class="btn-con">刷新</span></a>
        </div>
      </div>
      <div resize="t"
           style="position:absolute;overflow:hidden;display:block;left:0;top:-3px;width:100%;height:5px;z-index:1;cursor:n-resize"></div>
      <div resize="r"
           style="position:absolute;overflow:hidden;display:block;right:-3px;top:0;width:5px;height:100%;z-index:1;cursor:e-resize"></div>
      <div resize="b"
           style="position:absolute;overflow:hidden;display:block;left:0;bottom:-3px;width:100%;height:5px;z-index:1;cursor:s-resize"></div>
      <div resize="l"
           style="position:absolute;overflow:hidden;display:block;left:-3px;top:0;width:5px;height:100%;z-index:1;cursor:w-resize"></div>
      <div resize="rt"
           style="position:absolute;overflow:hidden;display:block;right:-3px;top:-3px;width:10px;height:10px;z-index:2;cursor:ne-resize"></div>
      <div resize="rb"
           style="position:absolute;overflow:hidden;display:block;right:-3px;bottom:-3px;width:10px;height:10px;z-index:2;cursor:se-resize"></div>
      <div resize="lt"
           style="position:absolute;overflow:hidden;display:block;left:-3px;top:-3px;width:10px;height:10px;z-index:2;cursor:nw-resize"></div>
      <div resize="lb"
           style="position:absolute;overflow:hidden;display:block;left:-3px;bottom:-3px;width:10px;height:10px;z-index:2;cursor:sw-resize"></div>
      <div
        style="position:absolute;overflow:hidden;display:block"
        resize="min_width"></div>
      <div
        style="position:absolute;overflow:hidden;display:block"
        resize="min_height"></div>
    </div>
  </div>
</template>
<script>
  import {mapGetters} from 'vuex';
  import {Notification} from 'element-ui';
  export default{
    props: ['task'],
    data: function () {
      return {
        browserId: '#window_' + this.task.id + '_warp',
        box: {
          width: 0,
          height: 0,
          top: 0,
          left: 0
        },
        position: {
          x: 0,
          y: 0,
          sT: 0,
          sL: 0
        },
        drag: false
      }
    },
    computed: {
      ...mapGetters({})
    },
    mounted: function () {
      this.$store.commit('browser/initComponent', this.browserId);
      let obj = $(this.browserId);
      obj.find('.window-container').removeClass('window-current');
      obj.addClass('window-current').css({
        'z-index': this.$store.state.browser.zIndex
      });
      this.$store.commit('browser/zIndexAdd');
    },
    methods: {
      //最小化
      haMin: function (e) {
        e.stopPropagation();
        let obj = $(this.browserId)
        obj.hide();
        //改变任务栏样式
        $('.task-window li[window="' + obj.attr('window') + '"] b').removeClass('focus');
        this.$store.commit('browser/minActiveChange', {id: this.browserId});
      },
      // 最大化
      haMax: function (e) {
        e.stopPropagation();
        let obj = $(this.browserId)
        this.box = {
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
        obj.find(".ha-max").hide().next(".ha-revert").show();
        Notification.info({
          message: '按F11体验浏览器全屏模式！'
        });
      },
      // 还原
      haRevert: function (e) {
        e.stopPropagation();
        let obj = $(this.browserId)
        obj.css({
          width: this.box.width + "px",
          height: this.box.height + "px",
          left: this.box.left + "px",
          top: this.box.top + "px"
        });
        obj.find('.ha-revert').hide().prev(".ha-max").show();
      },
      // 关闭
      haClose: function (e) {
        e.stopPropagation();
        let obj = $(this.browserId)
        $('.task-window li[window="' + obj.attr('window') + '"]').remove();
        obj.remove();
        const _this = this;
        this.$store.dispatch('browser/remove', {
          task: _this.task,
          id: _this.browserId
        })
      },
      // 双击
      haDblClick: function (e) {
        e.stopPropagation();
        //判断当前窗口是否已经是最大化
        let obj = $(this.browserId)
        if (obj.find(".ha-max").is(":visible")) {
          this.haMax(e)
        } else {
          this.haRevert(e)
        }
        this.haMouseDown(e)
      },
      //刷新
      refreshBrowser: function (e) {
        e.stopPropagation();
        let obj = $(this.browserId);
        $("#frame" + obj.attr('window')).attr("src", $("#frame" + obj.attr('window')).attr("src"));
      },
      //移动事件综合
      haMouseDown: function (e) {
        e.stopPropagation();
        this.drag = true;
        //改变窗口为选中样式
        let obj = $(this.browserId)
        obj.find('.window-container').removeClass('window-current');
        obj.addClass('window-current').css({
          'z-index': this.$store.state.browser.zIndex
        });
        this.$store.commit('browser/zIndexAdd')
        this.position = {
          x: e.screenX,
          y: e.screenY,
          sT: obj.offset().top,
          sL: obj.offset().left
        }
        this.$store.commit('browser/clickActiveChange', {id: this.browserId});
      },
      haMouseUp: function (e) {
        this.drag = false;
      },
      haMouseMove: function (e) {
        if (!this.drag) {
          return;
        }
        let obj = $(this.browserId)
        let lessX = e.screenX - this.position.x;
        let lessY = e.screenY - this.position.y;

        obj.css({
          left: this.position.sL + lessX,
          top: this.position.sT + lessY
        });

        this.position = {
          x: e.screenX,
          y: e.screenY,
          sT: obj.offset().top,
          sL: obj.offset().left
        }
      }
    },

  }
</script>
<style>


</style>
