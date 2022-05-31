import React from 'react';

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
        <form>
            <input value={inputText} onChange={inputTextHandler} type="text" className="todo-input m-10 border-green-700 hover:border-green-500 focus:border-green-900 focus:ring-green-900" />
            <button onClick={submitTodoHandler} className="todo-button bg-green-500 hover:bg-green-400 text-white font-bold py-2 px-4 border-b-4 border-green-700 hover:border-green-500 rounded" type="submit">
                <i className="fas fa-plus-square"></i>
            </button>
            <div className="select ">
                <select onChange={statusHandler} name="todos" className="filter-todo border-green-700 hover:border-green-500 focus:border-green-900 focus:ring-green-900">
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="uncompleted">Uncompleted</option>
                </select>
            </div>
        </form>
    );
};

export default Form;