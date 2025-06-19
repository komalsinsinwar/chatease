// services/intentService.js

import intents from "../data/intents.json" assert { type: "json" };

/**
 * Matches user input with predefined intents (static responses).
 * @param {string} message - The user's input message.
 * @returns {string|null} - The matched response or null if no match.
 */
export function getStaticResponse(message) {
  message = message.toLowerCase().trim();

  for (const intent of intents.intents) {
    for (const pattern of intent.patterns) {
      if (message.includes(pattern.toLowerCase())) {
        return intent.responses[Math.floor(Math.random() * intent.responses.length)];
      }
    }
  }

  return null; // fallback to GPT if no intent matched
}
