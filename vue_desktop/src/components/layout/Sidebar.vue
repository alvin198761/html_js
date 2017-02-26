<template>
  <div id="leftBar">
    <div id="dockContainer" class="dock_container  dock_pos_left" style="z-index: 10;">
      <div class="dock_middle ui-sortable">
        <div type="2" class="appButton" id="icon_app_1_1" appid="1" fileid="1" title="应用市场" url="http://www.xxxxx.com/"
             sonmenu="[]" uid="app_1">
          <div id="icon_app_1_1_icon_div" class="appButton_appIcon"><img alt="应用市场" src="../../assets/icon/appmarket.png"
                                                                         class="appButton_appIconImg"
                                                                         id="icon_app_1_1_img"></div>
          <div class="appButton_appName">
            <div class="appButton_appName_inner" id="icon_app_1_1_name">应用市场</div>
            <div class="appButton_appName_inner_right"></div>
          </div>
        </div>
        <div type="2" class="appButton" id="icon_app_2_2" appid="2" fileid="2" title="QQ" url="http://www.xxxxx.com/"
             sonmenu="[]" uid="app_2">
          <div id="icon_app_2_2_icon_div" class="appButton_appIcon"><img alt="QQ" src="../../assets/icon/big.png"
                                                                         class="appButton_appIconImg"
                                                                         id="icon_app_2_2_img"></div>
          <div class="appButton_appName">
            <div class="appButton_appName_inner" id="icon_app_2_2_name">QQ</div>
            <div class="appButton_appName_inner_right"></div>
          </div>
        </div>
        <div type="2" class="appButton" id="icon_app_3_3" appid="3" fileid="3" title="微博" url="http://www.xxxxx.com/"
             sonmenu="[]" uid="app_3">
          <div id="icon_app_3_3_icon_div" class="appButton_appIcon"><img alt="微博" src="../../assets/icon/weibo.png"
                                                                         class="appButton_appIconImg"
                                                                         id="icon_app_3_3_img"></div>
          <div class="appButton_appName">
            <div class="appButton_appName_inner" id="icon_app_3_3_name">微博</div>
            <div class="appButton_appName_inner_right"></div>
          </div>
        </div>
        <div type="2" class="appButton" id="icon_app_4_4" appid="4" fileid="4" title="邮箱" url="http://www.xxxxx.com/"
             sonmenu="[]" uid="app_4">
          <div id="icon_app_4_4_icon_div" class="appButton_appIcon"><img alt="邮箱" src="../../assets/icon/mail.png"
                                                                         class="appButton_appIconImg"
                                                                         id="icon_app_4_4_img"></div>
          <div class="appButton_appName">
            <div class="appButton_appName_inner" id="icon_app_4_4_name">邮箱</div>
            <div class="appButton_appName_inner_right"></div>
          </div>
        </div>
        <div type="2" class="appButton" id="icon_app_6_6" appid="6" fileid="6" title="浏览网页" url="http://www.xxxxx.com/"
             sonmenu="[]" uid="app_6">
          <div id="icon_app_6_6_icon_div" class="appButton_appIcon"><img alt="浏览网页" src="../../assets/icon/internet.png"
                                                                         class="appButton_appIconImg"
                                                                         id="icon_app_6_6_img"></div>
          <div class="appButton_appName">
            <div class="appButton_appName_inner" id="icon_app_6_6_name">浏览网页</div>
            <div class="appButton_appName_inner_right"></div>
          </div>
        </div>
        <div type="2" class="appButton" id="icon_app_5_5" appid="5" fileid="5" title="空间" url="http://www.xxxxx.com/"
             sonmenu="[]" uid="app_5">
          <div id="icon_app_5_5_icon_div" class="appButton_appIcon"><img alt="空间" src="../../assets/icon/zone.png"
                                                                         class="appButton_appIconImg"
                                                                         id="icon_app_5_5_img"></div>
          <div class="appButton_appName">
            <div class="appButton_appName_inner" id="icon_app_5_5_name">空间</div>
            <div class="appButton_appName_inner_right"></div>
          </div>
        </div>
        <div class="dock_tool_list" id="dockToolList">
          <div class="dock_tool_item"><a title="输入法" cmd="Pinyin" class="dock_tool_icon dock_tool_pinyin"
                                         href="javascript:void(0)"></a><a title="静音" cmd="Sound"
                                                                          class="dock_tool_icon dock_tool_sound"
                                                                          href="javascript:void(0)"></a></div>
          <div class="dock_tool_item"><a title="系统设置" cmd="Setting" class="dock_tool_icon dock_tool_setting"
                                         href="javascript:void(0)"></a><a title="主题设置" cmd="Theme"
                                                                          class="dock_tool_icon dock_tool_theme"
                                                                          href="javascript:void(0)"></a></div>
          <div class="dock_tool_item"><a title="点击这里开始" class="dock_tool_icon dock_tool_start" href="#"></a></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import {mapGetters} from 'vuex';

  export default{
    data: function () {
      return {}
    },
    computed: {
      ...mapGetters({
        items: 'gui/floatMenus'
      })
    },
    components: {}
  }
</script>
<style>

</style>
