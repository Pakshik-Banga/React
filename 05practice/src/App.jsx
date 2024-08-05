import {useState} from 'react'
import './App.css'

function App() {
 
  const [length,setLength] = useState(8)
  const [numberAllowed , setNumberAllowed] = useState(false);
  const [charAllowed , setCharAllowed] = useState(false);
  const [password,setPassword] = useState('');




  return (
      <div className= "w-full max-w-md mx-auto px-4 py-3 my-8">

            <div className='flex shadow rounded-lg overflow-hidden mb-4'>

                  <input type="text" name="" id="" 
                    readOnly
                    className = 'outline-none w-full py-1 px-3 text-black'
                    value = {password} 
                  />

              

                  <button className = 'bg-blue-500 px-3 py-0.5 rounded-md text-white shrink-0'>
                      copy
                  </button>

            </div>


      </div>
  )
}

export default App
