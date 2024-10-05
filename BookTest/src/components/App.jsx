import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
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

  const removeFromReadingList = (bookKey) => {
    setReadingList(readingList.filter((b) => b.key !== bookKey));
  };

  useEffect(() => {
    fetchRandomBooks();
  }, []);

  return (
    <Router>
      <nav className="sticky-nav">
        <Link to="/">Home</Link>
        <Link to="/reading-list">My Reading List ({readingList.length})</Link>
      </nav>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <h1>Book Haven</h1>
              <Search fetchBooks={fetchBooks} />
              <BookList books={books} addToReadingList={addToReadingList} />
            </>
          }
        />
        <Route
          path="/reading-list"
          element={
            <>
              <h1>My Reading List</h1>
              <ReadingList
                books={readingList}
                removeFromReadingList={removeFromReadingList}
              />
            </>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
