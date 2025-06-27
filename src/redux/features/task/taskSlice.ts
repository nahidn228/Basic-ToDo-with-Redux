import type { ITask } from "@/types";
import { createSlice } from "@reduxjs/toolkit";

interface IInitialState {
  task: ITask[];
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
    {
      id: "asdghhklkldfcd",
      title: "Connect to github",
      description: "create home page and routing",
      dueDate: "2025-11",
      isCompleted: false,
      priority: "high",
    },
  ],
};

const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {},
});

export default taskSlice.reducer;
