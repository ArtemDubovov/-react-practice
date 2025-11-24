import React from "react";

function InputDomRef({ref}) {
    const alertRefValue = () => alert(ref.current.value);
    return (
        <>
            <input ref={ref}/> {/* Аттачим ref к объекту DOM */}
            <button onClick={() => ref.current.focus()}>Focus input</button>
            <button onClick={alertRefValue}>Alert ref value</button>
        </>
    )
}

export default InputDomRef;