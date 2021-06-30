let name = '嗯哼';
let flag = true;

function sum(num1, num2) {
  return num1 + num2;
}

export {
  name, flag, sum
}

export let age = 10;

export function mul(num1, num2) {
  return num1 * num2;
}

// export default  默认只能有一个, 同一个模块中不允许存在多个

export default function() {
  console.log('1111');
}
