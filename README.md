# CRUL

**Description**:  This is an AI Image Generator that uses OpenAi's DALL-E and text-davincii-3. It generates an image out of the provided prompt. This is a game-changing software, it uses text-davincii-3 to suggest prompts for you.

## Demo
https://user-images.githubusercontent.com/79797604/219990531-af5d3224-30c3-40d9-84c1-bc5b28ca022e.mp4

## Technology stack 
 - Javascript Library: [ReactJs](https://beta.reactjs.org)
 - NoSQL Database: [MongoDB](https://mongodb.com)
 - Object Relational Model: [Mongoose](https://mongoose.com)
 - NodeJs Framework: [ExpressJs](https://expressjs.com)
 - Javascript Runtime: [NodeJs](https://nodejs.org)
 - Icons: [React-icons](https://react-icons.github.io/react-icons)
 - Media Storage platform: [Cloudinary](https://cloudinary.com)

<br/>

**Status**:  Alpha v1.1, 

## Dependencies

The following dependencies must be installed in order for the software to work:
<br/>
    **Frontend (Client folder)**:
        - React
        - React-icons
        - File-saver
        - React-dom
        - React-router-dom
        - Lodash
        - React-helmet
        <br/>
    **Backend (Server folder)**:
        - Express
        - Nodemon
        - Mongoose
        - Dotenv
        - Cors
        - Openai
        - Cloudinary

## Installation

To use this software, open your terminal and run 

```sh
cd server
```

```sh
npm install
```
    once all the dependencies are done installing, run

```sh
npm run start
 ```

    open a new terminal and run

```sh
cd client
```

```sh
 npm i
```

    then start the frontend by running


```sh
npm run start
``` 

## Configuration

Cd into the server folder and create a `.env` file and fill it with your credentials from openai, mongodb and cloudinary.

```sh
    MONGODB_URL=""
    OPENAI_API_KEY=""
    CLOUDINARY_CLOUD_NAME=""
    CLOUDINARY_API_KEY=""
    CLOUDINARY_API_SECRET=""

```

## Usage

Visit [http://localhost:5173](http://localhost:5173)

You can go to `/generate-image` route to generate your AI image.
You can also visit the `/showcase` route to view all the AI generated images 


## Open source licensing info
1. [CODE OF CONDUCT](CODE_OF_CONDUCT)
2. [LICENSE](LICENSE)
3. [CONTRIBUTING](CONTRIBUTING)


----

## Credits and references

1. [JavaScript Mastery's AI Image Generator Project Video]()
2. [Github Profile ReadMe Generator](https://gprm.itsvg.in)
3. [Brittnay Chiang Portfolio](brittanychiang.com)
