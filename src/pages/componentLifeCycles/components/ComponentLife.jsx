import React, { useEffect, useState } from "react";


function ComponentLife({STATUS, state, dispatch,}) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        dispatch(STATUS.MOUNT);
        return () => {
            dispatch(STATUS.UNMOUNT);
        }
    }, [STATUS, dispatch]);

    useEffect(() => {
        if (count > 0) {
            dispatch(STATUS.UPDATE);
        }

    }, [STATUS, dispatch, count]);

    return(
        <div className="wrapper_component">
            <div>counter: {count}</div>
            <button onClick={() => setCount((count) => count + 1)}>+</button>
        </div>
    )
}

export default ComponentLife;