export interface PositionsState {
    positions:any[];
    loading: boolean;
    error: null | string;
}

export enum PositionsActionTypes{
    FETCH_POSITIONS = 'FETCH_POSITIONS',
    FETCH_POSITIONS_SUCCESS = 'FETCH_POSITIONS_SUCCESS',
    FETCH_POSITIONS_ERROR = 'FETCH_POSITIONS_ERROR',
}

interface FetchPositionsAction{
    type: PositionsActionTypes.FETCH_POSITIONS;
}

interface FetchPositionsSuccessAction{
    type: PositionsActionTypes.FETCH_POSITIONS_SUCCESS;
    payload: any[];
}

interface FetchPositionsErrorAction{
    type: PositionsActionTypes.FETCH_POSITIONS_ERROR;
    payload: string;
}

export type PositionsAction = FetchPositionsAction | FetchPositionsSuccessAction | FetchPositionsErrorAction