import React from 'react';
import Todo from './Todo';
import SearchFilter from './SearchFilter'

const TodoList = ({todo, todos, setTodos, filteredTodos }) => {

    return (
        <div>
            <ul>
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