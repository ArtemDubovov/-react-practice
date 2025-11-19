import React from "react";

import './style.css';

function Input({inputValue, setInputValue}) {
    return(
        <input onChange={(e) => setInputValue(e.target.value)} value={inputValue}/>
    ) 
}

export default Input;