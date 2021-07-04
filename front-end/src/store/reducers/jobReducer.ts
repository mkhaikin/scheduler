
import {JobState, JobActionTypes, JobAction} from "../../types/job"


const initialState: JobState = {
    jobs: [],
    loading: false,
    error: null
}

export const jobReducer = (state = initialState, action: JobAction): JobState =>{
    switch (action.type){
        case JobActionTypes.FETCH_JOBS:
            return {...state, loading: true}
        case JobActionTypes.FETCH_JOBS_SUCCESS:
            return {...state, loading: false, jobs: action.payload}
        case JobActionTypes.FETCH_JOBS_ERROR:
            return {...state, loading: false, error: action.payload}            
        
        case JobActionTypes.DELETE_JOB:
            return {...state, loading: true}
        case JobActionTypes.DELETE_JOB_SUCCESS:
            /*
            console.log("DELETE_JOB_SUCCESS: " + action.payload)
            const id = action.payload
            const loc = state.jobs.filter( (job )=> id ===  job.ind)
            if(loc && loc.length > 0){
                console.log("loc: " + loc.length)
                Object.entries(loc[0]).forEach(([key, value]) => {
                    console.log(key, value);
                });

            }
            */
            return {...state, loading: false, jobs: state.jobs.filter( (job )=> action.payload !==  job.ind)}
        case JobActionTypes.DELETE_JOB_ERROR:
            return {...state, loading: false, error: action.payload}  

        case JobActionTypes.UPDATE_JOB:
            return {...state, loading: true}
        case JobActionTypes.UPDATE_JOB__SUCCESS:
            /////////////////////////////////////////////////////
            /*
            let loc = state.jobs.filter( (job )=> action.payload.ind !==  job.ind)
            let jobs = {... loc, jobs: action.payload}
            return {...state, loading: false, jobs: jobs}
            */

            //console.log(" action.payload.ind: " +  action.payload.ind)
            const index = state.jobs.findIndex(job => job.ind ===  action.payload.ind); //finding index of the item
            //console.log("Index of updated item: " + index)
            const newArray = [...state.jobs]; //making a new array
            //console.log("newArray[index].ind: " + newArray[index].ind)
            newArray[index].routeId = action.payload.routeId//changing value in the new array
            newArray[index].area = action.payload.area
            newArray[index].street_avenue = action.payload.street_avenue
            newArray[index].w_e = action.payload.w_e
            newArray[index].number = action.payload.number
            newArray[index].notice = action.payload.notice
            
            return { 
                ...state, //copying the orignal state
                jobs: newArray, //reassingning todos to new array
                loading: false
               }
            
            ////////////////////////////////////////////////////////
        case JobActionTypes.UPDATE_JOB_ERROR:
            return {...state, loading: false, error: action.payload}  

        case JobActionTypes.FETCH_WEEK_JOBS:
            return {...state, loading: true}
        case JobActionTypes.FETCH_WEEK_JOBS_SUCCESS:
            return {...state, loading: false, jobs: action.payload}
        case JobActionTypes.FETCH_WEEK_JOBS_ERROR:
            return {...state, loading: false, error: action.payload}    
            
        default:
            return state
    }
}