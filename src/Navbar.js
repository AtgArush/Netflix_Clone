import React, { useState, useEffect } from 'react'
import "./navbar.css"

function Navbar() {

    const [Show, handleShow] = useState(false)

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if(window.scrollY > 300){
                handleShow(true)
            }else handleShow(false)
        })
    }, [])    

    return (
        <div className = {`nav ${Show && "nav__bg"} `}>
            <img class="nav__logo" 
            src="https://upload.wikimedia.org/wikipedia/commons/0/0f/Logo_Netflix.png" 
            alt="Netflix Logo" />
            <img class="nav__avatar" 
            src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png" 
            alt="Netflix Logo" />
        </div>
    )
}

export default Navbar
