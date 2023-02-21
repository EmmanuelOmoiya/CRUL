import React from "react";
import { artificialIntelligence, robotics, firmware } from "../../public/assets";

const Name = ({ name, setName, setNumber }) => {
  const change = (e) =>{
    e.preventDefault();
    if(name !== '') {
      setNumber(2)
    } else {
      alert("Please enter a name to continue");    }
  }
  return (
    <div className="w-full flex flex-col md:flex-row py-6 md:py-12 min-h-[70vh] items-center relative sm:px-20 px-6">
      <div className="flex flex-col w-full md:w-6/12 relative">
        <p className="text-6xl md:text-7xl 2xl:text-8xl font-sora text-lightest_slate">
          What is your name?
        </p>
        <div className="flex flex-col sm:flex-row mt-8 md:mt-16 mb-8 2xl:my-20 items-center">
          <form className="w-full" onSubmit={change}>
            <input
              type="text"
              required=""
              className="border-b-2 placeholder:font-poppins py-2 border-green font-poppins bg-transparent w-full sm:w-11/12 md:w-10/12 lg:w-8/12 text-xl sm:text-3xl md:text-xl lg:text-2xl 2xl:text-3xl outline-none focus:border-green_opaque focus:border-b-4 inline"
              placeholder="Enter your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <button type="submit">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-12 cursor-pointer transition-all mt-4 sm:mt-0 hover:ml-1 duration-200 ease-linear"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                ></path>
              </svg>
            </button>
          </form>
        </div>
        <p className="font-poppins text-slate text-[1.25rem] font-medium text-2xl">
          Create imaginative and visually stunning images
        </p>
      </div>
      <div className="flex w-full mt-16 md:mt-0 md:w-6/12 justify-center">
        <img
          src={firmware}
          alt=""
          className="w-full sm:w-8/12 aspect-square select-none pointer-events-none"
          draggable="false"
        />
      </div>
    </div>
  );
};

export default Name;
