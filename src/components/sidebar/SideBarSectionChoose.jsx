import React from 'react'
import SectionOptions from '../ui/SectionOptions'

const SideBarSectionChoose = ({data,section,selectAnyOption}) => {
  return (
    <div className="p-6">
    <h1 className="text-2xl font-bold pl-6 capitalize text-typography pb-10">{section}</h1>
    {data?.map((name) => <SectionOptions selectAnyOption={selectAnyOption} key={name} option={name}/>)}
   </div>
  )
}

export default SideBarSectionChoose