// argument vs parameter
/*
Parameters: Parameters are the named variables listed in the
function declaration.
Arguments: Arguments are the actual values that are passed to
a function when it is called
*/

// function adder(a, b) {
//     return a + b;
// }
// console.log(adder(1, 2));
// here a, b are parameters and 1, 2 are argumetns of function adder


// arguments objects
/**
 * available inside every function
 * it's an array-like object. Only have length property
 * conains all arguments passed to the function
 * not available inside the arrow function
 */
// simple example of argument object
// function adder(a, b, c) {
//     console.log(arguments, arguments.length);
//     console.log(arguments[0]);
//     console.log(arguments[1]);
//     console.log(arguments[2]);
//     // list of arguments passed to the function contains in the
//     // arguments object
// }
// adder(1, 2, 3, 4);


/**
 * Now what is the application of arguments object?
 * We can passed unlimited argumets to a function and use them
 */

// Design a function that can add unlimited number
// method 1
// function adder() {
//     let sum = 0;
//     for (let value of arguments) sum += value;
//     return sum;
// }
// console.log(adder(1, 2, 3, 4));

// method 2
/**
 * arguments is not an array. So we can not use reduce() method
 * in arguments object. But we can use it indirectly like the
 * following
 */
// function adder() {
//     let arr = [...arguments];
//     return arr.reduce((acc, value) => acc += value);
// }
// console.log(adder(1, 2, 3, 4));


// method 3
// function adder(...numbers) {
//     return numbers.reduce((sum, num) => sum + num, 0);
// }
// console.log(adder(2, 3, 5, 10));
// console.log(adder(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));
  


/**
 * Point to be noted
 * arguments objects is a feature of normal function
 * It does not support in arrow function
 */
// let adder = () => {
//     // console.log(arguments.length); // not possible
// }
// adder(1, 2);





// rest parameter
// We have already seen it. Method 3 is an example of rest parameter

// Another example
function person(name, age, ...degree) {
    console.log(name);
    console.log(age);
    console.log(degree);   
}
person('Shahed', 22, 'SSC', 'HSC');
/**
 * Here ...degree is the rest parameter
 * ...degree acts like an array if we sent multiple degree
 * rest parameter must be the last parameter
 */









