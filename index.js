const express = require("express");
const cookieSession = require("cookie-session");
const bodyParser = require("body-parser");
const passport = require("passport");
const mongoose = require("mongoose");
const keys = require("./config/keys");
const { cookieKey } = require("./config/keys");

require("./models/User"); // Need to require it first as we are registering the schema for the model "users"
require("./services/passport");
// const authRoutes = require("./routes/authRoutes");

mongoose.connect(keys.mongoURI, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

const app = express();
app.use(bodyParser.json());

app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey],
  })
);

app.use(passport.initialize());
app.use(passport.session());

// authRoutes(app);
require("./routes/authRoutes")(app);
require("./routes/billingRoutes")(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);
