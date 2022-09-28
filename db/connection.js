const Sequelize=require('sequelize');
const sequelize = new Sequelize('demodb1', 'postgres', '123456', {
    host: '0.0.0.0',
    dialect: 'postgres',
    pool: {
      max: 5,
      min: 0,
      idle: 10000
    },
  });



module.exports=sequelize;