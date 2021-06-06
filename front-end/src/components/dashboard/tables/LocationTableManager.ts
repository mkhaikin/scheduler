import { GridColDef } from '@material-ui/data-grid';

interface Data {
  id: number;
  firstName: string;
  lastName: string;
  age?: number
}
///////////////////////////////////////////
interface locationData {
  id: number;
  locationId: number;
  routeId: number;
  area: string;
  adress: string;
  notice: string
}

function createLocationData(
  id: number,
  locationId: number,
  routeId: number,
  area: string,
  adress: string,
  notice: string,
): locationData {
  return { id, locationId, routeId, area, adress, notice };
}
//////////////////////////////////////
function createData(
  id: number,
  firstName: string,
  lastName: string,
  age?: number,
): Data {
  return { id, firstName, lastName, age };
}

export function getRows(data: any[]){
  const rows:any = []
  data.map((row, index) => {
      var dir = row.w_e !== null ? " " + row.w_e : "";
      rows.push(createLocationData( index + 1, row.ind, row.routeId, row.area, row.number + " " + row.street_avenue + " " + dir , row.notice))
  })

  /*
  const rows = [
    createData( 1, 'Snow', 'Jon', 35),
    createData( 2, 'Lannister', 'Cersei', 42),
    createData( 3, 'Lannister', 'Jaime', 45),
    createData( 4, 'Stark', 'Arya', 16),
    createData( 5, 'Targaryen', 'Daenerys', undefined),
    createData( 6, 'Melisandre', 'Smith', 150),
    createData( 7, 'Clifford', 'Ferrara', 44),
    createData( 8, 'Frances', 'Rossini', 36),
    createData( 9, 'Roxie', 'Harvey', 65),
  ]; */

  return rows;
}

interface HeadCell {  
  field: keyof locationData;
  headerName: string;
  width: number;
}

function createCol(
  field: keyof locationData,
  headerName: string,
  width: number,
): HeadCell {
  return { field, headerName, width };
}

export function getCols(){
  const columns: GridColDef[] = [
    createCol('id', '#', 60),
    createCol('locationId', 'Loc', 80),
    createCol('routeId', 'Route', 100),
    createCol('area', 'Area', 130),
    createCol('adress', 'Adress', 250),
    createCol('notice', 'Notice', 250),
  ];

  return columns;
}
