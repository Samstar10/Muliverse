import React from "react";
import { NavLink } from "react-router-dom";

function Header(){
    return (
        <div className="header">
            <h1>MULIVERSE</h1>
            <p>Get a sneak peek of the amazing world that is my mind!</p>
            <nav>
                <ul>
                    <NavLink to="/" exact>Home</NavLink>
                    <NavLink to="/new">Add New Article</NavLink>
                </ul>
            </nav>
        </div>
    )
}

export default Header