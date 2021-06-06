export interface LocationState {
    locations:any[];
    loading: boolean;
    error: null | string;
}

export enum LocationActionTypes{
    FETCH_LOCATIONS = 'FETCH_LOCATIONS',
    FETCH_LOCATIONS_SUCCESS = 'FETCH_LOCATIONS_SUCCESS',
    FETCH_LOCATIONS_ERROR = 'FETCH_LOCATIONS_ERROR',
}

interface FetchLocationAction{
    type: LocationActionTypes.FETCH_LOCATIONS;
}

interface FetchLocationSuccessAction{
    type: LocationActionTypes.FETCH_LOCATIONS_SUCCESS;
    payload: any[];
}

interface FetchLocationErrorAction{
    type: LocationActionTypes.FETCH_LOCATIONS_ERROR;
    payload: string;
}

export type LocationAction = FetchLocationAction | FetchLocationSuccessAction | FetchLocationErrorAction