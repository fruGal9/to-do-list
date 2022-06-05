import React from 'react';
import TodoList from './TodoList';

const Form = ({ setInputText, todos, setTodos, inputText, setStatus }) => {
    // below is a function that updates the input text state
    const inputTextHandler = (e) => {
        console.log(e.target.value);
        setInputText(e.target.value);
    };
    const submitTodoHandler = (e) => {
        e.preventDefault();
        setTodos([
            ...todos, {
                text: inputText,
                completed: false,
                id: Math.random() * 1000
            }
        ]);
        setInputText('');
    };
    const statusHandler = (e) => {
        setStatus(e.target.value);
    };
    

    return (
        <form className='flex justify-center '>
            <div className='space-x-5' >
            <input value={inputText} onChange={inputTextHandler} type="text" />
            
                <select onChange={statusHandler} name="todos">
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="uncompleted">Uncompleted</option>
                </select>
                <button onClick={submitTodoHandler} className="bg-green-600 hover:bg-green-900 text-white font-bold py-2 px-3 border-b-4 border-green-700 rounded-xl" type="submit">
                <i className="fas fa-plus-square "></i>
            </button>
            </div>
        </form>
    );
};

export default Form;