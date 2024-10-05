import React, { useState } from "react";

const Book = ({ book }) => {
  const title = book.title || "No title available";
  const authors = book.author_name
    ? book.author_name.join(", ")
    : "Unknown Author";
  const description = book.first_sentence
    ? book.first_sentence[0]
    : "No description available.";
  const thumbnail = book.cover_i
    ? `https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg`
    : "";

  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className="book-card">
      {thumbnail && <img src={thumbnail} alt={title} className="book-cover" />}
      <h2>{title}</h2>
      <p>
        <strong>Author(s):</strong> {authors}
      </p>
      <button onClick={toggleModal} className="read-about-button">
        Read About Me
      </button>

      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={toggleModal}>
              &times;
            </span>
            <h2>{title}</h2>
            <p>
              <strong>Author(s):</strong> {authors}
            </p>
            <p>
              <strong>Description:</strong> {description}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Book;
