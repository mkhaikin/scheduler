import React, { useEffect, useContext } from 'react';
import { DataGrid} from '@material-ui/data-grid';
import {getRows} from './DriverWorklogTM'
import {useTypesSelector} from "../../../hooks/menuTypesSelector";
import { useDispatch } from 'react-redux';
import { fetcDriverhWorklogs } from '../../../store/action-creators/worklogcall';
import {Context} from '../../../index'

//import JobService from '../../../services/JobService'

import {
  GridColDef,  
} from "@material-ui/data-grid";


export default function DriverWorklogTable() {
  const {userstore} = useContext(Context)
  const {worklog, loading, error } = useTypesSelector(state=> state.worklog)
  const dispatch = useDispatch()

  useEffect( () => {
    //dispatch(fetchJobs())
    if(userstore.isAuth)
      dispatch(fetcDriverhWorklogs())
    
  }, [])


  if(loading) {
    return <h1>Loading...</h1>
  }
  if(error){
    return <h1>{error}</h1>
  }

const driver = worklog?.[0]?.driver // id and full name

const columns: GridColDef[] = [

    {field: 'id', headerName: '#', width: 100, hide: true},
    {field: 'doneon', headerName: 'Done On', width: 150},
    {field: 'bag', headerName: 'Bags', width: 150},
    {field: 'location', headerName: 'Location', width: 450},
];

  return (
    <div style={{ height: 350, width: '100%' }}>  
        {driver ? `Worklist for ${driver}` : null}   
        <DataGrid rows={getRows(worklog)} columns={columns} pageSize={15} checkboxSelection rowHeight={25}  
        components={{
          NoRowsOverlay: () => {
            
            return <div>No worklogs, sorry!</div>;
          },
        }}
        />   
    </div>    
  );
}
