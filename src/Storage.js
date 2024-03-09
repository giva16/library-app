// Class to interact with local storage to store library book
class Storage {
  static getBooks() {
    let books;

    // check if there is a 'books' entry in localstorage
    if (!localStorage.getItem('books')) {
      books = {};
    } else {
      books = JSON.parse(localStorage.getItem('books'));
    }
    return books;
  }

  static saveBook(book) {
    const books = this.getBooks();

    books[book.id] = book;
    localStorage.setItem('books', JSON.stringify(books));
  }

  static deleteBook(id) {
    const books = this.getBooks();

    delete books[id];
    localStorage.setItem('books', JSON.stringify(books));
  }
}

export default Storage;
