import React, { useEffect } from 'react';
import { DataGrid} from '@material-ui/data-grid';
import {getRows, getCols} from './EmployeeTableManager'
import {useTypesSelector} from "../../../hooks/menuTypesSelector";
import { useDispatch } from 'react-redux';
import { fetchUsers } from '../../../store/action-creators/usercall';



export default function EmployeeTable() {

  const {users, loading, error } = useTypesSelector(state=> state.user)
  const dispatch = useDispatch()

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

  return (
    <div style={{ height: 400, width: '100%' }}>  
      <DataGrid rows={getRows(users)} columns={getCols(users)} pageSize={5} checkboxSelection rowHeight={30} />
    </div>
  );
}
