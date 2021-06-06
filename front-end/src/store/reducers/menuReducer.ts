import {MenuAction, MenuActionTypes, MenuState, PageTypes} from "../../types/menu"

const initialState: MenuState = {
    menuItem: PageTypes.ORDERS_PAGE,
    title: 'Orders',
}

export const menuReducer = (state = initialState, action: MenuAction): MenuState => {
    switch (action.type){
        case MenuActionTypes.SHOW_DASHBOARD_PAGE:
            return {menuItem: PageTypes.DASHBOARD_PAGE, title: 'Dashboard'}
        case MenuActionTypes.SHOW_ORDERS_PAGE:
            return {menuItem: PageTypes.ORDERS_PAGE, title: 'Orders'}
        //case MenuActionTypes.SHOW_CUSTOMERS_PAGE:
            //return {menuItem: PageTypes.CUSTOMERS_PAGE, title: 'Customers'}
        case MenuActionTypes.SHOW_LOCATIONS_PAGE:
            return {menuItem: PageTypes.LOCATIONS_PAGE, title: 'Locations'}  
        case MenuActionTypes.SHOW_LOCATIONS_FORM:
            return {menuItem: PageTypes.LOCATIONS_FORM, title: 'Location'}           
        case MenuActionTypes.SHOW_EMPLOYEES_PAGE:
            return {menuItem: PageTypes.EMPLOYEES_PAGE, title: 'Employees'} 
        case MenuActionTypes.SHOW_EMPLOYEE_FORM:
            return {menuItem: PageTypes.EMPLOYEE_FORM, title: 'Employee'} 
        case MenuActionTypes.SHOW_STORE_PAGE:
            return {menuItem: PageTypes.STORE_PAGE, title: 'Store'}
        case MenuActionTypes.SHOW_REPORTS_PAGE_1:
            return {menuItem: PageTypes.REPORTS_PAGE_1, title: 'Report type 1'}
        case MenuActionTypes.SHOW_REPORTS_PAGE_2:
            return {menuItem: PageTypes.REPORTS_PAGE_2, title: 'Report type 2'}
        case MenuActionTypes.SHOW_HELP_PAGE_1:
            return {menuItem: PageTypes.HELP_PAGE_1, title: 'Help 1'}  
        case MenuActionTypes.SHOW_HELP_PAGE_2:
            return {menuItem: PageTypes.HELP_PAGE_2, title: 'Help 2'} 
        default:
            return state                             
    }
}