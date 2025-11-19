import React from "react";
import Button from "../../ui/Button/Button";

function ListItem({content, deleteItem}) {
    return(
        <li className="listItem">
            {content}
            <Button type='del' func={deleteItem} content="x"/>
        </li>
    )
}

export default ListItem;