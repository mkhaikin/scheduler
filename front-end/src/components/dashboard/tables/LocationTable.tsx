import React, { useEffect, useState } from 'react';
import { DataGrid} from '@material-ui/data-grid';
import {getRows, getCols} from './LocationTableManager'
import {useTypesSelector} from "../../../hooks/menuTypesSelector";
import { useDispatch } from 'react-redux';
import { fetchLocations, deleteLocation } from '../../../store/action-creators/locationcall';
import {
  GridColDef,
  GridApi,
} from "@material-ui/data-grid";
import Button from "@material-ui/core/Button";
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
//import { ControlledOpenSelect } from '../Gadgets/Select/ControlledOpen/ControlledOpenSelect';
import { useConfirm } from "material-ui-confirm";
import {LocationEditForm} from "../Forms/location/LocationEditForm"


export default function CustomerTable() {
  const {locations, loading, error } = useTypesSelector(state=> state.location)
  const dispatch = useDispatch()
  const confirm = useConfirm();
  const [openEditDialog, setOpenEditDialog] = useState(false)
  const [editLocationId, setEditLocationId] = useState(0)

  useEffect( () => {
    dispatch(fetchLocations())
    
  }, [])


  if(loading) {
    return <h1>Loading...</h1>
  }
  if(error){
    return <h1>{error}</h1>
  }


//////////////////////////////////////////
const columns: GridColDef[] = [
  {
    field: "edit",
    headerName: "Edit",
    sortable: false,
    width: 80,
   // disableClickEventBubbling: true,
    renderCell: (params: any) => {
      
      const onClick = () => {
        console.log("Edit button------------")
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
  console.log(JSON.stringify(thisRow, null, 4))
  setOpenEditDialog(true)
  let id : any = thisRow.locationId
  setEditLocationId(id)
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
        
        console.log("Delete button------------")
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

        console.log("Location Id:  " + thisRow.locationId)
        return confirm({ description: `This will permanently delete.` + JSON.stringify(thisRow, null, 4) })
        .then(() => {
          console.log("Deletion confirmed: " + thisRow.locationId)
          dispatch( deleteLocation(thisRow.locationId))
        })
        .catch(() => console.log("Deletion cancelled."));
       
        //return alert(JSON.stringify(thisRow, null, 4));
        
      };
  
    return < Button onClick={onClick}><DeleteIcon color="primary" fontSize="small"/></Button>;
    },
  }
 
];


let datacolumns: GridColDef[];
datacolumns = getCols();

let cols: GridColDef[];
cols = [...columns, ...datacolumns]

///////////////////////////////////////////////

  return (
    <div style={{ height: 550, width: '100%' }}> 
      {openEditDialog ?  <LocationEditForm locId = {editLocationId} closeDialog={setOpenEditDialog} /> :
      <DataGrid rows={getRows(locations)} columns={cols} pageSize={15} checkboxSelection rowHeight={25} /> 
      }
    </div>
    
  );
}
