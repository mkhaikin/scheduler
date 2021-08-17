import 'date-fns';
import React from 'react';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  //KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';

export default function MaterialUIPickers(props:any) {
  let dateSet = new Date()
  if(props.hasOwnProperty('jobdate'))
    dateSet = props.jobdate

  // The first commit of Material-UI
  const [selectedDate, setSelectedDate] = React.useState<Date | null>( dateSet );

  let dispast: boolean = false
  if(props && props.hasOwnProperty('dispast') && (typeof props.dispast !== 'undefined'))
    dispast = props.dispast

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
    props.onDateChanged(date);
   
  };

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Grid item>
            <KeyboardDatePicker
              margin="normal"
              id="date-picker-dialog"
              label="Date picker"
              views={['year', 'month', 'date']}
              value={selectedDate}
              format="dd/MM/yyyy"
              onChange={handleDateChange}
              defaultValue= {dateSet}
              disablePast={dispast}
              KeyboardButtonProps={{
                'aria-label': 'change date',
              }}
            />
          </Grid>
    </MuiPickersUtilsProvider>
  );
}
