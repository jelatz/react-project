import { useState } from "react";
import Form from "./Form";
import TodoList from "./TodoList";

export default function Todo() {
  const [todos, setTodos] = useState([]);
  return (
    <div>
      <div className="container text-center my-20 shadow-lg w-fit p-10">
        <Form todos={todos} setTodos={setTodos} />
      </div>
      <TodoList todos={todos} />
    </div>
  );
}
