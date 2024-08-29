const mongoose = require("mongoose");
const config= require('./config')

mongoose.connect(config.dbUrl);

const mongoDb = mongoose.connection;
mongoDb.on("error", (error) => console.error(`Database failed to connect : ${error}`));
mongoDb.once("open", () => {
  console.log("Database connected Successfully!!");
});
