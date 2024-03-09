class Library {
  constructor() {
    this._books = new Map();
    this._numBooks = this._books.length;
    this._booksRead = new Map();
  }

  addBook(book) {
    this._books.set(book._id, book);
  }

  removeBook(id) {
    this._books.delete(id);
  }
}

module.exports = Library;
