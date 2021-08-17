import React, { useEffect } from 'react';
//import {useSelector} from "react-redux";
import BasicComponent from './dashboard/BasicComponent';
import LocationTable from './dashboard/tables/LocationTable';
import RouteTable from './dashboard/tables/RouteTable';
import EmployeeTable from './dashboard/tables/EmployeeTable';
import {ContactForm} from './dashboard/Forms/employee/ContactForm';
import {LocationForm} from './dashboard/Forms/location/LocationForm';
import OrderTable from './dashboard/tables/OrderTable';
import {OrderForm} from '../components/dashboard/Forms/order/OrderForm'
//import DashboardPlate from './dashboard/DashboardPlate'
import WorklogTabs from './dashboard/panel/Worklogpanel'
import Store from './dashboard/GoodsStore/Store';
//import Report1 from './dashboard/reports/Report1';
import ReportWorklogGlob from './dashboard/reports/ReportWorklogGlob';
import Report2 from './dashboard/reports/Report2';
import Help1 from './dashboard/help/Help1';
import Help2 from './dashboard/help/Help2';
import ScheduledTodayJobT from './dashboard/tables/ScheduledTodayJobT'
import ScheduledWeekJobT from './dashboard/tables/ScheduledWeekJobT'
import ScheduledAllJobT from './dashboard/tables/ScheduledAllJobT'
import DriverWorklogT from './dashboard/tables/DriverWorklogT'

import {useTypesSelector} from "../hooks/menuTypesSelector";


const components: {[index: string]:any} = {
  BASIC_PAGE:  BasicComponent,
  //DASHBOARD_PAGE: DashboardPlate,
  DASHBOARD_PAGE: WorklogTabs,
  //CUSTOMERS_PAGE: CustomerTable,
  LOCATIONS_PAGE: LocationTable,
  LOCATIONS_FORM: LocationForm,
  ROUTES_PAGE: RouteTable,
  EMPLOYEES_PAGE: EmployeeTable,
  EMPLOYEE_FORM: ContactForm,
  ORDERS_PAGE: OrderTable,
  ORDER_FORM: OrderForm,
  STORE_PAGE: Store,
  REPORTS_PAGE_1: ReportWorklogGlob,
  REPORTS_PAGE_2: Report2,
  HELP_PAGE_1: Help1,
  HELP_PAGE_2: Help2,
  SCHEDULED_TODAY: ScheduledTodayJobT,
  SCHEDULED_WEEK: ScheduledWeekJobT,
  ALL_SCHEDULED: ScheduledAllJobT,      // components enum names should be the same as PageTypes
  DRIVER_WORKLOG: DriverWorklogT,
};

const ComponentsList: React.FC = () => {
    const {menuItem } = useTypesSelector(state=> state.menu)
   
    useEffect( () => {
      console.log("Menu item in ComponentsList: " + menuItem)

    }, [menuItem])
  // In this line I am resolving the component dynamically at runtime 
   // Check for the keys
 
  let TypeComponent;
  if(components.hasOwnProperty(menuItem) && typeof components[menuItem] !== 'undefined' && components[menuItem]){
    //console.log("Menu: " + menuItem)
      TypeComponent = components[menuItem];
  }
  else
      TypeComponent = BasicComponent;

  return (
  
    <TypeComponent />
    
  );
 
}

export default ComponentsList;