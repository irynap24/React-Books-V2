import React from "react";
import Book from "./Book";

const ReadingList = ({ books, removeFromReadingList }) => {
  return (
    <div className="book-list">
      {books.length > 0 ? (
        books.map((book) => (
          <div key={book.key} className="book-card">
            <Book book={book} addToReadingList={removeFromReadingList} />
            <button
              onClick={() => removeFromReadingList(book.key)}
              className="remove-button"
            >
              Remove from My List
            </button>
          </div>
        ))
      ) : (
        <p>Your reading list is empty.</p>
      )}
    </div>
  );
};

export default ReadingList;
