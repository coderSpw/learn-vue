
/*
import {name, age, flag, sum, mul} from "./aaa.js";

import a from "./aaa.js";
*/

// 统一导入
import * as x from "./aaa.js"

/*if (flag) {
  console.log(name);
  console.log(age);
  console.log(sum(10, 20));
  console.log(mul(10, 20));
  console.log(a);
}*/

if (x.flag) {
  console.log(x.name);
  console.log(x.age);
  console.log(x.sum(10, 20));
  console.log(x.mul(10, 20));
}

