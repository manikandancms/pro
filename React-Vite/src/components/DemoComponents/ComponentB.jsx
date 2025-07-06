import React from "react";
import ComponentD from "./ComponentD";

function ComponentB(props) {

    console.log(props);
    const {userData,handleChange} = props
    
  return (
    <div className="border border-red-600 py-5">
   <p>ComponentB</p>
   {userData} <br />
   <div className="inline-block w-auto rounded-full bg-blue-600 py-3 px-2">
    <button onClick={()=> handleChange ("Hello Sam")}>Updatae the State</button>

   </div>
   
   
   < ComponentD data = {props.userData}/>

    </div>
  )
}

export default ComponentB