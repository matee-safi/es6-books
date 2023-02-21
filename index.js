import handleLinkClick from './modules/navigation.js';
import { Book, displayBooks } from './modules/addBooks.js';
import currentTime from './modules/dateAndTime.js';

const form = document.getElementById('form');
const books = JSON.parse(localStorage.getItem('books'));

window.onload = () => {
  setInterval(currentTime, 1000);
};

document.addEventListener('DOMContentLoaded', () => {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const id = Date.now();
    const book = new Book(title, author, id);
    book.addBook();
    if (title && author) {
      displayBooks(book.title, book.author, book.id);
    }
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
  });
});

// Appending book to empty object
if (books !== null) {
  books.forEach((book) => {
    displayBooks(book.title, book.author, book.id);
  });
}

document.addEventListener('click', (e) => {
  handleLinkClick(e);
});
