// Class to interact with local storage to store library book
class Storage {
  static getBooks() {
    let books;

    // check if there is a 'books' entry in localstorage
    if (!localStorage.getItem('books')) {
      books = [];
    } else {
      books = JSON.parse(localStorage.getItem('books'));
    }

    return books;
  }

  static saveBook(bookID) {
    const books = this.getBooks();

    books.push(bookID);
    localStorage.setItem('books', JSON.stringify(books));
  }
}

export default Storage;
