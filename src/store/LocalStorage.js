import { taskActions } from "./index";

export const setStorage = (todo) => {
  return () => {
    localStorage.clear();
    const localStore = {
      items: todo.items,
      totalQuantity: todo.totalQuantity
    };

    localStorage.setItem("data", JSON.stringify(localStore));
    // localStorage.setItem("totalQuantity", JSON.stringify(todo.totalQuantity));
    // console.log("setting storage");
    // console.log(localStorage.getItem("items"));
  };
};

export const getStorage = () => {
  return async (dispatch) => {
    // if (!localStorage.getItem("data")) {
    //   console.log("no item found");
    //   return;
    // }

    // let items=localStorage.getItem("items")
    const localStore = JSON.parse(localStorage.getItem("data"));
    // localStore.totalQuantity = localStorage.getItem("totalQuantity");

    // console.log(localStore);
    // console.log(localStore.items);
    dispatch(taskActions.replaceTodo(localStore));
    // console.log("replacing cart data");
  };
};
