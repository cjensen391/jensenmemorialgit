import React,{useState} from 'react';

export default function Navbar(){
    const [choice,setChoice] =useState('Home')
    return <nav className="navbar object-left-top navbar-expand-sm  navbar-dark bg-dark">
        <a className="navbar-brand" href="#">
            <b>Christian Jensen</b><br/>
            <i>Father. Husband. Brother. Patriot.</i>
        </a>
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
                    <a className="nav-link" href="#">
                        Home <span className="sr-only">(current)</span>
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" onClick={()=>setChoice('Memorial')} href="#memorial">
                        Memorial
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" onClick={()=>setChoice('Where')}href="#where">
                        Where is it?
                    </a>
                </li>
                <li className="nav-item dropdown">
                    <a
                        className="nav-link dropdown-toggle"
                        href="#"
                        id="navbarDropdownMenuLink"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                    >
                        Photos
                    </a>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                        <a className="dropdown-item" onClick={()=>setChoice('Child')} href="#child">
                            As A Child..
                        </a>
                        <a className="dropdown-item" onClick={()=>setChoice('Military')}href="#Military">
                            Military Life
                        </a>
                        <a className="dropdown-item" onClick={()=> setChoice('Civilian')}href="#Civilian">
                            Civilian Life
                        </a>
                    </div>
                </li>
            </ul>
        </div>
    </nav>
}