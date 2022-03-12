import { taskActions } from "./index";

export const setStorage = (todo) => {
  return () => {
    if (!localStorage.getItem("items")) {
      localStorage.removeItem("items");
      localStorage.removeItem("totalQuantity");
    }

    localStorage.setItem("items", todo.items);
    localStorage.setItem("totalQuantity", todo.totalQuantity);
  };
};

export const getStorage = () => {
  return async (dispatch) => {
    const localStore = {
      items: [],
      totalQuantity: 0
    };
    if (localStorage.getItem("items")) {
      localStore.items = localStorage.getItem("items");
      localStore.totalQuantity = localStorage.getItem("totalQuantity");
    }

    dispatch(taskActions.replaceTodo(localStore));
  };
};
