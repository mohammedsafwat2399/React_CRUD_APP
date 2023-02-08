import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tasksList: [],
  selectedTask: {},
};
const taskSlice = createSlice({
  name: "tasksSlice",
  initialState,
  reducers: {
    addTaskToList: (state, action) => {
      const id = Math.random() * 100;
      const task = { ...action.payload, id };
      state.tasksList.push(task);
    },
    removeTaskFormList: (state, action) => {
      state.tasksList = state.tasksList.filter(
        (task) => task.id !== action.payload.id
      );
    },
    updateTaskToList: (state, action) => {
      state.tasksList = state.tasksList.map((task) =>
        task.id === action.payload.id ? action.payload : task
      );
    },
    setSelectedTask:(state, action)=>{
        state.selectedTask = action.payload
    }
  },
});

export const { addTaskToList, removeTaskFormList, updateTaskToList  , setSelectedTask} =
  taskSlice.actions;
export default taskSlice.reducer;
