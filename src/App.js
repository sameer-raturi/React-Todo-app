import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import Todo from "./components/Todo";
import { getStorage, setStorage } from "./store/LocalStorage";

function App() {
  const dataList = useSelector((state) => state.items);
  const totalQuantity = useSelector((state) => state.totalQuantity);

  const dispatch = useDispatch();

  let todo = { items: dataList, totalQuantity: totalQuantity };

  useEffect(() => {
    dispatch(setStorage(todo));
  }, [dispatch, todo]);

  useEffect(() => {
    dispatch(getStorage());
  }, [dispatch]);

  return (
    <div>
      <header className="header">
        <h1>Todo List</h1>
      </header>
      <main>
        <Todo tasks={dataList} totalQuantity={totalQuantity}></Todo>
      </main>
    </div>
  );
}

export default App;
