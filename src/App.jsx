import "./App.css";
import AddTodo from "./Components/addTodo/AddTodo";
import Todo from "./Components/todo/Todo";

function App() {
  return (
    <div className="Headding">
    <h1>Add Your Todos</h1>
      <AddTodo />
      <Todo />
    </div>
  );
}

export default App;
