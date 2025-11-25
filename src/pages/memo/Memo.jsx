import React, { memo } from "react";
import MemoComponent from "./MemoComponent";

function MemoPage() {
    const MemoizationComponent = memo(MemoComponent);
    return(
        <div className="page">
            {[1, 2, 3].map(n => <MemoizationComponent number={n}/>)}
        </div>
    )
}

export default MemoPage;