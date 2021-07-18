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
//////////////////////////////////////////////
export interface RouteRecordState {
    routeId:string;
    routeName:string;
    loading: boolean;
    error: null | string;
}

export enum RouteActionTypes{
    FETCH_ROUTE = 'FETCH_ROUTE',
    FETCH_ROUTE_SUCCESS = 'FETCH_ROUTE_SUCCESS',
    FETCH_ROUTE_ERROR = 'FETCH_ROUTE_ERROR',
}

interface FetchRouteRecordAction{
    type: RouteActionTypes.FETCH_ROUTE;
}

interface FetchRouteRecordSuccessAction{
    type: RouteActionTypes.FETCH_ROUTE_SUCCESS;
    payload: any[];
}

interface FetchRouteRecordErrorAction{
    type: RouteActionTypes.FETCH_ROUTE_ERROR;
    payload: string;
}

export type RouteRouteRecordAction = FetchRouteRecordAction | FetchRouteRecordSuccessAction | FetchRouteRecordErrorAction