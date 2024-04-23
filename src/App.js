import logo from './logo.svg';
import './App.css';
import About from './Pages/About';
import Home from './Pages/Home';
import Activity from './Pages/Activity';
import  Contact from './Pages/Contact';
import Team from './Pages/Team';
import Search from './Pages/Search';
import Test from './Pages/Test'
import Ask from './Pages/Ask';
import Plan from './Pages/Plan'
import Header from './Components/Header'
import Footer from './Components/Footer'
import DataFetcher from './DataFetcher';
import QuranSearch from './Pages/QuranSearch'
import QuranJuz from './Pages/QuranJuz'
import { BrowserRouter ,Routes, Route, Router  }from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Header />
          <BrowserRouter>   
            <Routes>
              < Route path='/' element={<Home/>} />
              < Route path='/about' element={<About/>} />
              < Route path='/activity' element={<Activity/>} />
              < Route path='/contact' element={<Contact/>} />
              < Route path='/team' element={<Team/>} />
              < Route path='/search' element={<Search/>} />
              < Route path='/test' element={<Test/>} />
              < Route path='/QA' element={<Ask/>} />
              < Route path='/plan' element={<Plan/>} />
              <Route path = "/QuranSearch" element={<QuranSearch/>} />
              <Route path = "/QuranJuz" element={<QuranJuz/>} />
              
          
            
            </Routes>
          </BrowserRouter>
          
     <Footer />
      {/* <DataFetcher /> */}
 

    </div>
  );
}

export default App;
