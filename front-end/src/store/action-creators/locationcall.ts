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
/*
export const showOrdersPage = () => {
    return (dispatch: Dispatch<UserAction>) =>{
        dispatch( {type: UserActionTypes.FETCH_USERS_SUCCESS, payload: })
    }
}

export const fetchUsersError = () => {
    return (dispatch: Dispatch<UserAction>) =>{
        dispatch( {type: UserActionTypes.FETCH_USERS_ERROR, payload: "Error"})
    }
}
*/
