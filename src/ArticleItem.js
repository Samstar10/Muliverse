import React from "react";
import { Link } from "react-router-dom";


function ArticleItem({ article, onDelete, animationOrder }){
    return(
        <li className="article-item" style={{ '--animation-order': animationOrder }}>
            <Link to={`/article/${article.id}`} className="article-link">{article.title}</Link>
            <div className="buttons">
                <Link to={`/article/${article.id}/edit`}><button>Edit</button></Link>
                <button onClick={onDelete}>Delete</button>
            </div>
        </li>
    )
}

export default ArticleItem