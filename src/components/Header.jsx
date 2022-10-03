import React from 'react'
import { useNavigate } from 'react-router-dom'
import logo from '../assets/logo.jpeg'
import {config} from '../utils/ui_config'

const Header = () => {

  const navigate = useNavigate()

  return (
    <fieldset className='w-full h-28 bg-secondary'>
      <div className='w-full h-full flex justify-between items-center px-32'>
        <img src={logo} onClick={() => navigate('/')} className='w-48 cursor-pointer' alt="logo" />
        <select className=' py-3 px-4 rounded-md' >
        {config.header.map((item,index) => (<option key={index}>{item}</option>))}
        </select>
      </div>
    </fieldset>
  )
}

export default Header