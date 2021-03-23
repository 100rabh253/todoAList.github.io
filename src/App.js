import './App.css';
import Form from './components/form';
import TodoList from "./components/todolist";
import {useState} from 'react';

function App() {
  //useStates
  const [inputText, setinputText] = useState("");
  const [todos, settodos] = useState([]);
  return (
    <div>
      <header>
        Line Up: Todo List
      </header>
      <hr />
      <Form settodos={settodos} todos={todos} inputText={inputText} setinputText={setinputText}/>
      <TodoList todos={todos} settodos={settodos}/>
    </div>
  );
}

export default App;
