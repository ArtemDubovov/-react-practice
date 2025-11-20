import React from "react";

import './style.css';

function Post({title, text}) {
    return (
        <div className="post">
            <h3>{title}</h3>
            <p>{text}</p>
        </div>
    )
}

export default Post;