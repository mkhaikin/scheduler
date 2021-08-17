import React, { useEffect, useContext } from 'react'
import {AppBar, Grid, IconButton, InputBase, makeStyles, Toolbar, Typography} from '@material-ui/core'
//import RoomIcon from '@material-ui/icons/Room';
import MeetingRoomIcon from '@material-ui/icons/MeetingRoom';
import {useTypesSelector} from "../hooks/menuTypesSelector";
import {Context} from '../index'

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    toolbar: {
      minHeight: 36,
    },
    title: {
        flexGrow: 1,
        textAlign: "center"
      }
  }));

export default function Header(){

    const {userstore} = useContext(Context)
   
    const classes = useStyles();

    const {title } = useTypesSelector(state=> state.menu)
    useEffect( () => {
        console.log("Menu title in Header: " + title)
  
      }, [title])

    return(
        <AppBar position="static">
            <Toolbar className={classes.toolbar}>
                <Grid container> 
                    <Grid item >
                        <InputBase />
                    </Grid>
                    <Grid item>
                        <Typography variant="h6" className={classes.title}>
                        {title }
                        </Typography>
                    </Grid>
                    <Grid item sm></Grid>
                    {userstore.isAuth ?
                    <Grid item>
                        {`${userstore.user.email}`}
                        <IconButton size="small" onClick={()=>userstore.logout()}>
                        <MeetingRoomIcon /> Logout
                           
                        </IconButton>                    
                    </Grid> : null
                    }
                </Grid>
            </Toolbar>
        </AppBar>
    )
}

// {props.user.isAuth ? ` <MeetingRoomIcon /> Logout` : 'sdfasdf'} 