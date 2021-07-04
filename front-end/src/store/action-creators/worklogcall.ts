import { Dispatch } from "redux"
import {WorklogAction, WorklogActionTypes} from "../../types/worklog"
import axios from "axios";

export const fetchWorklogs = () => {
    return async (dispatch: Dispatch<WorklogAction>) => {
        try{
            dispatch( {type: WorklogActionTypes.FETCH_WORKLOG})
            //console.log("fetchWorklogs------------start")
            const response = await axios.get('http://localhost:3000/api/worklog') 
            //JSON.stringify
            //console.log ("Response: " + response.data[0].ind)
            dispatch( {type: WorklogActionTypes.FETCH_WORKLOG_SUCCESS, payload: response.data})
        } catch (e){
            dispatch( {type: WorklogActionTypes.FETCH_WORKLOG_ERROR, payload: "Error during download!"})
        }
    }
}

export const fetchWeekWorklogs = () => {
    return async (dispatch: Dispatch<WorklogAction>) => {
        try{
            dispatch( {type: WorklogActionTypes.FETCH_WEEK_WORKLOG})
            //console.log("fetchWeekWorklogs------------start")
            const response = await axios.get('http://localhost:3000/api/worklog/week') 
            //JSON.stringify
            //console.log ("Response: " + response.data[0].ind)
            //console.log ("Response: " + JSON.stringify(response.data))
            dispatch( {type: WorklogActionTypes.FETCH_WEEK_WORKLOG_SUCCESS, payload: response.data})
        } catch (e){
            dispatch( {type: WorklogActionTypes.FETCH_WEEK_WORKLOG_ERROR, payload: "Error during download!"})
        }
    }
}

export const fetchSumWorklogs = () => {
    return async (dispatch: Dispatch<WorklogAction>) => {
        try{
            dispatch( {type: WorklogActionTypes.FETCH_SUM_WORKLOG})
            console.log("fetchSumWorklogs------------start")
            const response = await axios.get('http://localhost:3000/api/worklog/sum') 
            //JSON.stringify
            //console.log ("Response: " + response.data[0].ind)
            //console.log ("Response: " + JSON.stringify(response.data))
            dispatch( {type: WorklogActionTypes.FETCH_SUM_WORKLOG_SUCCESS, payload: response.data})
        } catch (e){
            dispatch( {type: WorklogActionTypes.FETCH_SUM_WORKLOG_ERROR, payload: "Error during download!"})
        }
    }
}

export const updateWorklog = (
            ind: number,
            bag:  number  ) => {
    return async (dispatch: Dispatch<WorklogAction>) => {
        try{
            dispatch( {type: WorklogActionTypes.UPDATE_WORKLOG})
            var obj = {
                        ind: ind,
                        bag:  bag
                     }
            const headers = {
                        'Content-Type': 'application/json',
            }                     
            const response = await axios.put('http://localhost:3000/api/worklog', obj, {headers: headers}) 
            //JSON.stringify
            //console.log ("Response: " + JSON.stringify(response))
            console.log ("updateWorklog, ind: " + ind)
            dispatch( {type: WorklogActionTypes.UPDATE_WORKLOG__SUCCESS, payload: obj})
        } catch (e){
            dispatch( {type: WorklogActionTypes.UPDATE_WORKLOG_ERROR, payload: "Error during update!"})
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
