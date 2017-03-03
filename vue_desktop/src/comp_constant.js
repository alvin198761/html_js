/**
 * Created by tangzhichao on 2017/3/3.
 */

import App from './App.vue';

import Browser from './components/commons/Browser.vue';
import Notes from './components/commons/Notes.vue'
import AppDialog from './components/commons/AppDialog.vue';
import SysSettingDialog from './components/setting/SysSettingDialog.vue';
import InputMethod from './components/setting/InputMethod.vue';

export const ALL_COMPONENTS = {
  'App': App,
  'Note': Notes,
  'Browser': Browser,
  'AppDialog': AppDialog,
  'InputMethod': InputMethod,
  'SysSettingDialog': SysSettingDialog
}
