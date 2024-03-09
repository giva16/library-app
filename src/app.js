// Entry point for our source codes
import './css/style.css';
import '@fortawesome/fontawesome-free/css/all.css';
import Book from './Book';

const addBookBtn = document.querySelector('#add-book');
const closeFormBtn = document.querySelector('#close-form');
const formModal = document.querySelector('#add-book-modal');

addBookBtn.addEventListener('click', () => {
  formModal.showModal();
});

closeFormBtn.addEventListener('click', () => {
  formModal.close();
});

//create an instance of a book
const harryPotter = new Book('Harry Potter', 'J.K. Rowling', 230, 1997, 'Fantasy', '', 'A blurb', true);

// display book
console.log(harryPotter);
