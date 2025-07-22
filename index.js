const express = require("express");
const app = express();
const dotenv = require("dotenv");

dotenv();
app.get("/", (req, res) =>
  res.send("Congratulation 🎉🎉! Our Express server is Running on Vercel")
);

app.listen(3000, () => console.log("Server ready on port 3000."));
