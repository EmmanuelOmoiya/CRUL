<div style="margin-top: 1rem; text-align: center;margin-right: 25px; align-items:center; justify-content:center; display:flex">
    <img src="./client/public/crul.svg" style="width: 50px" alt="CRUL" />
    <p>+</p>
    <img style="width: 50px; margin-left: 20px" src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" alt="SvelteKit">
</div>
    <p style="font-size: 2rem; font-weight: 700; text-align: center; margin-top: .9rem">CRUL + ReactJs</p>

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#demo">Demo</a>
    </li>
        <li><a href="#built-with">Built With</a></li>
    <li>
      <a href="#dependencies">Required Dependencies</a>
    </li>
    <li><a href="#installation">Installation</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#configuration">Configuration</a></li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#open-source-licensing-info">License</a></li>
    <li><a href="#credits-and-references">Credits & References</a></li>
  </ol>
</details>
<br/>
This is an AI Image Generator that uses OpenAi's DALL-E and text-davincii-3. It generates an image out of the provided prompt. This is a game-changing software, it uses text-davincii-3 to suggest prompts for you.

## Demo
https://user-images.githubusercontent.com/79797604/219990531-af5d3224-30c3-40d9-84c1-bc5b28ca022e.mp4
<br/>
<br/>
### Built With

 [![React][React.js]][React-url]
 [![NodeJs][NodeJs]][NodeJs-url]
 [![MongoDb][MongoDB]][MongoDB-url]
 [![Express.js][ExpressJs]][ExpressJs-url]

<br/>

**Status**:  Alpha v1.2.1, 
<br/>

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
<br/>

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
<br/>


<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<br/>

## Configuration

Cd into the server folder and create a `.env` file and fill it with your credentials from openai, mongodb and cloudinary.

```sh
    MONGODB_URL=""
    OPENAI_API_KEY=""
    CLOUDINARY_CLOUD_NAME=""
    CLOUDINARY_API_KEY=""
    CLOUDINARY_API_SECRET=""

```
<br/>

## Usage

Visit [http://localhost:5173](http://localhost:5173)

You can go to `/generate-image` route to generate your AI image.
You can also visit the `/showcase` route to view all the AI generated images 
<br/>

<br/>

## Open source licensing info
1. [CODE OF CONDUCT](CODE_OF_CONDUCT)
2. [LICENSE](LICENSE)
3. [CONTRIBUTING](CONTRIBUTING)


----
<br/>

## Credits and references

1. [JavaScript Mastery's AI Image Generator Project Video]()
2. [Github Profile ReadMe Generator](https://gprm.itsvg.in)
3. [Brittnay Chiang Portfolio](brittanychiang.com)

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/EmmanuelOmoiya/CRUL.svg?style=for-the-badge
[contributors-url]: https://github.com/EmmanuelOmoiya/CRUL/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/EmmanuelOmoiya/CRUL.svg?style=for-the-badge
[forks-url]: https://github.com/EmmanuelOmoiya/CRUL/network/members
[stars-shield]: https://img.shields.io/github/stars/EmmanuelOmoiya/CRUL.svg?style=for-the-badge
[stars-url]: https://github.com/EmmanuelOmoiya/CRUL/stargazers
[issues-shield]: https://img.shields.io/github/issues/EmmanuelOmoiya/CRUL.svg?style=for-the-badge
[issues-url]: https://github.com/EmmanuelOmoiya/CRUL/issues
[license-shield]: https://img.shields.io/github/license/EmmanuelOmoiya/CRUL.svg?style=for-the-badge
[license-url]: https://github.com/EmmanuelOmoiya/CRUL/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/emmanuelomoiya
[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next-url]: https://nextjs.org/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://beta.reactjs.org/
[Vue.js]: https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D
[Vue-url]: https://vuejs.org/
[Angular.io]: https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white
[Angular-url]: https://angular.io/
[Svelte.dev]: https://img.shields.io/badge/Svelte-4A4A55?style=for-the-badge&logo=svelte&logoColor=FF3E00
[Svelte-url]: https://svelte.dev/
[Laravel.com]: https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white
[Laravel-url]: https://laravel.com
[Bootstrap.com]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[Bootstrap-url]: https://getbootstrap.com
[JQuery.com]: https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white
[JQuery-url]: https://jquery.com 
[MongoDB]:https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white
[MongoDB-url]: https://mongodb.com/docs
[NodeJs-url]: https://nodejs.org
[NodeJs]:https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white
[ExpressJs-url]: https://mongodb.com/docs
[ExpressJs]:https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB

