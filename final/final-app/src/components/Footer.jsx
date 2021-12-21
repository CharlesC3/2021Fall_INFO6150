import React from "react";
import apple from "../pics/apple.svg"
import google from "../pics/google.svg"
import facebook from "../pics/facebook.svg"
import twitter from "../pics/twitter.svg"
import linkedin from "../pics/linkedin.svg"
import "../CSS/Footer.css"
import Home from './Home'
import About from'./About'
import Faq from './Faq'
import {Routes, Route, Link} from "react-router-dom"


function Footer(){
    return(
        <footer className="site-footer">
            <div className="menus">
                <div className="menu-area">
                    <h4>Menu</h4>
                    <div className="menu-footer-main-container">
                        <ul className="menu">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="about">About</Link></li>
                            <li><a href="#">News </a></li>
                            <li><Link to="faq">FAQ</Link></li>
                            <li><a href="#">Privacy Policy</a></li>
                            <li><a href="#">Resourses</a></li>
                            <li><a href="#">Donate</a></li>
                            <li><a href="#">Publications</a></li>
                        </ul>
                    </div>
                </div>
                <div className="members">
                    <h4>Members</h4>
                    <p>Join now to receive our weekly posts, newsletters and other publications by email.</p>
                    <ul>
                        <li>
                            <a href="#">Join Now!</a>
                        </li>
                    </ul>
                </div>
                <div className="app">
                    <h4>Together App</h4>
                    <p>Explore the Together App on your mobile device.</p>
                    <a href="#">
                        <img src={apple}/>
                    </a>
                    <a href="#">
                        <img src={google}/>
                    </a>
                </div>
            </div>
            <div className="legal-wrap">
                <div className="legal">
                    <div className="copyright">React SPA Made by Charles Chen</div> 
                    <div className="social">
                    <ul>
                        <li className="terms"><a href="#">Terms</a></li>
                        <li>
                            <a  href="#">
                                <img src={facebook}/>
                            </a>
                        </li>
                        <li>
                            <a  href="#">
                                <img src={twitter}/>
                            </a>
                        </li>
                        <li>
                            <a  href="#">
                                <img src={linkedin}/>
                            </a>
                        </li>
                    </ul>
                </div>
                </div>  
            </div>
        </footer>
    );
}

export default Footer;