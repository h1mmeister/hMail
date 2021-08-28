// requiring the libraries
const mongoose = require("mongoose");
const { Schema } = mongoose;

// creating the schema for the surveys
const surveySchema = new Schema({
  title: String,
  body: String,
  subject: String,
  recipients: [String],
});

// creating the model class
mongoose.model("surveys", surveySchema);
