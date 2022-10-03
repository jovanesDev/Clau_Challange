import React from "react";
import def_img from '../../assets/default-img.jpeg'
const SideBarItems = ({ items, selected, section,resetLayer }) => {

  const handleImgErr = (e) => {
    e.currentTarget.src = def_img
  }
  return (
    <div className="flex flex-col justify-around p-10">
      <h4 onClick={resetLayer} className="pl-6 py-4 cursor-pointer text-typography capitalize">{ "< " + section}</h4>
      <h1 className="text-2xl font-bold pl-6 capitalize text-typography pb-10">
        {selected}
      </h1>
      <div className="flex">
      {items?.map(({img,name}) => (
        <div key={name} className="">
          <div className="w-44 h-40 mx-5 overflow-hidden ">
            <img className="w-full h-full object-cover" onError={handleImgErr } src={img} alt="" />
          </div>
          <h4 className="text-xl text-center my-4">{name}</h4>
        </div>
      ))}
      </div>

    </div>
  );
};

export default SideBarItems;
