import React, { useEffect, useState  } from 'react';
import { DataGrid} from '@material-ui/data-grid';
import {getRows, getCols} from './EmployeeTableManager'
import {useTypesSelector} from "../../../hooks/menuTypesSelector";
import { useDispatch } from 'react-redux';
import { fetchUsers } from '../../../store/action-creators/usercall';
import {
  GridColDef,
  GridApi,
} from "@material-ui/data-grid";
import Button from "@material-ui/core/Button";
import EditIcon from '@material-ui/icons/Edit';
import {EmployeeEditForm} from '../Forms/employee/EmployeeEditForm'


export default function EmployeeTable() {
  const {users, loading, error } = useTypesSelector(state=> state.user)
  const dispatch = useDispatch()

  const [openEditDialog, setOpenEditDialog] = useState(false)
  const [editEmployeeId, setEditEmployeeId] = useState(0)

  useEffect( () => {
    dispatch(fetchUsers())
    console.log("Users: " + users[0])
    console.log("Users length: " + users.length)
    
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
    let id : any = thisRow.employeeId
    setEditEmployeeId(id)
    console.log(JSON.stringify("Employee ID: " + id))
          //return alert(JSON.stringify(thisRow, null, 4));
        };
      return < Button onClick={onClick}><EditIcon color="primary" fontSize="small"/></Button>; 
      },
    }
  ];  

  let datacolumns: GridColDef[];
  datacolumns = getCols(users);

  let cols: GridColDef[];
  cols = [...columns, ...datacolumns]

  return (
    <div style={{ height: 500, width: '100%' }}>  
      {openEditDialog ?  <EmployeeEditForm empId = {editEmployeeId} closeDialog={setOpenEditDialog} /> :
      <DataGrid rows={getRows(users)} columns={cols} pageSize={10} checkboxSelection rowHeight={30} />
      }
    </div>
  );
}

