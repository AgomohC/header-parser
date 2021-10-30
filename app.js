// require express
const express = require("express");

//initialize express
const app = express();

//middleware
app.use(express.static("./public"));

//routes
app.get("/api/whoami", (req, res) => {
  const ip = req.ip;
  const userAgent = req.headers["user-agent"];
  const lang = req.headers["accept-language"];

  return res.json({ ipaddress: ip, language: lang, software: userAgent });
});
app.use((req, res) => {
  return res.status(404).send("not found");
});
//port
const port = process.env.PORT || 8080;

//listener function
app.listen(port, () => {
  console.log(`app is running on port ${port}`);
});
