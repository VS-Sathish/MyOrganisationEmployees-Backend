const express = require("express");
const dotenv = require("dotenv").config();
const db = require("./database/connection.js");
const employeeRoutes = require("./routes/employees.routes.js");
const cors = require("cors");

const app = express();

db(); // db connection

app.get("/", (request, response) => {
  response.send("express is the backend application");
});

// Middlewares
app.use(express.json());
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Credentials", true);
  res.header("Access-Control-Allow-Origin", "://");
  // res.header(
  // "Access-Control-Allow-Origin",
  // "https://ohzone-sbf-demo-client.cfapps.us10-001.hana.ondemand.com"
  // );
  res.header(
    "Access-Control-Allow-Methods",
    "GET,PUT,POST,DELETE,UPDATE,OPTIONS"
  );
  res.header(
    "Access-Control-Allow-Headers",
    "X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept"
  );
  next();
});
const corsConfig = {
  credentials: true,
  origin: true,
};
app.use(cors(corsConfig));

app.use("/api", employeeRoutes);

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
  console.log(`App is Running in PORT ${PORT}`);
});
