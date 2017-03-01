<template>
    <div id="desktopWrapper" style="left: 73px; right: 0px;">
      <el-carousel :autoplay="false" ref="cardPane" indicator-position="none">
        <el-carousel-item v-for="card in 4" :name="card">
          <div  >
            sdfsfadsaffsdfds
          </div>
        </el-carousel-item>
      </el-carousel>
  </div>
</template>
<script>
  export default {

    data: function () {
      return {}
    },
    created: function () {

    },
    methods: {}

  }
</script>
<style>

</style>
