import React from "react";
import Book from "./Book";

const BookList = ({ books }) => {
  return (
    <div className="book-list">
      {books.length > 0 ? (
        books.map((book) => <Book key={book.key} book={book} />)
      ) : (
        <p>No books found.</p>
      )}
    </div>
  );
};

export default BookList;
