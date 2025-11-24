import React, { useCallback, useState } from "react";

function UseCallback() {
    const [inputValue, setInputValue] = useState('');
    const testUseCallback = useCallback(() => {
        console.log(inputValue); // ???
    }, [inputValue])
    return(
        <div className="page">
            <h1>UseCallback</h1>
            <div className="wrapper_component"> 
                <input onChange={(e) => setInputValue(e.target.value)} value={inputValue}/>
                <button onClick={() => testUseCallback(inputValue)}>Alert callback</button>
            </div>
        </div>
    )
}

export default UseCallback;