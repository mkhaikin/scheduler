
import {LocationState, LocationActionTypes, LocationAction} from "../../types/location"


const initialState: LocationState = {
    locations: [],
    loading: false,
    error: null
}

export const locationReducer = (state = initialState, action: LocationAction): LocationState =>{
    switch (action.type){
        case LocationActionTypes.FETCH_LOCATIONS:
            return {...state, loading: true}
        case LocationActionTypes.FETCH_LOCATIONS_SUCCESS:
            return {...state, loading: false, locations: action.payload}
        case LocationActionTypes.FETCH_LOCATIONS_ERROR:
            return {...state, loading: false, error: action.payload}            
        default:
            return state
    }
}