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
      title: "Initialize frontend",
      description: "Create home page and routing",
      dueDate: "2025-11",
      isCompleted: false,
      priority: "high",
    },
    {
      id: "asdghhklkbrhrl",
      title: "Initialize Backend",
      description: "Create Restful API",
      dueDate: "2025-11",
      isCompleted: false,
      priority: "medium",
    },
    {
      id: "asdghhbdfbfklkbrhrl",
      title: "Create github Repo",
      description: "Initiate github, and linked with project ",
      dueDate: "2025-11",
      isCompleted: false,
      priority: "low",
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
