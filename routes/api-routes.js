
// api-routes.js - this file offers a set of routes for displaying and saving data to the db


// grab the orm from the config
// (remember: connection.js -> orm.js -> route file)


//Dependencies
var db = require("../models");
//=====================================================

// ROUTES
module.exports = function(app) {

  // GET route for getting all of the ratings
  app.get("/api/rating", function(req, res) {
    db.Ratings.findAll({}).then(function(results){
      console.log(results);
      res.json(results);
      
    });
  });

    //POST route for saving a new rating.
    app.post("/api/rating", function(req, res) {
        console.log("Rating Data");
        console.log(req.body);
        Ratings.create({
            rating: req.body.float,
            comment: req.body.text
        })
    });
};
//=====================================================
