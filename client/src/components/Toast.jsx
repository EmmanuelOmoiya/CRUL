import { TiTick } from "react-icons/ti";
import { MdCancel } from "react-icons/md";
import { AiFillInfoCircle } from "react-icons/ai";
import React from "react";

const Toast = ({ type, message }) => {
  const [show, setShow] = React.useState(true);
  return (
    <>
      {type == "success" && (
        <div
          className={`flex transition-all ease-in duration-500 ${
            show
              ? "translate-x-0 opacity-100"
              : "translate-x-[-16rem] opacity-0"
          } text-slate translate-x-[-16rem] opacity-0 rounded-md w-auto px-2 pr-3 py-2 border border-green_opaque font-poppins bg-navy absolute bottom-0 left-0 ml-4 mb-8`}
        >
          <p className="justify-center items-center text-center text-[2rem] text-green mr-2">
            <TiTick />
          </p>
          <div className="">
            <p className="font-lg text-green">Sucess</p>
            <p>{message}</p>
          </div>
        </div>
      )}
      {type == "error" && (
        <div
          className={`flex  transition-all ease-in duration-500 ${
            show
              ? "translate-x-0 opacity-100"
              : "translate-x-[-16rem] opacity-0"
          }text-slate translate-x-[-16rem] opacity-0 rounded-md w-auto px-2 pr-3 py-2 border border-[#b32929] font-poppins bg-navy absolute bottom-0 left-0 ml-4 mb-8`}
        >
          <p className="justify-center flex items-center text-center text-[2rem] text-[#b32929] mr-2">
            <MdCancel />
          </p>
          <div className="">
            <p className="font-lg text-[#b32929]">Error</p>
            <p>{message}</p>
          </div>
        </div>
      )}
      {type == "info" && (
        <div
          className={`flex transition-all ease-in duration-500 ${
            show
              ? "translate-x-0 opacity-100"
              : "translate-x-[-16rem] opacity-0"
          } text-slate rounded-md w-auto px-2 pr-3 py-2 border border-lightest_navy font-poppins bg-navy absolute bottom-0 left-0 ml-4 mb-8`}
        >
          <p className="justify-center flex items-center text-center text-[2rem] text-lightest_navy mr-2">
            <AiFillInfoCircle />
          </p>
          <div className="">
            <p className="font-lg text-lightest_navy ">Info</p>
            <p>{message}</p>
          </div>
        </div>
      )}
    </>
  );
};
export default Toast;
