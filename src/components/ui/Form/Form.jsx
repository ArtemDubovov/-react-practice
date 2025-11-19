import React, { useState } from "react";
import Input from "../Input/Input";

function Form({addToList}) {
    const [inputValue, setInputValue] = useState('')
    const submitForm = (e) => {
        e.preventDefault();
        console.log(e.target)
        if (inputValue === '') return;
        setInputValue('');
        addToList(inputValue);
    }
    return(
        <div>
            <form onSubmit={(e) => submitForm(e)}>
                <Input
                    inputValue={inputValue}
                    setInputValue={setInputValue}
                />
            </form>
        </div>
    )
}

export default Form;