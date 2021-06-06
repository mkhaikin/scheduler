export interface MenuState{
    menuItem:string;
    title: string;
}

export enum MenuActionTypes{
    SHOW_DASHBOARD_PAGE = 'SHOW_DASHBOARD_PAGE',
    SHOW_ORDERS_PAGE = 'SHOW_ORDERS_PAGE',
    //SHOW_CUSTOMERS_PAGE = 'SHOW_CUSTOMERS_PAGE',
    SHOW_LOCATIONS_PAGE = 'SHOW_LOCATIONS_PAGE',
    SHOW_LOCATIONS_FORM = 'SHOW_LOCATIONS_FORM',
    SHOW_EMPLOYEES_PAGE = 'SHOW_EMPLOYEES_PAGE',
    SHOW_EMPLOYEE_FORM = 'SHOW_EMPLOYEE_FORM',
    SHOW_STORE_PAGE = 'SHOW_STORE_PAGE',
    SHOW_REPORTS_PAGE_1 = 'SHOW_REPORTS_PAGE_1',
    SHOW_REPORTS_PAGE_2 = 'SHOW_REPORTS_PAGE_2',
    SHOW_HELP_PAGE_1 = 'SHOW_HELP_PAGE_1',
    SHOW_HELP_PAGE_2 = 'SHOW_HELP_PAGE_2',
}

export enum PageTypes{
    DASHBOARD_PAGE = 'DASHBOARD_PAGE',
    ORDERS_PAGE = 'ORDERS_PAGE',
    //CUSTOMERS_PAGE = 'CUSTOMERS_PAGE',
    LOCATIONS_PAGE = 'LOCATIONS_PAGE',
    LOCATIONS_FORM = 'LOCATIONS_FORM',
    EMPLOYEES_PAGE = 'EMPLOYEES_PAGE',
    EMPLOYEE_FORM = 'EMPLOYEE_FORM',
    STORE_PAGE = 'STORE_PAGE',
    REPORTS_PAGE_1 = 'REPORTS_PAGE_1',
    REPORTS_PAGE_2 = 'REPORTS_PAGE_2',
    HELP_PAGE_1 = 'HELP_PAGE_1',
    HELP_PAGE_2 = 'HELP_PAGE_2',
}

interface DashboardMenuAction{
    type: MenuActionTypes.SHOW_DASHBOARD_PAGE;
}

interface OrdersMenuAction{
    type: MenuActionTypes.SHOW_ORDERS_PAGE;
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

export type MenuAction = DashboardMenuAction 
| OrdersMenuAction 
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