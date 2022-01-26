const { Product } = require("../models/index.js");
 
module.exports = app => {
    const productL = require("../controllers/product.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", productL.create);
  
    // Retrieve all Tutorials
    router.get("/", productL.findAll);
   
  
    // Retrieve all published Tutorials
    router.get("/P_Name", productL.findAllPublished);
  
    // Retrieve a single Tutorial with id
    router.get("/:id", productL.findOne);
    // Update a Tutorial with id
    router.put("/:id", productL.update);
  
    // Delete a Tutorial with id
    router.delete("/:id", productL.delete);
  
    // Delete all Tutorials
    router.delete("/", productL.deleteAll);
  
    app.use('/api/productLs', router);
  };