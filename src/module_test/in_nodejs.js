const my_module = require("./my_module");
const { name } = require("./my_module");

console.log(my_module);
console.log(name);

/* 출력결과:
{ name: 'Tom', age: 10, region: 'Seoul' }
Tom
*/