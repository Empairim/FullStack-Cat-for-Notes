import db from "./db/connection.js";
import express from "express";
import routes from "./routes/index.js";
import cors from "cors";
import logger from "morgan";
import chalk from "chalk";

const app = express();
const PORT = 3000;
//so express can use json
app.use(express.json());
//to give cross origin acess
app.use(cors());
app.use(logger("dev"));
//prepend all the routes with /api

app.use("/api", routes);
//so the route would be /api/cats/ ect

//connecting the and then letting you know its on and what port its on
db.on("connected", () => {
  console.clear();
  console.log(chalk.blue("Connected to MongoDB!"));
  app.listen(PORT, () => {
    console.log(`Express server running in developement on port: ${PORT}`);
  });
});
