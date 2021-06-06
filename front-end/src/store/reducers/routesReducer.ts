
import {RoutesState, RoutesActionTypes, RoutesAction} from "../../types/routes"


const initialState: RoutesState = {
    routes: [],
    loading: false,
    error: null
}

export const routesReducer = (state = initialState, action: RoutesAction): RoutesState =>{
    switch (action.type){
        case RoutesActionTypes.FETCH_ROUTES:
            return {...state, loading: true}
        case RoutesActionTypes.FETCH_ROUTES_SUCCESS:
            return {...state, loading: false, routes: action.payload}
        case RoutesActionTypes.FETCH_ROUTES_ERROR:
            return {...state, loading: false, error: action.payload}            
        default:
            return state
    }
}