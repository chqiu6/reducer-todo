import React,{useState} from "react";
// import {initialState, todoReducer} from "../reducers/todoReducer";

const TodoForm = (props) => {
    const [newTodoTask, setNewTodoTask] = useState("");

    const handleChanges = e => {
        setNewTodoTask(e.target.value);
    }

    const formSubmit = e => {
        e.preventDefault();
        props.dispatch({type : "ADD_TODO", payload: newTodoTask});
        setNewTodoTask("");
    }

    return(
        <form onSubmit = {formSubmit}>
            <input 
            type = "text"
            name = "item"
            onChange = {handleChanges}
            value = {newTodoTask}
            />
            <button type = "submit">Submit</button>
        </form>
    )
}


export default TodoForm;