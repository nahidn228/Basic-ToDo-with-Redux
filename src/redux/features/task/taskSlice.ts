import type { RootState } from "@/redux/store";
import type { ITask } from "@/types";
import { createSlice } from "@reduxjs/toolkit";

interface IInitialState {
  task: ITask[];
  filter: "all" | "low" | "medium" | "high";
}

const initialState: IInitialState = {
  task: [
    {
      id: "asdghhklkl",
      title: "initialize frontend",
      description: "create home page and routing",
      dueDate: "2025-11",
      isCompleted: false,
      priority: "high",
    },
  ],
  filter: "all",
};

const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {},
});

export const selectTasks = (state: RootState) => {
  return state.todo.task;
};
export const selectFilter = (state: RootState) => {
  return state.todo.filter;
};

export default taskSlice.reducer;
