const mongoose = require("mongoose");
const { Schema } = mongoose; // const Schema = mongoose.Schema

const userSchema = new Schema({
  googleId: String,
  credits: { type: Number, default: 0 },
});

// Model Class
mongoose.model("users", userSchema);
