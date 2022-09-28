const express=require('express');
const validation=require('../middleware/middleware')
const url=require('url')
const model=require("../models/model")
const op=require('sequelize').Op;
const statusCodes=require('../statusCodes');


const createUser=async(req,res)=>{
    model.create({
        id:req.body.id,
        login:req.body.login,
        password:req.body.password,
        age:req.body.age,
        isDeleted:false
    })
    .then(function(user){
        res.status(statusCodes.SuccessfullyCreated).send(user)
    })
    .catch((error)=>{res.send(error)})
}
const getAllUsers=async(req,res)=>{
    model.findAll({
    }).then(function (user) {
        res.status(statusCodes.OK).send(user);
    });
}
const removeUserByID=async(req,res)=>{
    const urlData = url.parse(req.url, true);
    const id=urlData.query.id;
    model.destroy({
        where: {
            id: urlData.query.id
          }
    }).then(function (user) {
        res.status(statusCodes.OK).send("Removed user with id ="+id);
    });
}
const updateUserWithID=async(req,res)=>{
    const urlData = url.parse(req.url, true);
    model.update(
        {
        id:req.body.id,
        login:req.body.login,
        password:req.body.password,
        age:req.body.age
    },
        {where: {id:urlData.query.id}}
    ).then(function(user){
        res.status(statusCodes.OK).send("Details of User with id = "+req.params.id+" has Been Updated");
    }).catch((error)=>console.log(error))
}
const getUserWithID=async(req,res)=>{
    const urlData = url.parse(req.url, true);
    model.findAll({
        where: {
            id: urlData.query.id
          }
    }).then(function (user) {
        res.status(statusCodes.OK).send(user);
    });
}
const deleteUserByID=async(req,res)=>{
    const urlData = url.parse(req.url, true);
    model.update(
        {isDeleted:true},
        {where: {id:urlData.query.id}}
    ).then(function(user){
        res.status(statusCodes.OK).send(`User With id ${urlData.query.id}  has been Deleted `);
    }).catch((error)=>console.log(error))
}
const getAutoSuggestUsers=(req, res) => {
    const urlData = url.parse(req.url, true);
    console.log(urlData.query)
    let autoSuggest = [];
    model.findAll({
        where: {
            login: {
                 [op.like]: `%${urlData.query.loginsubstring}%`
            }
          }
    }).then(function (user) {
        for(item of user){
            if(autoSuggest.length<urlData.query.limit){
                autoSuggest.push(item.login);
            }
        }
        res.status(statusCodes.OK).send(autoSuggest);
    })
}


module.exports={
    getUserWithID,
    getAutoSuggestUsers,
    deleteUserByID,
    updateUserWithID,
    removeUserByID,
    getAllUsers,
    createUser,
}