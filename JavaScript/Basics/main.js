//Variable declaration

// var firstNumber = 12, secondNumber = 13;
// console.log('First number = ', firstNumber);
// console.log('Second number = ', secondNumber);
// console.log('Summation = ', firstNumber + secondNumber);

// let firstNumber = 12, secondNumber = 13;
// console.log('First number = ', firstNumber);
// console.log('Second number = ', secondNumber);
// console.log('Summation = ', firstNumber + secondNumber);

// const pi = 3.1416;
// console.log(pi);


//Primitive data types

// let name = 'Fazla Rabbi Shahed'; //String literal
// let firstName = String('Fazla') // Factory fuction
// let lastName = new String('Rabbi'); // Constructor function

// let price = 2.45; // Number literal
// let unit = 3; // Number literal

// let isNewCustomer = false; // boolean
// let discount = null; // object type. Used to clear the variable

// let date; // undefined
// console.log(date);
// let month = undefined;
// console.log(undefined);

// /*
// discount = null and date = undefined. Their value is same.
// But type is differerent
// ==(double equal) check only value
// ===(triple equal) check value as well as type
// null == undefined // true. value is same
// null === undefined // false. value same but type is different.
// */

// let symbol1 = Symbol(); // symbol
// let symbol2 = Symbol();
// /*
// symbol1 and symbol2 are different. every symbol is different.
// */


//Dynamic typing vs static typing
/*
In C/C++ before declare a variable we have to mention it's type.
let we declare a variable int number = 2;
here number is integer type. We can not store any value other
than integer type. This is called static type language

but in case of JavaScript there is no restriction. It is dynamic
type.

source code -> compilation -> machine code
              (compile time) (run time)

Those language in which check data types in compile time is
called static type
Those language in which check data types in run time is
called dynamic type
*/

// let customerName = 'Fazla Rabbi';
// console.log(customerName, typeof(customerName));
// customerName = 48;
// console.log(customerName, typeof(customerName));


// String vs weak type
// let firstName = 'Fazla';
// let lastName = 'Rabbi';
// let fullName = firstName + lastName; // string + string = string
// console.log(fullName);

// let firstNumbr = 4;
// let secondNumber = '3';
// let number = firstNumbr + secondNumber;// number + string = string
// /* convert the firstNumber into string - then add like string.
//    Implicit type conversion
// */
// console.log(number);

// number = firstNumbr * secondNumber;
// console.log(number);
// /*
// In this case js convert the second number from string to number then
// multiply with firstNumber.
// */

// secondNumber = true;
// console.log(firstNumbr + secondNumber);
// //true -> 1 -> 4 + 1 = 5

// /*
// So form the above example we can say that js is not serious
// in type checking. It is weakly type programmimg language
// */


// // Objects
// let car = {
//     brand: 'Audi',
//     color: 'Red',
//     price: '45000',
//     model: 'v8'

//     //key : value
// };
// car.color = 'Green'
// console.log(car.brand, car.color);

// // Another way
// /*
// when we use this way? When the key will be dynamic, we use this
// bracket notation.
// */
// let optionSelected = 'price';
// console.log(car['brand'], car['model']);
// console.log(car[optionSelected]);


// // Array
// let numbers = [1, 2, 3, 4];
// console.log(numbers);
// console.log(numbers[0]);
// numbers[3] = 5;
// console.log(numbers[3]);

// let names = ['Fazla', 'Rabbi', 'Shahed'];
// console.log(names);

// let cars = [
//     {brand: 'Audi', price: 45000}, 
//     {brand: 'Honda', price: 50000}
// ]

// console.log(cars);
// console.log(cars[0]);
// console.log(cars[0].brand);

// cars[1].brand = 'Tata';
// console.log(cars[1]);
// cars[1] = {brand: 'BMW', price: 90000};
// console.log(cars[1]);
// console.log(cars.length);


// // Function
// function calculateSum(number1, number2) {
//     return number1 + number2;
// }

// console.log(calculateSum(2, 3));
// console.log(calculateSum(4, 5));

// function greet(firstName = 'John', lastName = 'Doe') {
//     console.log('Hello ' + firstName + lastName);
// }
// greet('Fazla', 'Rabbi');

//Immediately Invokable Function Expressions - IIFEs
//run without call
// (function(name) {
//     console.log('Hello ' + name);
// })('Fazla Rabbi');


// Equality Operator

// // strict equality(===) - value + type
// console.log(2 === '2');
// console.log(2 !== '5');

// // lose eqality
// console.log(2 == '2');

// falsy value -> considred as false, not actually false
// undefined, null, NaN(not a number), 0, ''

