// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
var path = require("path");
var express = require("express")
// Routes
// =============================================================
module.exports = function(app) {

  // Each of the below routes just handles the HTML page that the user gets sent to.

  app.get("/", function(req, res){
    res.render("index", {title:express});
  })

  app.get("/bars", function(req, res){
    res.render("city", {title:express})
  });

  app.get("/forum", function(req, res){
    res.render("forum", {title:express})
  });

  // index route loads view.html
  // app.get("/", function(req, res) {
  //   res.sendFile(path.join(__dirname, "../public/"));
  // });

  // cms route loads cms.html
  // app.get("/cms", function(req, res) {
  //   res.sendFile(path.join(__dirname, "../public/"));
  // });

  // // blog route loads blog.html
  // app.get("/bars", function(req, res) {
  //   res.sendFile(path.join(__dirname, "../public/"));
  // });

  // // authors route loads author-manager.html
  // app.get("/cities", function(req, res) {
  //   res.sendFile(path.join(__dirname, "../public/"));
  // });

};
