import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

uuidv4();

function UuidPage() {
    const [generateKey, setGenerateKey] = useState('');
    const handleButton = () => {
        setGenerateKey(uuidv4());
    };
    return(
        <div className="page">
            <p>{generateKey || 'nothing...'}</p>
            <button onClick={handleButton}>Generate key!</button>
        </div>
    )
}

export default UuidPage;