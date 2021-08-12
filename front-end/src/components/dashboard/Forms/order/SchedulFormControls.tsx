import { useState } from "react";
//import axios from "axios";
import {format} from 'date-fns';
import JobService from "../../../../services/JobService";


const PostNewOrder = async (
  route: number,
  driver:number,
  jobdate: string,
  successCallback: any,
  errorCallback: any
) => {
      console.log("route: " + route)
      console.log("driver: " + driver)
      console.log("jobdate: " + jobdate)
      
/*       const headers = {
          'Content-Type': 'application/json',
      } */

      var obj = {
        ind: '',
        route: '' + route,
        driver: '' + driver,
        scheduled: jobdate
      }
   
    // let res = await axios.post('http://localhost:3000/api/job', obj, {headers: headers})
     let res = JobService.AddJob(obj)
    console.log("PostNewOrder: " + res)
    
  // do stuff
  // if successful
  if (true) successCallback();
  else errorCallback();
};



export const useFormControls = (route: any[], driver: any[], idname: number, fn:any) => {
  console.log("useFormControls:  " + idname)
  const initialFormValues = {
    route: route,
    driver: driver,
    formSubmitted: false,
    success: false,
    routeid: 1,
    idname: idname,
    selectedDate:  format(new Date(), 'yyyy-MM-dd')
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
      routeid: value
    });
    
    console.log("handleRouteValue:  " + value)
   
  };

  const handleIdNameValue = (value: number) => {
   
    setValues({
      ...values,
      idname: value
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
    fn(values.routeid, values.idname)
  };

  const handleError = () => {
    setValues({
      ...initialFormValues,
      formSubmitted: true,
      success: false
    });
  };

  const handleFormSubmit = async (e: any) => {
    e.preventDefault();

    console.log("handleFormSubmit-------------")
    fn(values.routeid, values.idname)
    await PostNewOrder(values.routeid, values.idname, values.selectedDate, handleSuccess, handleError);
  };

  return {

    handleFormSubmit,
    handleRouteIdValue,
    handleIdNameValue,
    handleSelectedDate
  };
};
