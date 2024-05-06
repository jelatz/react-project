export default function TodoItem({ item }) {
  function handleDelete() {
    console.log("Note Deleted for");
  }
  return (
    <div className="flex items-center justify-between">
      <div className="pl-2 py-3 my-3 border-b-2 w-full">
        {item}{" "}
        <span>
          <button
            onClick={handleDelete()}
            className="bg-yellow-300 px-3  text-white float-right"
          >
            X
          </button>
        </span>
      </div>
    </div>
  );
}
