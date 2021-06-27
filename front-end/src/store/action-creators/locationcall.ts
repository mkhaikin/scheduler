import { Dispatch } from "redux"
import {LocationAction, LocationActionTypes} from "../../types/location"
import axios from "axios";

export const fetchLocations = () => {
    return async (dispatch: Dispatch<LocationAction>) => {
        try{
            dispatch( {type: LocationActionTypes.FETCH_LOCATIONS})
            const response = await axios.get('http://localhost:3000/api/locations') 
            //JSON.stringify
            console.log ("Response: " + response.data[0].ind)
            dispatch( {type: LocationActionTypes.FETCH_LOCATIONS_SUCCESS, payload: response.data})
        } catch (e){
            dispatch( {type: LocationActionTypes.FETCH_LOCATIONS_ERROR, payload: "Error during download!"})
        }
    }
}

export const deleteLocation = (ind: any) => {
    return async (dispatch: Dispatch<LocationAction>) => {
        try{
            dispatch( {type: LocationActionTypes.DELETE_LOCATION})
            const response = await axios.delete(`http://localhost:3000/api/locations/${ind}`) 
            //JSON.stringify
            console.log ("Response: " + JSON.stringify(response))
            console.log ("deleteLocation, ind: " + ind)
            dispatch( {type: LocationActionTypes.DELETE_LOCATION_SUCCESS, payload: ind})
        } catch (e){
            dispatch( {type: LocationActionTypes.DELETE_LOCATION_ERROR, payload: "Error during delete!"})
        }
    }
}

export const updateLocation = (
            ind: number,
            routeId:  number,
            area: string, 
            street_avenue: string,
            w_e: string,
            number: number,
            notice: string   ) => {
    return async (dispatch: Dispatch<LocationAction>) => {
        try{
            dispatch( {type: LocationActionTypes.UPDATE_LOCATION})
            var obj = {
                        ind: ind,
                        routeId:  routeId,
                        area: area, 
                        street_avenue: street_avenue,
                        w_e: w_e,
                        number: number,
                        notice: notice,
                     }
            const headers = {
                        'Content-Type': 'application/json',
            }                     
            const response = await axios.put('http://localhost:3000/api/location', obj, {headers: headers}) 
            //JSON.stringify
            //console.log ("Response: " + JSON.stringify(response))
            console.log ("updateLocation, ind: " + ind)
            dispatch( {type: LocationActionTypes.UPDATE_LOCATION__SUCCESS, payload: obj})
        } catch (e){
            dispatch( {type: LocationActionTypes.UPDATE_LOCATION_ERROR, payload: "Error during update!"})
        }
    }
}
/*
export const fetchUsersError = () => {
    return (dispatch: Dispatch<UserAction>) =>{
        dispatch( {type: UserActionTypes.FETCH_USERS_ERROR, payload: "Error"})
    }
}
*/
