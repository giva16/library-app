class Book {
  constructor(title, author, pages, isRead = false) {
    this.id = Math.random().toString(16).slice(2);
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
  }
}

export default Book;
