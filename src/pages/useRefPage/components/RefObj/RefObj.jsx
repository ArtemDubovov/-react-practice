import React, { useRef } from "react";

function RefObj() {
    const objRef = useRef({
        name: '',
        age: ''
    });
    const setName = (name) => {
        objRef.current.name = name;
    };
    const setAge = (age) => {
        objRef.current.age = age;
    }
    const alertObjRef = () => alert(`Name is :${objRef.current.name || '(not found)'}, age : ${objRef.current.age || '(not found)'}`);
    return(
        <div className="wrapper_component">
            <p>Enter name:</p>
            <input onChange={(e) => setName(e.target.value)}/>
            <p>Enter age:</p>
            <input onChange={(e) => setAge(e.target.value)}/>
            <button onClick={alertObjRef}>Show user</button>
        </div>
    )
}

export default RefObj;