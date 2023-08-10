import React from 'react'
import './Input.css'

export const Input = ({handler}) => {
    return (
        <div className='input_wrapper'>
            <p className='input_title'>Name</p>
            <input className='search' type="text" placeholder='Name' onChange={handler}  />
        </div>
    )
}