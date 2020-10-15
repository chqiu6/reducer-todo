import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [state, dispatch] = useReducer(todoReducer, initialState);
  return (
    <div className="App">
      <h1>Todo App</h1>
      <todoForm/>
      <todoList/>
    </div>
  );
}

export default App;

// we want app to have components of todoForm and todoList