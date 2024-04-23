import React, { useState, useEffect } from 'react';
import axios from 'axios';

function QuranSearch() {
  const [bookName, setBookName] = useState('');
  const [tafseers, setTafseers] = useState([]);
  const [error, setError] = useState('');

  const handleInputChange = (event) => {
    setBookName(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.get(`/search/${bookName}`);
      setTafseers(response.data);
      setError('');
    } catch (error) {
      if (error.response && error.response.status === 404) {
        setError('No tafseer found for the given book name.');
      } else {
        setError('An error occurred while searching.');
      }
      console.error(error);
    }
  };

  return (
    <div className="quran-search">
      <h1>Search Quran Tafseers</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="book-name">Enter Book Name:</label>
        <input
          type="text"
          id="book-name"
          value={bookName}
          onChange={handleInputChange}
        />
        <button type="submit">Search</button>
      </form>
      {error && <p className="error">{error}</p>}
      {tafseers.length > 0 && (
        <div className="tafseers_results">
          <h2>Tafseers Found:</h2>
          {tafseers.map((tafseer) => (
            <div key={tafseer.id} className="tafseer-item">
              <h3>{tafseer.name}</h3>
              <p>Language: {tafseer.language}</p>
              <p>Author: {tafseer.author}</p>
              <p>Book Name: {tafseer.book_name}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default QuranSearch;
