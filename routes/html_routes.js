// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
var path = require("path");
var express = require('express');
// require our burger model
var db = require('../models');

// Routes
// =============================================================
module.exports = function(app) {

  app.get("/api", function(req, res) {
    db.Product.findAll({}).then(function(dbProduct){
      //res.json(dbProduct);
    var hbsObject = {Product: dbProduct};

    console.log(hbsObject);

    res.render('index', hbsObject);
    });
  });

  // Each of the below routes just handles the HTML page that the user gets sent to.

  // index route loads view.html
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname + "/../public/home.html"));
  });

  // cms route loads cms.html
  app.get("/cms", function(req, res) {
    res.sendFile(path.join(__dirname + "/../public/borrower.html"));
  });

  // blog route loads blog.html
  app.get("/blog", function(req, res) {
    res.sendFile(path.join(__dirname + "/../public/lend.html"));
  });

  // authors route loads product_test.html
  app.get("/products", function(req, res) {
    res.sendFile(path.join(__dirname + "/../public/product_test.html"));
  });
};

