import React from "react";

import './style.css';

function Modal({isVisible, setVisible, text}) {
    return(
        <div onClick={() => setVisible(false)} className={isVisible ? 'modal-visible' : 'modal-hidden'}>
            <div onClick={(e) => e.stopPropagation()} className="modal-wrapper">
                <p>{text}</p>
                <button onClick={() => setVisible(false)}>Close</button>
            </div>
            
        </div>
    )
}

export default Modal;