import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Search from "./Search";
import BookList from "./BookList";
import ReadingList from "./ReadingList";

const App = () => {
  const [books, setBooks] = useState([]);
  const [readingList, setReadingList] = useState([]);

  const fetchBooks = async (searchQuery) => {
    try {
      const response = await fetch(
        `https://openlibrary.org/search.json?q=${searchQuery}`
      );
      const data = await response.json();
      if (data.docs && data.docs.length > 0) {
        setBooks(data.docs);
      } else {
        setBooks([]);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      setBooks([]);
    }
  };

  const fetchRandomBooks = async () => {
    const randomQueries = [
      "fiction",
      "science",
      "history",
      "fantasy",
      "mystery",
    ];
    const randomQuery =
      randomQueries[Math.floor(Math.random() * randomQueries.length)];
    await fetchBooks(randomQuery);
  };

  const addToReadingList = (book) => {
    if (!readingList.some((b) => b.key === book.key)) {
      setReadingList([...readingList, book]);
    } else {
      alert("This book is already in your reading list!");
    }
  };

  const removeFromReadingList = (key) => {
    setReadingList(readingList.filter((book) => book.key !== key));
  };

  useEffect(() => {
    fetchRandomBooks();
  }, []);

  return (
    <Router>
      <div>
        <Search fetchBooks={fetchBooks} />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <h1>Book Haven</h1>
                <BookList books={books} addToReadingList={addToReadingList} />
              </>
            }
          />
          <Route
            path="/reading-list"
            element={
              <>
                <h2>My Reading List</h2>
                <ReadingList
                  books={readingList}
                  removeFromReadingList={removeFromReadingList}
                />
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
