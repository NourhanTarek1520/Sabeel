import React, { useState, useEffect } from 'react';
import axios from 'axios';

function QuranSearch() {
  const [suraName, setSuraName] = useState('');
  const [suraData, setSuraData] = useState(null);
  const [error, setError] = useState('');

  const handleInputChange = (event) => {
    setSuraName(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(`http://api.alquran.cloud/v1/surah/${suraName}`);
      const data = await response.json();
      if (data.data) {
        setSuraData(data.data[0]);
      } else {
        setSuraData(null);
      }
    } catch (error) {
      console.error(error);
      setError('An error occurred while searching.');
    }
  };

  useEffect(() => {
    setSuraData(null);
  }, []);

  return (
    <>
     {/* Hero Start (using existing styles from your code) */}
     <div class="container-fluid hero-header">
        <div class="container">
          <div class="row">
            <div class="col-lg-7">
              <div class="hero-header-inner animated zoomIn">
                <h3 class=" text-dark">معلومات عن السور</h3>
                <ol class="breadcrumb mb-0">
                  <li class="breadcrumb-item">
                    <a href="/">الرئيسيه</a>
                  </li>
                  <li class="breadcrumb-item text-dark" aria-current="page">
                    معلومات عن السور
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Hero End */}
    <div className="quran-search-container">
     
      <div className='whole_search_container'>
          {/* Search Section (styled to be centered) */}
      <div className="search-section">
        <h1>معلومات عن السور</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="sura-name">ادخل اسم السوره :</label>
          <input
            type="text"
            id="sura-name"
            value={suraName}
            onChange={handleInputChange}
          />
          <button type="submit">ابحث</button>
        </form>
        {error && <p className="error">{error}</p>}
      </div>

      {/* Sura Results (using existing styles from your code) */}
      {suraData && (
        <div className="sura-results">
          <h2>اسم السوره: {suraData.name}</h2>
          <p>اسم السوره بالانجليزيه: {suraData.englishName}</p>
          <p>عدد اياتها: {suraData.numberOfAyahs}</p>
          <p>مكان نزولها: {suraData.revelationType}</p>
        </div>
      )}
      </div>
    
    </div>
    </>
    
  );
}

export default QuranSearch;
