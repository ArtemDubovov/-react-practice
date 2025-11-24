import React from "react";
import CounterRef from "./components/CounterRef/CounterRef";
import RefObj from "./components/RefObj/RefObj";

function UseRefPage() {
    return (
        <div className="page">
            <h1>UseRef</h1>
            <CounterRef />
            <RefObj />
        </div>
    )
}

export default UseRefPage;