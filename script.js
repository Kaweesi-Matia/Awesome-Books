/* eslint-disable no-unused-vars */
if (localStorage.getItem('list of Books') === null) {
  localStorage.setItem('list of Books', JSON.stringify([]));
}

const booksInLocalstorage = JSON.parse(localStorage.getItem('list of Books'));

function updateLocalStorage() {
  localStorage.setItem('list of Books', JSON.stringify(booksInLocalstorage));
}

function createListOfBooks(arr) {
  let items = '';
  for (let i = 0; i < arr.length; i += 1) {
    items += `
          <li>${arr[i].title}</li> <br />
          <li>${arr[i].author}</li> <br />
          <li><button onclick="removeBook(${i})">Remove</button></li>
          <hr />
          `;
  }
  return items;
}

function addNewBook(bookTitle, bookAuthor) {
  const book = {
    title: bookTitle,
    author: bookAuthor,
  };
  booksInLocalstorage.push(book);
  updateLocalStorage();
  displayBooks();
}

function removeBook(i) {
  booksInLocalstorage.splice(i, 1);
  updateLocalStorage();
  displayBooks();
}

const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
  const title = document.querySelector('#title');
  const author = document.querySelector('#author');
  e.preventDefault();
  addNewBook(title.value, author.value);
});

window.onload = displayBooks();