import React, { useState } from "react";
import Button from "../ui/Button/Button";

import './style.css';

function Counter({remove}) {
    const [count, setCounter] = useState(0);
    const incrCount = () => setCounter(count + 1);
    const decrCount = () => setCounter(count - 1);
    const resetCount = () => setCounter(0);
    return (
        <div className="counter">
            <div className="counter_remove">
                <Button func={remove} content='X'/>
            </div>
            <h3 className="counter_title">Counter</h3>
            <p>{count}</p>
            <div className="counter_wrapper">
                <Button func={incrCount} content='+'/>
                <Button func={resetCount} content='r'/>
                <Button func={decrCount} content='-'/>
            </div>
            
        </div>
    )
}

export default Counter;