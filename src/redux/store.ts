import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counter/counterSlice";
import taskReducer from "./features/task/taskSlice";

const store = configureStore({
  reducer: {
    counter: counterReducer,
    tasks: taskReducer,
  },
});

export default store;
