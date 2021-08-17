import { Button, TextField } from "@material-ui/core";
import React from "react";
import { useFormControls } from "./ContactFormControls";
import {ControlledOpenSelect} from "../../Gadgets/Select/ControlledOpen/ControlledOpenSelect";

const inputFieldValues = [
  {
    name: "firstName",
    label: "First Name",
    id: "my-name"
  },
  {
    name: "lastName",
    label: "Last Name",
    id: "my-lastname"
  },
  {
    name: "email",
    label: "Email",
    id: "my-email"
  },
  {
    name: "phone",
    label: "Phone",
    id: "my-phone"
  },
  {
    name: "notice",
    label: "Notice",
    id: "my-notice",
    multiline: true,
    rows: 10
  }
];

export const ContactForm = () => {
  const {
    values,
    handleInputValue,
    handleFormSubmit,
    formIsValid,
    handlePositionValue,
    errors
  } = useFormControls();

  //const value = (name:string)=>{ return values[name]}

  const employee = [{id : 1, pos : "admin"}, {id: 2, pos : "manager"}, {id: 3, pos: "driver"}]

  //console.log("In Form => " + values["firstName"])

  const getValueByKeyName = (vals: any, keyName : string) =>{
            var res: any
            res = ""
            Object.entries(vals).map(([key,value])=>{  // forEach ?
                
                if(key === keyName){
                    //console.log("getValueByKeyName => " + key + " value: " + value)
                    res = value
                }
            })
            return res;
        }
    
  return (
    <form autoComplete="off" onSubmit={handleFormSubmit}>
      {inputFieldValues.map((inputFieldValue, index) => {
        return (
          <TextField
            key={index}
            onChange={handleInputValue}
            onBlur={handleInputValue}
            name={inputFieldValue.name}
            label={inputFieldValue.label}
            value={getValueByKeyName(values, inputFieldValue.name)}
            error={errors[inputFieldValue.name]}
            multiline={inputFieldValue.multiline ?? false}
            fullWidth
            rows={inputFieldValue.rows ?? 1}
            autoComplete="none"
            {...(errors[inputFieldValue.name] && {
              error: true,
              helperText: errors[inputFieldValue.name]
            })}
          />
        );
      })}
      <ControlledOpenSelect name = 'Position'  posSelect = {employee} onPositionChange ={handlePositionValue}  />
      <Button
        variant="contained"
        type="submit"
        color="secondary"
        disabled={!formIsValid()}
        onClick={handleFormSubmit}
      >
        Save
      </Button>
    </form>
  );
};
