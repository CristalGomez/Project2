// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
var path = require("path");
var express = require("express")
var db = require("../models");
// Routes
// =============================================================
module.exports = function (app) {

  // Each of the below routes just handles the HTML page that the user gets sent to.

  app.get("/", function (req, res) {
    res.render("index");
  })

  app.get("/bars/:city", function (req, res) {
    db.bar.findAll({
      where: {
        city: req.params.city
      },
      // order: ["id", "DESC"]
    }).then(function (data) {      
      res.render("city", {
        city: req.params.city,
        bars: data
      })
    })
  });

  app.get("/bars", function (req, res) {
    res.render("city")
  });

  app.get("/forum", function (req, res) {
    res.render("forum")
  });
};