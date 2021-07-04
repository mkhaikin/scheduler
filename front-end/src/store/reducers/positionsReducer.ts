
import {PositionsState, PositionsActionTypes, PositionsAction} from "../../types/positions"


const initialState: PositionsState = {
    positions: [],
    loading: false,
    error: null
}

export const positionsReducer = (state = initialState, action: PositionsAction): PositionsState =>{
    switch (action.type){
        case PositionsActionTypes.FETCH_POSITIONS:
            return {...state, loading: true}
        case PositionsActionTypes.FETCH_POSITIONS_SUCCESS:
            return {...state, loading: false, positions: action.payload}
        case PositionsActionTypes.FETCH_POSITIONS_ERROR:
            return {...state, loading: false, error: action.payload}            
        default:
            return state
    }
}