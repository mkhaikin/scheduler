
import {WorklogState, WorklogActionTypes, WorklogAction} from "../../types/worklog"


const initialState: WorklogState = {
    worklog: [],
    worklogsum: [],
    loading: false,
    error: null
}

export const worklogReducer = (state = initialState, action: WorklogAction): WorklogState =>{
    switch (action.type){
        case WorklogActionTypes.FETCH_WORKLOG:
            return {...state, loading: true}
        case WorklogActionTypes.FETCH_WORKLOG_SUCCESS:
            return {...state, loading: false, worklog: action.payload}
        case WorklogActionTypes.FETCH_WORKLOG_ERROR:
            return {...state, loading: false, error: action.payload}   
            
        case WorklogActionTypes.FETCH_WEEK_WORKLOG:
            return {...state, loading: true}
        case WorklogActionTypes.FETCH_WEEK_WORKLOG_SUCCESS:
            return {...state, loading: false, worklog: action.payload}
        case WorklogActionTypes.FETCH_WEEK_WORKLOG_ERROR:
            return {...state, loading: false, error: action.payload}

        case WorklogActionTypes.FETCH_SUM_WORKLOG:
            return {...state, loading: true}
        case WorklogActionTypes.FETCH_SUM_WORKLOG_SUCCESS:
            return {...state, loading: false, worklogsum: action.payload}
        case WorklogActionTypes.FETCH_SUM_WORKLOG_ERROR:
            return {...state, loading: false, error: action.payload}
        
        case WorklogActionTypes.UPDATE_WORKLOG:
            return {...state, loading: true}
        case WorklogActionTypes.UPDATE_WORKLOG__SUCCESS:
            ///////////////   edit by sense!!!!  ////////////////////////
            /*
            let loc = state.worklog.filter( (worklog )=> action.payload.ind !==  worklog.ind)
            let worklog = {... loc, worklog: action.payload}
            return {...state, loading: false, worklog: worklog}
            */

            //console.log(" action.payload.ind: " +  action.payload.ind)
            const index = state.worklog.findIndex(worklog => worklog.ind ===  action.payload.ind); //finding index of the item
            //console.log("Index of updated item: " + index)
            const newArray = [...state.worklog]; //making a new array
            //console.log("newArray[index].ind: " + newArray[index].ind)
            newArray[index].routeId = action.payload.routeId//changing value in the new array
            newArray[index].area = action.payload.area
            newArray[index].street_avenue = action.payload.street_avenue
            newArray[index].w_e = action.payload.w_e
            newArray[index].number = action.payload.number
            newArray[index].notice = action.payload.notice
            
            return { 
                ...state, //copying the orignal state
                worklog: newArray, //reassingning todos to new array
                loading: false
               }
            
            ////////////////////////////////////////////////////////
        case WorklogActionTypes.UPDATE_WORKLOG_ERROR:
            return {...state, loading: false, error: action.payload}  
            
        default:
            return state
    }
}