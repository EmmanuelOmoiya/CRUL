import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getRandomPrompt } from "../utils";
import { Name, Prompt, Detail, Toast } from "../components";
import { Helmet } from "react-helmet";
import OG from '../../public/assets/img/CRUL_CREATE_OG.png';


const GenerateImage = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [prompt, setPrompt] = useState("");
  const [photo, setPhoto] = useState("");
  const [generatingImg, setGeneratingImg] = React.useState(false);
  const [number, setNumber] = React.useState(1);
  const [loading, setLoading] = React.useState(false);
  const doc = { name, prompt, photo };
  const showcase = async (e) => {
    // e.preventDefault();
    if (prompt && photo) {
      setLoading(true);
      try {
        const response = await fetch("https://crul.onrender.com/api/v1/post", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(doc),
        });
        await response.json();
        navigate("/showcase");
      } catch (Error) {
        alert(Error);
        console.log(Error);
      } finally {
        setLoading(false);
      }
    } else {
      alert("Please enter a prompt and generate an image");
    }
  };
  const handleSurpriseMe = () => {
    const randomPrompt = getRandomPrompt(prompt);
    setPrompt(randomPrompt);
  };
  const [isNumber, setIsNumber] = React.useState(0);
  const text = [
    'Generating Image...',
    'Give it a min, it should be done',
    'Hmmm, chill a bit',
    'Wait for it'
  ]
  const generateImage = async () => {
    if (prompt) {
      try {
        setGeneratingImg(true);
        const response = await fetch("https://crul.onrender.com/api/v1/crul", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ prompt: prompt }),
        });
        const data = await response.json();
        setPhoto(`data:image/jpeg;base64,${data.photo}`);
      } catch (error) {
        alert(error?.response.data.error.message);
        console.log(error);
      } finally {
        setNumber(3);
        setGeneratingImg(false);
        setIsNumber(0);
      }
    } else {
      alert("Please enter a prompt");
    }
  };
  

  // const [jokes, setJokes] = React.useState([]);
  // React.useEffect(()=>{
  //   const generateJokes = async () => {
  //       try {
  //         const response = await fetch("https://localhost:4090/api/v1/crul/jokes", {
  //           method: "POST",
  //           headers: {
  //             "Content-Type": "application/json",
  //           },
  //           body: JSON.stringify({ prompt: "Generate an array of jokes" }),
  //         });
  //         const data = await response.json();
  //         console.log(data)
  //         setJokes(data.jokes);
  //       } catch (error) {
  //         alert(error);
  //         console.log(error);
  //       }
  //   };
  //   generateJokes();
  // }, [])

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
        <title>Generate Image -CRUL</title>
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
        <meta property="og:title" content="Generate Image - CRUL" />
        <meta
          property="og:description"
          content="Generate AI Image using CRUL"
        />
        <meta property="og:site_name" content="CRUL" />
        {/* <meta property="og:url" content={currentURL} key="ogurl" /> */}
                <meta property="og:image" content='https://crul.vercel.app/assets/img/CRUL_CREATE_OG.png' />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="@Emmanuel_Omoiya" />
        <meta name="twitter:title" content="Generate AI Image - CRUL" />
        <meta
          name="twitter:description"
          content="Generate AI Image using CRUL"
        />
        <meta name="twitter:image" content="https://crul.vercel.app/assets/img/CRUL_CREATE_OG.png" />
        <meta name="twitter:image:alt" content="Generate Image - CRUL"></meta>
        <meta name="twitter:domain" content="https://crul.vercel.app/" />
      </Helmet>
      {number === 1 && (
        <Name name={name} setName={setName} setNumber={setNumber} />
      )}
      {number === 2 && (
        <Prompt
          prompt={prompt}
          setNumber={setNumber}
          setPrompt={setPrompt}
          handleSurpriseMe={handleSurpriseMe}
          generatingImg={generatingImg}
          generateImage={generateImage}
          text={text}
          isNumber={isNumber}
          setIsNumber={setIsNumber}
        />
      )}
      {number === 3 && (
        <Detail
          name={name}
          setNumber={setNumber}
          prompt={prompt}
          photo={photo}
          showcase={showcase}
          loading={loading}
        />
      )}
    </>
  );
};
export default GenerateImage;
