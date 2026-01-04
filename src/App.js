import { useState } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState([]);

  function addTodo(text) {
    setTodos(prev => [
      ...prev, 
      {id: Date.now(), text, isCompleted: false}
    ]);
  }

  function toggleTodo(id) {
    setTodos(prev => 
      prev.map(todo =>
        todo.id === id
        ? {...todo, isCompleted: !todo.isCompleted}
        : todo
    ))
  }

  return (
    <div className="App">
      <h1>Todo App</h1>
      <TodoInput addTodo={addTodo}/>
      <TodoList todos={todos} onToggle={toggleTodo}/>
    </div>
  );
}

export default App;
