// Dependencies
// =============================================================
var express = require("express");
const session = require("express-session");
//requiring passport as we configured it
const passport = require("./app/config/passport");

var api = require("./app/routes/api-routes.js");
// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;

const db = require("./app/models");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static directory to be served
app.use(express.static("app/public"));
// taking routes that exist in api-controller and mounting them on /api
// Routes
// =============================================================
// require("./app/routes/api-routes.js")(app);

app.use(
  session({ secret: "we da boiz", reserve: true, saveUninitialized: true})
);

app.use(passport.initialize());
app.use(passport.session());

app.use("/api", api);

// Here we introduce HTML routing to serve different HTML files
require("./app/routes/html-routes.js")(app);

// Starts the server to begin listening
// =============================================================
db.sequelize.sync().then(() => {
  app.listen(PORT, function () {
    console.log("App listening on http://localhost:" + PORT);
  });
})
