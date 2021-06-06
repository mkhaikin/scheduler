export interface RoutesState {
    routes:any[];
    loading: boolean;
    error: null | string;
}

export enum RoutesActionTypes{
    FETCH_ROUTES = 'FETCH_ROUTES',
    FETCH_ROUTES_SUCCESS = 'FETCH_ROUTES_SUCCESS',
    FETCH_ROUTES_ERROR = 'FETCH_ROUTES_ERROR',
}

interface FetchRoutesAction{
    type: RoutesActionTypes.FETCH_ROUTES;
}

interface FetchRoutesSuccessAction{
    type: RoutesActionTypes.FETCH_ROUTES_SUCCESS;
    payload: any[];
}

interface FetchRoutesErrorAction{
    type: RoutesActionTypes.FETCH_ROUTES_ERROR;
    payload: string;
}

export type RoutesAction = FetchRoutesAction | FetchRoutesSuccessAction | FetchRoutesErrorAction