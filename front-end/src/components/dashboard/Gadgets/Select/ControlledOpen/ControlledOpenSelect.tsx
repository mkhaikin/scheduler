import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

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
  let initPos = '1';
  console.log(props.initPos + " is type " + typeof(props.initPos))
  if(props && props.initPos){
    initPos = '' + props.initPos
    console.log(props.name + " Init position: " + initPos)
  }
  const classes = useStyles();
  const [name, setName] = React.useState<string | number>(initPos);
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    setName(props.initPos);
}, [props.initPos])

  //console.log("ControlledOpenSelect: " + props.posSelect)
  const posSelect: any[] = props.posSelect

  const menuPrompt = () =>{
    <MenuItem value="">
        <em>select the value</em>
    </MenuItem>
  }

  const menuPos = posSelect.map( (pos, keyIndex) =>
      
      <MenuItem key={keyIndex} value={pos.id}>{pos.pos}</MenuItem>
  );
/*
  if(typeof props.initPos !== 'undefined' && props.initPos !== null)
    setName(props.initPos)
  else
    setName(initPos)
*/
  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setName(event.target.value as number);
    console.log("Select onChange value: " + event.target.value)
 
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
          {props.prompt? menuPrompt : null}
          {menuPos}

        </Select>
      </FormControl>
    </div>
  );
}


