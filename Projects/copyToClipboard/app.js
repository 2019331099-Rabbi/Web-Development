let HTMLBox = document.getElementById('HTMLBox');
let HTMLButton = document.getElementById('HTMLButton');

HTMLButton.addEventListener('click', () => {
    HTMLBox.select();
    document.execCommand('copy');
    HTMLButton.innerText = 'Codes Copied';
});