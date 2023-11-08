import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function ArticleDetail(){
    const { id } = useParams()
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
            <h2>{article.title}</h2>
            <p>{article.content}</p>
        </div>
    )
}

export default ArticleDetail