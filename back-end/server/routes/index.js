const express = require('express');
const db = require('../db');
const {getAllUsers, getUserById, getUserByPositionId, getUserByLastName, getUserByFullName, addUser} = require('./user_controller');
const {getAllLocations, getLocationById, getLocationsByRouteID, getLocationsByArea} = require('./location_controller');
const {getAllPositions, getAllRoutes} = require('./handler_controller');

const router = express.Router();
//-------------- GET

//-------------- users

router.get('/staff/users', (req, res, next) => getAllUsers(req, res, next));

router.get('/staff/users/:id',  (req, res, next) => getUserById (req, res, next));

router.get('/staff/users/position/:id', (req, res, next) => getUserByPositionId(req, res, next));

router.get('/staff/user/:lastname', (req, res, next) => getUserByLastName(req, res, next));

router.get('/staff/user/fullname/:firstname&:lastname', (req, res, next) => getUserByFullName(req, res, next));

//-------------- locations
router.get('/locations', (req, res, next) => getAllLocations (req, res, next));

router.get('/locations/:id', (req, res, next) => getLocationById (req, res, next));

router.get('/locations/route/:id', (req, res, next) => getLocationsByRouteID (req, res, next) );

router.get('/locations/area/:areaname', (req, res, next) => getLocationsByArea (req, res, next) );

//-------- positions
router.get('/staff/positions', (req, res, next) => getAllPositions (req, res, next));

//----------- routes

router.get('/routes', (req, res, next) => getAllRoutes (req, res, next));

//--------------- POST
router.post('/staff/user', (req, res, next) => addUser (req, res, next));



module.exports = router;