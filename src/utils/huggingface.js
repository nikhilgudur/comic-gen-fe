import { pipeline, TextStreamer } from "@huggingface/transformers";
import { Configuration, OpenAIApi } from "openai";
// import  from 'dotenv/config';

class GenerateComic {
  static task = "comic";
  static model = "openai/comic-davinci-003";
  static openaiApiKey = "process.env.OPENAI_API_KEY";

  static async generateComic(prompt) {
    const configuration = new Configuration({
      apiKey: this.openaiApiKey,
    });

    const openai = new OpenAIApi(configuration);

    const streamer = new TextStreamer(openai, this.model, this.task);

    const response = await pipeline(streamer, prompt);

    return response;
  }
}
