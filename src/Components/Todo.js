import React from 'react';

const Todo = ({ text, todo, todos, setTodos }) => {
    // Events
    const deleteHandler = () => {
        setTodos(todos.filter(el => el.id !== todo.id));
    };
    const completeHandler = () => {
        setTodos(todos.map((item) => {
            if (item.id === todo.id) {
                return {
                    ...item, completed: !item.completed
                }
            }
            return item;
        }))
    }
    return (
        <div className='todo'>
            <li className={`todo-item ${todo.completed ? 'completed' : ''}`}>{text}</li>
            <button onClick={completeHandler} className='complete-btn m-3 bg-green-500 hover:bg-green-400 text-white font-bold py-2 px-4 border-b-4 border-green-700 hover:border-green-500 rounded"'>
                <i className='fas fa-check'></i></button>
            <button onClick={deleteHandler} className='trash-btn m-3 bg-green-500 hover:bg-green-400 text-white font-bold py-2 px-4 border-b-4 border-green-700 hover:border-green-500 rounded"'>
                <i className='fas fa-trash'></i></button>
        </div>
    );
}

export default Todo;