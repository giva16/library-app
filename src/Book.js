class Book {
  constructor(title, author, pages, year, genre, coverURL = '', blurb, isRead = false, favorite = false) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.year = year;
    this.genre = genre;
    this.coverURL = coverURL;
    this.blurb = blurb;
    this.isRead = isRead;
    this.favorite = favorite;
  }
}

module.exports = Book;
