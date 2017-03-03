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

  /*app.get("/lend", function(req, res) {
    db.Product.findAll({}).then(function(dbProduct){
      //res.json(dbProduct);
    var hbsObject = {Product: dbProduct};

    console.log(hbsObject);

    res.render('index', hbsObject);
    });
  });*/


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

  // index route loads view.html
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname + "/../public/home.html"));
  });

  app.get("/home", function(req, res) {
    res .sendFile(path.join(__dirname + "/../public/home.html"));
  });

  // cms route loads cms.html
  app.get("/sign-in", function(req, res) {
    res.sendFile(path.join(__dirname + "/../public/sign-in.html"));
  });

  // rent route loads rent.html
  app.get("/lend", function(req, res) {
    res.sendFile(path.join(__dirname + "/../public/lend.html"));
  });

  // rent route loads rent.html
  app.get("/rent", function(req, res) {
    res.sendFile(path.join(__dirname + "/../public/rent.html"));
  });

  // rent route loads rent.html
  app.get("/borrow", function(req, res) {
    res.sendFile(path.join(__dirname + "/../public/borrow.html"));
  });
};
 