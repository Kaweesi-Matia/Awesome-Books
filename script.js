/* eslint-disable no-unused-vars */



class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }
}

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
      <div class="book_number">
        <li>${arr[i].title} by ${arr[i].author}</li> <br />
        <li><button class="remove-btn" onclick="removeBook(${i})">Remove</button></li>
      </div>
    `;
  }
  return items;
}

function clearFields() {
  document.querySelector('#title').value = '';
  document.querySelector('#author').value = '';
}

function displayBookz() {
  const bookList = document.querySelector('.book-list');

  bookList.innerHTML = `    
      ${createListOfBooks(booksInLocalstorage)}
    `;

  clearFields();
  contactLink.style.display = 'none';
  addBookToList.style.display = 'none';
}

function addBook(bookTitle, bookAuthor) {
  const book = new Book(bookTitle, bookAuthor);
  booksInLocalstorage.push(book);
  updateLocalStorage();
  displayBookz();
}

function removeBook(i) {
  booksInLocalstorage.splice(i, 1);
  updateLocalStorage();
  displayBookz();
}
const bookListItems = document.querySelector('#book-list');
const awesomeHeading = document.querySelector('#awesome');
const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
  e.preventDefault();

  const title = document.querySelector('#title');
  const author = document.querySelector('#author');
  addBook(title.value, author.value);
  awesomeHeading.style.display = 'block';
  bookListItems.style.display = 'flex';
});

// generating the date dynamically
const displayDate = document.querySelector('.date');
const date = new Date();
const dateNow = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
const time = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
displayDate.innerHTML = `${dateNow.toString()} ${time}`;

function showOnlyForm() {
  addBookToList.style.display = 'flex';
  awesomeHeading.style.display = 'none';
  bookListItems.style.display = 'none';
  contactLink.style.display = 'none';
}
function showBooksOnly() {
  addBookToList.style.display = 'none';
  contactLink.style.display = 'none';
  awesomeHeading.style.display = 'block';
  bookListItems.style.display = 'flex';
}
function showOnlyContact() {
  addBookToList.style.display = 'none';
  awesomeHeading.style.display = 'none';
  bookListItems.style.display = 'none';
  contactLink.style.display = 'flex';
}

contactLink.innerHTML = `<h2>
Contact information
</h2>
<p> Do you have any questions or you just want to say "Hello"
  <br>You can reach out to us!
  </p>
<ul>
  <li>Our email:mail@mail.com</li>
  <li>Our Phone number:004386534422</li>
  <li>Our address:Streetname 22,88273 Kampala,Uganda </li>
</ul>`;

displayList.addEventListener('click', showBooksOnly);

displayForm.addEventListener('click', showOnlyForm);

displayContact.addEventListener('click', showOnlyContact);
window.onload = displayBookz();