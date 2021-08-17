import { Button, TextField } from "@material-ui/core";
import React, { useEffect } from "react";
import { useFormControls } from "./EmployeeEditFormControls";
import {ControlledOpenSelect} from "../../Gadgets/Select/ControlledOpen/ControlledOpenSelect";
import {useTypesSelector} from "../../../../hooks/menuTypesSelector";
import { useDispatch } from 'react-redux';
import { fetchPositions } from '../../../../store/action-creators/positionscall';

const inputFieldValues = [
  {
    name: "firstname",
    label: "First Name",
    id: "first-name"
  },
  {
    name: "lastname",
    label: "Last Name",
    id: "last-name"
  },
  {
    name: "email",
    label: "E-mail",
    id: "e-mail"
  },
  {
    name: "phone",
    label: "Phone",
    id: "my-phone"
  },
  {
    name: "positionId",
    label: "Position Id",
    id: "my-positionId"
  },
// should be added as exists in DB

  {
    name: "notice",
    label: "Notice",
    id: "my-notice",
    multiline: true,
    rows: 10
  }
  
  
];

export const EmployeeEditForm = (props: any) => {
  const {users } = useTypesSelector(state=> state.user)
  const {positions, loading, error } = useTypesSelector(state=> state.positions)
  const dispatch = useDispatch()

  useEffect( () => {
    dispatch(fetchPositions())
    
  }, [])
  //console.log("Pos id: " + props.empId)
  //console.log("Users length: " + users.length)
  const emp: any = users.filter( (user : any )=> props.empId ===  user.ind)
  //console.log("Users found: " + emp.length)

  if(emp && emp.length > 0){
    console.log("In selected row:");
      Object.entries(emp[0]).forEach(([key, value]) => {
          console.log(key, value);
      });

  }

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
    handlePositionIdValue,
    errors
} = useFormControls(emp[0].firstname, emp[0].lastname, emp[0].email, emp[0].cell, emp[0].positionId, props.empId, handleFormClose);
  /* 
  console.log("In values: ----------------start-----");
  Object.entries(values).forEach(([key, value]) => {
    console.log(key, value);
  });
  console.log("In values: -----------------end------");
 
  
*/



  //const route = [{id : "1", pos : "North York"}, {id: 2, pos : "Markham"}, {id: 3, pos: "Richmond Hill-Vaughan"}]
  const getPositions = () => {
    let arr: any[] 
    arr=[]
    positions.forEach(index =>{
      arr.push({id: index.ind, pos: index.position})
    })
    return arr;
  }

  const position = getPositions();

/*   const getEntries = () =>{
    
    Object.entries(positions).map((key, value)=>{
      console.log(key + " : " + value)
      
    })
  }
 */
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

//value={getValueByKeyName(values, inputFieldValue.name)}
//defaultValue=  {getValueByKeyName(loc, inputFieldValue.name)}  
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

            defaultValue=  {getValueByKeyName(emp, inputFieldValue.name)}   
                    
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

      <ControlledOpenSelect name = 'Position'  posSelect = {position} onPositionChange ={handlePositionIdValue} initPos = {emp[0].positionId} />
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
