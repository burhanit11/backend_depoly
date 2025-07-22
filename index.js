const dotenv = require("dotenv");
const express = require("express");
const app = express();

dotenv.config();

const PORT = process.env.PORT;

app.get("/", (req, res) =>
  res.send("Congratulation 🎉🎉! Our Express server is Running on Vercel")
);

app.listen(PORT, () => console.log("Server ready on port 5000.", PORT));
