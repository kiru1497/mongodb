const express = require("express");
const mongoose = require("mongoose");

const adminRoutes = require("./routes/adminRoutes");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Prefix all admin routes
app.use("/admin", adminRoutes);

mongoose
  .connect("mongodb://127.0.0.1:27017/kirandb")
  .then(() => {
    console.log("Connected to DB");
    app.listen(3000);
  })
  .catch((err) => console.log(err));
