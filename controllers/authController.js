const db = require("../models")

module.exports = {
    signup: function (req, res) {
        // if user is logged in, redirect to /dashboard
        if (req.user) {
            req.flash("successMsg", "You're already logged in");
            return res.redirect("/home");
        }

        res.render("signup");
    },
    login: function (req, res) {
        // if user is logged in, redirect to /dashboard
        if (req.user) {
            req.flash("successMsg", "You're already logged in");
            return res.redirect("/home");
        }

        res.render("login");
    },
    //needs to be a create note also
    notes: function (req, res) {
        db.Note.findAll().then((data)=>{
            console.log(data)
            const notes = {
                test:data
            }
            res.render("notes",notes)
            // res.json({message:'hello'})
        })
        
    },
    logout: function (req, res) {
        req.logout();
        req.flash("successMsg", "You successfully logged out");
        res.redirect("/");
    },
    createNote: function (req, res) {

       console.log(req.body) 
      
        
    },
    home:function(){

    }

}