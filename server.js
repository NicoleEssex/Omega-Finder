// DEPENDENCIES
var express = require("express");
var bodyParser = require("body-parser");
var dotEnv = require('dotenv');
var sequelize= require("sequelize")
//=====================================================

//Set up dotEnv
// dotEnv.config();
//=====================================================

// Set up Express App
var app = express();
var PORT = process.env.PORT || 3000;
// ====================================================


// Require Models
var db = require("./models");
// ====================================================

// Set up Express for data parsing
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());
// ====================================================

// Static directory
app.use(express.static("public"));
// ====================================================

// ROUTES
require("./routes/html-routes.js")(app);
// TO DO
// require api route for index.js
// require api route for post.js
// ====================================================



// Syncing sequelize models and starting Express app
db.sequelize.sync({ force: true }).then(function() {
    app.listen(PORT, function() {
      console.log("App listening on PORT " + PORT);
    });
  });
//   ==================================================