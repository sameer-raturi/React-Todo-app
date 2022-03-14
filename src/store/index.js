import { createSlice, configureStore } from "@reduxjs/toolkit";

const tasksSlice = createSlice({
  name: "storage",
  initialState: {
    items: [],
    totalQuantity: 0
  },
  reducers: {
    addItemToList(state, action) {
      // state.items.push(action.payload);
      state.items = [action.payload, ...state.items];
      state.totalQuantity++;
      // console.log(state.items);
    },
    removeItemFromList(state, action) {
      state.items = state.items.filter((item) => item.id !== action.payload);
      state.totalQuantity--;
    },
    toggleCheckbox(state, action) {
      const existingItem = state.items.find(
        (item) => item.id === action.payload
      );
      existingItem.isChecked = !existingItem.isChecked;
      // console.log(state.items);
    },
    replaceTodo(state, action) {
      // console.log(action.payload);
      // console.log(typeof action.payload.items);
      // state = { ...action.payload };
      // console.log(state);
      // state = { state...action.payload };

      state.items = action.payload.items;
      state.totalQuantity = action.payload.totalQuantity;
      // console.log({ ...action.payload });
      // state.items = [...action.payload.items] || [];
      // state.items = action.payload.totalQuantity || 0;

      // console.log(state);
    }
  }
});

const store = configureStore({
  reducer: { tasks: tasksSlice.reducer }
});

export const taskActions = tasksSlice.actions;

export default store;
