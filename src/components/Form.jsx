import { useState } from "react";
export default function Form({ todos, setTodos }) {
  const [todo, setTodo] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    setTodos([...todos, todo]);
    setTodo("");
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          onChange={(e) => setTodo(e.target.value)}
          type="text"
          value={todo}
          className="border-2 border-gray-300 w-96 rounded-md min-h-10 focus:outline-none indent-3"
          placeholder="Enter Note"
        />
        <button
          type="submit"
          className="ml-5 bg-yellow-300 text-white px-5 rounded-md py-2"
        >
          Add
        </button>
      </form>
    </div>
  );
}
