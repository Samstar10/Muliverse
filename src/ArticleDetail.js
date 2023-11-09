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
            <div className="detail-buttons">
                <Link to={`/article/${article.id}/edit`}><button className="edit-button">Edit</button></Link>
                <button onClick={handleDelete} className="delete-button">Delete</button>
            </div>
            <h2>{article.title}</h2>
            <p>{article.content}</p>
        </div>
    )
}

export default ArticleDetail