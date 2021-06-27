import { combineReducers } from "redux";
import {menuReducer} from "./menuReducer";
import { userReducer } from "./userReducer";
import { locationReducer } from "./locationReducer";
import { routesReducer } from "./routesReducer";
import { routeRecordReducer } from "./routeRecordReducer";
import { positionsReducer } from "./positionsReducer";
import { jobReducer} from "./jobReducer";
import { worklogReducer} from "./worklogReducer";

export const rootReducer = combineReducers({
    menu: menuReducer,
    user: userReducer,
    location: locationReducer,
    routes: routesReducer,
    positions: positionsReducer,
    job: jobReducer,
    route: routeRecordReducer,
    worklog: worklogReducer,
})

export type RootState = ReturnType <typeof rootReducer>