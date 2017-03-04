// *********************************************************************************
// file_api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our models
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

  // GET route for getting all of the reviews
  app.get("/users/create", function(req, res) {
    // Here we add an "include" property to our options in our findAll query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.User
    db.User.findAll({
      include: [db.Product]
    }).then(function(dbUser) {
      res.json(dbUser);
    });
  });

  // Get rotue for retrieving a single review
  app.get("/api/users/:id", function(req, res) {
    // Here we add an "include" property to our options in our findOne query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.User
    db.User.findOne({
      where: {
        id: req.params.id
      },
      include: [db.Product]
    }).then(function(dbUser) {
      res.json(dbUser);
    });
  });

  // POST route for saving a new post
  app.post("/users/create", function(req, res) {
   console.log(req.body.userid);
  console.log(req.body.Email);
  console.log(req.body.password);
  db.User.create({
    username:req.body.userid,
    email:req.body.Email,
    password:req.body.password,
  }).then(function(dbUser){
  res.json(dbUser)
  });
});

  // DELETE route for deleting posts
  app.delete("/api/users/:id", function(req, res) {
    db.User.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbUser) {
      res.json(dbUser);
    });
  });

  // PUT route for updating posts
  app.put("/api/users", function(req, res) {
    db.User.update(
      req.body,
      {
        where: {
          id: req.body.id
        }
      }).then(function(dbUser) {
        res.json(dbUser);
      });
  });
};