import React from "react";
import { NavLink } from "react-router-dom";

function Header(){
    return (
        <div className="header">
            <h1 className="gradual-appear">
                <span>M</span>
                <span>U</span>
                <span>L</span>
                <span>I</span>
                <span>V</span>
                <span>E</span>
                <span>R</span>
                <span>S</span>
                <span>E</span>
            </h1>
            <p className="appear-gradual">Get a sneak peek of the amazing world that is my mind!</p>
            <nav className="nav-gradual">
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