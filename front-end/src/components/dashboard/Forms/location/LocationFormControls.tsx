import { useState } from "react";
import axios from "axios";
import qs from "qs";


const PostContactForm = async (
  values: any,
  successCallback: any,
  errorCallback: any
) => {

    const headers = {
        'Content-Type': 'application/json',
    }
  
  var obj = {
    routeId:  values.routeId,
    area: values.area, 
    street_avenue: values.street_avenue,
    w_e: values.w_e,
    number: values.number,
    notice: values.notice,
  }
    
    let res = await axios.post('http://localhost:3000/api/location', obj, {headers: headers})
    console.log(res)
    
  // do stuff
  // if successful
  if (true) successCallback();
  else errorCallback();
};

const initialFormValues = {
  area: "",
  street_avenue: "",
  w_e: 0,
  number: "1",
  notice: "",
  routeId: 1,
  formSubmitted: false,
  success: false
};

export const useFormControls = () => {
  const [values, setValues] = useState(initialFormValues);
  const [errors, setErrors] = useState({} as any);

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
    //console.log("handlePositionValue:  " + value)
   
  };

  const handleWEValue = (value: number) => {
    
    setValues({
      ...values,
      w_e: value
    });
    //console.log("handlePositionValue:  " + value)
   
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
      await PostContactForm(values, handleSuccess, handleError);
      
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
