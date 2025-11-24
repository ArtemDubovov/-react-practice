import React, { useRef } from "react";
import InputDomRef from "./InputDomRef";

function DomRef() {
    const inputRef = useRef(null);
    return (
        <div className="wrapper_component">
            <InputDomRef ref={inputRef} />
        </div>
    )
}

export default DomRef;