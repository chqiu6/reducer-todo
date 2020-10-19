import React,{useReducer} from 'react';
import logo from './logo.svg';
import './App.css';
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import {initialState, todoReducer} from "./reducers/todoReducer";
import "./components/Todo.css";

function App() {
  const [state, dispatch] = useReducer(todoReducer, initialState);
  return (
    <div className="App">
      <h1>Todo App</h1>
      <TodoForm dispatch = {dispatch}/>
      <TodoList dispatch = {dispatch} state = {state}/>
    </div>
  );
}

export default App;

// we want app to have components of todoForm and todoList