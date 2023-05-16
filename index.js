import express from "express";
import cors from "cors";
import mysql from "mysql2";
import bodyParser from "body-parser";
import multer from "multer";
// import cookieParser from "cookie-parser";
// import bcrypt from "bcrypt";
import webroute from "./routes/routes.js";

const app = express();

app.use(express.json());
// app.use(express.urlencoded());
app.use(cors());
app.use(bodyParser.json());
// app.use(cookieParser());

app.use("/code", webroute);

// const db = mysql.createConnection({
//   host: "127.0.0.1",
//   user: "syedsaif",
//   password: "5LIxqktlabYiGcdF",
//   database: "dashboard",
// });
const db = mysql.createPool({
  host: "217.21.87.205",
  user: "u947451844_saif08",
  password: "u]1ro&X$1R",
  database: "u947451844_pages",
});
db.getConnection((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Database Connected");
  }
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`app running on port ${port}...`);
});
export default db;
