// requiring the libraries
const express = require("express");
const mongoose = require("mongoose");
const cookieSession = require("cookie-session");
const bodyParser = require("body-parser");
const passport = require("passport");
const keys = require("./config/keys");
const { cookieKey } = require("./config/keys");

// need to require it first as we are registering the schema for the model "users"
require("./models/User");
require("./models/Survey");
require("./services/passport"); // const authRoutes = require("./routes/authRoutes");

// used to connect to mongoDB and resolve some dependency warnings
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

// telling passport to use cookies for authentication
app.use(passport.initialize());
app.use(passport.session());

// using authRoutes
require("./routes/authRoutes")(app);
require("./routes/billingRoutes")(app);
require("./routes/surveyRoutes")(app);

// this code will run only for production
if (process.env.NODE_ENV === "production") {
  // code for express to serve production assets
  app.use(express.static("client/build"));

  // express will serve index.html if it does not recognizes the route
  const path = require("path");
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

// dynamic port binding for heroku
const PORT = process.env.PORT || 5000;
app.listen(PORT);
