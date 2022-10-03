import React, { useState } from "react";
import arrow from "../../assets/activo.png";
import SideBarItems from "./SideBarItems";
import SideBarSectionChoose from "./SideBarSectionChoose";

const SideBar = ({ section, sections, data }) => {
  const [items, setItems] = useState([]);
  const [open, setOpen] = useState(true);
  const [layer, setLayer] = useState(false);

  const selectAnyOption = (option) => {
    setItems(data.find((item) => item.name === option));
    setLayer(true)
  };

  const resetLayer = () => setLayer(false)

  // const resetItems = () => setItems([]);

  return (
    <div className={`h-screen ${!open ? "w-0" : "w-1/2"}  relative bg-primary`}>
      {open &&
        !layer &&(
          <SideBarSectionChoose
            selectAnyOption={selectAnyOption}
            section={section}
            data={data?.map(({ name }) => name)}
          />
        )}

      {open && layer && (
        <SideBarItems
          resetLayer={resetLayer}
          selected={items.name}
          section={section}
          items={items.items}
        />
      )}

      <span
        onClick={() => setOpen(!open)}
        className={`absolute ${
          !open ? "left-0" : ""
        } right-0 top-1/2 w-10 cursor-pointer`}
      >
        <img className={`${!open ? "rotate-180" : ""}`} src={arrow} alt="" />
      </span>
    </div>
  );
};

export default SideBar;
