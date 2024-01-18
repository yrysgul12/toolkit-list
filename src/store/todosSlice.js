import { createSlice } from "@reduxjs/toolkit";

const todosSlice = createSlice({
  name: "todos",
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      const newTodo = {
        id: Date.now(),
        text: action.payload,
        completed: false,
        change: false,
      };
      state.push(newTodo);
    },
    deleteTodo: (state, action) =>
      state.filter((elem) => elem.id !== action.payload),
    toggleTodo: (state, action) => {
      const todo = state.find((todo) => todo.id === action.payload);
      todo.completed = !todo.completed;
    },
    changeTodo: (state, action) => {
      const todo = state.find((elem) => elem.id === action.payload);
      if (todo) {
        todo.change = true;
      }
    },
    editTodo:(state,action)=>{
const {id,text}=action.payload;
const todo = state.find((elem) => elem.id === id);
      if (todo) {
        todo.change = false;
        todo.text=text;
      }
    }
  },
});

export const { addTodo, deleteTodo, toggleTodo, changeTodo,editTodo } =
  todosSlice.actions;

export default todosSlice.reducer;
