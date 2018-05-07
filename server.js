// DEPENDENCIES
var express = require("express");
var bodyParser = require("body-parser");
//=====================================================

// Set up Express App
var app = express();
var PORT = process.env.PORT || 3000;
// ====================================================

//TO DO
// Require Models
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

// TO DO
// Sync sequelize models

// Starting Express app
app.listen(PORT, function(){
    console.log("App listening on PORT "+ PORT);
});