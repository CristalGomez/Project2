var db = require("../models");

module.exports = function(app) {
  app.get("/api/cities", function(req, res) {

    db.Cities.findAll({
      include: [db.Bars]
    }).then(function(dbCities) {
      res.json(dbCities);
    });
  });

  app.get("/api/cities/:id", function(req, res) {
 
    db.Cities.findOne({
      where: {
        id: req.params.id
      },
      include: [db.Bars]
    }).then(function(dbCities) {
      res.json(dbCities);
    });
  });

  app.post("/api/cities", function(req, res) {
    db.Cities.create(req.body).then(function(dbCities) {
      res.json(dbCities);
    });
  });

  

};
