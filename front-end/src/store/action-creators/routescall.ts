import { Dispatch } from "redux"
import {RoutesAction, RoutesActionTypes} from "../../types/routes"
//import axios from "axios";
import RouteService from '../../services/RouteService'

export const fetchRoutes = () => {
    return async (dispatch: Dispatch<RoutesAction>) => {
        try{
            dispatch( {type: RoutesActionTypes.FETCH_ROUTES})
            //const response = await axios.get('http://localhost:3000/api/routes') 
            const response = await RouteService.fetchRoutes()

            //JSON.stringify
            console.log ("Routes Response: " + response.data[0].ind + ", length: " + response.data.length)
            dispatch( {type: RoutesActionTypes.FETCH_ROUTES_SUCCESS, payload: response.data})
        } catch (e){
            dispatch( {type: RoutesActionTypes.FETCH_ROUTES_ERROR, payload: "Error during download!"})
        }
    }
}

