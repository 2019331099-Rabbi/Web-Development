let bookTitle = document.getElementById('title');
let bookAuthor = document.getElementById('author-name');
let year = document.getElementById('published-year');
let submit = document.querySelector('.btn');
let bookList = document.getElementById('book-list');

submit.addEventListener('click', (e) => {
    e.preventDefault();
    let newBook = document.createElement('tr');
    bookList.appendChild(newBook);

    let col1 = document.createElement('th');
    let col2 = document.createElement('th');
    let col3 = document.createElement('th');

    newBook.appendChild(col1);
    col1.innerText = bookTitle.value;

    newBook.appendChild(col2);
    col2.innerText = bookAuthor.value;

    newBook.appendChild(col3);
    col3.innerText = year.value;
});
