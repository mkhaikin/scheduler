import React, { useEffect } from 'react';
import { DataGrid} from '@material-ui/data-grid';
import {getRows, getCols} from './LocationTableManager'
import {useTypesSelector} from "../../../hooks/menuTypesSelector";
import { useDispatch } from 'react-redux';
import { fetchLocations } from '../../../store/action-creators/locationcall';



export default function CustomerTable() {
  const {locations, loading, error } = useTypesSelector(state=> state.location)
  const dispatch = useDispatch()

  useEffect( () => {
    dispatch(fetchLocations())
    //console.log("Locations: " + locations[0])
    //console.log("Locations length: " + locations.length)
    
  }, [])

  if(loading) {
    return <h1>Loading...</h1>
  }
  if(error){
    return <h1>{error}</h1>
  }
  return (
    <div style={{ height: 400, width: '100%' }}>     
      <DataGrid rows={getRows(locations)} columns={getCols()} pageSize={5} checkboxSelection rowHeight={30} />
    </div>
  );
}
