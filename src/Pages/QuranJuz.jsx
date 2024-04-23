import React, { useState, useEffect } from 'react';
import axios from 'axios';

const QuranJuz = () => {
  const [juzData, setJuzData] = useState(null);
  const [juzNumber, setJuzNumber] = useState(30); // Default to Juz 30

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://api.alquran.cloud/v1/juz/${juzNumber}/en.asad`);

        // Process the API response
        const formattedData = {};
        response.data.ayahs.forEach((ayah) => {
          formattedData[ayah.surah.number] = {
            number: ayah.surah.number,
            name: ayah.surah.name,
            englishName: ayah.surah.englishName,
            englishNameTranslation: ayah.surah.englishNameTranslation,
            revelationType: ayah.surah.revelationType,
            numberOfAyahs: ayah.surah.numberOfAyahs,
          };
        });

        setJuzData(formattedData);
      } catch (error) {
        console.error(error);
        // Handle errors appropriately (e.g., display an error message)
      }
    };

    fetchData();
  }, [juzNumber]); // Re-fetch data when juzNumber changes

  const handleChange = (event) => {
    const newJuzNumber = parseInt(event.target.value, 10);
    if (isNaN(newJuzNumber) || newJuzNumber < 1 || newJuzNumber > 30) {
      // Handle invalid input (e.g., display an error message)
      return;
    }
    setJuzNumber(newJuzNumber);
  };

  return (
    <>
      {/* Hero Start (using existing styles from your code) */}
      <div class="container-fluid hero-header">
        <div class="container">
          <div class="row">
            <div class="col-lg-7">
              <div class="hero-header-inner animated zoomIn">
                <h1 class="display-1 text-dark">اجزاء القران </h1>
                <ol class="breadcrumb mb-0">
                  <li class="breadcrumb-item">
                    <a href="/">الرئيسيه</a>
                  </li>
                  <li class="breadcrumb-item text-dark" aria-current="page">
                    اجزاء القران
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='quran-search-container'>
       
      <div className="search-section">
        <h1>معلومات عن الاجزاء </h1>
        <form onSubmit={handleChange}>
          <label htmlFor="sura-name">ادخل رقم الجزء   :</label>
          <input
          type="number"
          placeholder="Enter Juz Number (1-30)"
          value={juzNumber}
          onChange={handleChange}
        />
          <button type="submit">ابحث</button>
        </form>
        
      </div>

   
      <div className="juz-results">
  {juzData?.length > 0 && ( // Check if juzData exists and has elements
    <div className="juz-results">
      <ul>
        {Object.values(juzData).map((surah) => (
          <li key={surah.number}>
            <h3>{surah.name} ({surah.englishName})</h3>
            <p>
              - Number of Verses: {surah.numberOfAyahs}
              <br />
              - Revelation Type: {surah.revelationType}
            </p>
          </li>
        ))}
      </ul>
    </div>
  )}
  </div>


      
       

      </div>
    </>
  );
};

export default QuranJuz;
