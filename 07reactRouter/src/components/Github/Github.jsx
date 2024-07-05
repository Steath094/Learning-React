import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'
function Github() {
    const data = useLoaderData()
    // const [data,setData] = useState([])
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/Steath094')
    //     .then(res=>res.json())
    //     .then(data=>{
    //         setData(data)
    //     })   
    // },[])
    // console.log(data);
    return (
        <div className=' flex gap-16 text-center m-4 bg-gray-600 text-white p-4 text-3xl'>
        <img className='rounded-full border-2 border-black' src={data.avatar_url} alt="Git Picture" width={300}/>
        <div className='flex flex-col gap-4 items-start text-black'>
            <span>Name: <span className='text-white'>{data.name}</span></span>
            <span>Github Followers: <span className='text-white'>{data.followers}</span></span>
            <span>Github Following: <span className='text-white'>{data.following}</span></span>
        </div>
        </div>
    )
}

export default Github

export const githubInfoLoader = async () =>{
    const response = await fetch('https://api.github.com/users/Steath094')
    return response.json();
}
