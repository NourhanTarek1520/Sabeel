import React, { useState } from 'react';

const SurahInfo = ({ data }) => {
  const [surahName, setSurahName] = useState('');
  const [englishName, setEnglishName] = useState('');
  const [revelationType] = useState('');

  const handleChange = (event) => {
    const selectedSurah = data.find(surah => surah.name === event.target.value);
    if (selectedSurah) {
      setSurahName(selectedSurah.name);
      setEnglishName(selectedSurah.englishName);
    } else {
      setSurahName('');
      setEnglishName('');
    }
  };

  return (
    <div>
        <div class="container-fluid hero-header">
            <div class="container">
                <div class="row">
                    <div class="col-lg-7">
                        <div class="hero-header-inner animated zoomIn">
                            <h1 class="display-1 text-dark">معلومات عن السور</h1>
                            <ol class="breadcrumb mb-0">
                                <li class="breadcrumb-item"><a href="#">الرئيسيه</a></li>
                                <li class="breadcrumb-item"><a href="#">الصفحات</a></li>
                                <li class="breadcrumb-item text-dark" aria-current="page">معلومات عن السور</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      <select onChange={handleChange}>
        <option value="">Select Surah</option>
        {data.map((surah) => (
          <option key={surah.number} value={surah.name}>
            {surah.name}
          </option>
        ))}
      </select>
      <br />
      {surahName && (
        <div>
          <p>Arabic Name: {surahName}</p>
          <p>English Name: {englishName}</p>
          <p>Revelation Type: {revelationType}</p>
        </div>
      )}
    </div>
  );
}


export default SurahInfo 