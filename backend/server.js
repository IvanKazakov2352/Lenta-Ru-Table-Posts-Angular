const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const axios = require("axios");
const convert = require("xml-js");

const app = express();
const url = "https://lenta.ru/rss/last24";

app.use(express.json());
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/news", async (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "origin, content-type, accept");
  const response = await axios.get(url);
  const xml = convert.xml2json(response.data, {
    compact: true,
    spaces: 4,
  });
  const xmlJson = JSON.parse(xml);
  const items = xmlJson.rss.channel.item;
  res.json(items);
});

app.listen(3000, () => console.log("Server started"));
