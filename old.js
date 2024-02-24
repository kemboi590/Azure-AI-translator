const axios = require("axios");
const qs = require("qs");
const { v4: uuidv4 } = require("uuid");

let key = "fc2623fb555647e4bba1ba254f387aa2";
let endpoint = "https://api.cognitive.microsofttranslator.com";

let location = "southafricanorth";

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
      text: "I would really like to drive your car around the block a few times!",
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
