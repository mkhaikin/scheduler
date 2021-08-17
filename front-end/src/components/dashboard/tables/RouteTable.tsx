import React, { useEffect, useState } from 'react';
//import { DataGrid} from '@material-ui/data-grid';
import {getRows, getCols} from './RouteTableManager'
import {useTypesSelector} from "../../../hooks/menuTypesSelector";
import { useDispatch } from 'react-redux';
import { fetchRoutes } from '../../../store/action-creators/routescall';
import { updateRoute, addRoute } from '../../../store/action-creators/routerecordcall';
//import { useConfirm } from "material-ui-confirm";
import {
  DataGrid,
  GridEditCellPropsParams,
  GridEditRowsModel,
  GridColumns 
} from "@material-ui/data-grid";
import { Button, TextField , Grid, Typography  } from "@material-ui/core";
//import { truncate } from 'node:fs';

//import Button from "@material-ui/core/Button";

export default function RouteTable() {
  const {routes, loading, error } = useTypesSelector(state=> state.routes)
  const dispatch = useDispatch()
  //const confirm = useConfirm();
  const [rows, setRows] = React.useState<any[]>(getRows(routes));
  const [editRowsModel, setEditRowsModel] = React.useState<GridEditRowsModel>({});
  const [newroute, setRoute] = useState("")
  const [updateButton, setUpdateButton] = useState(true)



  useEffect( () => {
    dispatch(fetchRoutes())
    
  }, [])

  useEffect( () => {
    setRows(getRows(routes))
    
  }, [routes])

  const handleEditCellChange = React.useCallback(
    ({ id, field, props }: GridEditCellPropsParams) => {
      
    },
    [editRowsModel],
  );

  const handleEditCellChangeCommitted= React.useCallback( ({ id, field, props }: GridEditCellPropsParams) => {
      console.log("id: " + id)
      console.log("field: " + field)
      const data = props; 
      console.log("value: " + data.value)
      const newvalue: any = data.value
      if(/\S+/.test(String(newvalue))){

        let routeId: any 
        rows.map((row)=>{
          if(row.id === id){
            console.log("routeId: " + row.routeId + ", row.id: " + row.id)
            routeId = row.routeId
            return 1
          }
          return 0
        })
        console.log("Committed  >>>>>> routeId: " + routeId + ", newvalue: " + newvalue)
        dispatch(updateRoute(routeId, newvalue))

      }
  
    },
    [rows],
  );

  const handleNewRouteInputChange =(event: React.ChangeEvent<{ value: unknown }>) => {
    setRoute(event.target.value as string);
    //console.log("Select onChange value: " + event.target.value)
    if(/\S+/.test(String(event.target.value)) ){
      setUpdateButton(false)
    }
    else setUpdateButton(true)
    
  }

  const handleOnClickUpdate =() => {
    dispatch((addRoute(newroute)))
    setUpdateButton(true)
    setRoute("")
    
  }

  if(loading) {
    return <h1>Loading...</h1>
  }
  if(error){
    return <h1>{error}</h1>
  }
  /* let datacolumns: GridColDef[];
  datacolumns = getCols(); */
  let datacolumns: GridColumns ;
  datacolumns = getCols();

  return (
    <div style={{ height: 400, width: '100%' }}> 
    <Typography variant="h5" component="h2" align="center">
          Routes List 
        </Typography>
      <DataGrid rows={getRows(routes)} columns={datacolumns} pageSize={15} rowHeight={30} 
          editRowsModel={editRowsModel} onEditCellChange={handleEditCellChange}  onEditCellChangeCommitted={handleEditCellChangeCommitted}/> 
       <Button variant="contained" color="primary" onClick={()=> dispatch(fetchRoutes())} >
        Update Route List
      </Button>    
      <Grid container direction="row">
        <Typography variant="h5" component="h2" align="center">
          Add a new route name: 
        </Typography>
        <TextField
          id="new-route"
          label="New Route"
          variant="filled"
          color="secondary"
          value={newroute}
          onChange={handleNewRouteInputChange}
        />
        <Button variant="contained" color="primary" disabled={updateButton} onClick={handleOnClickUpdate} >
        Save
      </Button>
      </Grid>  
      
    </div>
    
  );
}

