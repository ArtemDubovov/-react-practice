import React from "react";

function MemoComponent({number}) {
    return(
        <div className="wrapper_component">
            <p>{number}</p>
        </div>
    )
}

export default MemoComponent;