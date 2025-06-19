// services/twilioService.js

import { getStaticResponse } from "./intentService.js";
import { getAIResponse } from "./gptService.js";
import twilio from "twilio";

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const twilioClient = twilio(accountSid, authToken);

/**
 * Handle incoming WhatsApp message and send reply.
 * @param {string} from - Sender's WhatsApp number.
 * @param {string} body - Message text from user.
 */
export async function handleIncomingMessage(from, body) {
  console.log("Incoming message from", from, ":", body);

  let reply = getStaticResponse(body);

  if (!reply) {
    reply = await getAIResponse(body);
  }

  await twilioClient.messages.create({
    from: `whatsapp:${process.env.TWILIO_WHATSAPP_NUMBER}`,
    to: from,
    body: reply,
  });

  console.log("Replied with:", reply);
}
