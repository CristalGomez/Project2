
var db = require("../models");

module.exports = function(app) {

  // GET route for getting all of the posts
  app.get("/api/bars/", function(req, res) {
    db.Post.findAll({

        order: ["id","DESC"]

      }).then(function(dbPost) {
        res.json(dbPost);
      });
  });

  // Get route for returning posts of a specific city
  app.get("/api/bars/:city", function(req, res) {
    db.Post.findAll({
      where: {
        city: req.params.city
      },
      order: ["id","DESC"]
    })
      .then(function(dbPost) {
        res.json(dbPost);
      });
  });

  // Get route for retrieving a single post
  app.get("/api/bars/:id", function(req, res) {
    db.Post.findOne({
      where: {
        id: req.params.id
      },
      order: ["id","DESC"]
    })
      .then(function(dbPost) {
        res.json(dbPost);
      });
  });

  // POST route for saving a new post
  app.post("/api/bars", function(req, res) {
    console.log(req.body);
    db.Post.create({
      title: req.body.title,
      body: req.body.body,
      image: req.body.image,
      city: req.body.city
    })
      .then(function(dbPost) {
        res.json(dbPost);
      });
  });



  // PUT route for updating posts
  app.put("/api/bars", function(req, res) {
    db.Post.update(req.body,
      {
        where: {
          id: req.body.id
        }
      })
      .then(function(dbPost) {
        res.json(dbPost);
      });
  });
};
