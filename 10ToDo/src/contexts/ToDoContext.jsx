import React , {useEffect, useState} from "react"
import  TodoContext  from "./ToDoCreateContext"


export const TodoProvider = ({children})=>{
  const data = JSON.parse(localStorage.getItem("todos"));
  if(!data){
    data = [];
  }
  
  const [todos , setTodos] = useState(data);

const addTodo = (todo) => {
      setTodos((prev) => [{id: Date.now(),...todo} , ...prev]) 
} 

const updateTodo = (id,todo)=>{
                setTodos((prev)=>prev.map((prevTodo) => (prevTodo.id === todo.id ? todo : prevTodo )))
}


const deleteTodo = (id)=>{
  setTodos((prev)=>prev.filter((prevTodo)=> prevTodo.id !== id))
}

const toggleComplete = (id)=>{
  
  setTodos((prev) => 
         prev.map((prevTodo)=>
            prevTodo.id === id ? {...prevTodo , completed : !prevTodo.completed} 
            : prevTodo   
        )
  )
}

return <TodoContext.Provider value={{todos , setTodos , addTodo , updateTodo , deleteTodo , toggleComplete}}>
    {children}
   </TodoContext.Provider>


}


export const useTodo = () => {
    return React.useContext(TodoContext)
}

// export const TodoProvider = TodoContext.Provider 