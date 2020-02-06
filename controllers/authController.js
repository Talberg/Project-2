const db = require("../models")
const nodemailer = require('nodemailer')

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
    home: function (req, res) {
        db.Note.findAll({order:[['id','DESC']]}).then((data)=>{
            console.log(data[0].dataValues.createdAt)
            console.log(data.length)
          
            
            
            // data.dataValues.createdAt
            // data.dataValues.data = 
            const notes = {
                test:data
            }
            res.render('home',notes)
            // res.json({message:'hello'})
        
    
        })
        
    },
    logout: function (req, res) {
        req.logout();
        req.flash("successMsg", "You successfully logged out");
        res.redirect("/");
    },
    createNote: function (req, res) {
        console.log(req.body.name)
        console.log('hi')
        
        async function main() {
               // nodemailer s
           let transporter = nodemailer.createTransport({
               service: 'gmail',
               auth: {
                   user: process.env.DB_EMAIL,
                   pass: process.env.DB_EMPASS
               }
           });
           let info = await transporter.sendMail({
               from: '',
               to: "alexandermtalberg@gmail.com",
               subject: "Hello",
               text: "Hello World",
               html: "<b>MASS EMAIL!</b>"
           });
           console.log("Message sent: %s", info.messageId);
       }
       main().catch(console.error)

            db.Note.create({
                name:req.body.name,
                dispensary:req.body.dispensary,
                species:req.body.species,
                notes:req.body.notes,
                userId:req.user.id,
                potency:req.body.potency
            }).then((data)=>{
                res.render('notes')
            })}
            
        
      
        
    ,
    notes:function(req,res){
        console.log(req.user.email)
        res.render("notes")

        

    }

}