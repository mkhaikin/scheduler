import { useState } from "react";
import axios from "axios";
import qs from "qs";


const PostContactForm = async (
  values: any,
  successCallback: any,
  errorCallback: any
) => {

    var obj2 = JSON.parse(JSON.stringify(values));
   
  /*    
            console.log("firstName: " + obj2.firstName)
            console.log("lastName: " + obj2.lastName)
            console.log("email: " + obj2.email)
            console.log("phone: " + obj2.phone)
            console.log("notice: " + obj2.notice)
            console.log("position: " + obj2.position)
*/
        const headers = {
            'Content-Type': 'application/json',
        }


  
  var obj3 = {
    firstName:  values.firstName,
    lastName: values.lastName,
    email: values.email,
    phone: values.phone,
    notice: values.notice,
    position: values.position,
}
    //let res = await axios.post('http://localhost:3000/api/staff/user', {title: "Test", id: 4}, {headers: headers})
    let res = await axios.post('http://localhost:3000/api/staff/user', obj3, {headers: headers})
    console.log(res)
    
  // do stuff
  // if successful
  if (true) successCallback();
  else errorCallback();
};

const initialFormValues = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  notice: "",
  position: 3,
  formSubmitted: false,
  success: false
};

export const useFormControls = () => {
  const [values, setValues] = useState(initialFormValues);
  const [errors, setErrors] = useState({} as any);

  const validate: any = (fieldValues = values) => {
    let temp: any = { ...errors };

    if ("firstName" in fieldValues)
      temp.firstName = fieldValues.firstName ? "" : "This field is required.";

    if ("lastName" in fieldValues)
        temp.lastName = fieldValues.lastName ? "" : "This field is required.";      

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

    if ("notice" in fieldValues)
      temp.message =
        fieldValues.notice.length !== 0 ? "" : "This field is required.";

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

  const handlePositionValue = (value: number) => {
    
    setValues({
      ...values,
      position: value
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
      fieldValues.firstName &&
      fieldValues.lastName &&
      fieldValues.email &&
      fieldValues.phone &&
      fieldValues.notice &&
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
    handlePositionValue
  };
};
