// DEPENDENCIES
var path = require("path");

// MODULE EXPORTS
module.exports = function(app){
    // HTML ROUTES
    //omega.html
    app.get("/", function(req, res){
        res.sendFile(path.join(__dirname, "../public/omega.html"));
    });
    // finder.html
    app.get("/finder", function(req, res){
        res.sendFile(path.join(__dirname, "../public/finder.html"));
    });
    // rating.html
    app.get("/rating", function(req,res){
        res.sendFile(path.join(__dirname, "../public/rating.html"));
    });
    // login.html
    app.get("/login", function(req,res){
        res.sendFile(path.join(__dirname, "../public/login.html"));
    });
};




