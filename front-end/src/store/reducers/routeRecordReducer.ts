
import {RouteRecordState, RouteRecordActionTypes, RouteRecordAction} from "../../types/routerecord"


const initialState: RouteRecordState = {
    route: {id : "",  name: ""},
    loading: false,
    error: null
}

export const routeRecordReducer = (state = initialState, action: RouteRecordAction): RouteRecordState =>{
    switch (action.type){
        case RouteRecordActionTypes.FETCH_ROUTE:
            return {...state, loading: true}
        case RouteRecordActionTypes.FETCH_ROUTE_SUCCESS:
            return {...state, loading: false, route: action.payload}
        case RouteRecordActionTypes.FETCH_ROUTE_ERROR:
            return {...state, loading: false, error: action.payload}            

        case RouteRecordActionTypes.ADD_ROUTE:
            return {...state, loading: true}
        case RouteRecordActionTypes.ADD_ROUTE_SUCCESS:
            return {...state, loading: false, route: action.payload}
        case RouteRecordActionTypes.ADD_ROUTE_ERROR:
            return {...state, loading: false, error: action.payload}  

        case RouteRecordActionTypes.UPDATE_ROUTE:
            return {...state, loading: true}
        case RouteRecordActionTypes.UPDATE_ROUTE_SUCCESS:
            return {...state, loading: false, route: action.payload}
        case RouteRecordActionTypes.UPDATE_ROUTE_ERROR:
            return {...state, loading: false, error: action.payload}  

        case RouteRecordActionTypes.ROUTE_INPUT_CHANGE:
            return {...state, loading: false, route: action.payload}
        default:
            return state
    }
}