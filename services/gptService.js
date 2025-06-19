// services/gptService.js

import { openai } from "../config/openai.js";

/**
 * Get GPT-based dynamic response when no intent matched.
 * @param {string} userMessage - The user's query.
 * @returns {Promise<string>} - AI-generated reply.
 */
export async function getAIResponse(userMessage) {
  try {
    const response = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [
        { role: "system", content: "You are a helpful assistant for college-related queries." },
        { role: "user", content: userMessage },
      ],
    });

    return response.data.choices[0].message.content.trim();
  } catch (error) {
    console.error("OpenAI error:", error.message);
    return "Sorry, I'm having trouble answering that right now.";
  }
}
