// config/openai.js

import { Configuration, OpenAIApi } from "openai";
import { config } from "dotenv";

// Load environment variables from .env
config();

// Setup OpenAI with API key from .env
const openaiConfig = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(openaiConfig);

// Export the OpenAI instance
export default openai;
