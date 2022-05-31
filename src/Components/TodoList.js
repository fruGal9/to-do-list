import React from 'react';
import Todo from './Todo';

const TodoList = ({ todos, setTodos, filteredTodos }) => {

    return (
        <div className="todo-container text-4xl flex items-stretch" >
            <ul className="todo-list flex-1">
                {filteredTodos.map(todo => (
                    <Todo todos={todos}
                        setTodos={setTodos}
                        key={todo.id}
                        todo={todo}
                        text={todo.text} />
                ))}
            </ul>
        </div >
    );
};

export default TodoList;