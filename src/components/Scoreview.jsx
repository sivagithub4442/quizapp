import React from 'react'
import "./Scoreview.css"


const Scoreview = ({score, handleReset}) => {
  return (
    <div className='sbody'> 
        <p>You Scored {score} out of 10</p>
        <button onClick={handleReset}>Reset</button>
    </div>
  )
}

export default Scoreview