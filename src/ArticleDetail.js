import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

function ArticleDetail(){
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

    return(
        <div className="article-detail">
            <Link to={`/article/${article.id}/edit`}>Edit</Link>
            <h2>{article.title}</h2>
            <p>{article.content}</p>
        </div>
    )
}

export default ArticleDetail