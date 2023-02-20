import React from "react";
import { AiOutlineShareAlt } from "react-icons/ai";
import { BsDownload } from "react-icons/bs";
import { Link } from "react-router-dom";
import { downloadImage } from "../utils";

const Card = ({ _id, name, prompt, photo }) => {
  const shareImage = async (title, url) => {
    setSharing(true);
    navigator
      .share({
        title,
        url,
      })
      .then(() => console.log("Shared image successfully"))
      .catch((error) => console.error("Error sharing Image: ", error))
      .finally(setSharing(false));
  };
  return (
    <div className="rounded-xl group relative shadow-card hover:shadow-cardhover card cursor-pointer">
      <Link to={`/showcase/${_id}`}>
        <img
          src={photo}
          alt={prompt}
          className="w-full h-auto object-cover rounded-xl"
        />
        <div className="group-hover:flex flex-col hidden absolute bottom-0 left-0 right-0 bg-dark_navy p-6 h-full  rounded-md">
          <p className="text-white text-md overflow-y-auto prompt font-poppins">
            {prompt}
          </p>
          <div className="mt-5 flex justify-between items-center gap-2 ">
            <div className="flex items-center gap-2 ">
              <div className="w-7 h-7 rounded-full object-cover flex justify-center text-xs font-bold items-center bg-slate text-white">
                {name[0]}
              </div>
              <p className="text-white text-sm font-poppins ">{name}</p>
            </div>
            <div className="flex justify-between">
              <button
                className="outline-none px-4 bg-transparent border-none"
                type="button"
                onClick={() => downloadImage(_id, name, photo)}
              >
                <BsDownload
                  title="download"
                  className="w-6 h-6 object-contain text-white"
                />
              </button>
              <button
                className="outline-none px-4 bg-transparent border-none"
                type="button"
                onClick={() =>
                  shareImage(
                    `${name} created this image using CRUL`,
                    `http://localhost:3000/showcase/${_id}`
                  )
                }
              >
                <AiOutlineShareAlt
                  title="share"
                  className="w-6 h-6 object-contain text-white"
                />
              </button>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};
export default Card;
