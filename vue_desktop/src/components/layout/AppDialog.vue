<template>
  <Explorer :id="task.id" :title="task.title" :resize="false" :min="true" :max="false" :revert="false"
            :handleClose="handleClose">
    <div slot="content">
      <div v-loading="loading" element-loading-text="正在加载...">
        <template v-if="apps.length === 0">
          没有子应用列表
        </template>
        <div class="app-grid" style="position: inherit; padding-top: 15px; padding-left: 15px" v-else>
          <ul>
            <AppButton v-for="app in apps" :app="app" style="float: left; margin-right: 50px"></AppButton>
          </ul>
        </div>
      </div>
    </div>
  </Explorer>
</template>
<script>
  import {mapGetters} from 'vuex';
  import {APP_TYPE} from '../../constant';
  import Explorer from './Explorer.vue';
  import AppButton from './AppButton.vue';

  export default {
    props: ['task'],
    data: function () {
      return {
        apps: [],
        loading: false
      }
    },
    created: function () {
      this.loadSubApps();
    },
    methods: {
      loadSubApps(){
        let _this = this;
        _this.loading = true;
        _this.$http.get('/api/content/apps/' + this.task.id).then(function (res) {
          for (let i in res.data) {
            res.data[i].icon = require('../../assets/icon/' + res.data[i].icon)
          }
          _this.apps = res.data;
          _this.loading = false;
        }).catch(function (res) {
          _this.apps = []
          _this.loading = false;
        });
      },
      handleClose: function (e) {
        const _this = this;
        this.$store.dispatch('browser/remove', {
          task: _this.task,
          id: _this.browserId
        })
      }
    },
    components: {
      Explorer, AppButton
    }
  }
</script>
<style>

</style>
