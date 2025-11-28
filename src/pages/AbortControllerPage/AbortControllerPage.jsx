import React, { useEffect, useRef, useState } from "react";

function AbortControllerPage() {
    const [posts, setPosts] = useState([]);
    const [error, setError] = useState('');
    const [clock, setClock] = useState(3);
    const abortRef = useRef(null);
    const timerRef = useRef(null);
    const intervalRef = useRef(null);

    const handleButtonAbort = (abortRef) => {
        if (abortRef.current && timerRef.current && intervalRef.current) {
            abortRef.current.abort('Abort button.');
            clearTimeout(timerRef.current);
            console.log('Abort btn');
            setError('Abort button');
            timerRef.current = null;
            clearInterval(intervalRef.current);
        }
    }
    useEffect(() => {
        console.log('Mount');
        abortRef.current = new AbortController();
        intervalRef.current = setInterval(() => {
            console.log(clock - 1);
            setClock((clock) => clock - 1);
        }, 1000);
        timerRef.current = setTimeout(async () => {
            try {

                const req = await fetch('https://jsonplaceholder.typicode.com/posts', {signal: abortRef.current.signal, method: 'GET'});
                const data = await req.json();
                setPosts(data);
                timerRef.current = null;
                clearInterval(intervalRef.current);
                console.log('Timeout.');
            }  catch (e) {
                setError(e);
            }
        }, 3000);

        

        return () => {
            abortRef.current.abort();
            clearTimeout(timerRef.current);
            clearInterval(intervalRef.current);
            console.log('Unmount');
        };
    }, [])
    return(
        <div className="page">
            {error ? <div>{error || 'abort'}</div> : <div>timer to load: {clock} sec.</div>}
            <button onClick={() => handleButtonAbort(abortRef)}>Abort</button>
            {posts.map(post => <div key={post.id}>{post.body}</div>)}
        </div>
    )
}

export default AbortControllerPage;