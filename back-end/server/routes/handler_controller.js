const db = require('../db');

module.exports = {

    getAllPositions: async function (req, res, next){
                            try{
                                let results = await db.allpositions();
                                res.json(results);
                            } catch(e){
                                console.log(e);
                                res.sendStatus(500);
                            }
                        },
    getAllRoutes: async function (req, res, next){
                            try{
                                let results = await db.allroutes();
                                res.json(results);
                            } catch(e){
                                console.log(e);
                                res.sendStatus(500);
                            }
                        },                        

    
}