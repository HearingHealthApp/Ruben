const express = require("express"); // import express
const app = express(); // create our app
const morgan = require("morgan");
const cors = require("cors");
const { NotFoundError } = require("./utils/errors");
const security = require("./middleware/security");

// mount the middleware
app.use(cors());
app.use(morgan("tiny"));
app.use(express.json());
app.use(security.extractUserFromJwt);

//import the routes
const authRoutes = require("./routes/authRoutes");
const forumRoutes = require("./routes/forumRoutes");
const commentsRoutes = require("./routes/commentsRoutes")

//use the routes
app.use("/auth", authRoutes);
app.use("/forum", forumRoutes);
app.use("/comments", commentsRoutes)

//error handling next functions
app.use((req, res, next) => {
  return next(new NotFoundError());
});

app.use((err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message;

  return res.status(status).json({
    error: { message, status },
  });
});

module.exports = app;
