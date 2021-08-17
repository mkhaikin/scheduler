import { Dispatch } from "redux"
import {MenuAction, MenuActionTypes} from "../../types/menu"

export const showDashboardPage = () => {
    return (dispatch: Dispatch<MenuAction>) =>{
        dispatch( {type: MenuActionTypes.SHOW_DASHBOARD_PAGE})
    }
}

export const showOrdersPage = () => {
    return (dispatch: Dispatch<MenuAction>) =>{
        dispatch( {type: MenuActionTypes.SHOW_ORDERS_PAGE})
    }
}

export const showOrderForm = () => {
    return (dispatch: Dispatch<MenuAction>) =>{
        dispatch( {type: MenuActionTypes.SHOW_ORDER_FORM})
    }
}
/*
export const showCustomersPage = () => {
    return (dispatch: Dispatch<MenuAction>) =>{
        dispatch( {type: MenuActionTypes.SHOW_CUSTOMERS_PAGE})
    }
}*/

export const showLocationsPage = () => {
    return (dispatch: Dispatch<MenuAction>) =>{
        dispatch( {type: MenuActionTypes.SHOW_LOCATIONS_PAGE})
    }
}

export const showLocationForm = () => {
    return (dispatch: Dispatch<MenuAction>) =>{
        dispatch( {type: MenuActionTypes.SHOW_LOCATIONS_FORM})
    }
}

export const showRoutesPage = () => {
    return (dispatch: Dispatch<MenuAction>) =>{
        dispatch( {type: MenuActionTypes.SHOW_ROUTES_PAGE})
    }
}

export const showEmployeesPage = () => {
    return (dispatch: Dispatch<MenuAction>) =>{
        dispatch( {type: MenuActionTypes.SHOW_EMPLOYEES_PAGE})
    }
}

export const showEmployeeForm = () => {
    return (dispatch: Dispatch<MenuAction>) =>{
        dispatch( {type: MenuActionTypes.SHOW_EMPLOYEE_FORM})
    }
}

export const showReport1Page = () => {
    return (dispatch: Dispatch<MenuAction>) =>{
        dispatch( {type: MenuActionTypes.SHOW_REPORTS_PAGE_1})
    }
}

export const showReport2Page = () => {
    return (dispatch: Dispatch<MenuAction>) =>{
        dispatch( {type: MenuActionTypes.SHOW_REPORTS_PAGE_2})
    }
}

export const showStorePage = () => {
    return (dispatch: Dispatch<MenuAction>) =>{
        dispatch( {type: MenuActionTypes.SHOW_STORE_PAGE})
    }
}

export const showHelpPage1 = () => {
    return (dispatch: Dispatch<MenuAction>) =>{
        dispatch( {type: MenuActionTypes.SHOW_HELP_PAGE_1})
    }
}

export const showHelpPage2 = () => {
    return (dispatch: Dispatch<MenuAction>) =>{
        dispatch( {type: MenuActionTypes.SHOW_HELP_PAGE_2})
    }
}

export const showScheduledToday = () => {
    return (dispatch: Dispatch<MenuAction>) =>{
        dispatch( {type: MenuActionTypes.SHOW_SCHEDULED_TODAY})
    }
}

export const showScheduledWeek = () => {
    return (dispatch: Dispatch<MenuAction>) =>{
        dispatch( {type: MenuActionTypes.SHOW_SCHEDULED_WEEK})
    }
}

export const showAllScheduled = () => {
    return (dispatch: Dispatch<MenuAction>) =>{
        dispatch( {type: MenuActionTypes.SHOW_ALL_SCHEDULED})
    }
}

export const showDriverWorklog = () => {
    return (dispatch: Dispatch<MenuAction>) =>{
        dispatch( {type: MenuActionTypes.SHOW_DRIVER_WORKLOG})
    }
}



