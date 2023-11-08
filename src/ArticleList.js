import React, { useState, useEffect } from "react";

function ArticleList(){
    const [articles, setArticles] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/articles')
        .then(res => res.json())
        .then(data => setArticles(data))
        .catch(error => console.log(error.message))
    }, [])

    return(
        <div className="article-list">
            <h2>My Articles</h2>
            <ul>
                {articles.map(article => (
                    <li key={article.id}>
                        <span>{article.title}</span>
                        <button>Edit</button>
                        <button>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ArticleList