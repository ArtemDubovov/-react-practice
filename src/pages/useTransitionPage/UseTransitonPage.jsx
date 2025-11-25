import React, { useState, useTransition } from "react";

function UseTransitionPage() {
    const [posts, setPosts] = useState([]);
    const [isPending, startTransition] = useTransition();
    const loadPosts = async () => {
        try {
            const req = await fetch('https://jsonplaceholder.typicode.com/posts');
            const data = await req.json();
            const posts = data.map(post => {
                return {
                    title: post.title,
                    body: post.body,
                    id: post.id
                }
            });
            setPosts(posts);
        } catch (e) {
            alert(e.message);
        }

    }
    return(
        <div className="page">
            <button onClick={() => startTransition(loadPosts)}>Load posts</button>
            {isPending && <div>Loading...</div>}
            {posts && posts.map(post => 
                <div key={post.id}>
                    <p>{post.title}</p>
                    <p>{post.body}</p>
                </div>
                )}
        </div>
    )
}

export default UseTransitionPage;