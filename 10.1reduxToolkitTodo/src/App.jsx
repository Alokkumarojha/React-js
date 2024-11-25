import "./App.css";
import AddTodo from "./Components/AddTodo";
import Todo from "./Components/Todo";

function App() {
  return (
    <>
      <h1 className="text-3xl font-bold text-center">
        learn about Redux Toolkit
      </h1>
      <AddTodo />
      <Todo />
    </>
  );
}

export default App;
