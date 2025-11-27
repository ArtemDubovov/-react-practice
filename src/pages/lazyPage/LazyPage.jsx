import React, { lazy, Suspense } from "react";

function LazyPage() {
    const Posts = lazy(() => delayLoad(import('./components/LazyPosts')));
    return(
        <div className="page">
            <h1>Lazy</h1>
            <Suspense fallback={<div>Loading...</div>}>
                <Posts />
            </Suspense>
        </div>
    )
}

function delayLoad(promise) {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(promise), 1000);
    })
}

export default LazyPage;