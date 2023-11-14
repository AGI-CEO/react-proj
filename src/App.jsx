import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import TodoList from "./components/ToDoList";
import Rating from "./components/Rating";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h2 className="">My Todo List</h2>
      <Rating />
      <TodoList />
    </>
  );
}

export default App;
