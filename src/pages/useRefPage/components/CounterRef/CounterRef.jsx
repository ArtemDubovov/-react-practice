import React, { useRef } from "react";

function CounterRef() {
    const counterRef = useRef(0);
    const handleClick = () => {
        counterRef.current = ++counterRef.current;
        alert(`Pressed ${counterRef.current}`);
    };
    return(
        <>
        <h3>Press for counter</h3>
        <button onClick={handleClick}>+</button>
        </>
    )
}

export default CounterRef;