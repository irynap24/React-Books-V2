import React from "react";
import Book from "./Book";

const BookList = ({ books, addToReadingList }) => {
  return (
    <div className="book-list">
      {books.length > 0 ? (
        books.map((book) => (
          <Book
            key={book.key}
            book={book}
            addToReadingList={addToReadingList}
          />
        ))
      ) : (
        <p>No books found.</p>
      )}
    </div>
  );
};

export default BookList;
