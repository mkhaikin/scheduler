
import {UserState, UserActionTypes, UserAction} from "../../types/user"


const initialState: UserState = {
    users: [],
    usersIdName: [],
    loading: false,
    error: null,
    loadingId: false,
    errorId: null
}

export const userReducer = (state = initialState, action: UserAction): UserState =>{
    switch (action.type){
        case UserActionTypes.FETCH_USERS:
            return {...state, loading: true}
        case UserActionTypes.FETCH_USERS_SUCCESS:
            return {...state, loading: false, users: action.payload}
        case UserActionTypes.FETCH_USERS_ERROR:
            return {...state, loading: false, error: action.payload} 
            
        case UserActionTypes.FETCH_USERS_ID_NAME:
            return {...state, loadingId: true}
        case UserActionTypes.FETCH_USERS_ID_NAME_SUCCESS:
            return {...state, loadingId: false, usersIdName: action.payload}
        case UserActionTypes.FETCH_USERS_ID_NAME_ERROR:
            return {...state, loadingId: false, errorId: action.payload} 
            
        case UserActionTypes.UPDATE_USER:
            return {...state, loading: true}
        case UserActionTypes.UPDATE_USER_SUCCESS:
            //console.log(" action.payload.ind: " +  action.payload.ind)
                    //finding index of the item, compare number with string
            const index = state.users.findIndex(user => (''+ user.ind) ===  action.payload.ind); 
            //console.log("Index of updated item: " + index)
            const newArray = [...state.users]; //making a new array
            //console.log("newArray[index].ind: " + newArray[index].ind)
            newArray[index].firstname = action.payload.firstname//changing value in the new array
            newArray[index].lastname = action.payload.lastname
            newArray[index].email = action.payload.email
            newArray[index].cell = action.payload.phone
            newArray[index].positionId = action.payload.positionId
//            newArray[index].notice = action.payload.notice
            
            return { 
                ...state, //copying the orignal state
                users: newArray, //reassingning todos to new array
                loading: false
               }
            
            ////////////////////////////////////////////////////////
        case UserActionTypes.UPDATE_USER_ERROR:
            return {...state, loading: false, error: action.payload}  

        case UserActionTypes.ADD_USER:
            return {...state, loadingId: true}
        case UserActionTypes.ADD_USER_SUCCESS:
            return {...state, loadingId: false, usersIdName: action.payload}
        case UserActionTypes.ADD_USER_ERROR:
            return {...state, loadingId: false, errorId: action.payload} 

        default:
            return state
    }
}