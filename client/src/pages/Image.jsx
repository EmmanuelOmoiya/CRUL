import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { downloadImage } from "../utils";
import { Loader } from "../components";
import { FiDownload } from "react-icons/fi";
import { AiOutlineShareAlt } from "react-icons/ai";
import { Helmet } from "react-helmet";
import OG from '/assets/img/CRUL_OG.png';

const Image = () => {
  const { id } = useParams();
  const [image, setImage] = React.useState({});
  const [loading, setLoading] = React.useState(false);
  const [sharing, setSharing] = React.useState(false);
  React.useEffect(() => {
    const getImageDetails = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `https://crul.onrender.com/api/v1/post/${id}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        if (response.ok) {
          const result = await response.json();
          setImage(result.data);
        }
      } catch (Error) {
        alert(Error);
        console.log(Error);
      } finally {
        setLoading(false);
      }
    };
    getImageDetails();
  }, [id]);
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
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1"
        />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="description" content="Generate AI Image using CRUL" />
        <title>{image.name ? `${image.name}'s AI Image` : "Showcase"} - CRUL</title>
        <meta name="theme-color" content="#0a192f" />
        {/* <link rel="shortcut icon" href={faviconHref} sizes="any" /> */}
        <link rel="manifest" href="../../public/manifest.json" />
        <link rel="apple-touch-icon" href="/icons/icon-192x192.png"></link>
        <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
        <meta name="author" content="Emmanuel Omoiya"></meta>
        <meta name="robots" content="index,follow" />
        <meta
          name="keywords"
          content="AI Artificial Intelligence Emmanuel Omoiya Developer OpenAi DALL-E image generator Aniyikaye coding web-development server MERN mongodb expressjs reactjs"
        />

        {/* Og */}
        <meta property="og:title" content={` AI Image - CRUL`} />
        <meta
          property="og:description"
          content="Generate AI Image using CRUL"
        />
        <meta property="og:site_name" content="CRUL" />
        <meta
          property="og:url"
          content={`https://crul.vercel.app/showcase/${id}`}
          key="ogurl"
        />
        <meta property="og:image" content={OG} />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="@Emmanuel_Omoiya" />
        <meta
          name="twitter:title"
          content={` AI Image - CRUL`}
        />
        <meta
          name="twitter:description"
          content="Generate AI Image using CRUL"
        />
        <meta name="twitter:image" content={OG} />
        <meta
          name="twitter:image:alt"
          content={`AI Image - CRUL`}
        ></meta>
        {/* <meta name="twitter:domain" content={currentURL} /> */}
      </Helmet>
      {loading ? (
        <div className="justify-center flex items-center text-center">
          <Loader className="mt-[40vh]" />
        </div>
      ) : (
        <div className="w-full flex flex-col md:flex-row py-6 md:py-12 min-h-[70vh] items-center relative sm:px-20 px-6">
          <div className="flex w-full mt-16 md:mt-0 md:w-6/12 justify-center">
            <img
              src={image.photo}
              alt=""
              className="w-full sm:w-8/12 aspect-square select-none pointer-events-none rounded-md"
              draggable="false"
            />
          </div>
          <div className="flex flex-col w-full md:w-6/12 relative">
            <p className="font-lg text-green text-[1.4rem] py-2">
              Creator:{" "}
              <span className="text-light_slate font-poppins">
                {image.name}
              </span>
            </p>
            <p className="font-lg text-green text-[1.4rem] py-2">
              Prompt:{" "}
              <span className="text-light_slate font-poppins">
                {image.prompt}
              </span>
            </p>
            <div className="flex justify-between sm:w-[80%] w-full py-7">
              {sharing ? (
                <button
                  disabled
                  className="text-navy py-3 px-6 opacity-50 bg-green_opaque text-[1.15rem] font-poppins rounded-md sm:w-auto w-full"
                >
                  Sharing image...
                </button>
              ) : (
                <button
                  onClick={() =>
                    shareImage(
                      `${image.name} created this image using CRUL`,
                      `https://crul.vercel.app/showcase/${id}`
                    )
                  }
                  className="text-navy flex justify-center items-center text-center py-3 px-6  bg-green_opaque text-[1.15rem] font-poppins rounded-md sm:w-auto w-full"
                >
                  <span className="mr-2">
                    <AiOutlineShareAlt />
                  </span>{" "}
                  Share Image
                </button>
              )}
              <button
                className="border flex justify-center items-center text-center py-2 px-4 border-green hover:bg-[rgba(255,255,255,0.12)] text-green font-poppins rounded-md sm:w-auto w-full"
                onClick={() => downloadImage(id, image.name, image.photo)}
              >
                <span className="mr-2">
                  {" "}
                  <FiDownload />
                </span>
                Download image
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Image;
