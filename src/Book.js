class Book {
  constructor(title, author, pages, year, genre, coverURL = '', blurb, isRead = false, favorite = false) {
    // REMOVE ID WHEN THE BAKCEND IS INTEGRATED
    this.id = Math.random().toString(16).slice(2);
    this.title = title;
    this.author = author;
    this.pages = pages;
    /********* Attributes for future extension*****/
    // this.year = year;
    // this.genre = genre;
    // this.coverURL = coverURL;
    // this.blurb = blurb;
    // this.isRead = isRead;
    // this.favorite = favorite;
  }
}

export default Book;
