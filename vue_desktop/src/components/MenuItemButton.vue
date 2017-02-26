<template>
  <a class="menu-item">
    <img :src="_imageSrc" class="appButton_appIconImg" :alt="tip"/>
    {{tip}}
  </a>
</template>
<script>
  import {mapGetters} from 'vuex';
  export default{
    props: ['id', 'img', 'tip', 'url'],
    data: function () {
      return {}
    },
    computed: {
      ...mapGetters({}),
      _imageSrc: function () {
        return require('../assets/' + this.img);
      }
    }
  }
</script>
<style>
  .menu-item {
    /*width: 40px;*/
    /*display: block;*/
    /*color: #000;*/
    /*text-align: center;*/
    /*text-decoration: none;*/
    /*font: bold 12px Arial, Helvetica, sans-serif;*/
  }

</style>
