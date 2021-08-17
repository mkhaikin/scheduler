import { GridColDef } from '@material-ui/data-grid';
/*
interface Data {
  id: number;
  employeeId: number;
  name: string;
  email: string;
  phone: string;
  hireDate: string;
  salary: number;  
}
*/
///////////////////////////////////////
interface employeeData {
  id: number;
  employeeId: number;
  firstname: string;    
  lastname: string; 
  email: string;
  phone: string;
  positionId: number;     
}

function createEmployeeData(
  id: number,
  employeeId: number,
  firstname: string,
  lastname: string,
  email: string,
  phone: string,
  positionId: number,
): employeeData {
  return { id, employeeId, firstname, lastname, email, phone, positionId };
}
/////////////////////////////////////
/*
function createData(
  id: number,
  employeeId: number,
  name: string,
  email: string,
  phone: string,
  hireDate: string,
  salary: number,
): Data {
  return { id, employeeId, name, email, phone, hireDate, salary };
}
*/

export function getRows( data: any[]){

  console.log("getRows: " )
  let items = data;
  let tableRows: any[];

  tableRows = []
  items.map((row, index) => {
    let arr: any []
    arr = []
    arr[0] = index + 1
    //arr = Object.values(row)
    let tmp: any[]
    tmp = Object.values(row)
    //arr.push( Object.values(row))
    let res: any []
    res = []
    res = arr.concat(Array.from(tmp))
    console.log("Row: " + res); 

    res.forEach(element => {
      console.log("item: " + element); 
      
    })

    tableRows.push({...res})
    
    
  })
/////////////////////////
const rows:any = []
items.map((row, index) => (

  rows.push(createEmployeeData( index + 1, row.ind, row.firstname, row.lastname, row.email, row.cell, row.positionId))
))
  ///////////////////////
/*
  const rows = [
    createData( 1, 1011, 'Jackson Smith', 'Jackson.Smith@ourcompany.com', '416-555-0480', '6/10/2013', 27),
    createData( 2, 2022, 'Noah Brown', 'Noah.Brown@ourcompany.com', '416-555-0196', '1/19/2015', 25),
    createData( 3, 3033, 'Liam Tremblay', 'Liam.Tremblay@ourcompany.com', '416-555-0951', '5/16/2016', 24),
    createData( 4, 4044, 'Lucas Martin', 'Lucas.Martin@ourcompany.com', '416-555-0138', '3/12/2018', 23),
    createData( 5, 5055, 'Benjamin Roy', 'Benjamin.Roy@ourcompany.com', '416-555-0434', '1/13/2020', 22),
    createData( 6, 6066, 'Oliver Wilson', 'Oliver.Wilson@ourcompany.com', '416-555-0941', '12/11/2017', 24),
    createData( 7, 7077, 'Ethan Macdonald', 'Ethan.Macdonald@ourcompany.com', '416-555-0845', '9/2/2019', 21),
    createData( 8, 8088, 'Jacob Gagnon', 'Jacob.Gagnon@ourcompany.com', '416-555-0537', '11/18/2019', 21),

  ];

  return rows;
  */
  return rows;
  //return tableRows;
}

interface HeadCell {  
  //field: keyof Data;
  field: keyof employeeData;
  headerName: string;
  width: number;
}

function createCol(
  //field: keyof Data,
  field: keyof employeeData,
  headerName: string,
  width: number,
): HeadCell {
  return { field, headerName, width };
}

export function getCols(data: any[]){
  /* if(!(data[0] === undefined || data[0] === null)){
      var keys = getKeys(data[0])
      keys.map((key, index)=>{
        console.log (index + " " + key.toUpperCase())
      })
  } else { console.log ("data === undefined or data === null_____")} */

/*
  const columns: GridColDef[] = [
    createCol('id', 'ID', 70),
    createCol('employeeId', 'Employee ID', 150),
    createCol('name', 'Name', 180),
    createCol('email', 'Email', 250),
    createCol('phone', 'Phone', 130),
    createCol('hireDate', 'Hired', 130),
    createCol('salary', 'Salary', 100),
  ];

  return columns;
  */

  const columns: GridColDef[] = [
    createCol('id', '#', 60),
    createCol('employeeId', 'Employee ID', 100),
    createCol('firstname', 'First Name', 180),
    createCol('lastname', 'Last Name', 180),    
    createCol('email', 'Email', 250),
    createCol('phone', 'Phone', 130),
    createCol('positionId', 'Position', 120),
  ];

  return columns;
}

/* function getKeys (row: any){
  const keys: any[] = Object.keys(row);
  console.log("Keys: " + keys[0])
  return Object.keys(row);
} */
