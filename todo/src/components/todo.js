import React from "react";

const Todo = props => { 
    return(
        <div
        onClick = {() => props.dispatch({type: "TOGGLE_TODO", payload: props.todo.id})}
        // className = {`todo${props.todo.completed ? " completed" : ""}`}
        className={`todo${props.todo.completed ? ' completed' : ''}`}
        >
            <p>{props.todo.item}</p>
            {/* <p>{props.todo.id}</p> */}
        </div>
    )
}

export default Todo;