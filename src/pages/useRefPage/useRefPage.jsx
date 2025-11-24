import React from "react";
import CounterRef from "./components/CounterRef/CounterRef";
import RefObj from "./components/RefObj/RefObj";
import DomRef from "./components/DomRef/DomRef";

function UseRefPage() {
    return (
        <div className="page">
            <h1>UseRef</h1>
            <CounterRef />
            <RefObj />
            <DomRef />
        </div>
    )
}

export default UseRefPage;