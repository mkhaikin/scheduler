import { combineReducers } from "redux";
import {menuReducer} from "./menuReducer";
import { userReducer } from "./userReducer";
import { locationReducer } from "./locationReducer";
import { routesReducer } from "./routesReducer";

export const rootReducer = combineReducers({
    menu: menuReducer,
    user: userReducer,
    location: locationReducer,
    routes: routesReducer,
})

export type RootState = ReturnType <typeof rootReducer>