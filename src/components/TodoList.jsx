import TodoItem from "./TodoItem";
export default function TodoList({ todos }) {
  return (
    <div className="bg-white rounded-md shadow-lg w-96 p-3 mx-auto">
      {todos.map((item) => (
        <TodoItem item={item} key={item} />
      ))}
    </div>
  );
}
