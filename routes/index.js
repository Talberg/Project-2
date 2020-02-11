const router = require("express").Router();
const passport = require("passport");
const isLoggedIn = require("../config/middleware/isLoggedIn");
const authController = require("../controllers/authController.js");

// main route
// eslint-disable-next-line func-names
router.get("/", function(req, res) {
  res.render("index", { successMsg: res.locals.successMsg });
});

// API routes (add files/routes within '/api' to run CRUD operations against your
// database and to query external APIs)...
// router.use("/api", apiRoutes);

// auth routes
router.get("/signup", authController.signup);
router.get("/login", authController.login);
router.get("/logout", authController.logout);
router.get("/home", isLoggedIn, authController.home);
router.get("/notes", isLoggedIn, authController.notes);
router.post("/notes", authController.createNote);
router.get("/", authController.home);
router.delete("/notes/:id", isLoggedIn, authController.delete);
router.get("/search", authController.strain);
router.post("/search", authController.search);

router.post(
  "/signup",
  passport.authenticate("local-signup", {
    successRedirect: "/home",
    failureRedirect: "/signup",
    failureFlash: true,
  })
);

router.post(
  "/login",
  passport.authenticate("local-login", {
    successRedirect: "/home",
    failureRedirect: "/login",
    failureFlash: true,
  })
);

module.exports = router;
