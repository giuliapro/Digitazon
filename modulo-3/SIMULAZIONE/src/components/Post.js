import React from 'react';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

function Post() {
    const { postId } = useParams();
    const [post, setPost] = useState(null);

    useEffect(() => {
        // Effettua la richiesta GET ai dati dell'API
        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
            .then(response => response.json())
            .then(data => {
                setPost(data); // aggiorno il post
            })
            .catch(error => {
                console.error('Errore nella richiesta GET:', error);
            });
    }, [postId]);

    return (
        <div className="post">
            {post ? (
                <div>
                    <h2>Post {post.id}</h2> {/*prendo l'id dal file online */}
                    <p>{post.body}</p> {/*prendo il body dal file online */}
                    <p>Commenti:<br></br>
                        {post.title}</p>
                </div>
            ) : (
                <p>Caricamento in corso...</p>
            )}
        </div>
    );
}

export default Post;
