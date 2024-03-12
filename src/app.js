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
    /********* UI ***********/
    const booksEl = document.querySelector('.books-section');
    const addBookBtn = document.querySelector('#add-book');
    const addBookForm = document.querySelector('#add-book-form');
    const addBookModal = document.querySelector('#add-book-modal');
    const closeAddBookFormBtn = document.querySelector('#close-form');

    booksEl.addEventListener('click', this._removeBook.bind(this)); // remove book when delete button is clicked
    addBookForm.addEventListener('submit', this._newBook.bind(this)); // add book by getting its data from the form when submitted
    booksEl.addEventListener('click', this._markRead.bind(this)); // Mark books as read/unread
    addBookBtn.addEventListener('click', this._openModal.bind(this, addBookModal)); // open Modal

    // Close modal and reset form
    closeAddBookFormBtn.addEventListener('click', () => {
      this._closeModal(addBookModal);
      addBookForm.reset();
    });
  }

  _newBook() {
    const title = document.querySelector('#title').value;
    const author = document.querySelector('#author').value;
    const pages = document.querySelector('#pages').value;
    const isRead = document.querySelector('#book-read').checked;

    this._library.addBook(new Book(title, author, +pages, isRead));
  }

  _removeBook(e) {
    if (e.target.classList.contains('icon-delete')) {
      if (confirm('Are you sure that you want to delete this book?')) {
        const id = this._getBookId(e);

        // remove book from library
        this._library.removeBook(id);

        e.target.closest('.book-container').remove();
      }
    }
  }

  _markRead(e) {
    if (e.target.classList.contains('read-marker')) {
      const id = this._getBookId(e);

      this._library._markRead(id);

      if (this._library._books[id].isRead) {
        e.target.classList.add('read');
        e.target.textContent = 'Read';
      }

      if (e.target.classList.contains('read') && !this._library._books[id].isRead) {
        e.target.classList.remove('read');
        e.target.textContent = 'Unread';
      }
    }
  }

  _openModal(modal) {
    modal.showModal();
  }

  _closeModal(modal) {
    modal.close();
  }

  _getBookId(e) {
    const id = e.target.closest('.book-container').getAttribute('data-id');
    return id;
  }
}
const lib = new Library();

//create an instance of a book
const book1 = new Book('Harry Potter', 'J.K. Rowling', 230);
const book2 = new Book('Ghost Recon', 'Tom Clancy', 222);

const app = new App();
