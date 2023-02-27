import React,{useState} from 'react';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Home from "./Home";
import Memorial from "./Memorial"
export default function Navbar(){
    const [choice,setChoice] =useState('Home')
    return <nav className="navbar object-left-top navbar-expand-sm  navbar-dark bg-dark">
        <a className="navbar-brand" href="src#">
            <b>Christian Jensen</b><br/>
            <i>Father. Husband. Brother. Patriot.</i>
        </a>
        <Router>
            <Route path='/' element={<Home/>}
        </Router>
        <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
        >
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
                <li className="nav-item active">
                    <a className="nav-link" href="src#">
                        Home <span className="sr-only">(current)</span>
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" onClick={()=>setChoice('Memorial')} href="src#memorial">
                        Memorial
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" onClick={()=>setChoice('Where')}href="src#where">
                        Where is it?
                    </a>
                </li>
                <li className="nav-item dropdown">
                    <a
                        className="nav-link dropdown-toggle"
                        href="src#"
                        id="navbarDropdownMenuLink"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                    >
                        Photos
                    </a>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                        <a className="dropdown-item" onClick={()=>setChoice('Child')} href="src#child">
                            As A Child..
                        </a>
                        <a className="dropdown-item" onClick={()=>setChoice('Military')}href="src#Military">
                            Military Life
                        </a>
                        <a className="dropdown-item" onClick={()=> setChoice('Civilian')}href="src#Civilian">
                            Civilian Life
                        </a>
                    </div>
                </li>
            </ul>
        </div>
    </nav>
}