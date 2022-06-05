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
        completedAlert();
    }

    const completedAlert = () => {
        alert('Task complete!')
    }
    return (
        <div className='grid justify-items-center'>
            <div className='flex justify-between space-x-60 bg-white text-center m-5 p-6 rounded-xl'>
                <li className={`todo-item ${todo.completed ? 'completed' : ''} font-mono`}>{text}</li>
                <div className='space-x-4'>
                    <button onClick={completeHandler} className='bg-green-600 hover:bg-green-900 text-white font-bold py-2 px-3 border-b-4 border-green-700 rounded-xl'>
                        <i className='fas fa-check'></i></button>
                    <button onClick={deleteHandler} className='bg-red-600 hover:bg-red-900 text-white font-bold py-2 px-3 border-b-4 border-red-700 rounded-xl'>
                        <i className='fas fa-trash'></i></button>
                </div>
            </div>
        </div>
    );
}

export default Todo;