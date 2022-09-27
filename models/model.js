const Sequelize=require('sequelize');
const sequelize = require('../db/connection');
const db=require('../db/connection');
const model=db.define('users',{
    id:{
        type:Sequelize.STRING,
        primaryKey: true
    },
    login:{
        type:Sequelize.STRING
    },
    password:{
        type:Sequelize.STRING
    },
    age:{
        type:Sequelize.INTEGER
    },
    isDeleted:{
        type:Sequelize.BOOLEAN
    }
},
    {
        timestamps: false
    });

module.exports=model;