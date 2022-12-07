const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
app.get("/", (req, res) => {
  res.send(`
      <h1 style="color:blue;text-align:center;">This is a heading</h1>`);
});

app.listen(port, () => {
  console.log(`server connection with port no. ${port}`);
});
