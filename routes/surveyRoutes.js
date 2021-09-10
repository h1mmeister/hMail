const mongoose = require("mongoose");
const requireCredits = require("../middlewares/requireCredits");
const requireLogin = require("../middlewares/requireLogin");

const Survey = mongoose.model("surveys");

module.exports = (app) => {
  app.post("/api/surveys", requireLogin, requireCredits, (req, res) => {
    const { title, subject, body, recipients } = req.body;

    // creating the instance of the survey
    const survey = Survey({
      title,
      subject,
      body,
      //   recipients: recipients.split(",").map((email) => {
      //     return { email: email };
      //   }),
      recipients: recipients.split(",").map((email) => ({
        email: email.trim(),
      })),
      _user: req.user.id,
      dateSent: Date.now(),
    });
  });
};
