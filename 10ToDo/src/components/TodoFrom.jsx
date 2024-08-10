import React, { useState , useContext } from 'react'
import TodoContext from "../contexts/ToDoCreateContext"

function TodoFrom() {

    const [todo , setTodo] = useState("");
    const {addTodo} =   useContext(TodoContext); 

    const add = (e)=>{
        e.preventDefault();
        if(!todo)return

        addTodo({todo , completed : false})
        setTodo("") 
    }

  return (
          <form onSubmit={add} className='flex'>
            <input type="text" name="" id="" 
              placeholder='Write Todo...'
              className='w-full border border-150 bg-white/20 py-1.5'
              value={todo}
              onChange={(e)=> setTodo(e.target.value)}
            />
            <button type="submit"
              className='rounded-lg px-3 py-1 bg-green-500 text-white shrink-0'
              
            >Add</button>
          </form>
  )
}

export default TodoFrom