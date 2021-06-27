import { Dispatch } from "redux"
import {RouteRecordAction, RouteRecordActionTypes} from "../../types/routerecord"
import axios from "axios";

export const fetchRoute = () => {
    return async (dispatch: Dispatch<RouteRecordAction>) => {
        try{
            dispatch( {type: RouteRecordActionTypes.FETCH_ROUTE})
            const response = await axios.get('http://localhost:3000/api/route') 
            //JSON.stringify
            console.log ("Routes Response: " + response.data[0].ind + ", length: " + response.data.length)
            dispatch( {type: RouteRecordActionTypes.FETCH_ROUTE_SUCCESS, payload: response.data})
        } catch (e){
            dispatch( {type: RouteRecordActionTypes.FETCH_ROUTE_ERROR, payload: "Error during download!"})
        }
    }
}

export const updateRoute = (
    ind: string,
    name: string   ) => {
        
    return async (dispatch: Dispatch<RouteRecordAction>) => {
        try{
            dispatch( {type: RouteRecordActionTypes.UPDATE_ROUTE})
            var obj = {
                        ind: ind,
                        name: name,
                    }

            console.log("updateRoute: " + obj.ind + " " + obj.name)                    
            const headers = {
                        'Content-Type': 'application/json',
            }                     
            const response = await axios.put('http://localhost:3000/api/route', obj, {headers: headers}) 
            //JSON.stringify
            //console.log ("Response: " + JSON.stringify(response))
            console.log ("updateRoute, ind: " + ind)
            dispatch( {type: RouteRecordActionTypes.UPDATE_ROUTE_SUCCESS, payload: obj})
        } catch (e){
            dispatch( {type: RouteRecordActionTypes.UPDATE_ROUTE_ERROR, payload: "Error during update!"})
        }
    }
}

export const addRoute = (
    name: string   ) => {
    return async (dispatch: Dispatch<RouteRecordAction>) => {
        try{
            dispatch( {type: RouteRecordActionTypes.ADD_ROUTE})
            var obj = {
                        name: name,
                    }
            const headers = {
                        'Content-Type': 'application/json',
            }                     
            const response = await axios.post('http://localhost:3000/api/route', obj, {headers: headers}) 
            //JSON.stringify
            //console.log ("Response: " + JSON.stringify(response))
             dispatch( {type: RouteRecordActionTypes.ADD_ROUTE_SUCCESS, payload: obj})
            
        } catch (e){
            dispatch( {type: RouteRecordActionTypes.ADD_ROUTE_ERROR, payload: "Error during insert!"})
        }
    }
}
