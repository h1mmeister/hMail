const mongoose = require("mongoose");
const { Schema } = mongoose; // const Schema = mongoose.Schema

const userSchema = new Schema({
  googleId: String,
});

// Model Class
mongoose.model("users", userSchema);
