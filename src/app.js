// Entry point for our source codes
import './css/style.css';
import '@fortawesome/fontawesome-free/css/all.css';
import Library from './Library';
import Book from './Book';

class App {
  constructor() {
    this._library = new Library();
    this._library.loadBooks();
    this._loadEventListeners();
  }

  _loadEventListeners() {
    const addBookBtn = document.querySelector('#add-book');
    const addBookModal = document.querySelector('#add-book-modal');
    addBookBtn.addEventListener('click', this._openModal.bind(this, addBookModal));

    const closeAddBookFormBtn = document.querySelector('#close-form');
    const addBookForm = document.querySelector('#add-book-form');
    closeAddBookFormBtn.addEventListener('click', () => {
      this._closeModal(addBookModal);
      addBookForm.reset();
    });

    const booksEl = document.querySelector('.books-section');
    booksEl.addEventListener('click', this._removeBook.bind(this));
  }

  _removeBook(e) {
    if (e.target.classList.contains('icon-delete')) {
      if (confirm('Are you sure that you want to delete this book?')) {
        const id = e.target.closest('.book-container').getAttribute('data-id');

        // remove book from library
        this._library.removeBook(id);

        e.target.closest('.book-container').remove();
      }
    }
  }

  _openModal(modal) {
    modal.showModal();
  }

  _closeModal(modal) {
    modal.close();
  }
}
const lib = new Library();

//create an instance of a book
const book1 = new Book('Harry Potter', 'J.K. Rowling', 230, 1997, 'Fantasy', '', 'A blurb', true);
const book2 = new Book('Ghost Recon', 'Tom Clancy', 230, 2000, 'Fantasy', '', 'A blurb', true);
// //const book3 = new Book('The Great Gatsby', 'J.Kasdasg', 230, 1937, 'Fantasy', '', 'A blurb', true);

//lib.addBook(book1);
// lib.addBook(book2);
const app = new App();
