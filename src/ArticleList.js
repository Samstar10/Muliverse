import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
import ArticleItem from "./ArticleItem";
import { useNavigate } from "react-router-dom";

function ArticleList(){
    const [articles, setArticles] = useState([])
    const navigate = useNavigate()
    const [searchQuery, setSearchQuery] = useState('')

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
            setArticles(prevArticles => prevArticles.filter(article => article.id !== id))
            navigate('/')
        })
        .catch(error => console.log(error.message))
    }

    return(
        <div className="article-list">
            <h2>My Articles</h2>
            <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search articles..."
            />
            <ul>
                {articles.filter(article => article.title.toLowerCase().includes(searchQuery.toLowerCase())).map(article => (
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