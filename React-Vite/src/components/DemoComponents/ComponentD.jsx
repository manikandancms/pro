import React from 'react'

const ComponentD = (props) => {
    console.log(props);
    
  return (
    <div className="border border-green-600 py-5 "><p>ComponentD</p>
   <p> {props.data}</p>
    </div>

  )
}

export default ComponentD