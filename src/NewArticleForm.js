import React, { useState } from "react";

function NewArticleForm(){
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')

    function handleSubmit(e){
        e.preventDefault()

        fetch('http://localhost:3000/articles', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({title, content})
        })
        .then(res => res.json())
        .then(data => {
            console.log('New article added:', data)
            setTitle('')
            setContent('')
        })
        .catch(error => console.log(error.message))
    }

    return(
        <div className="new-article-form">
            <h2>Create New Article</h2>
            {/* {Add form elements here} */}
        </div>
    )
}

export default NewArticleForm