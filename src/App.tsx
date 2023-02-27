import React, {useState} from 'react';
import './App.css';

import {BrowserRouter,Route,Link} from "react-router-dom"
import Navbar from './components/Navbar'
import Home from './components/Home'
import Gallery from './components/Clife'
import Memorial from './components/Memorial'

function App() {
    const [page, setPage] = useState('home')
  return (
    <div className="App">
      <header className="App-header">
          <Navbar />
          <Gallery/>
      </header>
    </div>
  );
}

export default App;
