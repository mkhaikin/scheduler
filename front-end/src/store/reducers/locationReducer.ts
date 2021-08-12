
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
        
        case LocationActionTypes.DELETE_LOCATION:
            return {...state, loading: true}
        case LocationActionTypes.DELETE_LOCATION_SUCCESS:
            /*
            console.log("DELETE_LOCATION_SUCCESS: " + action.payload)
            const id = action.payload
            const loc = state.locations.filter( (location )=> id ===  location.ind)
            if(loc && loc.length > 0){
                console.log("loc: " + loc.length)
                Object.entries(loc[0]).forEach(([key, value]) => {
                    console.log(key, value);
                });

            }
            */
            return {...state, loading: false, locations: state.locations.filter( (location )=> action.payload !==  location.ind)}
        case LocationActionTypes.DELETE_LOCATION_ERROR:
            return {...state, loading: false, error: action.payload}  

        case LocationActionTypes.UPDATE_LOCATION:
            return {...state, loading: true}
        case LocationActionTypes.UPDATE_LOCATION__SUCCESS:
            /////////////////////////////////////////////////////
            /*
            let loc = state.locations.filter( (location )=> action.payload.ind !==  location.ind)
            let locations = {... loc, locations: action.payload}
            return {...state, loading: false, locations: locations}
            */

           /*  console.log(" action.payload.ind: " +  action.payload.ind)
            console.log("locations length: " + state.locations.length)
            console.log("locations index = 0, ind: " + state.locations[0].ind) */

            //finding index of the location which ind is a number not a string. So we need to compare strings
            const index = state.locations.findIndex((location) => (''+ location.ind) ===  action.payload.ind); 
            //console.log("Index of updated item: " + index)
            const newArray = [...state.locations]; //making a new array
            //console.log("newArray[index].ind: " + newArray[index].ind)
            newArray[index].routeid = action.payload.routeid//changing value in the new array
            newArray[index].area = action.payload.area
            newArray[index].street_avenue = action.payload.street_avenue
            newArray[index].w_e = action.payload.w_e
            newArray[index].number = action.payload.number
            newArray[index].notice = action.payload.notice
            
            return { 
                ...state, //copying the orignal state
                locations: newArray, //reassingning todos to new array
                loading: false
               }
            
           
        case LocationActionTypes.UPDATE_LOCATION_ERROR:
            return {...state, loading: false, error: action.payload}  

         ////////////////////////////////////////////////////////

        case LocationActionTypes.ADD_LOCATION:
            return {...state, loading: true}
        case LocationActionTypes.ADD_LOCATION__SUCCESS:
            return {...state, loading: false}  
        case LocationActionTypes.ADD_LOCATION_ERROR:
            return {...state, loading: false, error: action.payload}     
        default:
            return state
    }
}