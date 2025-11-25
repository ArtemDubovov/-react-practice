import React, { useReducer } from "react";

function reducer(state, action) {
    switch (action) {
        case 'increment':
            return ++state;
        case 'decrement':
            return --state;
        case 'reset':
            return 0;
        default:
            return null;
    }
}

function CounterReducer() {
    const [state, dispatch] = useReducer(reducer, 0);
    return(
        <div className="wrapper_component">
            <p>Current counter : {state}</p>
            <button onClick={() => dispatch('increment')}>+</button>
            <button onClick={() => dispatch('reset')}>r</button>
            <button onClick={() => dispatch('decrement')}>-</button>
        </div>
    )
}

export default CounterReducer;