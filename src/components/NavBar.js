import React from "react";
import { Link } from "react-router-dom";
export default function NavBar(){
    return(
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/">About</Link>
                </li>
                <li>
                    <Link to="/">User Profile</Link>
                </li>
            </ul>
        </nav>

    )
    
}