import React from 'react'

function InputBox({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions = [],
    selectedCurrency = "usd",
    amountDisabled = false,
    currecyDisabled = false,
    className = "",
}) {
  return (
    <div className={`bg-white p-3 rounded-lg text-sm flex justify-between ${className}`}>
          <div>
              <label 
               htmlFor='currency'
              className='text-black/40 mb-2
                inline-block'>
                    {label}
                </label>

                <input type="number" name="" id="currency" 

                 className = 'outline-none w-full bg-transparent py-1.5'
                 placeholder='Amount'
                 disabled={amountDisabled}
                 value={amount}
                 onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}

                />
          </div>

          <div>
          <p className="text-black/40 mb-2 w-full">Currency Type</p> 
            
            <select name="" id=""
              className = 'rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none'
              value = {selectedCurrency}
              onChange= {(e) => {onCurrencyChange && 
              onCurrencyChange(e.target.value)}}
              disabled = {currecyDisabled}  
              
            >

                { currencyOptions.map((currency)=>(
                    <option key={currency} value={currency}>
                           {currency}
                    </option>
                ))}

            </select>

         </div>


    </div>
  )
}

export default InputBox