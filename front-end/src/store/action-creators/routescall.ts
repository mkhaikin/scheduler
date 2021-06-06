import { Dispatch } from "redux"
import {RoutesAction, RoutesActionTypes} from "../../types/routes"
import axios from "axios";

export const fetchRoutes = () => {
    return async (dispatch: Dispatch<RoutesAction>) => {
        try{
            dispatch( {type: RoutesActionTypes.FETCH_ROUTES})
            const response = await axios.get('http://localhost:3000/api/routes') 
            //JSON.stringify
            console.log ("Routes Response: " + response.data[0].ind + ", length: " + response.data.length)
            dispatch( {type: RoutesActionTypes.FETCH_ROUTES_SUCCESS, payload: response.data})
        } catch (e){
            dispatch( {type: RoutesActionTypes.FETCH_ROUTES_ERROR, payload: "Error during download!"})
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
