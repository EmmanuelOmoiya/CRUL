import React from 'react';
import { Helmet } from "react-helmet";
import { Link } from 'react-router-dom';

const NotFound = () =>{
    return(
        <div className="justify-center text-center items-center flex">
            <Helmet>
                <meta charSet="utf-8" />
                <meta
                name="viewport"
                content="width=device-width,initial-scale=1,minimum-scale=1"
                />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta name="description" content="Generate AI Image using CRUL" />
                <title>Page Not Found - CRUL</title>
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
            </Helmet>
            <div className="font-poppins mt-[26vh]">
                <p className="font-sora text-slate font-bold text-5xl my-10">Page Not Found</p>
                <Link to="/" ><button className="px-8 py-4 rounded-md border text-green cursor-pointer border-green font-poppins">Go to home page</button></Link>
            </div>
        </div>
    )
}
export default NotFound;