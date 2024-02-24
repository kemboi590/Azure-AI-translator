import express from "express";
import config from "./src/config.js";
import axios from "axios";
import qs from "qs";
import { v4 as uuidv4 } from "uuid";
const app = express();
let key = config.tranlator_key;
let endpoint = config.endpoint;

let location = config.location;

axios({
  baseURL: endpoint,
  url: "/translate",
  method: "post",
  headers: {
    "Ocp-Apim-Subscription-Key": key,
    "Ocp-Apim-Subscription-Region": location,
    "Content-type": "application/json",
    "X-ClientTraceId": uuidv4().toString(),
  },

  params: {
    "api-version": "3.0",
    from: "en",
    to: ["sw"],
  },
  paramsSerializer: (params) => qs.stringify(params, { arrayFormat: "comma" }),
  data: [
    {
      text: "am happy to be here!",
    },
  ],
  responseType: "json",
})
  .then(function (response) {
    console.log(JSON.stringify(response.data, null, 4));
  })
  .catch(function (error) {
    console.error(error);
  });
app.get("/", (req, res) => {
  res.send("Azure AI Translator😊");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
