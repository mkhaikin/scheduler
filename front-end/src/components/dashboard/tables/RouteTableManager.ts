import { GridColumns } from "@material-ui/data-grid";

interface routeData {
  id: number;
  routeId: string;
  name: string;
}

function createRouteData(
  id: number,
  routeId: string,
  name: string
): routeData {
  return {  id, routeId, name };
}

export function getRows(data: any[]){
  const rows:any = []
  data.map((row, index) => (
      
      rows.push(createRouteData( index + 1, row.ind, row.name))
  ))

  return rows;
}

interface HeadCell {  
  field: keyof routeData;
  headerName: string;
  width: number;
  editable: boolean;
}

function createCol(
  field: keyof routeData,
  headerName: string,
  width: number,
  editable: boolean
): HeadCell {
  return { field, headerName, width, editable };
}

export function getCols(){
  /* const columns: GridColDef[] = [
    createCol('id', '#', 60, false),
    createCol('routeId', 'Route #', 150, false),
    createCol('name', 'Name', 300, true),
  ]; */
    const columns: GridColumns = [
    createCol('id', '#', 60, false),
    createCol('routeId', 'Route #', 150, false),
    createCol('name', 'Name', 300, true),
  ];

  return columns;
}
