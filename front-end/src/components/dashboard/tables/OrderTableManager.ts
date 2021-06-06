import { GridColDef } from '@material-ui/data-grid';

interface Data {
  id: number;
  orderId: number;
  customerName: string;
  orderStatus: string;
  customerPayment?: string;  
  orderDetails?: string;
}

function createData(
  id: number,
  orderId: number,
  customerName: string,
  orderStatus: string,
  customerPayment?: string,  
  orderDetails?: string,
): Data {
  return { id, orderId, customerName, orderStatus, customerPayment, orderDetails };
}

export function getRows(){
  const rows = [
    createData( 1, 101, 'Snow Jon', 'ordered', undefined, undefined),
    createData( 2, 202, 'Lannister Cersei', 'inprocess', undefined, 'order details 1'),
    createData( 3, 303, 'Lannister Jaime', 'ordered', undefined, undefined),
    createData( 4, 404, 'Stark Arya', 'payed', 'visa', 'order details 2'),
    createData( 5, 505, 'Targaryen Daenerys', 'delivered', 'visa', 'order details 3'),
    createData( 6, 606, 'Melisandre Smith', 'inprocess', undefined, undefined),
    createData( 7, 707, 'Clifford Ferrara', 'inprocess', undefined, 'order details 4'),
    createData( 8, 808, 'Frances Rossini', 'delivered', 'cash', 'order details 5'),
    createData( 9, 909, 'Roxie Harvey', 'payed', 'mastercard', 'order details 6'),
  ];

  return rows;
}

interface HeadCell {  
  field: keyof Data;
  headerName: string;
  width: number;
}

function createCol(
  field: keyof Data,
  headerName: string,
  width: number,
): HeadCell {
  return { field, headerName, width };
}

export function getCols(){
  const columns: GridColDef[] = [
    createCol('id', 'ID', 70),
    createCol('orderId', 'Order', 90),
    createCol('customerName', 'Customer', 180),
    createCol('orderStatus', 'Status', 130),
    createCol('customerPayment', 'Payment', 110),
    createCol('orderDetails', 'Details', 200),
  ];

  return columns;
}
