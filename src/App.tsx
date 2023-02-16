import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar'
import Home from './Home'
import Gallery from './Clife'

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <Navbar/>
          <div className='App-header'>
          <Gallery />
          </div>
      </header>
    </div>
  );
}

export default App;
