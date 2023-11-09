import React from "react";
import { NavLink } from "react-router-dom";

function Header(){
    return (
        <div className="header">
            <h1>MULIVERSE</h1>
            <p>Get a sneak peek of the amazing world that is my mind!</p>
            <nav>
                <ul className="nav">
                    <NavLink to="/" exact className="nav-item" activeClassName="is-active">Home</NavLink>
                    <NavLink to="/new" className="nav-item" activeClassName="is-active">Add New Article</NavLink>
                    <span className="nav-indicator"></span>
                </ul>
            </nav>
        </div>
    )
}

export default Header