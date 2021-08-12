import { Dispatch } from "redux"
import {UserAction, UserActionTypes} from "../../types/user"
//import axios from "axios";
import StaffService from '../../services/StaffService'

export const fetchUsers = () => {
    return async (dispatch: Dispatch<UserAction>) => {
        try{
            dispatch( {type: UserActionTypes.FETCH_USERS})
            //const response = await axios.get('http://localhost:3000/api/staff/users') 
            const response = await StaffService.fetchStaff()
            //JSON.stringify
            //console.log ("Response: " + response.data[0].ind)
            dispatch( {type: UserActionTypes.FETCH_USERS_SUCCESS, payload: response.data})
        } catch (e){
            dispatch( {type: UserActionTypes.FETCH_USERS_ERROR, payload: "Error during download!"})
        }
    }
}

export const fetchUsersIdName = () => {
    return async (dispatch: Dispatch<UserAction>) => {
        try{
            dispatch( {type: UserActionTypes.FETCH_USERS_ID_NAME})
            //const response = await axios.get('http://localhost:3000/api/staff/users/id') 
            const response = await StaffService.fetchStaffIdName()
            //JSON.stringify
            //console.log ("Response: " + response.data[0].ind)
            dispatch( {type: UserActionTypes.FETCH_USERS_ID_NAME_SUCCESS, payload: response.data})
        } catch (e){
            dispatch( {type: UserActionTypes.FETCH_USERS_ID_NAME_ERROR, payload: "Error during download!"})
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
export const updateUser = (
    ind: number,
    firstname: string,     
    lastname: string,
    email: string,
    phone: string,
    positionId: number ) => {
return async (dispatch: Dispatch<UserAction>) => {
        try{
            dispatch( {type: UserActionTypes.UPDATE_USER})
            var obj = {
                        ind: '' + ind,
                        firstname: firstname,
                        lastname: lastname,
                        email: email,
                        cell: phone,
                        positionid: '' + positionId,
                        notice: '',
                    }
                    /*
                    console.log("*************************** ")
                    console.log("ind " + ind)
                    console.log("firstname " + firstname)
                    console.log("lastname " + lastname)
                    console.log("email " + email)
                    console.log("phone " + phone)
                    console.log("positionId " + positionId)
                    */
            /* const headers = {
                        'Content-Type': 'application/json',
            }  */                    
            //const response = await axios.put('http://localhost:3000/api/staff/user', obj, {headers: headers}) 
            const response = await StaffService.UpdateStaff(obj)
            dispatch( {type: UserActionTypes.UPDATE_USER_SUCCESS, payload: obj}) 
        } catch (e){
            dispatch( {type: UserActionTypes.UPDATE_USER_ERROR, payload: "Error during update!"})
        }
    }
}

export const addUser = ( 
    firstname: string,     
    lastname: string,
    email: string,
    phone: string,
    positionId: number,
    notice: string,
    ) => {
return async (dispatch: Dispatch<UserAction>) => {
        try{
            dispatch( {type: UserActionTypes.ADD_USER})
            var obj = {
                        ind: '',
                        firstname: firstname,
                        lastname: lastname,
                        email: email,
                        cell: phone,
                        positionid: '' + positionId,
                        notice: notice
                    }
            console.log("----> firstname: " + obj.firstname)
               
            const response = await StaffService.InsertStaff(obj)
            console.log ("Response: " + JSON.stringify(response))
            
            dispatch( {type: UserActionTypes.ADD_USER_SUCCESS, payload: obj})
        } catch (e){
            dispatch( {type: UserActionTypes.ADD_USER_ERROR, payload: "Error during add new user!"})
        }
    }
}
