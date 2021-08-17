import {
  GridColDef,
} from "@material-ui/data-grid";

interface locationData {
  id: number;
  locationId: string;
  routeId: number;
  area: string;
  adress: string;
  notice: string
}

function createLocationData(
  id: number,
  locationId: string,
  routeId: number,
  area: string,
  adress: string,
  notice: string,
): locationData {
  return { id, locationId, routeId, area, adress, notice };
}


export function getRows(data: any[]){
  const rows:any = []
  data.map((row, index) =>  {
      var dir = row.w_e !== null ? " " + row.w_e : "";
      rows.push(createLocationData( index + 1, row.ind, row.routeId, row.area, row.number + " " + row.street_avenue + " " + dir , row.notice))
      return 1
  })

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
    
    createCol('id', '#', 80),
    createCol('locationId', 'Loc', 100),
    createCol('routeId', 'Route', 150),
    createCol('area', 'Area', 130),
    createCol('adress', 'Adress', 250),
    createCol('notice', 'Notice', 250),
  ];

  return columns;
}
