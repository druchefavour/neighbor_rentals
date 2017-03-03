// Require the following npm packages inside of the server.js file:
		// express
		// body-parser
		// method-override
		
var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");

var app = express();
var port = process.env.PORT || 8080;

// Requiring our models for syncing
var db = require("./models");

// Serve static content for the app from the "public" directory in the application directory

app.use(express.static(process.cwd() + "/public"));

// Parse application/x-www-form-urlencoded

app.use(bodyParser.urlencoded({ extended: false }));

// Override with POST having ?_method=DELETE

app.use(methodOverride("_method"));

// Routes =============================================================

require("./routes/html_routes.js")(app);
require("./routes/reviews_api_routes.js")(app);
require("./routes/products_api_routes.js")(app);
require("./routes/users_api_routes.js")(app);

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Listen for response and log a message to the user upon success
// Syncing our sequelize models and then starting our express app
db.sequelize.sync({force:true}).then(function() {
	app.listen(port, function() {
	console.log("==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.", port, port); 
});
});
