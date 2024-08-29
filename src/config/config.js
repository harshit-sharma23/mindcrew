require("dotenv").config();
const { PORT, DB_URL } = process.env;
const envConfig = {
  serverPort: PORT,
  dbUrl: DB_URL
};
module.exports = envConfig;
