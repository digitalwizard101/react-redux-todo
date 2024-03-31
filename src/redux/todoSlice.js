import { createSlice } from "@reduxjs/toolkit";

const todos = [
  { id: "d8029053478y", todo: "Wash the Car", completed: false },
  { id: "p76897678687", todo: "Wash the Dishes", completed: false },
  { id: "q7429387989y", todo: "Wash the Cat", completed: false },
  { id: "g9242568778y", todo: "Take out the Trash", completed: false },
];

const todoSlice = createSlice({
  name: "todos",
  reducers: {
    addTodo: (state, action) => {
      let newTodo = {
        id: Math.random().toString(16).slice(2),
        todo: action.payload.todo,
        completed: false,
      };
      state.push(newTodo);
    },

    deleteTodo: (state, action) => {
      const Index = state.findIndex((item) => item.id === action.payload.id);
      state.splice(Index, 1);
    },

    toggleComplete: (state, action) => {
      const Index = state.findIndex((item) => item.id === action.payload.id);
      state[Index].completed = action.payload.completed;
    },
  },
  initialState: localStorage.getItem("todo-data")
    ? JSON.parse(localStorage.getItem("todo-data"))
    : todos,
});

export const { addTodo, deleteTodo, toggleComplete } = todoSlice.actions;

export default todoSlice.reducer;
