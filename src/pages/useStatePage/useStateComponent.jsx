import React, { useState } from "react";
import Counter from "../../components/Counter/Counter";
import Button from "../../components/ui/Button/Button";

function UseStateComponent() {
    const [countList, setCountList] = useState([]);
    const addCounter = () => setCountList([...countList, {id: Date.now(), }]);
    const removeCounter = (id) => setCountList([...countList].filter(el => el.id !== id));
    return (
        <div>
            <h1>UseState</h1>
            <Button func={addCounter} content='Add counter'/>
            {countList.map(el => {
                return(
                    <Counter remove={() => removeCounter(el.id)} key={el.id}/>
                )
            })}
        </div>
    )
}

export default UseStateComponent;