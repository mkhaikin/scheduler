import { useState } from "react";
//import axios from "axios";
import { useDispatch } from 'react-redux';
import { addLocation } from '../../../../store/action-creators/locationcall';


/* const PostContactForm = async (
  values: any,
  successCallback: any,
  errorCallback: any
) => {
//  const dispatch = useDispatch()

    let dir: any
    
    switch (values.w_e){
      case 2: dir = 'W'
        break;
      case 3: dir = 'E'
        break;
      default: dir = null
    }
  
  var obj = {
    routeId:  values.routeId,
    area: values.area, 
    street_avenue: values.street_avenue,
    w_e: dir,
    number: values.number,
    notice: values.notice,
  }

  console.log( "routeId: " + obj.routeId)
  console.log( "area: " + obj.area)
  console.log( "street_avenue: " + obj.street_avenue)
  console.log( "w_e: " + obj.w_e)
  console.log( "number: " + obj.number)
  console.log( "notice" + obj.notice)

  //let res = await axios.post('http://localhost:3000/api/location', obj, {headers: headers})
  //console.log(res)
  dispatch(addLocation(values.routeId, values.area, values.street_avenue, dir,  values.number, values.notice))
    // do stuff
  // if successful
  if (true) successCallback();
  else errorCallback();
}; */

const initialFormValues = {
  area: "",
  street_avenue: "",
  w_e: 1,
  number: "1",
  notice: "",
  routeId: 1,
  formSubmitted: false,
  success: false
};

export const useFormControls = () => {
  const [values, setValues] = useState(initialFormValues);
  const [errors, setErrors] = useState({} as any);

  const dispatch = useDispatch()

  const validate: any = (fieldValues = values) => {
    let temp: any = { ...errors };

    if ("area" in fieldValues)
      temp.area = fieldValues.area ? "" : "This field is required.";

    if ("street_avenue" in fieldValues)
        temp.street_avenue = fieldValues.street_avenue ? "" : "This field is required.";          

    if ("number" in fieldValues) {
        temp.number = fieldValues.number ? "" : "This field is required.";
        if (fieldValues.number)
          temp.number = /^\d+$/.test(fieldValues.number)
            ? ""
            : "Number is not valid.";
      }

    setErrors({
      ...temp
    });
  };

  const handleInputValue = (e: any) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    });
    validate({ [name]: value });
  };

  const handleRouteIdValue = (value: number) => {
    
    setValues({
      ...values,
      routeId: value
    });
    console.log("handleRouteValue:  " + value)
   
  };

  const handleWEValue = (value: number) => {
    
    setValues({
      ...values,
      w_e: value
    });
    console.log("handleWEValue:  " + value)
   
  };

  const handleSuccess = () => {
    // console.log("handleSuccess========------")
    setValues({
      ...initialFormValues,
      formSubmitted: true,
      success: true
    });
    
  };

  const handleError = () => {
    setValues({
      ...initialFormValues,
      formSubmitted: true,
      success: false
    });
  };

  const formIsValid = (fieldValues = values) => {
    const isValid =
      fieldValues.area &&
      fieldValues.street_avenue &&
      fieldValues.number &&
      Object.values(errors).every((x) => x === "");

    return isValid;
  };

  const handleFormSubmit = async (e: any) => {
    e.preventDefault();

    const isValid =
      Object.values(errors).every((x) => x === "") && formIsValid();
    if (isValid) {
      await PostContactForm(values, handleSuccess, handleError, dispatch);
      
    }
  };

  return {
    values,
    errors,
    handleInputValue,
    handleFormSubmit,
    formIsValid,
    handleRouteIdValue,
    handleWEValue
  };
};

const PostContactForm = async (
  values: any,
  successCallback: any,
  errorCallback: any,
  dispatch: any
) => {
//  const dispatch = useDispatch()

  let dir: any
    
    switch (values.w_e){
      case 2: dir = 'W'
        break;
      case 3: dir = 'E'
        break;
      default: dir = null
    }
  
  var obj = {
    routeId:  values.routeId,
    area: values.area, 
    street_avenue: values.street_avenue,
    w_e: dir,
    number: values.number,
    notice: values.notice,
  }

  console.log( "routeId: " + obj.routeId)
  console.log( "area: " + obj.area)
  console.log( "street_avenue: " + obj.street_avenue)
  console.log( "w_e: " + obj.w_e)
  console.log( "number: " + obj.number)
  console.log( "notice" + obj.notice)

  //let res = await axios.post('http://localhost:3000/api/location', obj, {headers: headers})
  //console.log(res)
  dispatch(addLocation(values.routeId, values.area, values.street_avenue, dir,  values.number, values.notice))
    // do stuff
  // if successful
  if (true) successCallback();
  else errorCallback();
};
