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
      order: ["id"]
    }).then(function (data) {
      for (i = 0; i < data.length; i++) {
        console.log(data[i].dataValues);
      }
      const barArr = data.map(bar => {
        return {
          id: bar.id,
          title: bar.title,
          image: bar.image,
          city: bar.city
        }
      })
      res.render("city", {
        city: req.params.city,
        bars: barArr
      })
    })
  })

  app.post("/api/bars", function (req, res) {
    db.bar.create({
        title: req.body.title,
        image: req.body.image,
        city: req.body.city
      })
      .then(function (dbPost) {
        res.json(dbPost);
      });
  });

  app.post("/api/forum/:barId", function (req, res) {
    db.post.create({
        body: req.body.body,
        barId: req.params.barId
      })
      .then(function (dbPost) {
        res.json(dbPost);
      });
  });
  app.get('/')

  app.get("/api/bars", function (req, res) {
    res.json("city")
  });

  app.get("/forum/:barId", function (req, res) {
    db.post.findAll({
      where: {
        barId: req.params.barId
      },
      //order: ["id"]
    }).then(function (data) {
      const postArr = data.map(post => {
        return {
          body: post.body
        }
      })
      res.render("forum", {
        posts: postArr
      })
    })
  });
};