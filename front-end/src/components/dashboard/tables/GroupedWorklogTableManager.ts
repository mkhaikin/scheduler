import {
  GridColDef,
} from "@material-ui/data-grid";

///////////////////////////////////////////
interface worklogData {
  id:number;
  ind: number;
  year: string;
  month: string;
  total: number;
  location: string;
  
}  

function createWorklogData(
  id: number,
  ind: number,
  year: string,
  month: string,
  total: number,
  location: string,
): worklogData {
  return { id, ind, year, month, total, location};
}

export function getRows(data: any[]){
  const rows:any = []
  data.map((row, index) => (
      
      rows.push(createWorklogData( index + 1, row.ind, row.year, row.month, row.total, row.location))
  ))

  return rows;
}


interface HeadCell {  
  field: keyof worklogData;
  headerName: string;
  width: number;
  hide: boolean;
}

function createCol(
  field: keyof worklogData,
  headerName: string,
  width: number,
  hide: boolean = false
): HeadCell {
  return { field, headerName, width, hide };
}

export function getCols(){
  const columns: GridColDef[] = [
    
    createCol('id', '#', 100),
    createCol('ind', 'WL#', 150, true),
    createCol('year', 'Year', 150),
    createCol('month', 'Month', 150),
    createCol('total', 'Total Bags', 150),
    createCol('location', 'Adress', 300),
  ];

  return columns;
}
