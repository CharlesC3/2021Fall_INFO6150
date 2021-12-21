import React from 'react'
import '../CSS/Login.css'
import { fetchLogin } from '../fake-services';
import {Routes, Route, Link} from "react-router-dom"
import { useState } from "react";




function Login(){

    const [isClicked, setIsClicked] = useState(false);
    const toggleClass = () =>{
        setIsClicked(!isClicked);
    }

    const [name, setName] = useState('');

    const onSubmitHandler = (e) =>{
        e.preventDefault();
        if(name.trim.length > 10){
            alert("The user name is too long");
        }
    }

    return(
        <div className='main'>
            <div className="formarea">
            <form action="/form" onSubmit = {(e) =>{onSubmitHandler(e)}}>
                <h2>Welcome {name}</h2>
                User Name:<br></br>
                <div className="namebox"><input className=".label__input name" type="text" name="name" value={name} onInput={ (e) => setName(e.target.value)}required/></div>
                <br></br>
                Password:<br></br>
                <div className="passwordbox"><input className=".label__input password" type="password" name="password" required/></div>
                <br></br>
                <input className="checkbox" type="checkbox" name="annoy_me"/>
                <label>Agree to our <Link to="../privacy">Privacy Policy</Link></label>
                <br></br>
                <button id="submit" type="submit" value="Submit" className={isClicked ? "button-loading" : ""} onClick={toggleClass}><p className='button-text'>Submit</p></button>
            </form>
        </div>
        </div>
    );
}

export default Login;