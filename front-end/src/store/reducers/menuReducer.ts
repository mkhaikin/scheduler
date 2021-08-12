import {MenuAction, MenuActionTypes, MenuState, PageTypes} from "../../types/menu"

const initialState: MenuState = {
    menuItem: PageTypes.BASIC_PAGE,
    title: 'Welcome To CRM',
}

export const menuReducer = (state = initialState, action: MenuAction): MenuState => {
    switch (action.type){
        case MenuActionTypes.SHOW_BASIC_PAGE:
            return {menuItem: PageTypes.BASIC_PAGE, title: 'Welcome To CRM'}
        case MenuActionTypes.SHOW_DASHBOARD_PAGE:
            return {menuItem: PageTypes.DASHBOARD_PAGE, title: 'Dashboard'}
        case MenuActionTypes.SHOW_ORDERS_PAGE:
            return {menuItem: PageTypes.ORDERS_PAGE, title: 'Worklog'}
        case MenuActionTypes.SHOW_ORDER_FORM:
            return {menuItem: PageTypes.ORDER_FORM, title: 'Order Form'} 
        //case MenuActionTypes.SHOW_CUSTOMERS_PAGE:
            //return {menuItem: PageTypes.CUSTOMERS_PAGE, title: 'Customers'}
        case MenuActionTypes.SHOW_LOCATIONS_PAGE:
            return {menuItem: PageTypes.LOCATIONS_PAGE, title: 'Locations'}  
        case MenuActionTypes.SHOW_LOCATIONS_FORM:
            return {menuItem: PageTypes.LOCATIONS_FORM, title: 'Location Form'}  
        case MenuActionTypes.SHOW_ROUTES_PAGE:
            return {menuItem: PageTypes.ROUTES_PAGE, title: 'Routes'}           
        case MenuActionTypes.SHOW_EMPLOYEES_PAGE:
            return {menuItem: PageTypes.EMPLOYEES_PAGE, title: 'Employees'} 
        case MenuActionTypes.SHOW_EMPLOYEE_FORM:
            return {menuItem: PageTypes.EMPLOYEE_FORM, title: 'Employee Form'} 
        case MenuActionTypes.SHOW_STORE_PAGE:
            return {menuItem: PageTypes.STORE_PAGE, title: 'Store'}
        case MenuActionTypes.SHOW_REPORTS_PAGE_1:
            return {menuItem: PageTypes.REPORTS_PAGE_1, title: 'Worklog: global'}
        case MenuActionTypes.SHOW_REPORTS_PAGE_2:
            return {menuItem: PageTypes.REPORTS_PAGE_2, title: 'Worklog: detail'}
        case MenuActionTypes.SHOW_HELP_PAGE_1:
            return {menuItem: PageTypes.HELP_PAGE_1, title: 'Help 1'}  
        case MenuActionTypes.SHOW_HELP_PAGE_2:
            return {menuItem: PageTypes.HELP_PAGE_2, title: 'Help 2'} 
        
        case MenuActionTypes.SHOW_SCHEDULED_TODAY:
            return {menuItem: PageTypes.SCHEDULED_TODAY, title: 'Today Scheduled Job List'}
        case MenuActionTypes.SHOW_SCHEDULED_WEEK:
            return {menuItem: PageTypes.SCHEDULED_WEEK, title: 'This week Scheduled Job List'}
        case MenuActionTypes.SHOW_ALL_SCHEDULED:
            return {menuItem: PageTypes.ALL_SCHEDULED, title: 'All Scheduled Job List'}
        case MenuActionTypes.SHOW_DRIVER_WORKLOG:
            return {menuItem: PageTypes.DRIVER_WORKLOG, title: 'Driver Worklog List'}
        default:
            return state                             
    }
}