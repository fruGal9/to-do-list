import React, { useState, useEffect } from 'react'
import Form from './Components/Form'
import TodoList from './Components/TodoList';
import SearchFilter from './Components/SearchFilter';

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

    <div className='bg-indigo-100 overflow-y-scroll h-screen' >
      <header>
        <h1 className='bg-purple-600 text-white text-center max-w-2xl font-mono font-5xl shadow-xl font-medium m-auto mt-5 mb-5 p-5 rounded-lg' >Marius's Todo list</h1>
      </header>
      <div className='block'>
      <Form
        inputText={inputText}
        todos={todos}
        setTodos={setTodos}
        setInputText={setInputText}
        setStatus={setStatus}
      />
      <SearchFilter
      placeholder='Search ToDo'
      data={todos}
      />
      <TodoList
        filteredTodos={filteredTodos}
        todos={todos}
        setTodos={setTodos} 
        />
        </div>
    </div>
  );
}

export default App;
