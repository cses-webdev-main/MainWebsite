import React from 'react'
import { Link } from 'react-router-dom'
import "../styles/Navbar.css"

export default function(logged){
    logged = false
    return(
        <div className="navContainer">
            <Link to="/"><img src="../../cses-webdev-transparent.png" alt="CSESWebDev Logo" className="logo"/></Link>

            <div className="navText">
                {logged && <Link to="/dashboard" className="navLinks">Dashboard</Link>}
                <Link to="aboutus" className="navLinks">About Us</Link>
                <Link to="media" className="navLinks">Media</Link>
                {logged && <Link to="logout" className="navLinks">Logout</Link>}
                {!logged && <Link to="login" className="navLinks">Login</Link>}
            </div>
        
        </div>
    )
}