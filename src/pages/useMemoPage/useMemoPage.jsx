import { useMemo, useState, useEffect } from "react";
import Post from "../../components/Post/Post";

function UseMemoPage() {
    const [checked, setChecked] = useState(false);
    const [posts, setPosts] = useState([]);
    useEffect(() => {
            const fetchData = async () => {
                try {
                    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
                    if (!res.status) throw new Error('Load is error.');
                    const data = await res.json();
                    setPosts(data.slice(0, 10));
                    
                } catch (e) {
                    console.log(e.message);
                }
            }
            fetchData();
        }, []);
    const memoPosts = useMemo(() => {
        return posts.filter(post => post.id % 2 === 0 || checked);
    }, [posts, checked])
    return (
        <div className="page">
            <h1>UseMemo</h1>
            <input type="checkbox" checked={checked} onChange={() => setChecked(!checked)}/>
            {memoPosts.map(post => (
                <Post key={post.id} text={`${post.id} --- ${post.body}`}/>
            ))}
        </div>
    )
}

export default UseMemoPage;