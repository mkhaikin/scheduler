const mysql = require('mysql');
const q = require('./queries.sql');

const pool = mysql.createPool({
    connectionLimit: 10,
    password: '',
    user: 'root',
    database: 'sechand',
    host: 'localhost'
});

let sechandDB = {};

//---------- users
sechandDB.allusers = () => {
    return new Promise((resolve, reject) => {
        pool.query( q.SELECT_ALL_USERS, (err, results) => {
            if(err){
                return reject(err);
            }
            return resolve(results);
        });
    });
};

sechandDB.userByID = (id) => {
    return new Promise((resolve, reject) => {
        pool.query( q.SELECT_USER_BY_ID, [id], (err, results) => {
            if(err){
                return reject(err);
            }
            return resolve(results[0]);
        });
    });
};

sechandDB.userByPositionID = (id) => {
    return new Promise((resolve, reject) => {
        pool.query( q.SELECT_USER_BY_POSITION_ID, [id], (err, results) => {
            if(err){
                return reject(err);
            }
            return resolve(results);
        });
    });
};

sechandDB.userByLastName = (lastname) => {
    return new Promise((resolve, reject) => {
        pool.query(q.SELECT_USER_BY_LAST_NAME, [lastname], (err, results) => {
            if(err){
                return reject(err);
            }
            return resolve(results[0]);
        });
    });
};

sechandDB.userByFullName = (firstname, lastname) => {
    return new Promise((resolve, reject) => {
        pool.query(q.SELECT_USER_BY_FULL_NAME, [firstname, lastname], (err, results) => {
            if(err){
                return reject(err);
            }
            return resolve(results[0]);
        });
    });
};

//------------- locations
sechandDB.alllocations = () => {
    return new Promise((resolve, reject) => {
        pool.query(q.SELECT_ALL_LOCATIONS, (err, results) => {
            if(err){
                return reject(err);
            }
            return resolve(results);
        });
    });
};

sechandDB.locationByID = (id) => {
    return new Promise((resolve, reject) => {
        pool.query( q.SELECT_LOCATION_BY_ID, [id], (err, results) => {
            if(err){
                return reject(err);
            }
            return resolve(results[0]);
        });
    });
};

sechandDB.locationsByRouteID = (id) => {
    return new Promise((resolve, reject) => {
        pool.query( q.SELECT_LOCATIONS_ROUTE_ID, [id], (err, results) => {
            if(err){
                return reject(err);
            }
            return resolve(results);
        });
    });
};

sechandDB.locationsByArea = (area) => {
    return new Promise((resolve, reject) => {
        pool.query( q.SELECT_LOCATIONS_BY_AREA, [area], (err, results) => {
            if(err){
                return reject(err);
            }
            return resolve(results);
        });
    });
};

//---------- positions
sechandDB.allpositions = () => {
    return new Promise((resolve, reject) => {
        pool.query( q.SELECT_ALL_POSITIONS, (err, results) => {
            if(err){
                return reject(err);
            }
            return resolve(results);
        });
    });
};

//------------- routes
sechandDB.allroutes = () => {
    return new Promise((resolve, reject) => {
        pool.query( q.SELECT_ALL_ROUTES, (err, results) => {
            if(err){
                return reject(err);
            }
            return resolve(results);
        });
    });
};

//--------- POST
sechandDB.adduser = (firstname, lastname, email, cell, positionId) => {
    return new Promise((resolve, reject) => {
        pool.query( q.INSERT_NEW_USER, [firstname, lastname, email, cell, positionId], (err, results) => {
            if(err){
                return reject(err);
            }
            return resolve(results);
        });
    });
};

module.exports = sechandDB;