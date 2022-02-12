const { tutorialnew } = require("../models/index.js");

module.exports = app => {
    const tutorialnew = require("../controllers/tutorial.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", tutorialnew.create);
  
    // Retrieve all Tutorials
    router.get("/", tutorialnew.findAll);
  
    // Retrieve all published Tutorials
    router.get("/published", tutorialnew.findAllPublished);
  
    // Retrieve a single Tutorial with id
    router.get("/:id", tutorialnew.findOne);
  
    // Update a Tutorial with id
    router.put("/:id", tutorialnew.update);
  
    // Delete a Tutorial with id
    router.delete("/:id", tutorialnew.delete);
  
    // Delete all Tutorials
    router.delete("/", tutorialnew.deleteAll);
  
    app.use('/api/tutorialnews', router);
  };