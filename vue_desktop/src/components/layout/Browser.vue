<template>
  <div style="width: 740px; height: 500px; top: 0px; left: 288px; z-index: 3;" class="window-container window-current"
       :window="task.id" :id="'window_'+task.id+'_warp'">
    <div style="height: 100%;" :id="'window_'+task.id+'_inner'">
      <div class="title-bar">{{task.title}}
        <div class="title-handle"><a class="ha-min" btn="hide" href="javascript:;">最小化</a><a class="ha-max" btn="max"
                                                                                             href="javascript:;">最大化</a><a
          class="ha-revert" btn="revert" href="javascript:;" style="display:none">还原</a><a class="ha-close" btn="close"
                                                                                           href="javascript:;"
                                                                                           title="关闭">关闭</a>
        </div>
      </div>
      <div class="window-frame" id="'window-frame_'+task.id">
        <div
          style="z-index:9000000;background:none;height:100%;position:absolute;width:100%;filter:alpha(opacity=0);-moz-opacity:0;opacity:0;display:none"></div>
        <iframe frameborder="0" :id="'frame'+task.id" :src="task.url"></iframe>
      </div>
      <div class="set-bar">
        <div class="fr"><a class="btn" id="refresh"><i class="icon ico-refresh"></i><span class="btn-con">刷新</span></a>
        </div>
      </div>
      <div resize="t"
           style="position:absolute;overflow:hidden;background:url(../../assets/images/transparent.gif) repeat;display:block;left:0;top:-3px;width:100%;height:5px;z-index:1;cursor:n-resize"></div>
      <div resize="r"
           style="position:absolute;overflow:hidden;background:url(../../assets/images/transparent.gif) repeat;display:block;right:-3px;top:0;width:5px;height:100%;z-index:1;cursor:e-resize"></div>
      <div resize="b"
           style="position:absolute;overflow:hidden;background:url(../../assets/images/transparent.gif) repeat;display:block;left:0;bottom:-3px;width:100%;height:5px;z-index:1;cursor:s-resize"></div>
      <div resize="l"
           style="position:absolute;overflow:hidden;background:url(../../assets/images/transparent.gif) repeat;display:block;left:-3px;top:0;width:5px;height:100%;z-index:1;cursor:w-resize"></div>
      <div resize="rt"
           style="position:absolute;overflow:hidden;background:url(../../assets/images/transparent.gif) repeat;display:block;right:-3px;top:-3px;width:10px;height:10px;z-index:2;cursor:ne-resize"></div>
      <div resize="rb"
           style="position:absolute;overflow:hidden;background:url(../../assets/images/transparent.gif) repeat;display:block;right:-3px;bottom:-3px;width:10px;height:10px;z-index:2;cursor:se-resize"></div>
      <div resize="lt"
           style="position:absolute;overflow:hidden;background:url(../../assets/images/transparent.gif) repeat;display:block;left:-3px;top:-3px;width:10px;height:10px;z-index:2;cursor:nw-resize"></div>
      <div resize="lb"
           style="position:absolute;overflow:hidden;background:url(../../assets/images/transparent.gif) repeat;display:block;left:-3px;bottom:-3px;width:10px;height:10px;z-index:2;cursor:sw-resize"></div>
      <div
        style="position:absolute;overflow:hidden;background:url(../../assets/images/transparent.gif) repeat;display:block"
        resize="min_width"></div>
      <div
        style="position:absolute;overflow:hidden;background:url(../../assets/images/transparent.gif) repeat;display:block"
        resize="min_height"></div>
    </div>
  </div>
</template>
<script>
  import {mapGetters} from 'vuex';
  var createIndexid = 999999;
  export default{
    props: ['task'],
    data: function () {
      return {}
    },
    computed: {
      ...mapGetters({})
    },
    mounted: function () {
      let browserId = '#window_' + this.task.id + '_warp';
      this.$store.dispatch('browser/init', $(browserId))
    }
  }
</script>
<style>


</style>
