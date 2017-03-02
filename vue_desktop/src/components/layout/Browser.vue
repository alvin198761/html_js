<template>
  <Explorer :id="task.id" :title="task.title" :handleClose="handleClose">
    <iframe slot="content" frameborder="0" :src="task.url"></iframe>
  </Explorer>
</template>
<script>
  import {mapGetters} from 'vuex';
  import Explorer from './Explorer.vue';
  export default{
    props: ['task'],
    data: function () {
      return {}
    },
    computed: {
      ...mapGetters({})
    },
    methods: {
      handleClose: function (e) {
        const _this = this;
        this.$store.dispatch('browser/remove', {
          task: _this.task,
          id: _this.browserId
        })
      }
    },
    components: {
      Explorer
    }
  }
</script>
<style>


</style>
