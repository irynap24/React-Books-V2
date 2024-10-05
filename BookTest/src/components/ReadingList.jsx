import React from "react";
import Book from "./Book"; // Reuse the Book component

const ReadingList = ({ books, removeFromReadingList }) => {
  return (
    <div className="book-list">
      {books.length > 0 ? (
        books.map((book) => (
          <div key={book.key} className="book-card">
            {/* Only passing the removeFromReadingList prop */}
            <Book book={book} removeFromReadingList={removeFromReadingList} />
          </div>
        ))
      ) : (
        <p>Your reading list is empty.</p>
      )}
    </div>
  );
};

export default ReadingList;
