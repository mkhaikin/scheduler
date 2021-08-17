
interface jobData {
    id: number;
    doneon: string;
    bag: string;
    location: string;
}    

function createJobData(
  id: number,
  doneon: string,
  bag: string,
  location: string,
): jobData {
  return { id, doneon, bag, location};
}


export function getRows(data: any[]){
  const rows:any = []
  data.map((row, index) => (
     
      rows.push(createJobData( index + 1, row.doneon, row.bag, row.location))
  ))

  return rows;
}

/* interface HeadCell {  
  field: keyof jobData;
  headerName: string;
  width: number;
} */

/* function createCol(
  field: keyof jobData,
  headerName: string,
  width: number,

): HeadCell {
  return { field, headerName, width };
} */

