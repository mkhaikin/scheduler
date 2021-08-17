
interface jobData {
    id: number;
    scheduled: string;
    route: string;
    driver: string;
}

function createJobData(
  id: number,
  scheduled: string,
  route: string,
  driver: string,
): jobData {
  return { id, scheduled, route, driver};
}


export function getRows(data: any[]){
  const rows:any = []
  data.map((row, index) => (
      //console.log(" locationid: " + row.locationid)
      rows.push(createJobData( index + 1, row.scheduled, row.route, row.driver))
  ))

  return rows;
}




