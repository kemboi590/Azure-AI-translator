import dotenv from "dotenv";
dotenv.config();

const { TRASLATOR_KEY, ENDPOINT, LOCATION } = process.env;

const config = {
  tranlator_key: TRASLATOR_KEY,
  endpoint: ENDPOINT,
  location: LOCATION,
};

export default config;
