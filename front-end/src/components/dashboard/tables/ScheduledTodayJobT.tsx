import React, { useEffect, useContext } from 'react';
import { DataGrid} from '@material-ui/data-grid';
import {getRows} from './ScheduledTodayJobTM'
import {useTypesSelector} from "../../../hooks/menuTypesSelector";
import { useDispatch } from 'react-redux';
import { fetchDriverTodayJobs } from '../../../store/action-creators/jobcall';
import {insertUpdateWorklog} from '../../../store/action-creators/worklogcall'
import {Context} from '../../../index'

//import JobService from '../../../services/JobService'

import {
  GridColDef,
  GridApi,
} from "@material-ui/data-grid";
import Button from "@material-ui/core/Button";
//import EditIcon from '@material-ui/icons/Edit';
//import DeleteIcon from '@material-ui/icons/Delete';
import SaveIcon from '@material-ui/icons/Save';
import { useConfirm } from "material-ui-confirm";
//import {UpdateOrderForm} from '../Forms/order/UpdateOrderForm'


export default function ScheduledJobTable() {
  const {userstore} = useContext(Context)
  const {jobs, loading, error } = useTypesSelector(state=> state.job)
  const dispatch = useDispatch()
  const confirm = useConfirm();
  //const [openEditDialog, setOpenEditDialog] = useState(false)
  //const [editJobId, setEditJobId] = useState("")
  //const [editRouteId, setEditRouteId] = useState("")
  //const [editDriverId, setEditDriverId] = useState("")
  //const [editScheduled, setEditScheduled] = useState("")

  useEffect( () => {
    //dispatch(fetchJobs())
    if(userstore.isAuth)
      dispatch(fetchDriverTodayJobs())
    
  }, [])


  if(loading) {
    return <h1>Loading...</h1>
  }
  if(error){
    return <h1>{error}</h1>
  }

  const scheduled = jobs?.[0]?.scheduled
const route = jobs?.[0]?.route
const driver = jobs?.[0]?.driver // id and full name
//const area = jobs?.[0]?.area

const columns: GridColDef[] = [

  {
    field: "delete",
    headerName: "Delete",
    sortable: false,
    width: 100,
    //disableClickEventBubbling: true,
    renderCell: (params: any) => {
      const onClick = () => {        
        
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
        

          const driverid = driver.split("-")[0].trim()
          console.log("Saved: " + thisRow.ind)
          console.log("Saved: " + scheduled)
          console.log("Saved: " + thisRow.locationid)
          console.log("Saved: " + thisRow.bag)
          console.log("Saved: " + driverid)

         
          if(/^-?\d+\.?\d*$/.test(thisRow.bag))
            return confirm({ description: `Job will be saved.` + JSON.stringify(thisRow, null, 5) })
                .then(() => {
                  dispatch( insertUpdateWorklog(scheduled, thisRow.locationid, thisRow.bag, driverid)) 
                })
                .catch(() => console.log("Save cancelled."));
          else
            alert("Bags value should be digits only!")
      };
  
    return < Button onClick={onClick}><SaveIcon color="primary" fontSize="small"/></Button>;
    }
  },
    {field: 'id', headerName: '#', width: 100, editable: false, hide: true},
    {field: 'ind', headerName: 'jobId', width: 150, editable: false, hide: true},   
    {field: 'bag', headerName: 'Bags', width: 150, editable: true},
    {field: 'location', headerName: 'Location', width: 400, editable: false},
    {field: 'locationid', headerName: '##', width: 100, editable: false, hide: true},
];

/*
let datacolumns: GridColDef[];
datacolumns = getCols();

let cols: GridColDef[];
cols = [...columns, ...datacolumns]
*/


  return (
    <div style={{ height: 350, width: '100%' }}>  
        {scheduled && driver && route ? `${scheduled} job list for ${driver} on route ${route}` : null}   
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
