import React from "react";

import './style.css';

function Button({func, content}) {
    return(
        <button onClick={func}>{content}</button>
    ) 
}

export default Button;