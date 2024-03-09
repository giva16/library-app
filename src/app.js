// Entry point for our source codes
import './css/style.css';
import '@fortawesome/fontawesome-free/css/all.css';
import Library from './Library';
import Book from './Book';
import Storage from './Storage';

const addBookBtn = document.querySelector('#add-book');
const closeFormBtn = document.querySelector('#close-form');
const formModal = document.querySelector('#add-book-modal');

addBookBtn.addEventListener('click', () => {
  formModal.showModal();
});

closeFormBtn.addEventListener('click', () => {
  formModal.close();
});

const lib = new Library();

//create an instance of a book
// const book1 = new Book('Harry Potter', 'J.K. Rowling', 230, 1997, 'Fantasy', '', 'A blurb', true);
// const book2 = new Book('Ghost Recon', 'Tom Clancy', 230, 2000, 'Fantasy', '', 'A blurb', true);
// //const book3 = new Book('The Great Gatsby', 'J.Kasdasg', 230, 1937, 'Fantasy', '', 'A blurb', true);

//lib.addBook(book1);
// lib.addBook(book2);

lib.loadBooks();
