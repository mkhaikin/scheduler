import { Dispatch } from "redux"
import {UserAction, UserActionTypes} from "../../types/user"
import axios from "axios";

export const fetchUsers = () => {
    return async (dispatch: Dispatch<UserAction>) => {
        try{
            dispatch( {type: UserActionTypes.FETCH_USERS})
            const response = await axios.get('http://localhost:3000/api/staff/users') 
            //JSON.stringify
            //console.log ("Response: " + response.data[0].ind)
            dispatch( {type: UserActionTypes.FETCH_USERS_SUCCESS, payload: response.data})
        } catch (e){
            dispatch( {type: UserActionTypes.FETCH_USERS_ERROR, payload: "Error during download!"})
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
