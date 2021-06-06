import React from 'react'
import {Container, AppBar, makeStyles, Toolbar, Typography} from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    toolbar: {
      minHeight: 36,
      position: "fixed",
      bottom: 0
    },
    title: {
        flexGrow: 1,
        textAlign: "center",
        fontSize: 12
             
      },
    footer: {
    /*    minHeight: 36,
        width: '100%' ,
        position: "fixed",
        bottom: 0
        -------------------- */
        minHeight: 36,
        flexShrink: 0,
        textAlign: "center",
        position: "relative",
        bottom: 0,
        width: '100%' 
    }
  }));

  export default function Footer() {
    const classes = useStyles();

    return (
        <AppBar position="static" color="primary">
          <Container maxWidth="md">
            <Toolbar className={classes.footer}>
              <Typography variant="body1" color="inherit">
                © 2021 Second Hand Driver Route Management System
              </Typography>
            </Toolbar>
          </Container>
        </AppBar>    
       
    )
}

