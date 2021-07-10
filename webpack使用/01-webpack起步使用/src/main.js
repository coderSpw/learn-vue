
//var {add, mul} = requires('./mathUtils.js');

import {add, mul, number1} from './js/mathUtils.js';

import css from './css/normal.css';

//import less from './css/special.less';

console.log(add(10, 20));
console.log(mul(10, 20));
console.log(number1);

import {Vue} from 'Vue';
import App from './vue/App'

new Vue({
  el: '#app',
  template: '<App />',
  components: {
    App
  },
  data: {
    message: "root"
  }
});
