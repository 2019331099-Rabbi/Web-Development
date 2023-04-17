// .getElementById() -> single element selector(by ID)
// select a single element that match the given ID

// let ulHeading = document.getElementById('ul-title');
// ulHeading.textContent = 'Hello';
// ulHeading.style.color = 'red';
// console.log(ulHeading);



// .querySelector() -> single element selector(by anything like CSS)
// select the first occurance of the element that match the given class/any reference

// let para = document.querySelector('.paragraph');// select like CSS
// para.textContent = 'Hello World!!';
// para.style.color = 'red';
// console.log(para);



// .getElementsByTagName() // multiple element selector

// let para1 = document.getElementsByTagName('p'); // HTML collection - 0 based index
// let para2 = document.querySelectorAll('p'); // node list
// console.log(para1);
// console.log(para2);

// console.log(para1[0]); // Acts like array
// console.log(para1[1]);
// console.log(para1[2]);

// console.log(para2.length);
// for (let i = 0; i < para2.length; i++) {
//     if (i % 2 == 1) para2[i].style.color = 'red';
//     else para2[i].style.color = 'green';
// }



// .getElementsByClassName() -- HTML collection

// let listItem = document.getElementsByClassName('single-item');
// console.log(listItem);
// console.log(listItem[0]);
// console.log(listItem[1]);
// console.log(listItem[2]);



// .querySelectorAll() --> nodelist

// let para = document.querySelectorAll('p');
// para.forEach(p => {
//     p.style.color = 'white';
//     p.style.background = 'black';
//     p.style.padding = '5px';
// });
// console.log(para);

// let lists = document.querySelectorAll('li');
// lists.forEach(li => {
//     li.style.color = 'white';
//     li.style.background = 'black';
//     li.style.padding = '5px';
//     li.style.margin = '10px';
//     li.style.borderRadius = '5px';
// })
// console.log(lists[0]);

// let lists = document.querySelectorAll('ul > li.single-item'); // Alternative way to select
// lists.forEach(li => {
//     li.style.color = 'white';
//     li.style.background = 'black';
//     li.style.padding = '5px';
//     li.style.margin = '10px';
//     li.style.borderRadius = '5px';
// })
// console.log(lists[0]);

// let heading = document.querySelectorAll('h2');
// console.log(heading[1]);



// .childNodes vs .children
// .childNodes selects all avaiable node
// .children select only the elements node
let list = document.querySelector('ul#list');
console.log(list);

console.log(list.childNodes);
// console.log(list.childNodes[5]);

console.log(list.children);