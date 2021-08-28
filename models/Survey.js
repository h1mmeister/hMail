// requiring the libraries
const mongoose = require("mongoose");
const { Schema } = mongoose;

// creating the schema for the surveys
const surveySchema = new Schema({
  title: String,
  body: String,
  subject: String,
  recipients: [String],
  yes: { type: Number, default: 0 },
  no: { type: Number, default: 0 },
});

// creating the model class
mongoose.model("surveys", surveySchema);
