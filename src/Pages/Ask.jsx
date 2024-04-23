import React from "react";
function Ask(){
return(<div>
   {/* <!-- test Start --> */}
    <div className="container-fluid test-header">
      <div className="container">
          <div className="row">
              <div className="col-lg-7">
                  <div className="test-header-inner animated zoomIn">
                      <h1 className="display-1 text-dark">تفسير القران </h1>
                      <ol className="breadcrumb mb-0">
                          <li className="breadcrumb-item"><a href="#">الرئيسيه</a></li>
                          
                          <li className="breadcrumb-item text-dark" aria-current="page">تفسير القران </li>
                      </ol>
                  </div>
              </div>
          </div>
      </div>
  </div>
{/* <!-- test End --> */}
  <div className="container mt-5">
    <div className="row">
      <div className="col-md-6 mb-3">
        <label for="searchQuestion" className="form-label">السؤال (موضوع البحث):</label>
        <input type="text" className="form-control" id="searchQuestion" placeholder="اكتب موضوع البحث"/>
      </div>
      <div className="col-md-6 mb-3">
        <label for="searchVerse" className="form-label">الآية (رقم الآية - اختياري):</label>
        <input type="text" className="form-control" id="searchVerse" placeholder="اكتب الآية ( رقم الايه اختياري )"/>
      </div>
    </div>
    <button type="button" className="btn btn-primary" id="searchButton">بحث </button>

    <div id="searchResults" className="mt-3"></div>
  </div>

  {/* <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jC8C6OIWwFKDYoHmT4yrrUVMG6AUwF" crossorigin="anonymous"></script>
  <script>
    const searchButton = document.getElementById('searchButton');
    const searchResults = document.getElementById('searchResults');

    searchButton.addEventListener('click', () => {
      const searchQuestion = document.getElementById('searchQuestion').value;
      const searchVerse = document.getElementById('searchVerse').value;

      // **Placeholder logic for demonstration purposes:**
      // Simulate an API call or data retrieval process here
      // and replace the placeholder content with the actual Quran verses

      searchResults.innerHTML = `
        <p>نتائج البحث بناءً على سؤالك "${searchQuestion}" ورقم الآية "${searchVerse}" (محتوى توضيحي):</p>
        <ul>
          <li>مثال للآية 1 (بالخط العربي)</li>
          <li>مثال للآية 2 (بالخط العربي)</li>
          <li>... (المزيد من الآيات بالخط العربي)</li>
        </ul>
      `;
    });
  </script> */}
</div>)
}

export default Ask