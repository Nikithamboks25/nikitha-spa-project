import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

export default function NavBar(){
    return(
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/user/username">User Profile</Link>
                </li>
            </ul>
        </nav>

    )
    
}