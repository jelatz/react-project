import Hello from "./components/Hello";

function App() {
  // const seatNumbers = [1, 4, 6];
  const person = {
    name: "jlad",
    message: "Gwapo!",
    emoji: "🤣",
    seatNumbers: [1, 4, 6],
  };
  return (
    <div className="yes">
      <div className="container mx-auto m-10">
        <h1 className="bg-red-800 text-white text-3xl">Hello World!</h1>
        <Hello person={person} />
      </div>
    </div>
  );
}

export default App;
