// requiring the libraries
const passport = require("passport");

module.exports = (app) => {
  // handler to kick the OAuth flow
  app.get(
    "/auth/google",
    passport.authenticate("google", { scope: ["profile", "email"] })
  );

  // authorized uri redirect
  app.get(
    "/auth/google/callback",
    passport.authenticate("google"),
    (req, res) => {
      res.redirect("/surveys");
    }
  );

  // logout handler
  app.get("/api/logout", (req, res) => {
    req.logout();
    res.redirect("/");
  });

  // checking the current authenticated user
  app.get("/api/current_user", (req, res) => {
    res.send(req.user);
  });
};
