const express = require("express");
const app = express();
const { router } = require("./router");

app.use(express.json());
app.get("/", (req, res) => {
  res.send(`
    <h1 style="color:blue;text-align:center;">This is a heading</h1>`);
});
app.use("/", router);
app.listen(8000, () => {
  console.log("server connection");
});
