import React from 'react';
import {config} from '../../utils/ui_config'
import Icons from '../ui/Icons';

const Navbar = () => {
  return (
    <nav className='w-24 flex h-screen bg-sidebar_bg flex-col p-0 items-center justify-center border-b-secondary'>
      <div className='w-full'>
        {config.sidebar_icons.map(({icon,text},index) => (
          <Icons appear={text} icon={icon} index={index}/>
        ) )}
      </div>
    </nav>
  )
}

export default Navbar