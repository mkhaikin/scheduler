import React, { useEffect, useContext } from 'react';
import { DataGrid} from '@material-ui/data-grid';
import {getRows} from './ScheduledWeekJobTM'
import {useTypesSelector} from "../../../hooks/menuTypesSelector";
import { useDispatch } from 'react-redux';
import { fetchDriverWeekJobs } from '../../../store/action-creators/jobcall';
import {Context} from '../../../index'

//import JobService from '../../../services/JobService'

import {
  GridColDef,
} from "@material-ui/data-grid";
import { useCallback } from 'react';


export default function ScheduledWeekJobTable() {
  const {userstore} = useContext(Context)
  const {jobs, loading, error } = useTypesSelector(state=> state.job)
  const dispatch = useDispatch()

   const getWeekjobs = useCallback(() => {
    if(userstore.isAuth)
      dispatch(fetchDriverWeekJobs())
  }, [dispatch, userstore.isAuth]) 

  useEffect( () => {
    //dispatch(fetchJobs())
    /* if(userstore.isAuth)
      dispatch(fetchDriverWeekJobs())  */
   getWeekjobs()
  }, [getWeekjobs])




  if(loading) {
    return <h1>Loading...</h1>
  }
  if(error){
    return <h1>{error}</h1>
  }

  const scheduled = jobs?.[0]?.scheduled
const route = jobs?.[0]?.route
const driver = jobs?.[0]?.driver // id and full name

const columns: GridColDef[] = [

    {field: 'id', headerName: '#', width: 100, hide: true},
    {field: 'scheduled', headerName: 'Scheduled', width: 150},
    {field: 'route', headerName: 'Route', width: 400},
    {field: 'driver', headerName: 'Driver', width: 200},
];

/*
let datacolumns: GridColDef[];
datacolumns = getCols();

let cols: GridColDef[];
cols = [...columns, ...datacolumns]
*/


  return (
    <div style={{ height: 350, width: '100%' }}>  
        {scheduled && driver && route ? `${scheduled} job list for ${driver}` : null}   
        <DataGrid rows={getRows(jobs)} columns={columns} pageSize={15} checkboxSelection rowHeight={25}  
        components={{
          NoRowsOverlay: () => {
            
            return <div>No scheduled jobs, sorry!</div>;
          },
        }}
        />   
    </div>    
  );
}
