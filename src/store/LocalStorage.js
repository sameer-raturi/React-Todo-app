import { taskActions } from "./index";

export const setStorage = (todo) => {
  return () => {
    localStorage.clear();

    localStorage.setItem("items", JSON.stringify(todo.items));
    localStorage.setItem("totalQuantity", JSON.stringify(todo.totalQuantity));
    console.log("setting storage");
    console.log(localStorage.getItem("items"));
  };
};

export const getStorage = () => {
  return async (dispatch) => {
    const localStore = {
      items: [],
      totalQuantity: 0
    };
    if (localStorage.getItem("items") === null) {
      return;
    }

    // let items=localStorage.getItem("items")
    localStore.items = localStorage.getItem("items");
    localStore.totalQuantity = localStorage.getItem("totalQuantity");

    if (localStore.items.length === 0) return;

    console.log(localStore.items);
    dispatch(taskActions.replaceTodo(localStore));
    console.log("replacing cart data");
  };
};
