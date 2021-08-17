import React, { useEffect, useState } from 'react';
import { DataGrid} from '@material-ui/data-grid';
import {getRows, getCols} from './ScheduledJobTableManager'
import {useTypesSelector} from "../../../hooks/menuTypesSelector";
import { useDispatch } from 'react-redux';
import { fetchJobs, deleteJob } from '../../../store/action-creators/jobcall';
import {
  GridColDef,
  GridApi,
} from "@material-ui/data-grid";
import Button from "@material-ui/core/Button";
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import { useConfirm } from "material-ui-confirm";
import {UpdateOrderForm} from '../Forms/order/UpdateOrderForm'


export default function ScheduledJobTable() {
  const {jobs, loading, error } = useTypesSelector(state=> state.job)
  const dispatch = useDispatch()
  const confirm = useConfirm();
  const [openEditDialog, setOpenEditDialog] = useState(false)
  const [editJobId, setEditJobId] = useState("")
  const [editRouteId, setEditRouteId] = useState("")
  const [editDriverId, setEditDriverId] = useState("")
  const [editScheduled, setEditScheduled] = useState("")

  useEffect( () => {
    dispatch(fetchJobs())
    
  }, [])


  if(loading) {
    return <h1>Loading...</h1>
  }
  if(error){
    return <h1>{error}</h1>
  }

const columns: GridColDef[] = [
  {
    field: "edit",
    headerName: "Edit",
    sortable: false,
    width: 80,
    //disableClickEventBubbling: true,
    renderCell: (params: any) => {
      
      const onClick = () => {
        //console.log("Edit button------------")
        const api: GridApi = params.api;
        const fields = api
          .getAllColumns()
          .map((c) => c.field)
          .filter((c) => c !== "__check__" && !!c);
        //const thisRow: Record<string, GridCellValue> = {};
        const thisRow: any = {};
  
        fields.forEach((f) => {
          //thisRow[f] = params.getValue(f);
          thisRow[f] = params.getValue(params.id, f);
        });
        //console.log(JSON.stringify(thisRow, null, 4))
        setOpenEditDialog(true)
        let ind : any = thisRow.jobId       //ind
        setEditJobId(ind)
        /////////////////////////////////////
        let routeV : any = thisRow.route
        const route = routeV.split("-")[0]  // route
        let driverV : any = thisRow.driver
        const driver = driverV.split("-")[0]  // driver
        const scheduled = '' + thisRow.scheduled // scheduled
    
        console.log("jobId=" + ind)
        console.log("scheduled=" + scheduled)
        console.log("route=" + route)
        console.log("driver=" + driver)

        setEditJobId(ind)
        setEditRouteId(route)
        setEditDriverId(driver)
        setEditScheduled(scheduled)
        setOpenEditDialog(true)
        //////////////////////////////////////
        //return alert(JSON.stringify(thisRow, null, 4));
      };
    return < Button onClick={onClick}><EditIcon color="primary" fontSize="small"/></Button>; 
    },
  },
  {
    field: "delete",
    headerName: "Delete",
    sortable: false,
    width: 100,
    //disableClickEventBubbling: true,
    renderCell: (params: any) => {
      const onClick = () => {
        
        //console.log("Delete button------------")
        const api: GridApi = params.api;
        const fields = api
          .getAllColumns()
          .map((c) => c.field)
          .filter((c) => c !== "__check__" && !!c);
        //const thisRow: Record<string, GridCellValue> = {};
        const thisRow: any = {};
  
        fields.forEach((f) => {
          //thisRow[f] = params.getValue(f);
          thisRow[f] = params.getValue(params.id, f);
        }); 

        console.log("Job ind:  " + thisRow.jobId)
        return confirm({ description: `This will permanently delete.` + JSON.stringify(thisRow, null, 4) })
        .then(() => {
          console.log("Deletion confirmed: " + thisRow.jobId)
          dispatch( deleteJob(thisRow.jobId))
        })
        .catch(() => console.log("Deletion cancelled."));
        
      };
  
    return < Button onClick={onClick}><DeleteIcon color="primary" fontSize="small"/></Button>;
    },
  }
 
];

const setOpenClose = (open: boolean) =>{
  setOpenEditDialog(open)
}

let datacolumns: GridColDef[];
datacolumns = getCols();

let cols: GridColDef[];
cols = [...columns, ...datacolumns]

///////////////////////////////////////////////
//      {openEditDialog ?  <JobEditForm locId = {editJobId} closeDialog={setOpenEditDialog} /> : //add }
  return (
    <div style={{ height: 450, width: '100%' }}> 
      { openEditDialog ? <UpdateOrderForm indJ = {editJobId}  routeJ={editRouteId} driverJ={editDriverId} scheduledJ={editScheduled} closeDialog={setOpenClose} /> :
        <DataGrid rows={getRows(jobs)} columns={cols} pageSize={15} checkboxSelection rowHeight={25} /> 
      }
    </div>
    
  );
}
