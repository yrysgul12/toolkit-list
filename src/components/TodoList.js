import React from 'react'
import TodoItem from './TodoItem'
import { useSelector,useDispatch } from 'react-redux'
import { deleteTodo, toggleTodo,changeTodo,editTodo } from '../store/todosSlice';

const TodoList=()=> {
    const todos=useSelector((state)=>state.todos)
    const dispatch=useDispatch()
    console.log(todos);

    const removeTodo=(id)=>{
        console.log(id);
        dispatch(deleteTodo(id))
    }
    const handleToggleTodo=(id)=>{
        dispatch(toggleTodo(id))
    }
    const handleChangeTodo=(id)=>{
        dispatch(changeTodo(id))
    }
    const handleEditTodo=(id,text)=>{
        console.log(id,text);
        dispatch(editTodo({id,text}))
    }

    return (
        <div>
            {
                todos.map((elem,i)=>{
                    return <TodoItem key={i} handleEditTodo={handleEditTodo} handleChangeTodo={handleChangeTodo} handleToggleTodo={handleToggleTodo} removeTodo={removeTodo} {...elem} />
                })
            }
         
        </div>
    )
}

export default TodoList
