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
    // console.log(dispatch);
  }, []);

  // const temp1 = localStorage.getItem("items");
  // const temp2 = localStorage.getItem("totalQuantity");

  const dataList = useSelector((state) => {
    // console.log(state);
    return state.tasks.items;
  });

  const totalQuantity = useSelector((state) => state.tasks.totalQuantity);

  console.log(`totalQuantity = ${totalQuantity}`);
  // console.log(`dataList = ${dataList} `);

  // setTimeout(() => {
  //   console.log(`dataList = ${temp} `);
  // }, 5000);
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
