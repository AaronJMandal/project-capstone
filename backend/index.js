const express = require("express");
const app = express();
const port = 5000;

app.get("/hello-world", (req, res) => {
  res.status(200).json("Hello from the backend!");
});

app.listen(port, () => {
  console.log(`Backend running on port ${port}`);
});
