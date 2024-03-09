class Library {
  constructor() {
    this._books = new Map();
    this._numBooks = this._books.length;
    this._booksRead = 0;
  }

  addBook(book) {
    this._books.set(book._id, book);
    this._displayBook(book);
  }

  removeBook(id) {
    this._books.delete(id);
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
