import React, { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useLoaderData } from 'react-router-dom'


function Github() {

    const data = useLoaderData();
 
    //  const [data,setData] = useState({})

    // const API = 'https://api.github.com/users/Pakshik-Banga';

    //  useEffect(()=>{

    //     const getData = async (API)=>{

    //          const res = await axios.get(API)
           
    //          console.log(res['data'])
              
    //          setData(res['data'])
            
    //     }

   
    //       getData(API);


    //  },[])



  return (
    <div className='text-center m-4 bg-gray-600 text-white
                    p-4 text-3xl'>
                        Github Followers : {data['followers']}
                        
                         <img src={data.avatar_url} width={300} alt='' />
                        
                        
                        </div>
  )
}

export default Github

export const getGithubInfo = async ()=>{

                     const res = await axios.get('https://api.github.com/users/Pakshik-Banga')

                     return res['data']

}