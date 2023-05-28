import * as dotenv from "dotenv";
import { v2 as cloudinary } from "cloudinary";
import Post from "../models/post.js";
import { Configuration, OpenAIApi } from "openai";
dotenv.config();

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

const testRoute = (req, res) => {
  res.send("Hello from CRUL!");
};

const generateImage = async (req, res) => {
  try {
    const { prompt } = req.body;
    const aiResponse = await openai.createImage({
      prompt,
      n: 1,
      size: "1024x1024",
      response_format: "b64_json",
    });
    const image = aiResponse.data.data[0].b64_json;
    res.status(200).json({ photo: image });
  } catch (error) {
    console.log(error)
    // console.log(error?.response.data.error.message);
    res.status(500).send(error?.response.data.error.message);
  }
};

const generateJokes = async(req, res) => {
  try{
    const { prompt } = req.body;
    const temperature = 0.5;
    const maxTokens = 50;
    const response = await openai.createCompletion({
      engine: 'davinci',
      prompt,
      max_tokens: maxTokens,
      temperature: temperature,
      n: 100,
      stop: '\n',
    });
    res.status(200).send({
      jokes: response.data.choices
  });
  } catch(error){
    console.log(error?.response.data.error.message);
    res.status(500).send(error?.response.data.error.message);
  }
}

export { testRoute, generateImage, generateJokes };
