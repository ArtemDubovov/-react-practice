import React, {useReducer, useState, useEffect} from "react";
import ComponentLife from "./components/ComponentLife";

const STATUS = {
    UPDATE: 'update',
    MOUNT: 'mount',
    UNMOUNT: 'unmount',
    CLEAR: 'clear'
}

function reducer(state, action) {
    console.log(action, state);
    switch(action) {
        case STATUS.MOUNT:
            return {
                ...state,
                isMount: true
            };
        case STATUS.UPDATE:
            return {
                ...state,
                isUpdate: true
            };
        case STATUS.UNMOUNT:
            return {
                ...state,
                isUnmount: true
            };
        case STATUS.CLEAR:
            return {
                ...state,
                isMount: false,
                isUpdate: false,
                isUnmount: false
            }
        default:
            return {...state};
    }
}


function ComponentLifeCyclesPage() {
    const [state, dispatch] = useReducer(reducer, {
        isMount: false,
        isUpdate: false,
        isUnmount: false
    })
    const [isHasComponent, setIsHasComponent] = useState(false);
    const [StateComponent, setStateComponent] = useState(null);

    return(
        <div className="page">
            <button onClick={() => {
                if (!isHasComponent) {
                    dispatch(STATUS.CLEAR);
                }
                setIsHasComponent((isHasComponent) => !isHasComponent);
                setStateComponent(!isHasComponent ? <ComponentLife state={state} dispatch={dispatch} STATUS={STATUS}/> : null)

            }
            }>{isHasComponent ? 'Delete component' : 'Create component'}</button>
            <div>
                {`Is mount: ${state.isMount}`}
                <br />
                {`Is update: ${state.isUpdate}`}
                <br />
                {`Is unmount: ${state.isUnmount}`}
            </div>
            {StateComponent}
        </div>
    )
}

export default ComponentLifeCyclesPage;