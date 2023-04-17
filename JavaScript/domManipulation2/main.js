/*
getAttribute()
setAttribute()
href, src
parentElement
children
nextSibling or nextElementSibling
previousSibling or previousElementSibling
getComputedStyle
classList
*/

// getAttribute(), setAttribute()
// let h2 = document.querySelector('h2');
// console.log(h2);
// console.log(h2.getAttribute('class'));
// console.log(h2.getAttribute('id'));


// h2.setAttribute('class', 'heading');
// console.log(h2);
// h2.setAttribute('title', 'my-heading');
// console.log(h2);
// h2.setAttribute('class', 'my-class');
// console.log(h2);
// h2.setAttribute('class', h2.getAttribute('class') + ' heading');



// href, src
// let a = document.querySelector('a');
// console.log(a);

// console.log(a.href);
// console.log(a.innerText);
// a.href = 'https://yahoo.com';
// a.innerText = 'Yahoo';
// console.log(a.href);
// console.log(a.innerText);

// let img = document.querySelector('img');
// console.log(img.src);
// img.src = 'https://images.unsplash.com/photo-1680553986292-345511dcbfd5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDE2fDZzTVZqVExTa2VRfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60';
// img.setAttribute('src', 'https://images.unsplash.com/photo-1680640902934-8de42295e1f0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDE4fDZzTVZqVExTa2VRfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60');
// img.style.width = '500px';



// parentElement, children
// let li = document.querySelector('li');
// console.log(li);
// console.log(li.parentElement);
// console.log(li.parentElement.parentElement);
// console.log(li.parentElement.parentElement.parentElement);
// console.log(li.parentElement.parentElement.parentElement.parentElement);
// console.log(li.parentElement.parentElement.parentElement.children);

// let form = document.querySelector('form');
// console.log(form);
// console.log(form.children);
// console.log(form.children[2]);


// nextElementSibling, nextSibling
// previousElementSibling, previousSibling
/**
 * nextElementSibling gives the next element node
 * On the other hand nextSibling gives the next node. It may be text node or comment node or any other node
 */
// let li = document.querySelector('li');
// console.log(li);
// console.log(li.nextElementSibling);
// console.log(li.nextSibling);
// console.log(li.nextElementSibling.nextElementSibling);
// console.log(li.nextElementSibling.nextElementSibling.nextElementSibling);
// console.log(li.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling);
// console.log(li.nextElementSibling.nextElementSibling.nextElementSibling.previousElementSibling);


// let two = li.nextElementSibling;
// console.log(two);
// two.nextElementSibling.style.color = 'red'; // third element
// two.previousElementSibling.style.color = 'blue'; // first element


// getComputedStyle
// using this we can check all the css styling of an element
// let h2 = document.querySelector('h2');
// console.log(h2);
// let compCS = window.getComputedStyle(h2);
// console.log(compCS.color);
// console.log(compCS.background);
// console.log(compCS.padding);
// console.log(compCS.width);



// classList
// let h2 = document.querySelector('h2');

// h2.classList.add('my-class');
// h2.classList.add('hello');

// console.log(h2.classList);

// h2.classList.remove('hello');
// console.log(h2.classList);

// h2.classList.remove('my-class');
// console.log(h2.classList);



// toggle
let h2 = document.querySelector('h2');
console.log(h2);

h2.classList.toggle('test');
// h2.classList.toggle('test');
// h2.classList.toggle('test');
// h2.classList.toggle('test');
/*
toggle function add the class if it is not listed.
it removes the class if it is already present as class.
*/























