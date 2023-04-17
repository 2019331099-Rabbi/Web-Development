let btn = document.querySelector('button');

// 2nd way
// btn.onclick = function () {
//     alert('Hello World');
//     console.log('Button clicked');
// }


// 3rd way
btn.addEventListener('dblclick', function() {
    alert('Hello World');
    console.log('Fazla Rabbi Shahed');
})