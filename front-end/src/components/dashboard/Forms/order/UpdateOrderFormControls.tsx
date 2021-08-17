import { useState } from "react";
//import axios from "axios";
import {format} from 'date-fns';
import JobService from '../../../../services/JobService'
import { useDispatch } from 'react-redux';
import { updateJob } from '../../../../store/action-creators/jobcall';

export const useFormControls = (route: any[], driver: any[], fn:any, indJ:any, routeJ: any, driverJ: any, scheduledJ: any, cl:any) => {
  const dispatch = useDispatch()
  
  const initialFormValues = {
    route: route,
    driver: driver,
    formSubmitted: false,
    success: false,
    routeid: 1,
    idname: 1,
    selectedDate:  scheduledJ, // format(new Date(), 'yyyy-MM-dd'),
    indJ: indJ,
    routeJ: routeJ, 
    driverJ: driverJ, 
  };
  const [values, setValues] = useState(initialFormValues);
  //const [errors, setErrors] = useState({} as any);

  const handleSelectedDate = (value: Date) => {
    let d: string
    if(value){
      d = format(value, 'yyyy-MM-dd')                    
      console.log("Date: " + d)
    }
    else 
      d = format(new Date(), 'yyyy-MM-dd')
  
    setValues({
      ...values,
      selectedDate: d
    });
    
    console.log("handleSelectedDate:  " + value)
   
  };

  const handleRouteIdValue = (value: number) => {
  
    setValues({
      ...values,
      //routeid: value
      routeJ:value
    });
    
   
    
    console.log("handleRouteValue:  " + value)
   
  };

  const handleIdNameValue = (value: number) => {
   
    setValues({
      ...values,
     // idname: value
     driverJ: value
    });
    
    console.log("handleIdNameValue:  " + value)
   
  };

  const handleSuccess = () => {
    // console.log("handleSuccess========------")
    setValues({
      ...initialFormValues,
      formSubmitted: true,
      success: true
    });
    //fn(values.routeid, values.idname, values.selectedDate)
    fn(values.routeJ, values.driverJ, values.selectedDate)
  };

  const handleError = () => {
    setValues({
      ...initialFormValues,
      formSubmitted: true,
      success: false
    });
  };

  const handleFormUpdate = async (e: any) => {
    console.log("handleFormUpdate >>>>>>>>>>>>")
    e.preventDefault();   
    //fn(values.routeid, values.idname, values.selectedDate)
    //fn(values.routeJ, values.driverJ, values.selectedDate)
console.log("handleFormUpdate ---> routeJ: " + routeJ + ", driverJ: " + driverJ)
    await UpdateJobOrder(values.indJ, values.routeJ, values.driverJ, values.selectedDate, handleSuccess, handleError);
  };

  const UpdateJobOrder = async (
    ind:number,
    route: number,
    driver:number,
    jobdate: string,
    successCallback: any,
    errorCallback: any
  ) => {
        /* console.log("ind: " + ind)
        console.log("route: " + route)
        console.log("driver: " + driver)
        console.log("jobdate: " + jobdate) */
        
       /*  var obj = {
          ind: '' + ind,
          scheduled: jobdate,
          route: '' + route,
          driver: '' + driver          
        }
      */
       //let res = await axios.put('http://localhost:3000/api/job', obj, {headers: headers})
       dispatch(updateJob(ind, jobdate, route, driver))
       //let res = JobService.UpdateJob(obj)
      //console.log("UpdateJobOrder: " + res) 
      cl(false)
    // do stuff
    // if successful
    if (true) successCallback();
    else errorCallback();
  };

  return {

    handleFormUpdate,
    handleRouteIdValue,
    handleIdNameValue,
    handleSelectedDate
  };
};
