import {useEffect , useState} from 'react'
import axios from 'axios'

function useCurrencyInfo() {

   const [data,setData] = useState({})

const API = `https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_pvDiQAVuNcmil24deBexqTvR2T2EntZZWByvx1Q2`




    useEffect(()=>{


       const getData = async (API)=>{

    try{
 
        const res = await axios.get(API);
   
         setData(res['data']['data'])
       
    }catch(error){
        console.log(error);
    }

}   

getData(API);

    },[])

return data;
      
}



export default useCurrencyInfo