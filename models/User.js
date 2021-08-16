// requiring the libraries
const mongoose = require("mongoose");
const { Schema } = mongoose; // const Schema = mongoose.Schema

// creating the schema for the records
const userSchema = new Schema({
  googleId: String,
  credits: { type: Number, default: 0 },
});

// creating the model class
mongoose.model("users", userSchema);
