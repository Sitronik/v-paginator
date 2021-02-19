import Vue from 'vue';
import App from './App';

import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';

const app = new Vue({
  el: '#app',
  render: h => h(App)
});
