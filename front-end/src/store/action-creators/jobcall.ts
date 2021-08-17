import { Dispatch } from "redux"
import {JobAction, JobActionTypes} from "../../types/job"
//import axios from "axios";
import JobService from '../../services/JobService'

export const fetchJobs = () => {
    return async (dispatch: Dispatch<JobAction>) => {
        try{
            dispatch( {type: JobActionTypes.FETCH_JOBS})
            //const response = await axios.get('http://localhost:3000/api/job/dayfuture') 
            const response = await JobService.fetchJobsTodayFuture()
                       
            //console.log ("Response: " + response.data[0].scheduled)
            dispatch( {type: JobActionTypes.FETCH_JOBS_SUCCESS, payload: response.data})
        } catch (e){
            dispatch( {type: JobActionTypes.FETCH_JOBS_ERROR, payload: "Error during download!"})
        }
    }
}

export const deleteJob = (ind: any) => {
    console.log ("deleteJob, ind: " + ind)
    return async (dispatch: Dispatch<JobAction>) => {
        try{
            dispatch( {type: JobActionTypes.DELETE_JOB})
            //const response = await axios.delete(`http://localhost:3000/api/job/${ind}`) 
            const response = await JobService.deleteJobById(ind)
           
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
        //try{
            dispatch( {type: JobActionTypes.UPDATE_JOB})
            var obj = {
                        ind: '' + ind,
                        scheduled: date,
                        route:  '' + routeId,
                        driver: '' + driverId,
                     }
               
            //const response = await axios.put('http://localhost:3000/api/job', obj, {headers: headers}) 
            JobService.UpdateJob(obj).
            then(()=> dispatch( {type: JobActionTypes.UPDATE_JOB__SUCCESS, payload: obj})).
            catch((e)=>dispatch( {type: JobActionTypes.UPDATE_JOB_ERROR, payload: "Error during update!"}))
        /* } catch (e){
            dispatch( {type: JobActionTypes.UPDATE_JOB_ERROR, payload: "Error during update!"})
        } */
    }
}

export const fetchWeekJobs = () => {
    console.log("fetchWeekJob---->>>>>")
    return async (dispatch: Dispatch<JobAction>) => {
        try{
            dispatch( {type: JobActionTypes.FETCH_WEEK_JOBS})
            //const response = await axios.get('http://localhost:3000/api/job/thisweek') 

            const response = await JobService.fetchJobsThisWeek()
            
            //console.log ("Response: " + response.data[0].scheduled)
            dispatch( {type: JobActionTypes.FETCH_WEEK_JOBS_SUCCESS, payload: response.data})
        } catch (e){
            dispatch( {type: JobActionTypes.FETCH_WEEK_JOBS_ERROR, payload: "Error during download!"})
        }
    }
}

export const fetchDriverTodayJobs = () => {
    return async (dispatch: Dispatch<JobAction>) => {
        try{
            dispatch( {type: JobActionTypes.FETCH_JOBS})
            //const response = await axios.get('http://localhost:3000/api/job/dayfuture') 
            const response = await JobService.fetchDriverJobsToday()  // email no need, it gets from jwt identification
                       
            console.log ("Response: " + JSON.stringify( response))
            dispatch( {type: JobActionTypes.FETCH_JOBS_SUCCESS, payload: response.data})
        } catch (e){
            dispatch( {type: JobActionTypes.FETCH_JOBS_ERROR, payload: "Error during download!"})
        }
    }
}

export const fetchDriverWeekJobs = () => {
    return async (dispatch: Dispatch<JobAction>) => {
        try{
            dispatch( {type: JobActionTypes.FETCH_JOBS})
            //const response = await axios.get('http://localhost:3000/api/job/driver/thiswek') 
            const response = await JobService.fetchDriverJobsThisWeek()  // email no need, it gets from jwt identification
                       
            console.log ("Response: " + JSON.stringify( response))
            dispatch( {type: JobActionTypes.FETCH_JOBS_SUCCESS, payload: response.data})
        } catch (e){
            dispatch( {type: JobActionTypes.FETCH_JOBS_ERROR, payload: "Error during download!"})
        }
    }
}

export const fetchDriverAllJobs = () => {
    return async (dispatch: Dispatch<JobAction>) => {
        try{
            dispatch( {type: JobActionTypes.FETCH_JOBS})
            //const response = await axios.get('http://localhost:3000/api/job/driver/thiswek') 
            const response = await JobService.fetchDriverAllJobs()  // email no need, it gets from jwt identification
                       
            console.log ("Response: " + JSON.stringify( response))
            dispatch( {type: JobActionTypes.FETCH_JOBS_SUCCESS, payload: response.data})
        } catch (e){
            dispatch( {type: JobActionTypes.FETCH_JOBS_ERROR, payload: "Error during download!"})
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
