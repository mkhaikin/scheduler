import { Dispatch } from "redux"
import {JobAction, JobActionTypes} from "../../types/job"
import axios from "axios";

export const fetchJobs = () => {
    return async (dispatch: Dispatch<JobAction>) => {
        try{
            dispatch( {type: JobActionTypes.FETCH_JOBS})
            const response = await axios.get('http://localhost:3000/api/job/dayfuture') 
            
            //console.log ("Response: " + response.data[0].scheduled)
            dispatch( {type: JobActionTypes.FETCH_JOBS_SUCCESS, payload: response.data})
        } catch (e){
            dispatch( {type: JobActionTypes.FETCH_JOBS_ERROR, payload: "Error during download!"})
        }
    }
}

export const deleteJob = (ind: any) => {
    return async (dispatch: Dispatch<JobAction>) => {
        try{
            dispatch( {type: JobActionTypes.DELETE_JOB})
            const response = await axios.delete(`http://localhost:3000/api/job/${ind}`) 
           
            console.log ("Response: " + JSON.stringify(response))
            console.log ("deleteJob, ind: " + ind)
            dispatch( {type: JobActionTypes.DELETE_JOB_SUCCESS, payload: ind})
        } catch (e){
            dispatch( {type: JobActionTypes.DELETE_JOB_ERROR, payload: "Error during delete!"})
        }
    }
}

export const updateJob = (
            ind: number,
            date: string,
            routeId:  number,
            driverId: number,
              ) => {
    return async (dispatch: Dispatch<JobAction>) => {
        try{
            dispatch( {type: JobActionTypes.UPDATE_JOB})
            var obj = {
                        ind: ind,
                        date: date,
                        routeId:  routeId,
                        driverId: driverId,
                     }
            const headers = {
                        'Content-Type': 'application/json',
            }                     
            const response = await axios.put('http://localhost:3000/api/job', obj, {headers: headers}) 
            //JSON.stringify
            //console.log ("Response: " + JSON.stringify(response))
            console.log ("updateJob, ind: " + ind)
            dispatch( {type: JobActionTypes.UPDATE_JOB__SUCCESS, payload: obj})
        } catch (e){
            dispatch( {type: JobActionTypes.UPDATE_JOB_ERROR, payload: "Error during update!"})
        }
    }
}

export const fetchWeekJobs = () => {
    console.log("fetchWeekJob---->>>>>")
    return async (dispatch: Dispatch<JobAction>) => {
        try{
            dispatch( {type: JobActionTypes.FETCH_WEEK_JOBS})
            const response = await axios.get('http://localhost:3000/api/job/thisweek') 
            
            //console.log ("Response: " + response.data[0].scheduled)
            dispatch( {type: JobActionTypes.FETCH_WEEK_JOBS_SUCCESS, payload: response.data})
        } catch (e){
            dispatch( {type: JobActionTypes.FETCH_WEEK_JOBS_ERROR, payload: "Error during download!"})
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
