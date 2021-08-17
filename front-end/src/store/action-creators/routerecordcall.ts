import { Dispatch } from "redux"
import {RouteRecordAction, RouteRecordActionTypes} from "../../types/routerecord"
import axios from "axios";
import RouteService from "../../services/RouteService";
//import { TheatersRounded } from "@material-ui/icons";

export const fetchRoute = () => { // no sense 
    return async (dispatch: Dispatch<RouteRecordAction>) => {
        try{
            dispatch( {type: RouteRecordActionTypes.FETCH_ROUTE})
            const response = await axios.get('http://localhost:3000/api/route') 
           
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
            /* const headers = {
                        'Content-Type': 'application/json',
            }  */                    
            //const response = await axios.put('http://localhost:3000/api/route', obj, {headers: headers}) 
        
            //console.log ("Response: " + JSON.stringify(response))
            //console.log ("updateRoute, ind: " + ind)
            RouteService.UpdateRoute(obj).then(()=> dispatch( {type: RouteRecordActionTypes.UPDATE_ROUTE_SUCCESS, payload: obj}))
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
                        ind: '',
                        name: name,
                    }
          /*   const headers = {
                        'Content-Type': 'application/json',
            }    */                  
            //const response = await axios.post('http://localhost:3000/api/route', obj, {headers: headers}) 
            RouteService.AddRout(obj).then(() => dispatch( {type: RouteRecordActionTypes.ADD_ROUTE_SUCCESS, payload: obj}))
            
        } catch (e){
            dispatch( {type: RouteRecordActionTypes.ADD_ROUTE_ERROR, payload: "Error during insert!"})
        }
    }
}
