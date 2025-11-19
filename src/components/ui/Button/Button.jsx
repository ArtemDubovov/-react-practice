import React from "react";

import './style.css';
import { STYLES_BTN } from ".";

function Button({func, content, type}) {
    return(
        <button className={STYLES_BTN[type] ?? STYLES_BTN['default']} onClick={func}>{content}</button>
    ) 
}

export default Button;