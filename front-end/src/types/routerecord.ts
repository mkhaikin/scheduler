export interface RouteRecordState {
    //route?:{id:string, name:string};
    route:{};
    loading: boolean;
    error: null | string;
}

export enum RouteRecordActionTypes{
    FETCH_ROUTE = 'FETCH_ROUTE',
    FETCH_ROUTE_SUCCESS = 'FETCH_ROUTE_SUCCESS',
    FETCH_ROUTE_ERROR = 'FETCH_ROUTE_ERROR',

    ADD_ROUTE = 'ADD_ROUTE',
    ADD_ROUTE_SUCCESS = 'ADD_ROUTE_SUCCESS',
    ADD_ROUTE_ERROR = 'ADD_ROUTE_ERROR',

    UPDATE_ROUTE = 'UPDATE_ROUTE',
    UPDATE_ROUTE_SUCCESS = 'UPDATE_ROUTE_SUCCESS',
    UPDATE_ROUTE_ERROR = 'UPDATE_ROUTE_ERROR',

    ROUTE_INPUT_CHANGE = 'ROUTE_INPUT_CHANGE'
}

interface FetchRouteRecordAction{
    type: RouteRecordActionTypes.FETCH_ROUTE;
}

interface FetchRouteRecordSuccessAction{
    type: RouteRecordActionTypes.FETCH_ROUTE_SUCCESS;
    payload: {};
}

interface FetchRouteRecordErrorAction{
    type: RouteRecordActionTypes.FETCH_ROUTE_ERROR;
    payload: string;
}
/////////////////////////////////////
interface AddRouteRecordAction{
    type: RouteRecordActionTypes.ADD_ROUTE;
}

interface AddRouteRecordSuccessAction{
    type: RouteRecordActionTypes.ADD_ROUTE_SUCCESS;
    payload: {};
}

interface AddRouteRecordErrorAction{
    type: RouteRecordActionTypes.ADD_ROUTE_ERROR;
    payload: string;
}
///////////////////////////////////
interface UpdateRouteRecordAction{
    type: RouteRecordActionTypes.UPDATE_ROUTE;
}

interface UpdateRouteRecordSuccessAction{
    type: RouteRecordActionTypes.UPDATE_ROUTE_SUCCESS;
    payload: {};
}

interface UpdateRouteRecordErrorAction{
    type: RouteRecordActionTypes.UPDATE_ROUTE_ERROR;
    payload: string;
}

///////////////////////////////
interface InputChangeRouteRecordAction{
    type: RouteRecordActionTypes.ROUTE_INPUT_CHANGE;
    payload: {};
}

export type RouteRecordAction = FetchRouteRecordAction | FetchRouteRecordSuccessAction | FetchRouteRecordErrorAction | 
                                AddRouteRecordAction | 
                                AddRouteRecordSuccessAction | 
                                AddRouteRecordErrorAction |
                                UpdateRouteRecordAction |
                                UpdateRouteRecordSuccessAction |
                                UpdateRouteRecordErrorAction |
                                InputChangeRouteRecordAction
