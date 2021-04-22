const express = require("express");
const mongoose = require("mongoose");
const keys = require("./config/keys");

require("./services/passport");
// const authRoutes = require("./routes/authRoutes");
require("./models/User");

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
