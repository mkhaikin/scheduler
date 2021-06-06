import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { withStyles} from "@material-ui/core";
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    button: {
      display: 'block',
      marginTop: theme.spacing(2),
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
  }),
);
/*
interface Props {
  param: string; // your props validation
}
*/
export const ControlledOpenSelect = (props: any) =>  {
  const classes = useStyles();
  const [name, setName] = React.useState<string | number>(1);
  const [open, setOpen] = React.useState(false);

  //console.log("ControlledOpenSelect: " + props.posSelect)
  const posSelect: any[] = props.posSelect

  const menuPos = posSelect.map( (pos) =>
      //console.log("!!! " + pos.id + " " + pos.pos  );
      <MenuItem value={pos.id}>{pos.pos}</MenuItem>
  );

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setName(event.target.value as number);
    console.log("Select onChange: " + event.target.value)
    props.onPositionChange(event.target.value)
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div>
     
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-controlled-open-select-label">{props.name}</InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={name}
          onChange={handleChange}
        >
          {menuPos}

        </Select>
      </FormControl>
    </div>
  );
}


