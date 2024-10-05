import React, { useState, useEffect } from "react";
import Search from "./Search";
import BookList from "./BookList";

const App = () => {
  const [books, setBooks] = useState([]);
  const [readingList, setReadingList] = useState([]);

  const fetchBooks = async (searchQuery) => {
    try {
      const response = await fetch(
        `https://openlibrary.org/search.json?q=${searchQuery}`
      );
      const data = await response.json();
      setBooks(data.docs || []);
    } catch (error) {
      console.error("Error fetching data:", error);
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
    }
  };

  useEffect(() => {
    fetchRandomBooks();
  }, []);

  return (
    <div>
      <h1>Book Haven</h1>
      <Search fetchBooks={fetchBooks} />
      <BookList books={books} addToReadingList={addToReadingList} />
      <h2>My Reading List</h2>
      <BookList books={readingList} />
    </div>
  );
};

export default App;
