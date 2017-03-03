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

  // app.get("/home", function(req, res) {
  //   db.Product.findAll({}).then(function(dbProduct){
  //     //res.json(dbProduct);
  //   var hbsObject = {Product: dbProduct};
  //
  //   console.log(hbsObject);
  //
  //   res.render('index', hbsObject);
  //   });
  // });

  app.get("/rent", function(req, res) {
    db.Product.findAll({}).then(function(dbProduct){
      //res.json(dbProduct);
    var hbsObject = {Product: dbProduct};

    console.log(hbsObject);

    res.render('rent', hbsObject);
    });
  });

  app.get("/lend", function(req, res) {
    db.Product.findAll({}).then(function(dbProduct){
      //res.json(dbProduct);
    var hbsObject = {Product: dbProduct};

    console.log(hbsObject);

    res.render('lend', hbsObject);
    });
  });

  // Each of the below routes just handles the HTML page that the user gets sent to.

  // categories page
  app.get("/categories", function(req, res) {
    res.sendFile(path.join(__dirname + "/../public/in-construction.html"));
  });

  // index route loads view.html
  app.get("/home", function(req, res) {
    res.sendFile(path.join(__dirname + "/../public/home.html"));
  });

  // sign-in route loads cms.html
  app.get("/sign-in", function(req, res) {
    res.sendFile(path.join(__dirname + "/../public/sign-in.html"));
  });


  // authors route loads product_test.html
  app.get("/products", function(req, res) {
    res.sendFile(path.join(__dirname + "/../public/product_test.html"));
  });
};
