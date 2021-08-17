export interface LocationState {
    locations:any[];
    loading: boolean;
    error: null | string;
}

export enum LocationActionTypes{
    FETCH_LOCATIONS = 'FETCH_LOCATIONS',
    FETCH_LOCATIONS_SUCCESS = 'FETCH_LOCATIONS_SUCCESS',
    FETCH_LOCATIONS_ERROR = 'FETCH_LOCATIONS_ERROR',

    DELETE_LOCATION = 'DELETE_LOCATION',
    DELETE_LOCATION_SUCCESS = 'DELETE_LOCATION_SUCCESS',
    DELETE_LOCATION_ERROR = 'DELETE_LOCATION_ERROR',

    UPDATE_LOCATION = 'UPDATE_LOCATION',
    UPDATE_LOCATION__SUCCESS = 'UPDATE_LOCATION__SUCCESS',
    UPDATE_LOCATION_ERROR = 'UPDATE_LOCATION_ERROR',

    ADD_LOCATION = 'ADD_LOCATION',
    ADD_LOCATION__SUCCESS = 'ADD_LOCATION__SUCCESS',
    ADD_LOCATION_ERROR = 'ADD_LOCATION_ERROR',
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

interface DeleteLocationAction{
    type: LocationActionTypes.DELETE_LOCATION;
}

interface DeleteLocationSuccessAction{
    type: LocationActionTypes.DELETE_LOCATION_SUCCESS;
    payload: number;
}

interface DeleteLocationErrorAction{
    type: LocationActionTypes.DELETE_LOCATION_ERROR;
    payload: string;
}

interface UpdateLocationAction{
    type: LocationActionTypes.UPDATE_LOCATION;
}

interface UpdateLocationSuccessAction{
    type: LocationActionTypes.UPDATE_LOCATION__SUCCESS;
    payload: any;
}

interface UpdateLocationErrorAction{
    type: LocationActionTypes.UPDATE_LOCATION_ERROR;
    payload: string;
}

interface AddLocationAction{
    type: LocationActionTypes.ADD_LOCATION;
}

interface AddLocationSuccessAction{
    type: LocationActionTypes.ADD_LOCATION__SUCCESS;
    payload: any;
}

interface AddLocationErrorAction{
    type: LocationActionTypes.ADD_LOCATION_ERROR;
    payload: string;
}

export type LocationAction = FetchLocationAction | 
                            FetchLocationSuccessAction | 
                            FetchLocationErrorAction | 
                            DeleteLocationAction | 
                            DeleteLocationSuccessAction | 
                            DeleteLocationErrorAction |
                            UpdateLocationAction |
                            UpdateLocationSuccessAction |
                            UpdateLocationErrorAction |
                            AddLocationAction |
                            AddLocationSuccessAction |
                            AddLocationErrorAction