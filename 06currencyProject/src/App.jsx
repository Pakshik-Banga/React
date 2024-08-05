import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import useCurrencyInfo from './hooks/useCurrencyInfo'
import { InputBox } from './components/index.js'

function App() {
 
  const [amount , setAmount] = useState(0)
  const [from , setFrom] = useState('USD')
  const [to , setTo] = useState('INR')
  const [convertedAmount , setConvertedAmount] = useState(0)
  
const data  = useCurrencyInfo();
 
const options = Object.keys(data);

const convert = ()=>{
    setConvertedAmount((1.0/data[from])*data[to]*amount); 
  }

const swap = () => {
      setFrom(to)
      setTo(from)
      setConvertedAmount(amount)
      setAmount(convertedAmount)
}
  


  return (
    <div className='w-full h-screen flex flex-wrap
                    justify-center items-center bg-cover bg-no-repeat'
    
         style = {{backgroundImage : `url(https://images.pexels.com/photos/210990/pexels-photo-210990.jpeg?auto=compress&cs=tinysrgb&w=600)`}}           
    >

                {/* <div className='flex flex-col justify-center items-center'> */}

                              <div className='w-full m-1'>
                                          <div className='w-full max-w-md mx-auto border
                                                      border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30'>

                                                <form onSubmit={(e)=>{
                                                    e.preventDefault()
                                                    convert()
                                                }}>
                                                    

                                                    <div className='w-full mb-1'>

                                                        <InputBox
                                                            label = "from"
                                                            amount = {amount}
                                                            currencyOptions={options}
                                                            onCurrencyChange={(currency)=>setFrom(currency)}
                                                            onAmountChange={(amount)=>setAmount(amount)}
                                                            selectedCurrency={from}
                                                        />

                                                    </div>

                                                      
                                                  <div className='relative  h-0.5 z-10'>
                                                      
                                                      <button className='relative left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white
                                                                          rounded-md bg-blue-600 text-white px-2 py-0.5'
                                                        onClick = {swap}                   
                                                        >
                                                            Swap   
                                                        </button>
                                                    
                                                  </div>  
                                        
                                                   <div className='w-full mb-1'>

                                                        <InputBox
                                                            label = "to"
                                                            amount = {convertedAmount}
                                                            currencyOptions={options}
                                                            onCurrencyChange={(currency)=>setTo(currency)}
                                                            selectedCurrency={to}
                                                        />

                                                    </div>

                                         

                                                      <button className='w-full bg-blue-600 text-white px-4 rounded-md h-8'
                                                        type='submit'
                                                      >Convert {from} to {to}</button>                  

                                                </form>


                                        </div>

                              </div>


                {/* </div> */}
</div>
  
  )
}

export default App
