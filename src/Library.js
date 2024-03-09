import Storage from './Storage';
class Library {
  constructor() {
    this._books = new Map();
    this._numBooks = this._books.length;
    this._booksRead = 0;
  }

  addBook(book) {
    this._books.set(book._id, book);
    Storage.saveBook(book);
    console.log(book.id);
    this._displayBook(book);
  }

  removeBook(book) {
    this._books.delete(book.id);
    Storage.deleteBook(book);
  }

  _displayBook(book) {
    const booksSection = document.querySelector('.books-section');
    const bookEl = document.createElement('article');

    bookEl.classList.add('book-container');
    bookEl.innerHTML = `
      <button class="delete"><i class="fas fa-times fa-2x"></i></button>
      <p id="title" class="book-info">${book.title}</p>
      <p id="author" class="book-info">${book.author}</p>
      <p id="num-pages" class="book-info">${book.pages} pages</p>
      <button class="btn read-marker">Read</button>
      `;
    booksSection.appendChild(bookEl);
  }
}

export default Library;
