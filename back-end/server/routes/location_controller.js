const db = require('../db');

module.exports = {

    getAllLocations: async function (req, res, next){
                            try{
                                let results = await db.alllocations();
                                res.json(results);
                            } catch(e){
                                console.log(e);
                                res.sendStatus(500);
                            }
                        },

    getLocationById: async function (req, res, next) {
                            try{
                                let results = await db.locationByID(req.params.id);
                                res.json(results);
                            } catch(e){
                                console.log(e);
                                res.sendStatus(500);
                            }
                        },

    getLocationsByRouteID: async function(req, res, next) {
                            try{
                                let results = await db.locationsByRouteID(req.params.id);
                                res.json(results);
                            } catch(e){
                                console.log(e);
                                res.sendStatus(500);
                            }
                        },

    getLocationsByArea: async function(req, res, next){
                            try{
                                let results = await db.locationsByArea(req.params.areaname);
                                res.json(results);
                            } catch(e){
                                console.log(e);
                                res.sendStatus(500);
                            }
                        },

}