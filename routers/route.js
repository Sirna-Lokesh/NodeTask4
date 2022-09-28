const express=require('express');
const validation=require('../middleware/middleware')
const router=express.Router();
const op=require('sequelize').Op;
router.use(express.json());
const service=require("../services/service")

router.get('/getUsers',service.getAllUsers);
router.get('/getUser',service.getUserWithID);
router.put('/updateUser',service.updateUserWithID);
router.put('/deleteUser',service.deleteUserByID)
router.delete('/removeUser',service.removeUserByID)
router.post("/createUser",validation,service.createUser)
router.get('/getAutoSuggestUsers', service.getAutoSuggestUsers);
module.exports=router;