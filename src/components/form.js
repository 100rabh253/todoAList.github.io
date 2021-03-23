import React from 'react';
function form({ setinputText, inputText, settodos, todos }) {
    function inputTextHandler(e) {
        console.log(e.target.value);
        setinputText(e.target.value);
    }
    function buttonHandler(e) {
        e.preventDefault();
        settodos([...todos, { text: inputText, completed: false , id: Math.random()*100}]);
        setinputText("");

    }
    return (
        <form>
            <input value={inputText} onChange={inputTextHandler} type="text" className="todo-input" />
            <button onClick={buttonHandler} className="todo-button" type="submit">
                <i className="fas fa-plus-square"></i>
            </button>

        </form>
    );
}
export default form;