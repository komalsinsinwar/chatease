// server.js

import express from "express";
import dotenv from "dotenv";
import webhookRoutes from "./routes/webhook.js";
import "./config/firebase.js"; // initialize Firebase
import "./config/openai.js";   // optional: initializes OpenAI config

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware to parse incoming requests
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/webhook", webhookRoutes);

// Default route
app.get("/", (req, res) => {
  res.send("College WhatsApp Bot is running...");
});

app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
});
