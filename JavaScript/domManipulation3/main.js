/**
 * createElement()
 * appendChild()
 * append()
 * prepend()
 * insertBefore()
 * insertAdjacentElement()
 * removeChild()
 * remove()
 */


// createElement() -> create a new element
// appendChild() -> add a new element at the last as the child of selected parent
// append() -> add multiple elements at the same time(comma seperated)


// let newElement = document.createElement('li');
// console.log(newElement);
// newElement.classList.add('single-item');

// newElement.innerText = 'Item Five';
// // we want to add this new element inside ul. So we have to catch
// // the parent of li, that is ul
// let ul = document.querySelector('ul');
// ul.appendChild(newElement); // added at the last
// console.log(ul);


// let new1 = document.createElement('li');
// let new2 = document.createElement('li');
// new1.innerText = 'Test 1';
// new2.innerText = 'Test 2';
// let ul = document.querySelector('ul');

// ul.append(new1, new2); // can be given multiple element at the same time
// console.log(ul);



// // prepend() -> add at the beginning
// let newElement = document.createElement('li');
// newElement.innerText = 'Item Zero';
// let ul = document.querySelector('ul');
// ul.prepend(newElement);


// insertBefore() -> insert before a given position
// let newElement = document.createElement('li');
// newElement.innerText = 'Test Item';
// let ul = document.querySelector('ul');
// let li = document.querySelectorAll('li');
// console.log(li);

// ul.insertBefore(newElement, li[1]);
// console.log(ul);



// let myImage = document.createElement('img');
//  myImage.src = "data:image/jpeg;base64,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"
// let h2 = document.querySelector('h2');
// console.log(h2);
// console.log(document.body.children[1]);
// document.body.insertBefore(myImage, document.body.children[1]);



// // insertAdjacentElement()
// let bold = document.createElement('b');
// bold.innerText = 'Bold Text';

// let firstPara = document.querySelector('p');
// firstPara.insertAdjacentElement('beforebegin', bold);
// firstPara.insertAdjacentElement('afterbegin', bold);
// firstPara.insertAdjacentElement('beforeend', bold);
// firstPara.insertAdjacentElement('afterend', bold);



// removeChild()
// remove()

// let ul = document.querySelector('ul');
// let li = document.querySelectorAll('li');

// let deletedChild = ul.removeChild(li[0]);
// console.log(deletedChild);


let p = document.querySelectorAll('p');
p[0].remove();
p[1].remove();
p[2].remove();













