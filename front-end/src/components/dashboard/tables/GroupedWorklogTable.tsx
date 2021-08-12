import React, { useEffect} from 'react';
import { DataGrid} from '@material-ui/data-grid';
import {getRows, getCols} from './GroupedWorklogTableManager'
import {useTypesSelector} from "../../../hooks/menuTypesSelector";
import { useDispatch } from 'react-redux';
import { fetchSumWorklogs} from '../../../store/action-creators/worklogcall';
import {
  GridColDef,

} from "@material-ui/data-grid";


export default function GroupedWorklogTable(props:any) {
  const {worklogsum, loading, error } = useTypesSelector(state=> state.worklog)
  const dispatch = useDispatch()

  useEffect( () => {
     dispatch(fetchSumWorklogs())

  }, [])


  if(loading) {
    return <h1>Loading...</h1>
  }
  if(error){
    return <h1>{error}</h1>
  }

let cols: GridColDef[];
cols = getCols();

///////////////////////////////////////////////

  return (
    <div style={{ height: 600, width: '100%' }}> 
    
      <DataGrid rows={getRows(worklogsum)} columns={cols} pageSize={15} checkboxSelection rowHeight={30} /> 
     
    </div>
    
  );
}
