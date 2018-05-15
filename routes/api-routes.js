
// api-routes.js - this file offers a set of routes for displaying and saving data to the db


// grab the orm from the config
// (remember: connection.js -> orm.js -> route file)


//Dependencies
var db = require("../models");
//=====================================================

// ROUTES
module.exports = function (app) {

    // GET route for getting all of the ratings
    app.get("/api/rating", function (req, res) {
        db.Ratings.findAll({}).then(function(results){
          console.log(results);
          res.json(results);
        });
    });

    // Get route for retrieving a single bathroom by id
    app.get("/api/rating/:id", function(req, res) {
        db.Ratings.findOne({
          where: {
            id: req.params.id
          }
        }).then(function(result) {
            res.json(result);
          });
    });
     // Get route for retrieving a single bathroom by location
     app.get("/api/rating/location/:location", function(req, res) {
        db.Ratings.findAll({
          where: {
            location: req.params.location
          }
        }).then(function(result) {
            res.json(result);
          });
    });


    //POST route for saving a new rating.
    app.post("/api/rating/create", function (req, res) {
        db.Ratings.create(req.body).then
        (function(result){
            res.json(result);
        });
    });
};
//=====================================================
