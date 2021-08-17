import React, { useEffect } from 'react';
import { DataGrid} from '@material-ui/data-grid';
import {getRows, getCols} from './OrderTableManager'
import {useTypesSelector} from "../../../hooks/menuTypesSelector";
import { useDispatch } from 'react-redux';
import { fetchWorklogs, fetchWeekWorklogs} from '../../../store/action-creators/worklogcall';
import {
  GridColDef,

} from "@material-ui/data-grid";
//import Button from "@material-ui/core/Button";
//import EditIcon from '@material-ui/icons/Edit';
//import DeleteIcon from '@material-ui/icons/Delete';
//import { ControlledOpenSelect } from '../Gadgets/Select/ControlledOpen/ControlledOpenSelect';
//import { useConfirm } from "material-ui-confirm";
//import {LocationEditForm} from "../Forms/location/LocationEditForm"


export default function WorklogTable(props:any) {
  const {worklog, loading, error } = useTypesSelector(state=> state.worklog)
  const dispatch = useDispatch()

  useEffect( () => {
    if(props.getter === 'WEEK')
      dispatch(fetchWeekWorklogs())
    else dispatch(fetchWorklogs())


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
    
      <DataGrid rows={getRows(worklog)} columns={cols} pageSize={15} checkboxSelection rowHeight={30} /> 
     
    </div>
    
  );
}
