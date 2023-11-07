import React from "react";

function Header(){
    return (
        <div className="header">
            <h1>MULIVERSE</h1>
            <p>Get a sneak peek of the amazing world that is my mind!</p>
            <nav>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/new">Add New Article</a></li>
                </ul>
            </nav>
        </div>
    )
}

export default Header