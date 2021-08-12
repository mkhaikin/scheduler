import { Dispatch } from "redux"
import {PositionsAction, PositionsActionTypes} from "../../types/positions"
//import axios from "axios";
import PositionService from '../../services/PositionService'

export const fetchPositions = () => {
    return async (dispatch: Dispatch<PositionsAction>) => {
        try{
            dispatch( {type: PositionsActionTypes.FETCH_POSITIONS})
            //const response = await axios.get('http://localhost:3000/api/staff/positions') 
            //const response = await 
            PositionService.fetchPositions().then((response)=> {
                        console.log ("Positions Response: " + response.data[0].ind + ", length: " + response.data.length)
                         dispatch( {type: PositionsActionTypes.FETCH_POSITIONS_SUCCESS, payload: response.data})
            })
        } catch (e){
            dispatch( {type: PositionsActionTypes.FETCH_POSITIONS_ERROR, payload: "Error during download!"})
        }
    }
}

