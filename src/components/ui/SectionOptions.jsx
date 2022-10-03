import React from 'react'
import arrow from '../../assets/activo.png'

const SectionOptions = ({option,selectAnyOption}) => {
  return (
    <div onClick={()=>selectAnyOption(option)} className='flex justify-between cursor-pointer rounded-lg h-12 items-center mb-2 px-10 bg-sidebar_bg w-full'>
      <h4>{option}</h4>
      <img src={arrow} className="w-4 rotate-180" alt="" />
    </div>
  )
}

export default SectionOptions