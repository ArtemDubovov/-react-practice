import React, {useState, useEffect} from "react";

function LazyPosts() {
    const [posts, setPosts] = useState([]);
        const [error, setError] = useState(null);
    
        useEffect(() => {
            const fetchData = async () => {
                try {
                    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
                    if (!res.status) throw new Error('Load is error.');
                    const data = await res.json();
                    setPosts(data);        
                } catch (e) {
                    setError(e.message);
                }
            }
            fetchData();
        }, []);
    return(
        <div className="wrapper_component">
            {!error && <div>{error}</div>}
            {posts.map(post=> {
                return <div key={post.id}>
                    <p>{post.id}</p>
                    <p>{post.body}</p>
                </div>
            }) || <div>Loading...</div>}
        </div>
    )
}

export default LazyPosts;