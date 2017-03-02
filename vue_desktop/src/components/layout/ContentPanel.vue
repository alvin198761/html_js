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
</style>
