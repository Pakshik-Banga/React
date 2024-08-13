import React from 'react'
import { useEffect } from 'react'
import './App.css'

import { TodoFrom, TodoItem } from './components'
import TodoContext from './contexts/ToDoCreateContext'


function App() {
 

const {todos , setTodos} = React.useContext(TodoContext);

useEffect(()=>{

localStorage.setItem("todos" , JSON.stringify(todos));


},[todos])



  return (
    <div>
      <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        {/* Todo form goes here */} 
                        <TodoFrom />
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                        {todos.map((todo) => (
                          <div key={todo.id}
                          className='w-full'
                          >
                            <TodoItem todo={todo} />
                          </div>
                        ))}
                    </div>
                </div>
            </div>
    </div>
  )
}

export default App
