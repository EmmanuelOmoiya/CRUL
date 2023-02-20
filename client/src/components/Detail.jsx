import React from "react";
import { FiDownload } from "react-icons/fi";
import { artificialIntelligence, robotics, firmware } from "../../public/assets";

const Detail = ({ name, prompt, photo, setNumber, showcase, loading }) => {
  return (
    <div className="w-full flex flex-col md:flex-row py-6 md:py-12 min-h-[70vh] items-center relative sm:px-20 px-6">
      <div className="flex w-full mt-16 md:mt-0 md:w-6/12 justify-center">
        <img
          src={photo}
          alt=""
          className="w-full sm:w-8/12 aspect-square select-none pointer-events-none rounded-md"
          draggable="false"
        />
      </div>
      <div className="flex flex-col w-full md:w-6/12 relative">
        <p className="font-lg text-green text-[1.4rem] py-2">
          Name: <span className="text-light_slate font-poppins">{name}</span>
        </p>
        <p className="font-lg text-green text-[1.4rem] py-2">
          Prompt:{" "}
          <span className="text-light_slate font-poppins">{prompt}</span>
        </p>
        <div className="flex justify-between sm:w-[80%] gap-[.8rem] w-full py-7">
          {loading ? (
            <button
              disabled
              className="text-navy sm:text text-sm py-3 px-6 opacity-50 bg-green_opaque text-[1.15rem] font-poppins rounded-md sm:w-auto w-full"
            >
              Saving image...
            </button>
          ) : (
            <button
              onClick={() => showcase()}
              className="text-navy py-3 px-6 sm:text text-sm bg-green_opaque text-[1.15rem] font-poppins rounded-md sm:w-auto w-full"
            >
              Showcase image
            </button>
          )}
          <button
            className="border py-2 px-4 sm:text text-sm border-green hover:bg-[rgba(255,255,255,0.12)] text-green font-poppins rounded-md sm:w-auto w-full"
            onClick={() => setNumber(2)}
          >
            Regenerate image
          </button>
        </div>
      </div>
    </div>
  );
};

export default Detail;
