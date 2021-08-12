import { Button, TextField } from "@material-ui/core";
import React, { useEffect } from "react";
import { useFormControls } from "./LocationFormControls";
import {ControlledOpenSelect} from "../../Gadgets/Select/ControlledOpen/ControlledOpenSelect";
import {useTypesSelector} from "../../../../hooks/menuTypesSelector";
import { useDispatch } from 'react-redux';
import { fetchRoutes } from '../../../../store/action-creators/routescall';

const inputFieldValues = [
/*  {
    name: "firsrouteIdtName",
    label: "Route ID",
    id: "my-route"
  }, */
  {
    name: "area",
    label: "Area",
    id: "my-area"
  },
  {
    name: "street_avenue",
    label: "Str/Ave",
    id: "my-street"
  },
  {
    name: "number",
    label: "Number",
    id: "my-number"
  },
/*  {
    name: "w_e",
    label: "W/E",
    id: "my-dir"
  }, */
  {
    name: "notice",
    label: "Notice",
    id: "my-notice",
    multiline: true,
    rows: 10
  }
];

export const LocationForm = () => {

  const {routes, loading, error } = useTypesSelector(state=> state.routes)
  const dispatch = useDispatch()

  useEffect( () => {
    dispatch(fetchRoutes())
    
  }, [])

  const {
    values,
    handleInputValue,
    handleFormSubmit,
    formIsValid,
    handleRouteIdValue,
    handleWEValue,
    errors
  } = useFormControls();
    
  //const route = [{id : "1", pos : "North York"}, {id: 2, pos : "Markham"}, {id: 3, pos: "Richmond Hill-Vaughan"}]
  const getRoutes = () => {
    let arr: any[] 
    arr=[]
    routes.forEach(index =>{
      arr.push({id: index.ind, pos: index.name})
    })
    return arr;
  }

  const route = getRoutes();

  const we = [{id : 1, pos : "None"}, {id: 2, pos : "W"}, {id: 3, pos: "E"}]

  //console.log("In Form => " + values["firstName"])
/*   const getEntries = () =>{
    
    Object.entries(routes).map((key, value)=>{
      console.log(key + " : " + value)
      
    })
  } */

  const getValueByKeyName = (vals: any, keyName : string) =>{
            var res: any
            res = ""
            Object.entries(vals).map(([key,value])=>{
                
                if(key === keyName){
                    //console.log("getValueByKeyName => " + key + " value: " + value)
                    res = value
                }
            })
            return res;
        }
  
  if(loading) {
    return <h1>Loading...</h1>
  }
  if(error){
    return <h1>{error}</h1>
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
      <ControlledOpenSelect name = 'Street direction: W/E'  posSelect = {we} onPositionChange ={handleWEValue} />

      <ControlledOpenSelect name = 'Route'  posSelect = {route} onPositionChange ={handleRouteIdValue}  />
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
