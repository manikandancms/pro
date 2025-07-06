import React from 'react'
import { useState } from 'react';
import ComponentB from './ComponentB';

const ComponentA = (props) => {
    console.log(props)

    const [user, setUser] = useState("Hello Ram")

    const handleChange = (data) =>{
        setUser(data)
    };

    
  return (
    <div  className="border border-yellow-400 py-5 ">
        <p>ComponentA</p>
        <p>user:{user}</p>
        <ComponentB userData = {user} handleChange  = {handleChange}/>
        </div>
  )
}

export default ComponentA