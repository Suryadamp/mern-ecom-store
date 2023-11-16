const express = require("express");

const app = express();

const ErrorHandler = require("./middileware/error");
const cookieParser = require("cookie-parser");
app.use(express.json());
app.use(cookieParser());

const product = require("./routes/ProductRoute");
const user = require("./routes/UserRoute");
const order = require("./routes/OrderRoute");

//routes
app.use("/api", product);
app.use("/api", user);
app.use("/api", order);

//its use for error handler
app.use(ErrorHandler);

module.exports = app;
