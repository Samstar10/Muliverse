import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";

function EditArticleForm(){
    const { id } = useParams()
    const history = useHistory()
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')

    useEffect(() => {
        fetch(`http://localhost:3000/articles/${id}`)
        .then(res => res.json())
        .then(data => {
            setTitle(data.title)
            setContent(data.content)
        })
    })

    function handleSubmit(e){
        e.preventDefault()

        fetch(`http://localhost:3000/articles/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ title, content })
        })
        .then(res => res.json())
        .then(data => {
            console.log('Article updated:', data)
            history.push(`/article/${id}`)
        })
    }

    return(
        <div className="edit-article-form">
            <h2>Edit Article</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="title">Title:</label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="content">Content:</label>
                    <textarea
                        id="content"
                        name="content"
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Save Changes</button>
            </form>
        </div>
    )
}

export default EditArticleForm