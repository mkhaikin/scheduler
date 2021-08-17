import { Button, Grid, Typography  } from "@material-ui/core";
import React,  { useEffect } from "react";
import { useFormControls } from "./OrderFormControls";
import {ControlledOpenSelect} from "../../Gadgets/Select/ControlledOpen/ControlledOpenSelect";
import {useTypesSelector} from "../../../../hooks/menuTypesSelector";
import { useDispatch } from 'react-redux';
import { fetchRoutes } from '../../../../store/action-creators/routescall';
import {fetchUsersIdName} from '../../../../store/action-creators/usercall';
import MaterialUIPickers from '../../Gadgets/Picker/Picker';
import ScheduledJobTable from '../../tables/ScheduledJobTable';
import { fetchJobs } from '../../../../store/action-creators/jobcall';

export const OrderForm = () => {
  const {routes } = useTypesSelector(state=> state.routes)
  const routesLoading = useTypesSelector(state=> state.routes.loading)
  const routesError = useTypesSelector(state=> state.routes.error)

  const {usersIdName } = useTypesSelector(state=> state.user)
  const usersLoading = useTypesSelector(state=> state.user.loadingId)
  const usersError = useTypesSelector(state=> state.user.errorId)
  
  const dispatch = useDispatch()

  useEffect( () => {
    dispatch(fetchRoutes())
    dispatch(fetchUsersIdName())
  }, [])

  const getChoise = (routeid:number, idname:number, selectedDate: string) =>{
    console.log("routeid: " + routeid + ", idname: " + idname + " selectedDate: " + selectedDate)
    return {routeid:routeid, idname:idname, selectedDate:selectedDate}
    
  }

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
  let init:string = '' + initPos

  const {
    //    values,
        handleFormSubmit,
        handleRouteIdValue,
        handleIdNameValue,
        handleSelectedDate,
    //    errors
      } = useFormControls(routes, usersIdName, initPos, getChoise); 

  //const i = "'" + 3 + "'"
//{i}

   
  if(routesLoading || usersLoading) {
    return <h1>Loading...</h1>
  }
  if(routesError || usersError){
    return ( 
        <div>
          <div>
            <h1>{routesError}</h1>
          </div>
          <div>
            <h1>{usersError}</h1>
          </div>
        </div>
      )
  }

  return (
    
       
    <Grid container direction="column" >
      New Job:
      <form autoComplete="off" onSubmit={handleFormSubmit}>
        <Grid container direction="column" >
          <Grid container direction="row">
            <ControlledOpenSelect name = 'Route'  posSelect = {route}  onPositionChange ={handleRouteIdValue} initPos = '1' /> 
            <ControlledOpenSelect name = 'Drivers'  posSelect = {driver}  onPositionChange ={handleIdNameValue}  initPos = {init}/>
            <MaterialUIPickers onDateChanged = {handleSelectedDate} dispast={true} />
          </Grid>
          <Grid xs={6} sm={3}>
            <Button
              variant="contained"
              type="submit"
              color="secondary"
              onClick={handleFormSubmit}
            >
              Save
            </Button>
          </Grid>
        </Grid>
      </form>
      <Button variant="contained" color="primary" onClick={()=>{dispatch(fetchJobs())}} >
          Update Job Table
      </Button>
      <Typography variant="h5" component="h2" align="center">
          Current & Future Job Table
      </Typography>
      <ScheduledJobTable/>
    </Grid>
    
  );
};

