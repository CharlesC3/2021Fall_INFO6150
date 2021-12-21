import React from "react";
import sunrise from '../pics/Sunrise.jpg'
import '../CSS/Home.css'
import {Routes, Route, Link} from "react-router-dom"
import { useState } from "react";

function Home(){

  const [isClicked, setIsClicked] = useState(false);
    const toggleClass = () =>{
        setIsClicked(!isClicked);
    }

    return(
        <div className="home">
          <div className="home-help">
            <img src={sunrise}/>
            <div className="help-area">
              <h2>Life should be colorful</h2>
              <p className="description">If you have following symptoms which last at least two weeks, please click the button to seek help or contract your doctor. </p>
              <button className={isClicked ? "button-loading" : ""} onClick={toggleClass}><p className="button-text">Get help</p></button>
              <p>We won't collect any personal information here, feel free to look for help. See more of our <Link to="privacy">Privacy Policy</Link>.</p>
              <ul>
                <li>Feeling sad or having a depressed mood</li>
                <li>Loss of interest or pleasure in activities once enjoyed</li>
                <li>Changes in appetite — weight loss or gain unrelated to dieting</li>
                <li>Trouble sleeping or sleeping too much</li>
                <li>Loss of energy or increased fatigue</li>
                <li>Increase in purposeless physical activity (e.g., inability to sit still, pacing, handwringing) or slowed movements or speech (these actions must be severe enough to be observable by others)</li>
                <li>Feeling worthless or guilty</li>
                <li>Difficulty thinking, concentrating or making decisions</li>
                <li>Thoughts of death or suicide</li>
              </ul>
            </div>
          </div>
          
      </div>
    );
}

export default Home;