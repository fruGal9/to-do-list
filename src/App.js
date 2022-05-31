import React, { useState, useEffect } from 'react'
import './App.css';
import Form from './Components/Form'
import TodoList from './Components/TodoList';
function App() {
  //State
  const [inputText, setInputText] = useState('');
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState('all');
  const [filteredTodos, setFilteredTodos] = useState([]);
  //Run once when app starts
  useEffect(() => {
    getLocalTodos();
  }, [])
  //Use effect
  useEffect(() => {
    filterHandler();
    saveLocalTodos();
  }, [todos, status]);
  //functions
  const filterHandler = () => {
    switch (status) {
      case 'completed':
        setFilteredTodos(todos.filter(todo => todo.completed === true));
        break;
      case 'uncompleted':
        setFilteredTodos(todos.filter(todo => todo.completed === false));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  };
  //Save to local
  const saveLocalTodos = () => {
    localStorage.setItem('todos', JSON.stringify(todos));
  };

  const getLocalTodos = () => {
    if (localStorage.getItem('todos') === null) {
      localStorage.setItem('todos', JSON.stringify([]));
    } else {
      let todoLocal = JSON.parse(localStorage.getItem('todos'));
      setTodos(todoLocal);

    };
  }
  return (

    <div className="App text-center bg-green-400 h-screen overflow-y-scroll" >
      <header>
        <h1 className='text-3xl font-bold p-10 font-mono'>Marius's Todo list</h1>
      </header>
      
      <Form
        inputText={inputText}
        todos={todos}
        setTodos={setTodos}
        setInputText={setInputText}
        setStatus={setStatus}
      />
      
      <TodoList
        filteredTodos={filteredTodos}
        todos={todos}
        setTodos={setTodos} />
    </div>
  );
}

export default App;
