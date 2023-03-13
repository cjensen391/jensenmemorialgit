//import React, {useState} from 'react';
import './App.css';

import {BrowserRouter,Routes,Route,Link} from "react-router-dom"
import Navbar from './components/Navbar'
import Home from './components/Home'
import Where from './components/Where'
import Gallery from './components/Gallery'
import Memorial from './components/Memorial'

function App() {
  //  const [page, setPage] = useState('home')
  return (
    <div className="App">
      <header className="App-header">
          <BrowserRouter>
              <main>
                  <Navbar/>
                  <Routes>
                      <Route path='/' element={<Home />}/>
                      <Route path='/where' element={<Where />}/>
                      <Route path='/memorial' element={<Memorial />}/>
                      <Route path='/clife' element={<Gallery />}/>
                  </Routes>
              </main>
          </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
