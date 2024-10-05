import React, { useState } from "react";
import { Link } from "react-router-dom"; // If using React Router for navigation

const Search = ({ fetchBooks }) => {
  const [query, setQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    if (query) {
      fetchBooks(query);
    }
  };

  return (
    <nav className="sticky-nav">
      <div className="nav-links">
        {/* Links to navigate between different sections */}
        <Link to="/" className="nav-item">
          Home
        </Link>
        <Link to="/reading-list" className="nav-item">
          My Reading List
        </Link>
      </div>
      {/* Search Form */}
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for books..."
          className="search-input"
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>
    </nav>
  );
};

export default Search;
