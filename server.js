const express = require("express");
const exphbs = require("express-handlebars");

// Create an instance of the express app.
const app = express();

// Set the port of our application
// process.env.PORT lets the port be set by Heroku
const PORT = process.env.PORT || 8080;

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// Parse application body
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// set Handlebars.
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// importing routes from controller
const routes = require("./controllers/burgers_controller.js");

app.use(routes);

// start listening the server
app.listen(PORT, function () {
    console.log("Server listening on: http://localhost:" + PORT);
});