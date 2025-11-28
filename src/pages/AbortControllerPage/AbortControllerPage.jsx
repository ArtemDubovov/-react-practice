import React, { useEffect, useRef, useState } from "react";

function AbortControllerPage() {
    const [posts, setPosts] = useState([]);
    const [error, setError] = useState('');
    const abortRef = useRef(null);
    const timerRef = useRef(null);

    const handleButtonAbort = (abortRef) => {
        if (abortRef.current && timerRef.current) {
            abortRef.current.abort('Abort button.');
            clearTimeout(timerRef.current);
            console.log('Abort btn');
            setError('Abort button');
            timerRef.current = null;
        }
    }
    useEffect(() => {
        console.log('Mount');
        abortRef.current = new AbortController();
        timerRef.current = setTimeout(async () => {
            try {
                const req = await fetch('https://jsonplaceholder.typicode.com/posts', {signal: abortRef.current.signal, method: 'GET'});
                const data = await req.json();
                setPosts(data);
                timerRef.current = null;
                console.log('Timeout.');
            }  catch (e) {
                setError(e);
            }
        }, 2000);

        

        return () => {
            abortRef.current.abort();
            clearTimeout(timerRef.current);
            console.log('Unmount');
        };
    }, [])
    return(
        <div className="page">
            {error && <div>{error || 'abort'}</div>}
            <button onClick={() => handleButtonAbort(abortRef)}>Abort</button>
            {posts.map(post => <div key={post.id}>{post.body}</div>)}
        </div>
    )
}

export default AbortControllerPage;