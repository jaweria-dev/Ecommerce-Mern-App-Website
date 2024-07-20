require("dotenv").config();
const express = require("express");
const colors = require("colors");
const mongoose = require("mongoose");
const morgan = require("morgan");
const cors = require("cors");

// import
const connectToDatabase = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const categoryRoutes = require("./routes/categoryRoutes");
const productRoutes = require("./routes/productRoutes");
// const formidable = require("formidable");

// Rest object
const app = express();

// middlware
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
// app.use(formidable());

// Routes
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/category", categoryRoutes);
app.use("/api/v1/product", productRoutes);

// rest api
app.get("/", (req, res) => {
  res.send("<h1>Welcome to Ecommerce app</h1>");
});

// db connect config
connectToDatabase();

// Port
const Port = process.env.Port || 8080;

// run listening
app.listen(Port, () => {
  console.log(`Server is listening ${Port}`.bgWhite.black);
});
