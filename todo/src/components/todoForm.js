import React from "react";
import todoReducer from "../reducers/todoReducer";

const todoForm = () => {
    const [newTodoTask, setNewTodoTask] = useState("");

    const handleChanges = e => {
        setNewTodoTask(e.target.value);
    }

    const formSubmit = e => {
        e.preventDefault();
    }

    return(
        <form onSubmit = {formSubmit}>
            <input 
            type = "text"
            name = "todo"
            onChange = {handleChanges}
            value = {newTodoTask}
            />
            <button type = "submit">Submit</button>
        </form>
    )
}