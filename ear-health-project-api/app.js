const express = require("express"); // import express
const app = express(); // create our app
const morgan = require("morgan");
const cors = require("cors");

// mount the middleware
app.use(cors());
app.use(morgan("tiny"));
app.use(express.json());

//import the routes
const authRoutes = require("./routes/authRoutes")

//use the routes
app.use("/auth", authRoutes)

module.exports = app;