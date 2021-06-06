const db = require('../db');

module.exports = {

    getAllUsers: async function (req, res, next)  {
                                    try{
                                        let results = await db.allusers();
                                        res.json(results);
                                    } catch(e){
                                        console.log(e);
                                        res.sendStatus(500);
                                    }
                                },

    getUserById: async function (req, res, next) {
                                    try{
                                        let results = await db.userByID(req.params.id);
                                        res.json(results);
                                    } catch(e){
                                        console.log(e);
                                        res.sendStatus(500);
                                    }
                                },

    getUserByPositionId: async function(req, res, next) {
                                    try{
                                        let results = await db.userByPositionID(req.params.id);
                                        res.json(results);
                                    } catch(e){
                                        console.log(e);
                                        res.sendStatus(500);
                                    }
                                },

    getUserByLastName: async function(req, res, next){
                                    try{
                                        let results = await db.userByLastName(req.params.lastname);
                                        res.json(results);
                                    } catch(e){
                                        console.log(e);
                                        res.sendStatus(500);
                                    }
                                },
    getUserByFullName: async function(req, res, next) {
                                    try{
                                        let results = await db.userByFullName(req.params.firstname, req.params.lastname);
                                        res.json(results);
                                    } catch(e){
                                        console.log(e);
                                        res.sendStatus(500);
                                    }
                                },
    addUser :    async function(req, res, next) {  
                                    let firstname = req.body.firstName;
                                    let lastname = req.body.lastName;
                                    let email = req.body.email;
                                    let cell = req.body.phone;
                                    let positionId = req.body.position;

                                    console.log("firstname: " + req.body.firstName);
                                    console.log("lastname: " + req.body.lastName);
                                    console.log("email: " + req.body.email);
                                    console.log("cell: " + req.body.phone);
                                    console.log("positionId: " + req.body.position);
                                
                                    try{
                                        let results = await db.adduser(firstname, lastname, email, cell, positionId);
                                        res.json(results);
                                    } catch(e){
                                        console.log(e);
                                        res.sendStatus(500);
                                    }
                                    
                                },
}