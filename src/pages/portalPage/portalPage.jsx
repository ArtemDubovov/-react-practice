import React, { useState } from "react";
import Modal from "./components/Modal";
import { createPortal } from "react-dom";

const ROOT = document.getElementById('root');

function PortalPage(){
    const [isVisibleModal, setIsVisibleModal] = useState(false);
    return(
        <div className="page">
            {createPortal(
                <Modal
                    isVisible={isVisibleModal}
                    setVisible={setIsVisibleModal}
                    text='Press button to close modal.'
                />,
                ROOT,
            )}
            <button onClick={() => setIsVisibleModal(true)}>Show modal</button>
        </div>
    )
}

export default PortalPage;