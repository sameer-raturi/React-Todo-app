// import { useSelector } from "react-redux";
// import { store } from "./index";
// import { Provider } from "react-redux";

export const setStorage = (props) => {
  if (!localStorage.getItem("items")) {
    localStorage.removeItem("items");
    localStorage.removeItem("totalQuantity");
  }
  // const items = useSelector((state) => state.items);
  // const totalQuantity = useSelector((state) => state.totalQuantity);

  // localStorage.setItem("items", items);
  // localStorage.setItem("totalQuantity", totalQuantity);
};

export const getStorage = (props) => {
  const localStore = {
    items: [],
    totalQuantity: 0
  };
  if (localStorage.getItem("items")) {
    localStore.items = localStorage.getItem("items");
    localStore.totalQuantity = localStorage.getItem("totalQuantity");
  }

  return localStore;
};
