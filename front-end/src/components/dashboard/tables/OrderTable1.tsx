import * as React from 'react';
import { DataGrid} from '@material-ui/data-grid';
import {getRows, getCols} from './OrderTableManager1'



export default function OrderTable() {
  return (
    <div style={{ height: 400, width: '100%' }}>     
      <DataGrid rows={getRows()} columns={getCols()} pageSize={5} checkboxSelection rowHeight={30} />
    </div>
  );
}
