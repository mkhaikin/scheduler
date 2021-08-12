import {
  GridColDef,
} from "@material-ui/data-grid";

///////////////////////////////////////////
interface worklogData {
  id:number;
  ind: number;
  doneon: string;
  bag: number;
  location: string;
  driver: string
}

function createWorklogData(
  id: number,
  ind: number,
  doneon: string,
  bag: number,
  location: string,
  driver: string,
): worklogData {
  return { id, ind, doneon, bag, location, driver};
}


export function getRows(data: any[]){
  const rows:any = []
  data.map((row, index) => (
      
      rows.push(createWorklogData( index + 1, row.ind, row.doneon, row.bag, row.location, row.driver))
  ))

  return rows;
}

interface HeadCell {  
  field: keyof worklogData;
  headerName: string;
  width: number;
}

function createCol(
  field: keyof worklogData,
  headerName: string,
  width: number,
): HeadCell {
  return { field, headerName, width };
}

export function getCols(){
  const columns: GridColDef[] = [
    
    createCol('id', '#', 100),
    createCol('ind', 'WL#', 150),
    createCol('doneon', 'Date', 150),
    createCol('bag', 'Bags', 150),
    createCol('location', 'Adress', 300),
    createCol('driver', 'Driver', 250),
  ];

  return columns;
}
