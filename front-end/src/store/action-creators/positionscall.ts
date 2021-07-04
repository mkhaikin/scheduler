import { Dispatch } from "redux"
import {PositionsAction, PositionsActionTypes} from "../../types/positions"
import axios from "axios";

export const fetchPositions = () => {
    return async (dispatch: Dispatch<PositionsAction>) => {
        try{
            dispatch( {type: PositionsActionTypes.FETCH_POSITIONS})
            const response = await axios.get('http://localhost:3000/api/staff/positions') 
            //JSON.stringify
            console.log ("Positions Response: " + response.data[0].ind + ", length: " + response.data.length)
            dispatch( {type: PositionsActionTypes.FETCH_POSITIONS_SUCCESS, payload: response.data})
        } catch (e){
            dispatch( {type: PositionsActionTypes.FETCH_POSITIONS_ERROR, payload: "Error during download!"})
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
