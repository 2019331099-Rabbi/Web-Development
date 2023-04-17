let colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

let container = document.querySelector('section');
let h1 = document.querySelector('h1');
let selectedColor = document.querySelector('#selectedColor');


for (let color of colors) {
    let box = document.createElement('div');
    box.classList.add('box');
    container.appendChild(box);
    box.style.background = color;

    box.addEventListener('click', function () {
        h1.innerText = 'You have selected: ';
        selectedColor.innerText = color;
        selectedColor.style.background = color;
        selectedColor.style.border = '1px solid black';
        selectedColor.style.borderRadius = '5px';
    });
}





















