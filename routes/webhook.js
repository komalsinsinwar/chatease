// routes/webhook.js

import express from "express";
import { handleIncomingMessage } from "../services/twilioService.js";

const router = express.Router();

router.post("/webhook", async (req, res) => {
  const { From, Body } = req.body;

  try {
    await handleIncomingMessage(From, Body);
    res.status(200).send("Message processed");
  } catch (error) {
    console.error("Error handling message:", error);
    res.status(500).send("Error processing message");
  }
});

export default router;
