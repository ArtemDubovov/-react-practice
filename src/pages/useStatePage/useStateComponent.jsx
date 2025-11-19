import React, { useState } from "react";
import Counter from "../../components/Counter/Counter";
import Button from "../../components/ui/Button/Button";
import ListToDo from "../../components/ListToDo/ListToDo";

function UseStateComponent() {
    const [countList, setCountList] = useState([]);
    const addCounter = () => setCountList([...countList, {id: Date.now(), }]);
    const removeCounter = (id) => setCountList([...countList].filter(el => el.id !== id));
    return (
        <div className="page">
            <h1>UseState</h1>
            <div>

                <Button func={addCounter} content='Add counter'/>
                {countList.map(el => {
                    return(
                        <Counter remove={() => removeCounter(el.id)} key={el.id}/>
                )
            })}
            </div>
            <div>
                <ListToDo />
            </div>
        </div>
    )
}

export default UseStateComponent;