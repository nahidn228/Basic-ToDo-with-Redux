import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tasks: {
    id: "asdghhklkl",
    title: "initialize frontend",
    description: "create home page and routing",
    dueDate: "2025-11",
    isCompleted: false,
    priority: "high",
  },
};

const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {},
});

export default taskSlice.reducer;
