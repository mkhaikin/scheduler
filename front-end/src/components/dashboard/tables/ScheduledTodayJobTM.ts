
interface jobData {
    id: number;
    ind: string;
    bag: number;
    location: string;
    locationid: string;
}

function createJobData(
  id: number,
  ind: string,
  street_avenue: string,
  w_e: string,
  number: string,
  locationid: string 
): jobData {
  let location = number + " " + street_avenue
  if(typeof w_e !== 'undefined' && w_e !== null)
    location =  location + " " + w_e

  const bag = 0
  return { id, ind, bag, location, locationid};
}


export function getRows(data: any[]){
  const rows:any = []
  data.map((row, index) => (
      //console.log(" locationid: " + row.locationid)
      rows.push(createJobData( index + 1, row.ind, row.street_avenue, row.w_e, row.number, row.locationid))
  ))

  return rows;
}

/* function createCol(
  field: keyof jobData,
  headerName: string,
  width: number,

): HeadCell {
  return { field, headerName, width };
} */

