import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import Todo from "./components/Todo";
import { getStorage, setStorage } from "./store/LocalStorage";

let isInitialized = false;
function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getStorage());
  }, [dispatch]);

  const dataList = useSelector((state) => state.items);
  const totalQuantity = useSelector((state) => state.totalQuantity);

  useEffect(() => {
    let todo = { items: dataList, totalQuantity: totalQuantity };

    if (isInitialized === false) {
      isInitialized = true;
      return;
    }
    dispatch(setStorage(todo));
  }, [dispatch, dataList, totalQuantity]);

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
