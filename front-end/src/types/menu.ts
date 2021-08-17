export interface MenuState{
    menuItem:string;
    title: string;
}

export enum MenuActionTypes{
    SHOW_BASIC_PAGE = 'SHOW_BASIC_PAGE',
    SHOW_DASHBOARD_PAGE = 'SHOW_DASHBOARD_PAGE',
    SHOW_ORDERS_PAGE = 'SHOW_ORDERS_PAGE',
    SHOW_ORDER_FORM = 'SHOW_ORDER_FORM',
    //SHOW_CUSTOMERS_PAGE = 'SHOW_CUSTOMERS_PAGE',
    SHOW_LOCATIONS_PAGE = 'SHOW_LOCATIONS_PAGE',
    SHOW_LOCATIONS_FORM = 'SHOW_LOCATIONS_FORM',
    SHOW_ROUTES_PAGE = 'SHOW_ROUTES_PAGE',
    SHOW_EMPLOYEES_PAGE = 'SHOW_EMPLOYEES_PAGE',
    SHOW_EMPLOYEE_FORM = 'SHOW_EMPLOYEE_FORM',
    SHOW_STORE_PAGE = 'SHOW_STORE_PAGE',
    SHOW_REPORTS_PAGE_1 = 'SHOW_REPORTS_PAGE_1',
    SHOW_REPORTS_PAGE_2 = 'SHOW_REPORTS_PAGE_2',
    SHOW_HELP_PAGE_1 = 'SHOW_HELP_PAGE_1',
    SHOW_HELP_PAGE_2 = 'SHOW_HELP_PAGE_2',

    SHOW_SCHEDULED_TODAY = 'SHOW_SCHEDULED_TODAY',
    SHOW_SCHEDULED_WEEK = 'SHOW_SCHEDULED_WEEK',
    SHOW_ALL_SCHEDULED = 'SHOW_ALL_SCHEDULED',
    SHOW_DRIVER_WORKLOG = 'SHOW_DRIVER_WORKLOG',
}

export enum PageTypes{
    BASIC_PAGE =  'BASIC_PAGE',
    DASHBOARD_PAGE = 'DASHBOARD_PAGE',
    ORDERS_PAGE = 'ORDERS_PAGE',
    ORDER_FORM = 'ORDER_FORM',
    //CUSTOMERS_PAGE = 'CUSTOMERS_PAGE',
    LOCATIONS_PAGE = 'LOCATIONS_PAGE',
    LOCATIONS_FORM = 'LOCATIONS_FORM',
    ROUTES_PAGE = 'ROUTES_PAGE',
    EMPLOYEES_PAGE = 'EMPLOYEES_PAGE',
    EMPLOYEE_FORM = 'EMPLOYEE_FORM',
    STORE_PAGE = 'STORE_PAGE',
    REPORTS_PAGE_1 = 'REPORTS_PAGE_1',
    REPORTS_PAGE_2 = 'REPORTS_PAGE_2',
    HELP_PAGE_1 = 'HELP_PAGE_1',
    HELP_PAGE_2 = 'HELP_PAGE_2',

    SCHEDULED_TODAY = 'SCHEDULED_TODAY',
    SCHEDULED_WEEK = 'SCHEDULED_WEEK',
    ALL_SCHEDULED = 'ALL_SCHEDULED',
    DRIVER_WORKLOG = 'DRIVER_WORKLOG',
}

interface BasicMenuAction{
    type: MenuActionTypes.SHOW_BASIC_PAGE;
}

interface DashboardMenuAction{
    type: MenuActionTypes.SHOW_DASHBOARD_PAGE;
}

interface OrdersMenuAction{
    type: MenuActionTypes.SHOW_ORDERS_PAGE;
}

interface OrderFormMenuAction{
    type: MenuActionTypes.SHOW_ORDER_FORM;
}
/*
interface CustomersMenuAction{
    type: MenuActionTypes.SHOW_CUSTOMERS_PAGE;
}*/

interface LocationsMenuAction{
    type: MenuActionTypes.SHOW_LOCATIONS_PAGE;
}

interface LocationFormMenuAction{
    type: MenuActionTypes.SHOW_LOCATIONS_FORM;
}

interface RoutesMenuAction{
    type: MenuActionTypes.SHOW_ROUTES_PAGE;
}

interface EmployeesMenuAction{
    type: MenuActionTypes.SHOW_EMPLOYEES_PAGE;
}

interface EmployeeFormMenuAction{
    type: MenuActionTypes.SHOW_EMPLOYEE_FORM;
}

interface StoreMenuAction{
    type: MenuActionTypes.SHOW_STORE_PAGE;
}

interface Report1MenuAction{
    type: MenuActionTypes.SHOW_REPORTS_PAGE_1;
}

interface Report2MenuAction{
    type: MenuActionTypes.SHOW_REPORTS_PAGE_2;
}

interface Help1MenuAction{
    type: MenuActionTypes.SHOW_HELP_PAGE_1;
}

interface Help2MenuAction{
    type: MenuActionTypes.SHOW_HELP_PAGE_2;
}

interface ShowScheduledTodyMenuAction{
    type: MenuActionTypes.SHOW_SCHEDULED_TODAY;
}

interface ShowScheduledWeekMenuAction{
    type: MenuActionTypes.SHOW_SCHEDULED_WEEK;
}

interface ShowAllScheduledMenuAction{
    type: MenuActionTypes.SHOW_ALL_SCHEDULED;
}

interface ShowDriverWorklogMenuAction{
    type: MenuActionTypes.SHOW_DRIVER_WORKLOG;
}

export type MenuAction = DashboardMenuAction 
| BasicMenuAction
| OrdersMenuAction
| OrderFormMenuAction 
//| CustomersMenuAction 
| LocationsMenuAction 
| LocationFormMenuAction
| EmployeesMenuAction 
| EmployeeFormMenuAction
| StoreMenuAction 
| Report1MenuAction 
| Report2MenuAction 
| Help1MenuAction 
| Help2MenuAction
| RoutesMenuAction
| ShowScheduledTodyMenuAction
| ShowScheduledWeekMenuAction
| ShowAllScheduledMenuAction
| ShowDriverWorklogMenuAction