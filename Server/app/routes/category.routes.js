
const { Category} = require("../models/categoryindex.js");
 
module.exports = app => {
    
    const categoryL=require("../controllers/category.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Tutorial

    router.post("/", categoryL.create);
  
    // Retrieve all Tutorials
    
    router.get("/", categoryL.findAll);
   
  
    // Retrieve all published Tutorials
    router.get("/Processor", categoryL.findAllPublished);
  
    // Retrieve a single Tutorial with id
    router.get("/:id", categoryL.findOne);
    // Update a Tutorial with id
    router.put("/:id", categoryL.update);
  
    // Delete a Tutorial with id
    router.delete("/:id", categoryL.delete);
  
    // Delete all Tutorials
    router.delete("/", categoryL.deleteAll);
  
    app.use('/api/categoryLs', router);
  };