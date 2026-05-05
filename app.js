const express = require("express");

const { mongoConnect } = require("./utils/db");
const userRoutes = require("./routes/userRoutes");
const cartRoutes = require("./routes/cartRoutes");

const app = express();

app.use(express.json());

app.use(userRoutes);
app.use(cartRoutes);

mongoConnect(() => {
  app.listen(3000);
});
