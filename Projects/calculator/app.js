let one = document.getElementById('one');
let two = document.getElementById('two');
let three = document.getElementById('three');
let four = document.getElementById('four');
let five = document.getElementById('five');
let six = document.getElementById('six');
let seven = document.getElementById('seven');
let eight = document.getElementById('eight');
let nine = document.getElementById('nine');
let zero = document.getElementById('zero');
let zerozero = document.getElementById('zerozero');
let AC = document.getElementById('AC');
let DE = document.getElementById('DE');
let dot = document.getElementById('dot');
let vag = document.getElementById('vag');
let gon = document.getElementById('gon');
let jog = document.getElementById('jog');
let biyog = document.getElementById('biyog');
let eqaul = document.querySelector('.equal');
let display = document.querySelector('.display > input');


one.addEventListener('click', () => {
    display.value += one.value;
})
two.addEventListener('click', () => {
    display.value += two.value;
})
three.addEventListener('click', () => {
    display.value += three.value;
})
four.addEventListener('click', () => {
    display.value += four.value;
})
five.addEventListener('click', () => {
    display.value += five.value;
})
six.addEventListener('click', () => {
    display.value += six.value;
})
seven.addEventListener('click', () => {
    display.value += seven.value;
})
eight.addEventListener('click', () => {
    display.value += eight.value;
})
nine.addEventListener('click', () => {
    display.value += nine.value;
})
zero.addEventListener('click', () => {
    display.value += zero.value;
})
zerozero.addEventListener('click', () => {
    display.value += zerozero.value;
})
jog.addEventListener('click', () => {
    display.value += jog.value;
})
biyog.addEventListener('click', () => {
    display.value += biyog.value;
})
gon.addEventListener('click', () => {
    display.value += gon.value;
})
vag.addEventListener('click', () => {
    display.value += vag.value;
})
AC.addEventListener('click', () => {
    display.value = '';
})
DE.addEventListener('click', () => {
    display.value = display.value.slice(0, -1);
})
dot.addEventListener('click', () => {
    display.value += dot.value;
})
eqaul.addEventListener('click', () => {
    display.value = eval(display.value);
})


















































