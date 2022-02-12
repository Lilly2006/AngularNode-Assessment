module.exports = (sequelize, Sequelize) => {
    const Tutorialnew = sequelize.define("tutorialnews", {
      
      title: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      published: {
        type: Sequelize.STRING
      },
      fees:{
        type: Sequelize.INTEGER 
        
      }
     
    },
    {
      timestamps: false,
    });
    
    return Tutorialnew;
  };