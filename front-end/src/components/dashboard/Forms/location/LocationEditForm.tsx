import { Button, TextField } from "@material-ui/core";
import React, { useEffect } from "react";
import { useFormControls } from "./LocationEditFormControls";
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

export const LocationEditForm = (props: any) => {
  const {locations } = useTypesSelector(state=> state.location)
  const {routes, loading, error } = useTypesSelector(state=> state.routes)
  const dispatch = useDispatch()



  useEffect( () => {
    dispatch(fetchRoutes())
    
  }, [])

  const loc: any = locations.filter( (location : any )=> props.locId ===  location.ind)
/*
  if(loc && loc.length > 0){
    console.log("In selected row:");
      Object.entries(loc[0]).forEach(([key, value]) => {
          console.log(key, value);
      });
  }
*/
  const handleFormClose = ():void => {
    //e.preventDefault();

    console.log("Closed")
    props.closeDialog(false)
  };

  const {
    values,
    handleInputValue,
    handleFormSubmit,
    formIsValid,
    handleRouteIdValue,
    handleWEValue,
    errors
  } = useFormControls(loc[0].area, loc[0].street_avenue, loc[0].w_e, loc[0].number, loc[0].notice, loc[0].routeId, props.locId, handleFormClose);

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
  let dir: number
  const getDir = ():number=>{ return (loc[0].w_e === "None" || loc[0].w_e === null) ? 1: (loc[0].w_e === "W"? 2:3)}
  dir = getDir()
  console.log("loc[0].w_e=" + loc[0].w_e + ", Dir: " + dir)

/*   const getEntries = () =>{
    
    Object.entries(routes).map((key, value)=>{
      console.log(key + " : " + value)
      
    })
  } */

  const getValueByKeyName = (vals: any, keyName : string) =>{
            var res: any
            res = ""

            console.log("getValueByKeyName => keyName: " + keyName)
            
            for (const [key, value] of Object.entries(values)) {
              if(key === keyName){
                console.log(`${key}: ${value}`);
                return value
              }

            }

            return res;
    }
  
  const handleFormCancel = () => {
    //e.preventDefault();

    console.log("Cansel")
    props.closeDialog(false)
  };
  
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

            defaultValue=  {getValueByKeyName(loc, inputFieldValue.name)}   
                    
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

      <ControlledOpenSelect name = 'Street direction: W/E'  posSelect = {we} onPositionChange ={handleWEValue} initPos = {dir}/>

      <ControlledOpenSelect name = 'Route'  posSelect = {route} onPositionChange ={handleRouteIdValue} initPos = {loc[0].routeId} />
      <Button
        variant="contained"
        type="submit"
        color="secondary"
        disabled={!formIsValid()}
        onClick={handleFormSubmit}
      >
        Save
      </Button>
      <Button
        variant="contained"
       
        color="primary"
        onClick={handleFormCancel}
        
      >
        Cansel
      </Button>
    </form>
  );
};
