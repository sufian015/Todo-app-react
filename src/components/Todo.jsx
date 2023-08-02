import React from 'react'
import style from './todo.module.css'
export default function Todo({todo,onRemoveTodo}) {
    
     const {title,desc}=todo.todo;
     const {id}=todo;
     const handleClick=(id)=>{
          onRemoveTodo(id)
     }

  return (
    <article className={style.todo}>
          <div>
               <h3>{title}</h3>
               <p>{desc}</p>
          </div>
          
               <button className={style.btn} onClick={()=>{handleClick(id)}}>
                    Delete 
               </button>
          
    </article>
  )
}
