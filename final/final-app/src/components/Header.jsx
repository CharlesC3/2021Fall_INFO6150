import React from "react";
import logo from '../pics/Logo.jpg'
import '../CSS/Header.css'
import {Routes, Route, Link} from "react-router-dom"
import Home from './Home'


function Header(){
    return(
        <div className="header">
          <Link to="/"><img src={logo} className="img-logo" alt="logo"/></Link>
          <Link to="/" className='title' ><h1>Survive Depression</h1></Link>
      </div>
    );
}

export default Header;