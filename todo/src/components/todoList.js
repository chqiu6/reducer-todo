import React from "react";
import Todo from "./Todo";

const todoList = props => {
    console.log("Props data :", props);

    return(
        <div className = "todo-list">
            {props.state.todoData.map(item => {
                return ( 
                <Todo key = {item.id} todo = {item} dispatch = {props.dispatch}/>
                );
            })
        }
        <button className = "clear-btn" onClick = {() => props.dispatch ({type: "CLEAR_COMPLETED"})}>Clear Complete</button>
        </div>
    )
}

export default todoList;