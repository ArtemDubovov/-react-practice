import React from "react";

function DeepWrapper(props) {
    return(
        <div className="wrapper_component">
            {props.children}
        </div>
    )
}

export default DeepWrapper;