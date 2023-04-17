/**
 * using .map() method we can create a new object from the existing
 * objects without any damage to the existing object
 */

// let names = ['shahed', 'rabbi', 'afnan', 'tamim', 'ramim'];
// let numbers = [10, 20, 30, 40, 50];
// let library = [
//     {name: 'Humayun Ahamed', availableBooks: 30},
//     {name: 'Zafar Iqbal', availableBooks: 15},
//     {name: 'Ahmed Sofa', availableBooks: 20},
//     {name: 'Adlof Hitlar', availableBooks: 1}
// ];

// numbers.map(function(number, index, arr) {
//     console.log(number, index, arr);
// });

// get a new array that is twise than the numbers
// let newNumbers1 = numbers.map(function(number) {
//     return number * 2;
// });
// console.log(newNumbers1);

// using arrow function
// let newNumbers2 = numbers.map(number => {
//     return number * 3;
// });
// console.log(newNumbers2);

// let newNames = names.map(name => name.toUpperCase());
// console.log(newNames);

// let authors = library.map(item => {
//     return item.name;
// })
// console.log(authors);

// let books = library.map(item => {
//     return item.availableBooks;
// });
// console.log(books);

// find and filter
/**
 * find return the first match value or object based on the
   given condition.
 * On teh other hand filter return all the value/object based
   on the given condition.
 */
// Example 1
// let numbers = [10, 20, 30, 40, 50];

// let newNumbers1 = numbers.find(number => {
//     return number > 20;
// });
// console.log(newNumbers1);

// let newNumbers2 = numbers.filter(number => {
//     return number > 20;
// });
// console.log(newNumbers2);

// Example 2
// let students = [
//     {name: 'Rahim', number: 12, dept: 'Math'},
//     {name: 'Karim', number: 80, dept: 'Math'},
//     {name: 'Shahed', number: 95, dept: 'English'},
//     {name: 'Rabbi', number: 34, dept: 'Bangla'},
//     {name: 'Ramim', number: 20, dept: 'Bangla'},
//     {name: 'Tamim', number: 25, dept: 'Bangla'}
// ];

// let failedStudentsBangla = students.filter(item => {
//     return item.number < 33 && item.dept === 'Bangla';
// })
// console.log(failedStudentsBangla);

// Filtering duplicate values
// const numbers = [1, 2, 2, 3, 4, 4, 5, 6, 6, 7, 8, 8, 9, 10, 10];
// console.log(numbers);

// Method 1
// let uniq = [...new Set(numbers)];
// console.log(uniq);

// Method 2
// let uniq = numbers.filter((number, index, arr) => {
//     return arr.indexOf(number) === index;
// });
// console.log(uniq);

// some and every
/**
 * 'some' return true if any of the item follows the given consition
 * 'every' return true if every item follows the given condition
 */
// let students = [
//     {name: 'Rahim', number: 28, dept: 'Math'},
//     {name: 'Karim', number: 80, dept: 'Math'},
//     {name: 'Shahed', number: 95, dept: 'English'},
//     {name: 'Rabbi', number: 34, dept: 'Bangla'},
//     {name: 'Ramim', number: 21, dept: 'Bangla'},
//     {name: 'Tamim', number: 25, dept: 'Bangla'}
// ];

// let hasFailed = students.some((item) => {
//   return item.number < 33;
// });
// console.log(hasFailed);

// let greaterThan20 = students.every(item => item.number > 20);
// console.log(greaterThan20);

// reduce
// let numbers = [1, 2, 3, 4, 5];
// console.log(numbers);

// method 1
// let sum = numbers.reduce(func, 0);
// function func(acc, value) {
//   return acc + value;
// }
// console.log(sum);

// method 2
// let sum = numbers.reduce(function(acc, value) {
//   return acc + value;
// }, 0);

// console.log(sum);

// let mx = numbers.reduce((acc, value) => {
//   return Math.max(acc, value);
// }, -1);
// console.log(mx);

// let mn = numbers.reduce((acc, value) => Math.min(acc, value));
// console.log(mn);

// Ex1
function name(params) {
  
    console.log("Shahed");
}
