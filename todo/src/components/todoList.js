import React from "react";

const todoList = props => {
    console.log("Props data :", props);

    return(
        <div className = "todo-list">
            {props.todos.map(item => {
                return ( 
                <Todo key = {item.id} todo = {item} />
                );
            })
        }
        <button className = "clear-btn">Clear Complete</button>
        </div>
    )
}