// console.log(false || 'John' || 2);
// // Here John acts like trurthy value. Hence it return true


// Control Flow
// let userResponse = prompt('Is it raining? a) Yes b) No');
// console.log(userResponse);

// if (userResponse === 'Yes') console.log('Play football');
// else console.log('Play cricket');

// let marks = Number(prompt('Student marks: '));
// console.log(marks);
// let grade = null;
// if (marks >= 90) grade = 'A+';
// else if (marks >= 80) grade = 'A';
// else grade = 'F';
// console.log('Grade: ', grade);


// let operator = prompt('Operator: +, -, *, /');
// let number1 = Number(prompt('First number: '));
// let number2 = Number(prompt('Second number: '));

// console.log(number1, number2);

// switch (operator) {
//     case '+':
//         console.log('Result = ', number1 + number2);
//         break;
//     case '-':
//         console.log('Result = ', number1 - number2);
//         break;
//     case '*':
//         console.log('Result = ', number1 * number2);
//         break;
//     case '/':
//         console.log('Result = ', number1 / number2);
//         break;
//     default:
//         alert('Give a valid operator');
// }


// Loops
// for (let i = 0; i < 10; i++) console.log('Hello World', i);


// let cleanCitiesByDivision = [
//     {name: 'Dhaka', cities: ['Kishorgonj']},
//     {name: 'Chitagong', cities: ['Chitagong', 'Rangamati']},
//     {name: 'Rajshahi', cities: ['Rajshahi', 'Nilphamari']}
// ];

// let userCity = prompt('Your city: ');

// outer_loop:
// for (let i = 0; i < cleanCitiesByDivision.length; i++) {
//     for (let j = 0;  j < cleanCitiesByDivision[i].cities.length; j++) {
//         if (cleanCitiesByDivision[i].cities[j] === userCity) {
//             console.log('Your city is in the list');
//             break outer_loop;
//         }
//     }
//     console.log('Division name: ', cleanCitiesByDivision[i].name);
// }


// for in loop
// let user = {
//     name: 'Fazla Rabbi',
//     age: 22,
//     email: 'fazla99@student.sust.edu'
// }

// console.log(user);

// for (key in user) {
//     console.log(key, user[key]);
// }


// let numbers = [5, 33, 26, 1, 5];
// for (key in numbers) {
//     console.log(key, numbers[key]);//in case of array, keys are indexes
// }


// //for of loop
// for (let value of numbers) {
//     console.log(value);
// }


// Execution time
// let num = 10000000;
// let arr = new Array(num);

// console.time('for');
// for (let i = 0; i < num; i++) {}
// console.timeEnd('for');

// console.time('while');
// let i = 0;
// while (i < num) {i++}
// console.timeEnd('while');

// console.time('for..in');
// for (key in arr) {}
// console.timeEnd('for..in');


// console.time('for..of');
// for (key of arr) {}
// console.timeEnd('for..of');



// JavaScript Hoisting

// 1. Variable declerations are hoisted: 
// function test() {
//     console.log(name);
//     var name = 'Fazla Rabbi';
//     console.log(name);
// }
// test();
/*
Look at the code. We declare variable name and assign 'Fazla Rabbi'
to it. When we print the variable before it's initialization
JS rewrite the code in the following
function test() {
    var name;
    console.log(name);
    name = 'Fazla Rabbi';
    console.log(name);
}
The declaration is moved to the top of the scope, but the
assignment (if any) remains in place. This means, when we declare
a varibale using var keyword we can use the variable before it is
declared, but its value will be undefined untill it is assigned
a value.

but if we declare the variable using let keyword there is no
facility like the above. We have to use the variable after it's
declarations

function test() {
    // console.log(name); can not use
    let name = 'Fazla Rabbi';
    console.log(name);
}

*/

// 2. Function expressions are hoisted
// test();
// function test() {
//     let name = 'Fazla Rabbi';
//     console.log(name);
// }
/*
 When a function is declared using the function keyword, the
 entire function declaration is moved to the top of the scope,
 including the function body. This means that you can call a
 function before it is declared in the code.
*/


// Scope
// function test()
// {
//     if (true) {
//         let blockVar = 'I am inside if';// Block scope
//         var localVar = 'I am inside function';// Function scope
//         console.log(blockVar);
//         console.log(localVar);
//     }
//     if (true) {
//         // console.log(blockVar); //cann't access
//         console.log(localVar);
//     }
// }
// test();
/*
When we declare a variable in if block using var keyword then the
scope of that variable will be within the function.
But if we declare the variable using let keyword then, the scope
of that variable will be only within the if block

To get rid of the confusion we always declare variable using let
keyword.
*/