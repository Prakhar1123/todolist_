import React, { useLayoutEffect, useState } from 'react';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setFinalInput] = useState('');

  function handle(e) {
    setFinalInput(e.target.value);
    console.log('Final', e.target.value);
  }

  function handleSubmit() {
    setTodos([...todos, input]);
  }

  function handleDelete(index) {
    const updatedtodos = [...todos];
    updatedtodos.splice(index, 1);
    setTodos(updatedtodos);
  }

  return (
    <div className='App'>
      <h1>Todo list</h1>
      <input type='text' placeholder='Enter text to add to todo' onChange={handle} />

      <button className='btn' onClick={handleSubmit}>+</button>
      <br />
      <ul className='todo-list' >
        {todos.map((todo, index) => (
          <li key={index} style={{ display:'flex', justifyContent:'space-between' ,marginBottom:'5px' ,marginLeft:'16px'}}>
            {todo}
            <button onClick={() => handleDelete(index)} className='delete' style={{marginLeft:"13px"}}>-</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
