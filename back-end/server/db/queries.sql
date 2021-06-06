query = {

    SELECT_ALL_USERS : `SELECT * FROM users`,
    SELECT_USER_BY_ID : `SELECT * FROM users WHERE ind = ?`,
    SELECT_USER_BY_POSITION_ID: `SELECT * FROM users WHERE positionId = ?`,
    SELECT_USER_BY_LAST_NAME: `SELECT * FROM users WHERE lastname = ?`,
    SELECT_USER_BY_FULL_NAME: `SELECT * FROM users WHERE firstname=? AND lastname = ?`,
    SELECT_ALL_LOCATIONS: `SELECT * FROM locations`,
    SELECT_LOCATION_BY_ID: `SELECT * FROM locations WHERE ind = ?`,
    SELECT_LOCATIONS_ROUTE_ID: `SELECT * FROM locations WHERE routeId = ?`,
    SELECT_LOCATIONS_BY_AREA: `SELECT * FROM locations WHERE area = ?`,
    SELECT_ALL_POSITIONS : `SELECT * FROM positions`,
    SELECT_ALL_ROUTES: `SELECT * FROM routes`,
    INSERT_NEW_USER: `INSERT INTO users (firstname, lastname, email, cell, positionId) VALUES(?,?,?,?,?)`,
    INSERT_NEW_JOB: `INSERT INTO dayjoblist( date, routeId, driverId) VALUES (STR_TO_DATE( ?,'%m-%d-%Y'), ?, ?)`
    
}


module.exports = query;
/*
SELECT curdate() as Today, 
	CONCAT(`firstname`, " ", `lastname`) as Driver,
	CONCAT( `area`, ',', `number`, " ", `street_avenue`, " ", IFNULL(`w_e`, '') ) AS Locations  
FROM `locations`, `users` 
WHERE routeId=1 AND ind = 4
*/