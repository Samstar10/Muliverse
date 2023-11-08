import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
import ArticleItem from "./ArticleItem";
import { useNavigate } from "react-router-dom";

function ArticleList(){
    const [articles, setArticles] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        fetch('http://localhost:3000/articles')
        .then(res => res.json())
        .then(data => setArticles(data))
        .catch(error => console.log(error.message))
    }, [])

    function handleDelete(id){
        fetch(`http://localhost:3000/articles/${id}`, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then((data) => {
            console.log(data, 'has been deleted')
            navigate('/')
        })
    }

    return(
        <div className="article-list">
            <h2>My Articles</h2>
            <ul>
                {articles.map(article => (
                    <ArticleItem 
                        key={article.id}
                        article={article}
                        onDelete={() => handleDelete(article.id)}
                    />
                ))}
            </ul>
        </div>
    )
}

export default ArticleList