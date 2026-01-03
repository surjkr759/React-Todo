import {useState} from "react";

function TodoInput({addTodo}) {
    const [inputText, setInputText] = useState("");

    function handleAdd() {
        if(inputText.trim() === "") return;
        addTodo(inputText);
        setInputText("");
    }

    return (
        <div>
            <input 
            value = {inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder="Enter todo item" />
            <button onClick={handleAdd}>Add</button>
        </div>
    )
}

export default TodoInput;