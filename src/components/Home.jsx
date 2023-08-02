import React, { useState } from 'react'
import Todos from './Todos'
import style from './home.module.css'
import NewToDo from './NewToDo'
import { v4 as uuidv4 } from 'uuid';


export default function Home() {
     const [todos,setTodos]=useState([])
     
     const handleAddTodo=(todo)=>{
          setTodos((prevTodo)=>{
               return [...prevTodo,{id:uuidv4(),todo}]
          })
     }
     
     const handleRemoveTodo=(id)=>{
         
          setTodos((prevtodos)=>{
               const fillteredTodo=prevtodos.filter((todo)=>todo.id !==id)
               return fillteredTodo;



          })
     }


  return (
    <div className={style.container}>
          <h1 style={{color:"white"}}>Todo App</h1>
          <NewToDo onAddTodo={handleAddTodo}/>
        <Todos todos={todos} onRemoveTodo={handleRemoveTodo}/>
    </div>
  )
}
