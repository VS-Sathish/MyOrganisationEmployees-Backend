const express = require("express");
const dotenv = require("dotenv").config();
const db = require("./database/connection.js");
const employeeRoutes = require("./routes/employees.routes.js");

const app = express();

db(); // db connection

app.get("/", (request, response) => {
  response.send("express is the backend application");
});

// Middlewares
app.use(express.json());

app.use("/api", employeeRoutes);

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
  console.log(`App is Running in PORT ${PORT}`);
});