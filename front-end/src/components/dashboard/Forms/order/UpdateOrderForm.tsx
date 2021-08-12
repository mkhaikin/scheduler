import { Button, Grid,  } from "@material-ui/core";
import React,  { useEffect } from "react";
import { useFormControls } from "./UpdateOrderFormControls";
import {ControlledOpenSelect} from "../../Gadgets/Select/ControlledOpen/ControlledOpenSelect";
import {useTypesSelector} from "../../../../hooks/menuTypesSelector";
import { useDispatch } from 'react-redux';
import { fetchRoutes } from '../../../../store/action-creators/routescall';
import {fetchUsersIdName} from '../../../../store/action-creators/usercall';
import MaterialUIPickers from '../../Gadgets/Picker/Picker';
//import ScheduledJobTable from '../../tables/ScheduledJobTable';
//import { fetchJobs } from '../../../../store/action-creators/jobcall';

//export const UpdateOrderForm = (indJ:any, routeJ: any, driverJ: any, scheduledJ: any, closeDialog:any) => {
export const UpdateOrderForm = (props:any) => {
  const {routes } = useTypesSelector(state=> state.routes)
  const routesLoading = useTypesSelector(state=> state.routes.loading)
  const routesError = useTypesSelector(state=> state.routes.error)

  const {usersIdName } = useTypesSelector(state=> state.user)
  const usersLoading = useTypesSelector(state=> state.user.loadingId)
  const usersError = useTypesSelector(state=> state.user.errorId)

  const jobUpdating = useTypesSelector(state=> state.job.loading)
  const jobUpdateError = useTypesSelector(state=> state.job.error)

  let jobdate:string= props.scheduledJ
  let formatted_date = jobdate.replace(/-/g, '/');
  
  /**/ 
  console.log("---------000000-------")
  console.log("indJ: " + props.indJ)
  console.log("routeJ: " + props.routeJ)
  console.log("driverJ: " + props.driverJ)
  console.log("scheduledJ: " + props.scheduledJ)
  //console.log("Date formated: " + formatted_date)
  //console.log("Date formated: " + formatted_date)


  console.log("---------xxxxxx-------")
  /**/
  const dispatch = useDispatch()

  useEffect( () => {
    dispatch(fetchRoutes())
    dispatch(fetchUsersIdName())
  }, [])

  const getChoise = (routeid:number, idname:number, datenew:string) =>{
    console.log("routeid: " + routeid + ", idname: " + idname + ", datenew: " + datenew)
    return {routeid:routeid, idname:idname, datenew:datenew}
    
  }

  const {
//    values,
    handleFormUpdate,
    handleRouteIdValue,
    handleIdNameValue,
    handleSelectedDate,
//    errors
  } = useFormControls(routes, usersIdName, getChoise, props.indJ, props.routeJ, props.driverJ, props.scheduledJ, props.closeDialog); 

 

  const getRoutes = () => {
    let arr: any[] 
    arr=[]
    routes.forEach(index =>{
      //console.log("getRoutes, ind: " + index.ind + ", pos: " + index.name)
      arr.push({id: index.ind, pos: index.name})
    })
    return arr;
  }
  const route = getRoutes();

  const getIdName = () => {
    let arr: any[] 
    arr=[]
    usersIdName.forEach(index =>{
      console.log("getIdName, ind: " + index.ind + ", pos: " + index.idname)
      //console.log(JSON.stringify(index))
      arr.push({id: index.ind, pos: index.idname})
    })
    return arr;
  }
  const driver = getIdName();

  
  let initPos = 1;
  if(typeof driver !== 'undefined' && driver && driver.length !== 0){
      console.log( "DRIVER ID: " + driver[0].id)
      initPos = driver[0].id
  } 
  //let init:string = '' + initPos
  //const i = "'" + 3 + "'"
//{i}

const handleFormCancel = () => {
  //e.preventDefault();

  console.log("Cansel")
  props.closeDialog(false)
};
//onSubmit={handleFormUpdate}
  if(routesLoading || usersLoading) {
    return <h1>Loading settings...</h1>
  }
  if(jobUpdating) {
    return <h1>Updating jobs...</h1>
  }
  

   
  

  if(routesError || usersError || jobUpdateError){
    return ( 
        <div>
          <div>
            <h1>{routesError}</h1>
          </div>
          <div>
            <h1>{usersError}</h1>
          </div>
          <div>
            <h1>{jobUpdateError}</h1>
          </div>
        </div>
      )
  }

  return (
      <form autoComplete="off" >
        <Grid container direction="column" >
          <Grid container direction="row">
            <ControlledOpenSelect name = 'Route'  posSelect = {route}  onPositionChange ={handleRouteIdValue} initPos = {props.routeJ} /> 
            <ControlledOpenSelect name = 'Drivers'  posSelect = {driver}  onPositionChange ={handleIdNameValue}  initPos = {props.driverJ}/>
            <MaterialUIPickers onDateChanged = {handleSelectedDate} dispast={true} jobdate={formatted_date}/>
          </Grid>
          <Grid xs={6} sm={3}>
            <Button
              variant="contained"
              type="submit"
              color="secondary"
              onClick={handleFormUpdate}
            >
              Update
            </Button>
            <Button
              variant="contained"
              
              color="primary"
              onClick={handleFormCancel}
            >
              Cancel
            </Button>

          </Grid>
        </Grid>
      </form>
     
 
    
  );
};
