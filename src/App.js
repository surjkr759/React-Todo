import { useState } from "react";
import TodoInput from "./components/TodoInput";

function App() {
  const [todos, setTodos] = useState([]);

  function addTodo(text) {
    setTodos(prev => [...prev, text]);
  }

  return (
    <div className="App">
      <h1>Todo App</h1>
      <TodoInput addTodo={addTodo}/>
    </div>
  );
}

export default App;
