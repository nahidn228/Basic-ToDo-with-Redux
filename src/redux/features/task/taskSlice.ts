import type { RootState } from "@/redux/store";
import type { ITask } from "@/types";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from 'uuid';

interface IInitialState {
  task: ITask[];
  filter: "all" | "low" | "medium" | "high";
}

const initialState: IInitialState = {
  task: [],
  filter: "all",
};

const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<ITask>) => {
      const id = uuidv4();

      const taskData = {
        ...action.payload,
        id,
        isCompleted: false,
      };
      state.task.push(taskData);

      // state.task.push(action.payload);
    },
  },
});

export const selectTasks = (state: RootState) => {
  return state.todo.task;
};
export const selectFilter = (state: RootState) => {
  return state.todo.filter;
};

export const { addTask } = taskSlice.actions;

export default taskSlice.reducer;
