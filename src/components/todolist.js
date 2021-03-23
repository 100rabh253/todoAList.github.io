import React from 'react';
import Todos from './todos';

function todolist({todos, settodos}) {
    return (
        <div className="todo-container">
            <ul className="todo-list">
                {todos.map((todo)=>(
                    <Todos 
                    settodos={settodos}
                    todos={todos}
                    todo={todo}
                    key={todo.id}
                    text={todo.text}
                    />
                    
                ))}
            </ul>
        </div>
    );   
}

export default todolist;