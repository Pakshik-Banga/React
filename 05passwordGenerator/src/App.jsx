import { useState , useCallback , useEffect , useRef} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  const [length , setLength] = useState(8)
  const [numberAllowed , setNumberAllowed] = useState(false)
  const [charAllowed , setCharAllowed] = useState(false)
  const [password , setPassword] = useState('')
  const passwordRef = useRef(null)

const generatePassword = useCallback(()=>{
   let pass = ""
   let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"

   if(numberAllowed) str += "0123456789"

   if(charAllowed) str += "!@#$%^&*()_+"

    for(let i = 1;i<=length;i++){
       
    const ind = Math.floor(Math.random()*str.length)
         pass += str.charAt(ind);
    }

    setPassword(pass)

},[length , numberAllowed , charAllowed , password]) 

const copyPasswordToClipboard = () => {
      window.navigator.clipboard.writeText(password)
      passwordRef.current?.select()
      
}

useEffect(()=>{

    generatePassword();


},[length , numberAllowed , charAllowed])


  return (
     <div className='w-full max-w-md mx-auto shadow-md
                     rounded-lg px-4 py-3 my-8 bg-green-800 text-orange-500
     
     '> 
             <h1 className='text-white text-center my-3'>
               Password Generator 
               <div className='flex shadow rounded-lg overflow-hidden mb-4'>

                      <input 
                      
                          type = 'text'
                          value = {password}
                          className = 'outline-none w-full py-1 px-3 text-black'
                          placeholder='Password'
                          readOnly
                          ref = {passwordRef}
                      />

                      <button
                         onClick={copyPasswordToClipboard}
                         className = 'outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
                      >
                        copy
                      </button>

               </div>

               <div
                  className = 'flex text-sm gap-x-2'
               >

                <div className='flex text-sm gap-x-1'>

                    <input type="range" name="" id="" 
                     
                        min = {6}
                        max = {100}
                        value = {length}
                        onChange={(e)=> setLength(e.target.value)}
                        className = 'cursor-pointer'
                    />

                    <label htmlFor="length">Length: {length}</label>

                </div>

                 <div className='flex text-sm gap-x-1'>

                   <input type="checkbox" name="" id="" 
                       defaultChecked={numberAllowed}
                       onChange = {()=>setNumberAllowed((prev)=>!prev)}
                   
                   />

                    <label htmlFor="number">Numbers</label>

                </div>

                    <div className='flex text-sm gap-x-1'>

                   <input type="checkbox" name="" id="" 
                       defaultChecked={charAllowed}
                       onChange = {()=>setCharAllowed((prev)=>!prev)} 
                   
                   />

                    <label htmlFor="charInput">Characters</label>

                </div>


               </div>


             </h1>



     </div>
  )
}

export default App
