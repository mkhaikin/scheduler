export interface UserState {
    users:any[];
    usersIdName:any[];
    loading: boolean;
    error: null | string;
    loadingId: boolean;
    errorId: null | string;
}

export enum UserActionTypes{
    FETCH_USERS = 'FETCH_USERS',
    FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS',
    FETCH_USERS_ERROR = 'FETCH_USERS_ERROR',

    UPDATE_USER = 'UPDATE_USER',
    UPDATE_USER_SUCCESS = 'UPDATE_USER_SUCCESS',
    UPDATE_USER_ERROR = 'UPDATE_USER_ERROR',

    FETCH_USERS_ID_NAME = 'FETCH_USERS_ID_NAME',
    FETCH_USERS_ID_NAME_SUCCESS = 'FETCH_USERS_ID_NAME_SUCCESS',
    FETCH_USERS_ID_NAME_ERROR = 'FETCH_USERS_ID_NAME_ERROR',

    ADD_USER = 'ADD_USER',
    ADD_USER_SUCCESS = 'ADD_USER_SUCCESS',
    ADD_USER_ERROR = 'ADD_USER_ERROR',
}

interface FetchUsersAction{
    type: UserActionTypes.FETCH_USERS;
}

interface FetchUsersSuccessAction{
    type: UserActionTypes.FETCH_USERS_SUCCESS;
    payload: any[];
}

interface FetchUsersErrorAction{
    type: UserActionTypes.FETCH_USERS_ERROR;
    payload: string;
}

interface FetchUserIdNameAction{
    type: UserActionTypes.FETCH_USERS_ID_NAME;
}

interface FetchUsersIdNameSuccessAction{
    type: UserActionTypes.FETCH_USERS_ID_NAME_SUCCESS;
    payload: any[];
}

interface FetchUsersIdNameErrorAction{
    type: UserActionTypes.FETCH_USERS_ID_NAME_ERROR;
    payload: string;
}

interface UpdateUsersAction{
    type: UserActionTypes.UPDATE_USER;
}

interface UpdateUsersSuccessAction{
    type: UserActionTypes.UPDATE_USER_SUCCESS;
    payload: any;
}

interface UpdateUsersErrorAction{
    type: UserActionTypes.UPDATE_USER_ERROR;
    payload: string;
}

interface AddUsersAction{
    type: UserActionTypes.ADD_USER;
}

interface AddUsersSuccessAction{
    type: UserActionTypes.ADD_USER_SUCCESS;
    payload: any;
}

interface AddUsersErrorAction{
    type: UserActionTypes.ADD_USER_ERROR;
    payload: string;
}

export type UserAction = FetchUsersAction | FetchUsersSuccessAction | FetchUsersErrorAction | 
                        FetchUserIdNameAction | FetchUsersIdNameSuccessAction | FetchUsersIdNameErrorAction |
                        UpdateUsersAction | UpdateUsersSuccessAction | UpdateUsersErrorAction |
                        AddUsersAction | AddUsersSuccessAction | AddUsersErrorAction