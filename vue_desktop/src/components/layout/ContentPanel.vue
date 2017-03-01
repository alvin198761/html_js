<template>
  <div id="contentPane" class="contentPane">
    <el-carousel :autoplay="false" ref="cardPane" indicator-position="none">
      <el-carousel-item v-for="card in menus">
        <div class="app-grid">
          <ul>
            <AppButton v-for="app in card.apps" :app="app"></AppButton>
          </ul>
        </div>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>
<script>
  import {mapGetters} from 'vuex';
  import AppButton from './AppButton.vue';
  export default{
    data: function () {
      return {}
    },
    computed: {
      ...mapGetters({
        menus: 'fisheye/_menus'
      })
    },
    components: {
      AppButton
    },
    methods: {},
    mounted: function () {
      this.$store.commit('content/initComponent', this.$refs.cardPane)
    },
    updated: function () {
      let _this = this;
      let timer = setInterval(function () {
        _this.$refs.cardPane.resetItemPosition();
        clearInterval(timer)
      }, 100)
    }
  }
</script>
<style>
  .contentPane {
    display: block;
    position: fixed;
    left: 100px;
    right: 20px;
    top: 100px;
    bottom: 70px;
    z-index: 1;
    overflow: hidden;
  }

  .contentPane .el-carousel .el-carousel__container {
    overflow: hidden;
    height: 490px;
  }

  .app-grid {
    display: block;
    position: fixed;
    left: 100px;
    right: 90px;
    top: 0px;
    bottom: 0px;
  }

  .app-grid ul li,
  .app-grid ul li span {
    -moz-user-select: none;
    -khtml-user-select: none;
    user-select: none
  }

  .app-grid ul {
    width: 100%;
    height: 100%;
    overflow: hidden;
    position: absolute
  }

  .app-grid ul li {
    width: 90px;
    height: 78px;
    padding: 10px 0;
    text-align: center;
    /*position: absolute;*/
    cursor: pointer;
    list-style: none outside none;
    margin-right: 50px;
    margin-bottom: 10px;
    float: left;
    display: block;
  }

  .app-grid ul li img {
    border-radius: 3px 3px 3px 3px;
    display: block;
    height: 48px;
    width: 48px;
    margin: auto
  }

  .app-grid ul li span {
    background: none repeat scroll 0 0 rgba(0, 0, 0, 0.3);
    border-radius: 10px 10px 10px 10px;
    filter: none;
    color: #fff;
    display: inline-block;
    height: 20px;
    line-height: 20px;
    margin-top: 5px;
    overflow: hidden;
    padding: 0 8px;
    position: relative;
    text-align: center;
    text-overflow: ellipsis;
    white-space: nowrap;
    z-index: 1;
  }

  .app-grid ul li em {
    display: block;
    /*position: inherit;*/
    float: left;
    top: 0;
    left: 0;
    z-index: 0;
    width: 86px;
    height: 86px;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    border-radius: 5px;
    background: #000;
    /*opacity: 0.12;*/
    filter: alpha(opacity=12)
  }

  .app-grid ul li:hover em,
  .app-grid ul li.hover em {
    /*display: block*/
  }

  .app-grid ul li:hover {
    background: #ccc;
    border-radius: 10px;
    opacity: 0.9;
  }

  .app-grid ul li.focus em {
    display: block;
    opacity: 0.25;
    filter: alpha(opacity=25)
  }

</style>
