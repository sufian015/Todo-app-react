import React, { useState } from 'react'
import style from './form.module.css'

export default function NewToDo({onAddTodo}) {

     const [todo,setTodo]=useState({title:'',desc:''})
     const {title,desc}=todo;

     const handleChange=(event)=>{
          const name=event.target.name;
          setTodo((oldTodo)=>{
               return {...oldTodo,[name]:event.target.value}

               // ekhane array r vitor e name deoa karon ekhane jei propertier event name disi oi propertier name er value ek ekta object tai ..onk gulo object receive korar jonno array diye recive korlam
          })
     }
     
     const handleSubmit=(event)=>{
          event.preventDefault();
          onAddTodo(todo)
          setTodo({title:'',desc:''})
          
     }



  return (
    
    <form className={style.form} onSubmit={handleSubmit}>

          <div className={style['form-field']}>
               <label htmlFor="title">Title:</label>
               <input type="text" id='title' name='title' value={title} onChange={handleChange}/>
          </div>
          <div className={style['form-field']}>
               <label htmlFor="decs">Description:</label>
               <textarea type="text" id='desc' name='desc' value={desc} onChange={handleChange}/>
          </div>
          <button type='submit'>AddToDo</button>



    </form>
  )
}
