const express = require("express");
const mongoose = require("mongoose");
const keys = require("./config/keys");

require("./models/User"); // Need to require it first as we are registering the schema for the model "users"
require("./services/passport");
// const authRoutes = require("./routes/authRoutes");

mongoose.connect(keys.mongoURI, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

const app = express();
// authRoutes(app);
require("./routes/authRoutes")(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);
