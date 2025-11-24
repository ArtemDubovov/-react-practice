import React, { useEffect, useState } from "react";
import Post from "../../components/Post/Post";

function UseEffectComponent() {
    const [posts, setPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch('https://jsonplaceholder.typicode.com/posts');
                if (!res.status) throw new Error('Load is error.');
                const data = await res.json();
                setPosts(data.slice(0, 10));
                setTimeout(() => setIsLoading(false), 1000);
                console.log('123'); // !!!
                
            } catch (e) {
                setError(e.message);
                setIsLoading(false);
            }
        }
        fetchData();
    }, []);

    return (
        <div className="page">
            <h1>UseEffect</h1>
            {isLoading ? <div>Loading...</div> : 
                error ? <div>Error - {error}</div> : 
                        posts.map(el => <Post key={el.id} title={el.title} text={el.body}/>) // вынести в отд. компонент
            }
        </div>
    )
}

export default UseEffectComponent;