let decInp = document.getElementById('dec-inp');
let binInp = document.getElementById('bin-inp');
let errorMsg = document.getElementById('error-msg');

decInp.addEventListener('input', () => {
    let decValue = Number(decInp.value);
    binInp.value = decValue.toString(2);
});


binInp.addEventListener('input', () => {
    let binValue = binInp.value;
    if (binValidator(binValue)) {
        decInp.value = parseInt(binValue, 2);
        errorMsg.textContent = '';
    }
    else errorMsg.textContent = 'Enter a valid binary input';
});

function binValidator(num) {
    for (let ch of num) {
        if (ch != '0' && ch != '1') return false;
    }
    return true;
}