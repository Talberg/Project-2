var router = require("express").Router();
var passport = require("passport");
var isLoggedIn = require("../config/middleware/isLoggedIn");
var authController = require("../controllers/authController.js");
var apiRoutes = require("./api");

// main route
router.get("/", function (req, res) {
    res.render("index", { successMsg: res.locals.successMsg });
});

// API routes (add files/routes within '/api' to run CRUD operations against your
// database and to query external APIs)...
router.use("/api", apiRoutes);

// auth routes
router.get("/signup", authController.signup);
router.get("/login", authController.login);
router.get("/logout", authController.logout);
router.get("/home", isLoggedIn, authController.notes);
router.get('/notes', isLoggedIn,authController.notes)
router.post('/notes', isLoggedIn , authController.createNote)

router.post("/signup", passport.authenticate("local-signup", {
    successRedirect: "/home",
    failureRedirect: "/signup",
    failureFlash: true
}));

router.post("/login", passport.authenticate("local-login", {
    successRedirect: "/home",
    failureRedirect: "/login",
    failureFlash: true
}));

module.exports = router;