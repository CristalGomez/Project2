var db = require("../models");

module.exports = function(app) {

  app.get("/api/bars", function(req, res) {
    var query = {};
    if (req.query.cities_id) {
      query.CitiesId = req.query.Cities_id;
    }

    db.Bars.findAll({
      where: query,
      include: [db.Cities]
    }).then(function(dbBars) {
      res.json(dbBars);
    });
  });

  app.get("/api/bars/:id", function(req, res) {

    db.Bars.findOne({
      where: {
        id: req.params.id
      },
      include: [db.Cities]
    }).then(function(dbBars) {
      res.json(dbBars);
    });
  });


  app.post("/api/bars", function(req, res) {
    db.Bars.create(req.body).then(function(dbBars) {
      res.json(dbBars);
    });
  });

  
};
