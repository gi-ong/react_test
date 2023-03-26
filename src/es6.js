/* 출력결과:
*/

// const name = { lang: "good" };

// name.lang = "aa";

// console.log(name);

/* 출력결과:
{ lang: 'aa' }
*/

// -------------------------------------------


// 1. 콜백 
// const fs = require('fs');
// fs.readdir('.', function(err, files){
//     if(err){
//         console.log('Error finding files: ' + err);
//     }else{
//         console.log(files);
//     }
// });
// // 위 fsPromises.readdir이 끝나기 전에 수행
// console.log("ENDED");


// 2. Promise
// const fs = require('fs');
// const fsPromises = fs.promises;

// fsPromises.readdir('.')
//     .then(files => {
//         console.log(files);
//     })
//     .catch(err => console.error(err));

// // 위 fsPromises.readdir이 끝나기 전에 수행
// console.log("ENDED");

/* 출력결과:
ENDED
[
  'App.css',
  'App.js',
  'App.test.js',
  'es6.js',
  'index.css',
  'index.js',
  'logo.svg',
  'reportWebVitals.js',
  'setupTests.js'
]
*/

// 3. async/await
// const fs = require('fs');
// const fsPromises = fs.promises;
// async function fn(){
//     try {
//         let files = await fsPromises.readdir('.');
//         console.log(files);
//     }
//     catch(err){
//         console.error(err);
//     }
// }

// fn(); // async 함수이기에, 완료 전에 다음 로직이 동작

// console.log("ENDED");

/* 출력결과:
ENDED
[
  'App.css',
  'App.js',
  'App.test.js',
  'es6.js',
  'index.css',
  'index.js',
  'logo.svg',
  'reportWebVitals.js',
  'setupTests.js'
]
*/

// -------------------------------------------

// 클래스와 상속
// 1. old

// function Person(name, age){
//     this.name = name;
//     this.age = age;
// }

// Person.prototype.print = function(){
//     console.log(this.name + ", " + this.age);
// }

// var tom = new Person("Tom", 10);
// tom.print();

/* 출력결과:
Tom, 10
*/

// 2. new

// class Person {
//     constructor(name, age){
//         this.name = name;
//         this.age = age;
//     }
//     print(){
//         console.log(this.name + ", " + this.age);
//     }
// }

// const tom = new Person("Tom", 10);
// tom.print();

// class Developer extends Person{
//     constructor(name, age, field){
//         super(name, age);
//         this.field = field;
//     }
//     print(){
//         super.print();
//         console.log(`field : ${this.field}`);
//     }
// }

// const mark = new Developer("Mark", 20, "cls");
// mark.print();

/* 출력결과:
Tom, 10
Mark, 20
field : cls
*/



// -------------------------------------------

// 고차함수(High Order Function)

// 함수를 인자로 받거나 반환이 가능하고, 다른 함수를 조작하는 함수. 함수/클래스 역시 모두 객체.

// 1. js#1
// function base_10(fn){
//     function wrap(x,y){
//         return fn(x,y) + 10;
//     }
//     return wrap;
// }

// function mysum(x,y){
//     return x + y;
// }

// mysum = base_10(mysum);

// console.log(mysum(1,2));

/* 출력결과:
13
*/


// 2. js#2

// const base_10 = fn => (x,y) => fn(x,y) + 10;
// // function base_10(fn){
// //     return (x,y) => fn(x, y) + 10;
// // }
// let mysum = (x,y) => x + y;
// mysum = base_10(mysum);

// console.log(mysum(1,2));

/* 출력결과:
13
*/

// 비교)python

// def base_10(fn):
//     def wrap(x,y):
//         return fn(x,y) + 10
//     return wrap

// def mysum(x,y):
//     return x + y

// mysum = base_10(mysum)

// print(mysum(1,2))


// -------------------------------------------
// 순수 함수
// 하나 이상의 인자를 받고, 인자를 변경하지 않고, 참조하여 새로운 값을 반환
// Side Effects가 없도록 구성(http 요청, 데이터 저장, 쿠키 조작 등)

// let tom = {
//     name : "Tom",
//     canRun: false
// }
// console.log(tom) // { name: 'Tom', canRun: false }

// 1. 순수함수 아닌경우
// function not_pure_fn(){
//     tom.canRun = true;
// }
// not_pure_fn()

// console.log(tom) // { name: 'Tom', canRun: true }

// 2. 순수함수인 경우
// function pure_fn1(person){
//     return{
//         ...person,
//         canRun: true
//     };
// }

// console.log("pure_fn1: ",pure_fn1(tom)) // pure_fn1:  { name: 'Tom', canRun: true }

// 2-1. 순수함수인 경우
// const pure_fn2 = (person) => ({
//     ...person,
//     canRun: true
// })

// console.log("pure_fn2: ", pure_fn2(tom)) // pure_fn1:  { name: 'Tom', canRun: true }
// console.log(tom) // { name: 'Tom', canRun: false }


// 3. 순수함수 활용한 데이터 변환
// #js
const numbers = [1,2,3,4,5,6,7,8,9,10]
const number = numbers.reduce((acc, n)=> acc + n, 0);
console.log(number); // 55

const even_numbers = numbers.filter(i => i % 2 == 0);
console.log(even_numbers); // [ 2, 4, 6, 8, 10 ]


// #python
// from functools import reduce
// numbers = [1,2,3,4,5,6,7,8,9,10]
// number = reduce(lambda acc, n: acc + n, numbers, 0)
// print(number)

// even_numbers = filter(lambda i: i % 2 == 0, numbers)
// print(tuple(even_numbers))
