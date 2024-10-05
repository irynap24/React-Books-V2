import React, { useState } from "react";

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
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for books..."
        />
        <button type="submit">Search</button>
      </form>
    </nav>
  );
};

export default Search;
