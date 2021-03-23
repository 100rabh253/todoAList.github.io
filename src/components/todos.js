import React from 'react'

function todos({ todo, text, settodos, todos }) {
    function DeleteHandler(e) {
        settodos(todos.filter((el) => el.id !== todo.id));

    }
    function CompleteHandler() {
        settodos(todos.map((el) => {
            if (el.id === todo.id) {
                return {
                    ...el, completed: !el.completed
                };
            }
            return el;
        }
        ));
    }
    return (

        <div className="todo">
            <li className={`todo-list ${todo.completed ? "completed":""}`}>{text}</li>
            <button onClick={CompleteHandler} className="complete-btn">
                <i className="fas fa-check"></i>
            </button>
            <button onClick={DeleteHandler} className="trash-btn">
                <i className="fas fa-trash"></i>
            </button>
        </div>
    );
}

export default todos;
