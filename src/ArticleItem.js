import React from "react";
import { Link } from "react-router-dom";


function ArticleItem({ article, onDelete }){
    return(
        <li>
            <Link to={`/article/${article.id}`}>{article.title}</Link>
            <Link to={`/article/${article.id}/edit`}><button>Edit</button></Link>
            <button onClick={onDelete}>Delete</button>
        </li>
    )
}

export default ArticleItem