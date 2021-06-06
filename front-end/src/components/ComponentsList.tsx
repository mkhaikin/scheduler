import React, { useEffect } from 'react';
import {useSelector} from "react-redux";
import BasicComponent from './dashboard/BasicComponent';
import LocationTable from './dashboard/tables/LocationTable';
import EmployeeTable from './dashboard/tables/EmployeeTable';
import {ContactForm} from './dashboard/Forms/employee/ContactForm';
import {LocationForm} from './dashboard/Forms/location/LocationForm';
import OrderTable from './dashboard/tables/OrderTable';
import DashboardPlate from './dashboard/DashboardPlate'
import Store from './dashboard/GoodsStore/Store';
import Report1 from './dashboard/reports/Report1';
import Report2 from './dashboard/reports/Report2';
import Help1 from './dashboard/help/Help1';
import Help2 from './dashboard/help/Help2';
import {useTypesSelector} from "../hooks/menuTypesSelector";


const components: {[index: string]:any} = {
  BASIC_PAGE:  BasicComponent,
  DASHBOARD_PAGE: DashboardPlate,
  //CUSTOMERS_PAGE: CustomerTable,
  LOCATIONS_PAGE: LocationTable,
  LOCATIONS_FORM: LocationForm,
  EMPLOYEES_PAGE: EmployeeTable,
  EMPLOYEE_FORM: ContactForm,
  ORDERS_PAGE: OrderTable,
  STORE_PAGE: Store,
  REPORTS_PAGE_1: Report1,
  REPORTS_PAGE_2: Report2,
  HELP_PAGE_1: Help1,
  HELP_PAGE_2: Help2,
};

const ComponentsList: React.FC = () => {
    const {menuItem } = useTypesSelector(state=> state.menu)
   
    useEffect( () => {
      console.log("Menu item in ComponentsList: " + menuItem)

    }, [menuItem])
  // In this line I am resolving the component dynamically at runtime 
   // Check for the keys
 
  let TypeComponent;
  if(components.hasOwnProperty(menuItem) && typeof components[menuItem] !== 'undefined' && components[menuItem])
      TypeComponent = components[menuItem];
  else
      TypeComponent = BasicComponent;

  return (
  
    <TypeComponent />
    
  );
 
}

export default ComponentsList;