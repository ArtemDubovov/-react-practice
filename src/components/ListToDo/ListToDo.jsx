import React, { useState } from "react";
import Form from "../ui/Form/Form";
import ListItem from "./ListItem/ListItem";
import Button from "../ui/Button/Button";

function ListToDo() {
    const [list, setList] = useState([]);
    const addToList = (value) => setList([...list, {id: Date.now(), value}]);
    const removeAll = () => setList([]);
    const deleteItem = (id) => setList([...list].filter(el => el.id !== id));
    return(
        <div className="todo">
            <h1>List To Do</h1>
            <Form
                addToList={addToList}
                removeAll={removeAll}
                deleteItem={deleteItem}
            />
            <Button func={removeAll} type='default' content='Remove all' />
            <ul>
                {list.map(el => {
                    return <ListItem deleteItem={() => deleteItem(el.id)} key={el.id} content={el.value}/>;
                })}
            </ul>
            
        </div>
    )
}

export default ListToDo;