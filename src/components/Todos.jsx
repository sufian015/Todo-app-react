import React from 'react'
import Todo from './Todo'
import style from "./todos.module.css";


export default function Todos({todos,onRemoveTodo}) {
     // ekahne map korar por todo ke console.log korbo

     console.log(todos)
    
 return (
     <section className={style.todos}>
          

          {todos.map((todo)=> <Todo todo={todo} key={todo.id} id={todo.id} onRemoveTodo={onRemoveTodo}/>)}
          


     </section>
  )
}
