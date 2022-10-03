import React from 'react'
import { NavLink } from 'react-router-dom'

const Icons = ({icon,appear,index,style}) => {
  return (
    <NavLink
    to={`/${appear}`}
    className={({ isActive }) => "mb-2 w-full flex  py-2 flex-col items-center cursor-pointer" + (isActive ? " bg-primary" : "")}
    
    >
        <img className='w-10' src={icon} alt={'icon' + index} />
        <p className='text-xs px-0 text-center text-typography py-2'>{appear}</p>
    </NavLink>
  )
}

export default Icons