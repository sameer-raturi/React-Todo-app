import { useSelector } from "react-redux";
import "./App.css";
import Todo from "./components/Todo";

function App() {
  const dataList = useSelector((state) => state.items);

  return (
    <div>
      <header className="header">
        <h1>Todo List</h1>
      </header>
      <main>
        <Todo tasks={dataList}></Todo>
      </main>
    </div>
  );
}

export default App;
