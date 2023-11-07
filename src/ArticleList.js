import React from "react";

function ArticleList(){
    const articles = [
        { id: 1, title: 'First Article', content: 'This is the content of the first article.' },
        { id: 2, title: 'Second Article', content: 'This is the content of the second article.' },
        { id: 3, title: 'Third Article', content: 'This is the content of the third article.' }
    ]

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