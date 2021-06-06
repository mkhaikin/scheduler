import React from 'react'
import { Typography, withStyles} from "@material-ui/core";
import ListItemText from '@material-ui/core/ListItemText'

const style = {
    meniItemText: {
          fontSize: 12
    }
}

const MenuItemText = ( props) => {
    const {classes, text} = props;

    return (
        <ListItemText        
            primary={
                <Typography className={classes.meniItemText}>
                    {text}
                </Typography>
            }
        />
    )
}

export default withStyles(style)(MenuItemText);
