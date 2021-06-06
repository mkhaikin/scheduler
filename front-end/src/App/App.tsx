import React from 'react';
import './App.css';
import SideMenu from '../components/SideMenu';
import { CssBaseline, makeStyles } from '@material-ui/core';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ComponentsList from '../components/ComponentsList';

const useStyles = makeStyles({
  appMain:{
    paddingLeft: '160px',
    width: '100%',
  
 
  }
})

function App() {
  const classes = useStyles();
  return (
    <React.Fragment>
    <div className="page-container">
    <div className="content-wrap">
      <SideMenu />
      <div className= {classes.appMain}>
        <Header />        
        <ComponentsList/>    
      </div> 
    </div>   
    </div>
    <footer className ="footer" ><Footer/></footer>
    <CssBaseline/>    
    </React.Fragment>
  );
}

export default App;
