import React, { useState, useTransition } from "react";

function UseTransitionPage() {
    const [posts, setPosts] = useState([]);
    const [isPending, startTransition] = useTransition();
    const loadPosts = () => {
        startTransition(async () => {
            const req = await fetch('https://jsonplaceholder.typicode.com/posts');
            const data = await req.json();
            const posts = data.map(post => {
                return {
                    title: post.title,
                    body: post.body,
                    id: post.id
                }
            });
            startTransition(() => {                           // Херь какая-то
                return new Promise((resolve, reject) => {
                    setTimeout(() => {
                        setPosts(posts);
                        resolve(null);
                    }, 1000);

                })
            });
        })
    }
    return(
        <div className="page">
            <button disabled={isPending} onClick={loadPosts}>{isPending ? 'loading...' : 'Load posts'}</button>
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