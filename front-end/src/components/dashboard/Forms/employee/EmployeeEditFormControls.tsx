import { useState } from "react";
/* import axios from "axios";
import qs from "qs";
import { CancelScheduleSend } from "@material-ui/icons"; */
import { useDispatch } from 'react-redux';
import { updateUser } from '../../../../store/action-creators/usercall'




export const useFormControls = (firstname:string, lastname: string, email: string, phone: string, positionId: number, ind:number, fn:any) => {
  ///////////////////////////////////////////////////////////////////////////////////////////////////
 
  const dispatch = useDispatch()
  
  const UpdateContactForm = async (
    values: any,
    successCallback: any,
    errorCallback: any
  ) => {
    
  
/*       const headers = {
          'Content-Type': 'application/json',
      } */

  //  console.log("<<<<<<<<<<<<<<>>>>>>>>>>>>>>>" + values.ind)
/*     var obj = {
      ind: values.ind,
      firstname:  values.firstname,
      lastname: values.lastname, 
      email: values.email,
      phone: values.phone,
      positionId: values.positionId,
      //notice: values.notice,
    } */
  /*  
  console.log( "Update contact employee --->> ")
    console.log( "ind: " + obj.ind)
    console.log( "firstname: " + obj.firstname)
    console.log( "lastname: " + obj.lastname)
    console.log( "email: " + obj.email)
    console.log( "phone: " + obj.phone)
    console.log( "positionId: " + obj.positionId)
    console.log( "Update contact employee <<--- ")
  */
    
    dispatch(updateUser(values.ind, values.firstname, values.lastname, values.email, values.phone, values.positionId)) 
      // do stuff
    // if successful
  //  console.log("Update: " + res.statusText)
    //if (res.statusText === "OK"){ 
      if(true){
      //console.log("Update success, statusText: OK")
      successCallback();
      return false
    }
    else {
     console.log("Update failed")
      errorCallback();
      return true
    }
  };
  ///////////////////////////////////////////////////////////////////////////////////////
  /*
  console.log("In useFormControls >>>>>>>>>>>>.")
  console.log("firstname " + firstname)
  console.log("lastname " + street_avenue)
  console.log("email " + email)lastname
  console.log("phone " + phone)
  //console.log("notice " + notice)
  console.log("positionId " + positionId)
  console.log("In useFormControls <<<<<<<<<<<<<<<.")
*/
//console.log("Function " + fn)

  const initialFormValues = {
    ind: ind,
    firstname: firstname,
    lastname: lastname,
    email: email,
    phone: phone,
  //  notice: notice,
    positionId: positionId,
    formSubmitted: false,
    success: false
  };
  const [values, setValues] = useState(initialFormValues);
  const [errors, setErrors] = useState({} as any);

  const validate: any = (fieldValues = values) => {
    let temp: any = { ...errors };

    if ("firstname" in fieldValues)
      temp.firstname = fieldValues.firstname ? "" : "This field is required.";

    if ("lastname" in fieldValues)
        temp.lastname = fieldValues.lastname ? "" : "This field is required.";      

    if ("email" in fieldValues) {
      temp.email = fieldValues.email ? "" : "This field is required.";
      if (fieldValues.email)
        temp.email = /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(fieldValues.email)
          ? ""
          : "Email is not valid.";
    }

    if ("phone" in fieldValues) {
      temp.phone = fieldValues.phone ? "" : "This field is required.";
      if (fieldValues.phone)
        temp.phone = /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/.test(fieldValues.phone)
          ? ""
          : "Phone is not valid.";
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

  const handlePositionIdValue = (value: number) => {
    
    setValues({
      ...values,
      positionId: value
    });
    console.log("handlePositionValue:  " + value)
   
  };

  const handleSuccess = () => {
    // console.log("handleSuccess========------")
    setValues({
      ...initialFormValues,
      formSubmitted: true,
      success: true
    });

    fn()
  };

  const handleError = () => {
    setValues({
      ...initialFormValues,
      formSubmitted: true,
      success: false
    });
  };

  const formIsValid = (fieldValues = values) => {
    /* 
    console.log("formIsValid-->> firstname: " + fieldValues.firstname)
    console.log("formIsValid-->> lastname: " + fieldValues.lastname)
    console.log("formIsValid-->> email: " + fieldValues.email)
    console.log("formIsValid-->> phone: " + fieldValues.phone)
    console.log("formIsValid <<----- ")
    */
    const isValid =
      fieldValues.firstname &&
      fieldValues.lastname &&
      fieldValues.email &&
      fieldValues.phone &&
      Object.values(errors).every((x) => x === "");

    return isValid;
  };

  const handleFormSubmit = async (e: any) => {
    e.preventDefault();

    const isValid = Object.values(errors).every((x) => x === "") && formIsValid();
    if (isValid) {
      await UpdateContactForm(values, handleSuccess, handleError);
    }
  };

  return {
    values,
    errors,
    handleInputValue,
    handleFormSubmit,
    formIsValid,
    handlePositionIdValue,

  };
};
