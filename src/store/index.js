import { createSlice, configureStore } from "@reduxjs/toolkit";

const tasksSlice = createSlice({
  name: "storage",
  initialState: {
    items: [],
    totalQuantity: 0
  },
  reducers: {
    addItemToList(state, action) {
      state.items.push(action.payload);
      state.totalQuantity++;
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
    },
    replaceTodo(state, action) {
      state = action.payload;
    }
  }
});

const store = configureStore({
  reducer: tasksSlice.reducer
});

export const taskActions = tasksSlice.actions;

export default store;
