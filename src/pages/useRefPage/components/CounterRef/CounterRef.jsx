import React, { useRef } from "react";

function CounterRef() {
    const counterRef = useRef(0);
    const handleClick = () => {
        counterRef.current = ++counterRef.current;
        alert(`Pressed ${counterRef.current}`);
    };
    return(
        <div className="wrapper_component">
            <h3>Press for counter</h3>
            <button onClick={handleClick}>+</button>
        </div>
    )
}

export default CounterRef;