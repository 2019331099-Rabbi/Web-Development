// In JavaScript function acts like an object

// function jog(x, y) {
//     return x + y;
// }

// let biyog = function (x, y) {
//     return x - y;
// };

// let gun = function multiply(x, y) {
//     return x * y;
// };

// console.log(jog(5, 3));
// console.log(biyog(5, 3));
// console.log(gun(5, 3));
// // console.log(multiply(5, 3)); X -> can not call

// We can store functions in an array
// let calc = [jog, biyog, gun];
// // console.log(calc[0](5, 3));
// for (f of calc) {
//     let result = f(5, 3);
//     console.log(result);
// }

// We can construct object using function
// let calculator = {
//     add: jog,
//     substract: biyog,
//     multiply: gun
// }

// console.log(calculator.add(5, 3));
// console.log(calculator.substract(5, 3));
// console.log(calculator.multiply(5, 3));

/*
Higher order function
1. accept other function as argument
2. and/or return a function
*/

// Accept other function as argument
// function repeat(func, count) {
//     while (count--) func();
// }

// let hi = function() {
//     console.log('Hi, you are welcome');
// }

// function bye() {
//     console.log('Bye, you can go');
// }

// repeat(hi, 5);
// repeat(bye, 10);

// return a function

// function something() {
//     return function anything() {
//         return 'hello';
//     }
// }
// // Here something is higher order function that returns a function
// let tmp = something(); // return a function
// console.log(tmp); // it is a function
// console.log(tmp()); // call the return function

// function multiplier(m) {
//     return function (value) {
//         return value * m;
//     }
// }
// let double = multiplier(2);
// console.log(double(5));
// let tripple = multiplier(3);
// console.log(tripple(5));



// callback
/**
a callback is a function that is passed as an argument to
another function and is invoked within that function at a
later time.
 */
// Example 1
// function greeting() {
//     console.log('I will show in another function');
// }

// function myFunc(callback) {
//     callback();
// }

// myFunc(greeting);

// Example 2
// function add(x, y) {
//     return x + y;
// }

// function substract(x, y) {
//     return x - y;
// }

// function multiply(x, y) {
//     return x * y;
// }

// function calculator(x, y, callback) {
//     return callback(x, y);
// }

// console.log(calculator(5, 3, add));
// console.log(calculator(5, 3, substract));
// console.log(calculator(5, 3, multiply));




// arrow function

// without using arrow function
// function square(x) {
//     return x * x;
// }
// console.log(square(5));

// using arrow function
// let borgo = (x) => {
//     return x * x;
// }
// console.log(borgo(3));

// let adder = (x, y) => {
//     return x + y;
// }
// console.log(adder(5, 3));

// implicit returns -> it works when there is only one expression in function
// let jog = (a, b) => a + b;
// console.log(jog(5, 3));

// let isEven = (x) => (x % 2 == 0);
// console.log(isEven());




// Default parameter
function name(firstName = 'Fazla', lastName = 'Rabbi') {
    console.log(firstName);
    console.log(lastName);
}
name();
name('MR', 'Shahed');
/*
if someone does not give firstName and lastName as arguments
default value of firstName will be 'Fazla' and lastName will be
'Rabbi'
*/



