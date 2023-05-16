import { useState } from "react";
import "./App.css";
import Title from "./components/Title";
import AddTodo from "./components/AddTodo";
import WrapperTodo from "./components/WrapperTodo";

function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const onChange = (e) => {
    setTodo(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (todo.trim() !== "") {
      console.log(todo);
      setTodos([...todos, todo.trim()]);
    } else {
      alert("Add your task");
    }
    setTodo("");
  };

  return (
    <div className="App">
      <Title />
      <AddTodo onChange={onChange} onSubmit={onSubmit} todo={todo} />
      <WrapperTodo todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
