import Vue from 'vue';
import VueI18n from 'vue-i18n';
import App from './App.vue';
import router from './router';
import store from './store';
import vuetify from './plugins/vuetify';
import messages from '@/i18n/messages';

import './registerServiceWorker';

Vue.config.productionTip = false;
Vue.use(VueI18n);

// Create VueI18n instance with options
const i18n = new VueI18n({
  locale: 'fr', // set locale
  messages, // set locale messages
});

new Vue({
  router,
  store,
  vuetify,
  i18n,
  render: h => h(App),
}).$mount('#app');
