import { GridColDef } from "@material-ui/data-grid";

interface jobData {
  id: number;
  jobId: number;
  scheduled: string;
  route: string;
  driver: string;
}

function createJobData(
  id: number,
  jobId: number,
  scheduled: string,
  route: string,
  driver: string
): jobData {
  return {  id, jobId, scheduled, route, driver };
}


export function getRows(data: any[]){
  const rows:any = []
  data.map((row, index) => (
      
      rows.push(createJobData( index + 1, row.ind, row.scheduled, row.route, row.driver))
  ))

  return rows;
}

interface HeadCell {  
  field: keyof jobData;
  headerName: string;
  width: number;
}

function createCol(
  field: keyof jobData,
  headerName: string,
  width: number,
): HeadCell {
  return { field, headerName, width };
}

export function getCols(){
  const columns: GridColDef[] = [
    createCol('id', '#', 100),
    createCol('jobId', 'Id', 100),
    createCol('scheduled', 'Date', 150),
    createCol('route', 'Route', 200),
    createCol('driver', 'Driver', 250),
    
  ];

  return columns;
}
