import React from "react";
import {Routes, Route, Link} from "react-router-dom"
import About from'./About'
import Home from './Home'
import News from './News'
import Faq from './Faq'
import Privacy from './Privacy'
import Login from './Login'
import '../CSS/Menubar.css'

function Menubar(){
    return(
        <div>
            <nav className="menubar">
                <ul className="menu">
                    <div className="navbar">
                    <Link to="/"><li className="dropdown">Home</li></Link>
                    <Link to="about"><li className="dropdown">About</li></Link>
                    <Link to="news"><li className="dropdown">News</li></Link>
                    <Link to="faq"><li className="dropdown">FAQ</li></Link>
                    <li className="dropdown" id="dropdown-l">
                        <button>More</button>
                        <div className="dropmenu" id="left-dropmenu">
                        <ul className="dropdown-content">
                            <li><Link to="privacy">Privacy Policy</Link></li>
                            <li><a href="#">Resources</a></li>
                            <li><a href="#">Donate</a></li>
                            <li><a href="#">Publications</a></li>
                        </ul>
                        </div>
                    </li>
                    </div>
                    <div className="sign-in">
                        <Link to="login"><li className="dropdown">Log In</li></Link>
                        <li className="dropdown" id="dropdown-r">
                            <button>Join</button>
                            <div className="dropmenu" id="right-dropdown">
                                <ul className="dropdown-content">
                                    <li><a href="#">General</a></li>
                                    <li><a href="#">Residents and Fellows</a></li>
                                    <li><a href="#">Mediacal Students</a></li>
                                    <li><a href="#">International </a></li>
                                    <li><a href="#">International Residents-Fellows</a></li>
                                </ul>
                            </div>
                        </li>
                    </div>
                </ul>
            </nav>
            <div>
                <Routes>
                    <Route path="/" element={<Home/>}></Route>
                    <Route path="about" element={<About/>}></Route>
                    <Route path="news" element={<News/>}></Route>
                    <Route path="faq" element={<Faq/>}></Route>
                    <Route path="privacy" element={<Privacy/>}></Route>
                    <Route path="login" element={<Login/>}></Route>
                </Routes>
            </div>
        </div>
    );
}

export default Menubar;