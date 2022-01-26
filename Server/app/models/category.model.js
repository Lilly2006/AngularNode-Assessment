module.exports = (sequelize, Sequelize) => {
    
    const Category = sequelize.define("categoryL", {
      
        Weight: {
          type: Sequelize.INTEGER
        },
        Processor: {
          type: Sequelize.STRING
        },
        Ram: {
          type: Sequelize.STRING
        },  
    },
      {
        timestamps: false,
      });
      
    return Category;
    
  };
