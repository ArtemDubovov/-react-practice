import React from "react";

import DATA_HOOKS from "./data.js";

import './style.css';

function HomePage() {
    return (
        <div className="page">
            <h1>Home page</h1>
            {DATA_HOOKS.map(hook => {
                return <div key={hook.name} className="hook-item">
                            <h2>{hook.name}</h2>
                        <p>{hook.description}</p>
                    </div>
            })}
        </div>
    )
}

export default HomePage;