import React from "react";
import { useParams } from "react-router-dom";
import SideBar from "../components/sidebar/SideBar";
import useSections from "../hook/useSections";
import sum_img from "../assets/+.png";
import rest_img from "../assets/-.png";
import full_screen from "../assets/fullscreen.jpeg";

const DynamicPage = () => {
  const { section } = useParams();
  const { data, loading } = useSections(section);

  const handleClick = (text) => console.log(text);

  return (
    <div className="w-full">
      {loading ? (
        <h1>Cargando...</h1>
      ) : (
        <div className="flex">
          <SideBar
            section={section}
            data={data}
            //changeSideBarContent={changeSideBarContent}
          />

          <div className="w-full flex flex-row items-start justify-end py-10 px-10">
            <button
              onClick={() => handleClick("boton fijar")}
              className="mx-10 bg-sidebar_bg py-3 px-6 rounded-lg"
            >
              Fijar
            </button>
            <button
              onClick={() => handleClick("boton borrar")}
              className=" bg-sidebar_bg py-3 px-6 rounded-lg"
            >
              Borrar
            </button>
          </div>
          <div className="absolute bottom-0 right-16 flex items-center mr-10">
            <div className="flex flex-col">
              <button
                onClick={() => handleClick("boton mas")}
                className="mx-10 my-2 bg-sidebar_bg rounded-lg"
              >
                <img src={sum_img} alt="" />
              </button>
              <button
                onClick={() => handleClick("boton menos")}
                className="mx-10 bg-sidebar_bg rounded-lg"
              >
                <img src={rest_img} alt="" />
              </button>
            </div>
            <div onClick={()=>handleClick('fullscreen btn')} className="cursor-pointer ">
              <img className="w-20 h-20" src={full_screen} alt="" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DynamicPage;
