import React from "react";
import { artificialIntelligence, robotics, firmware } from "../../public/assets";

const Prompt = ({
  prompt,
  setPrompt,
  handleSurpriseMe,
  generateImage,
  generatingImg,
  text,
  isNumber,
  setIsNumber
}) => {
  React.useEffect(()=>{
    const interval = setInterval(()=>{
      setIsNumber((prev)=> prev+1);
    }, 10000);
    return () => clearInterval(interval)
  }, [])
  return (
    <div className="w-full flex flex-col md:flex-row py-6 md:py-12 min-h-[70vh] items-center relative sm:px-20 px-6">
      <div className="flex w-full mt-16 md:mt-0 md:w-6/12 justify-center">
        <img
          src={robotics}
          alt=""
          className="w-full sm:w-8/12 aspect-square select-none pointer-events-none"
          draggable="false"
        />
      </div>
      <div className="flex flex-col w-full md:w-6/12 relative">
        <p className="text-6xl md:text-7xl 2xl:text-8xl font-sora text-lightest_slate">
          What is your prompt?
        </p>
        <div className="flex flex-col sm:flex-row mt-8 md:mt-16 mb-8 2xl:my-20 items-center">
          <form className="w-full" onSubmit={()=>generateImage()}>
            <input
              type="text"
              required=""
              className="border-b-2 placeholder:font-poppins py-2 border-green font-poppins bg-transparent w-full sm:w-11/12 md:w-10/12 lg:w-8/12 text-xl sm:text-3xl md:text-xl lg:text-2xl 2xl:text-3xl outline-none focus:border-green_opaque focus:border-b-4 inline"
              placeholder="Enter your prompt"
              value={prompt}
              disabled={generatingImg ? false : true}
              onChange={(e) => setPrompt(e.target.value)}
            />
            {generatingImg ? (
              <p className="font-poppins mt-2">{text.length === isNumber ? "Dont fret it's on the way" : text[isNumber]}</p>
            ) : (
              <button
                type="submit"
                title="Generate image"
                onClick={() => generateImage()}
              >
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
            )}
          </form>
        </div>
        {generatingImg ? (
          <button
            disabled
            className=" hover:bg-[rgba(255,255,255,0.12)] sm:w-[7rem] w-full font-semibold text-[.9rem] opacity-50 bg-transparent border border-green py-[.6rem] mb-2 px-2 rounded-[5px] text-green font-poppins"
          >
            Suggest{" "}
            <meta http-equiv="Content-Type" content="text/html;charset=UTF-8" />
          </button>
        ) : (
          <button
            onClick={() => handleSurpriseMe()}
            className=" hover:bg-[rgba(255,255,255,0.12)] sm:w-[7rem] w-full font-semibold text-[.9rem] bg-transparent border border-green py-[.6rem] mb-2 px-2 rounded-[5px] text-green font-poppins"
          >
            Suggest{" "}
            <meta http-equiv="Content-Type" content="text/html;charset=UTF-8" />
          </button>
        )}
        <p className="font-poppins text-slate text-[1.25rem] font-medium text-2xl">
          Create imaginative and visually stunning images
        </p>
        {/* <p className="mt-4 border border-green p-4 rounded-md">Do you know why tomatoes are red and not purple? Because they always ause the purrr in the sentence</p> */}
      </div>
    </div>
  );
};

export default Prompt;
