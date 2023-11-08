import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

function ArticleDetail(){
    const navigate = useNavigate()
    const { id } = useParams()
    console.log('ID:', id)
    const [article, setArticle] = useState(null)

    useEffect(() => {
        fetch(`http://localhost:3000/articles/${id}`)
        .then(res => res.json())
        .then(data => setArticle(data))
    },[id])

    if(!article){
        return <div>Loading...</div>
    }

    function handleDelete(){
        fetch(`http://localhost:3000/articles/${id}`, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(() => {
            console.log('Article deleted')
            navigate(`/`)
        })
    }

    return(
        <div className="article-detail">
            <Link to={`/article/${article.id}/edit`}>Edit</Link>
            <button onClick={handleDelete}>Delete</button>
            <h2>{article.title}</h2>
            <p>{article.content}</p>
        </div>
    )
}

export default ArticleDetail