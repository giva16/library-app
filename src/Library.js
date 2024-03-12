import Storage from './Storage';
class Library {
  constructor() {
    this._books = Storage.getBooks();
  }

  addBook(book) {
    this._books[book.id] = book;
    Storage.saveBook(book);
    this._displayBook(book);
  }

  removeBook(id) {
    delete this._books[id];
    Storage.deleteBook(id);
  }

  _markRead(id) {
    const book = this._books[id];

    book.isRead = !book.isRead;
    Storage.saveBook(book);
  }

  // laod all books onto the DOM  when app is launched
  loadBooks() {
    for (let [id, book] of Object.entries(this._books)) {
      this._displayBook(book);
    }
  }

  // displays a book in the library by adding it to the DOM
  _displayBook(book) {
    const booksSection = document.querySelector('.books-section');
    const bookEl = document.createElement('article');
    const bookReadClass = book.isRead ? 'read' : '';
    const bookReadText = book.isRead ? 'Read' : 'Unread';

    bookEl.classList.add('book-container');
    bookEl.setAttribute('data-id', book.id);
    bookEl.innerHTML = `
      <button class="delete"><i class="fas icon-delete fa-times fa-2x"></i></button>
      <p id="title" class="book-info">${book.title}</p>
      <p id="author" class="book-info">${book.author}</p>
      <p id="num-pages" class="book-info">${book.pages} pages</p>
      <button class="btn read-marker ${bookReadClass}">${bookReadText}</button>
      `;
    booksSection.appendChild(bookEl);
  }
}

export default Library;
