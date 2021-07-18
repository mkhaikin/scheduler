import React, {useContext, useEffect} from 'react';
import './App.css';
//import SideMenu from '../components/SideMenu';
import { CssBaseline, makeStyles } from '@material-ui/core';
import Header from '../components/Header';
import Footer from '../components/Footer';
//import ComponentsList from '../components/ComponentsList';
import { ConfirmProvider } from "material-ui-confirm";
import CRMContainer from '../components/CRMContainer';
import SignInOutContainer from '../components/SignInOutContainer'
import {Context} from '../index'
import {observer} from 'mobx-react-lite'
import { store } from '../store';

const useStyles = makeStyles({
  appMain:{
    paddingLeft: '160px',
    width: '100%',
  
 
  }
})

function App() {
  const classes = useStyles();
  const {userstore} = useContext(Context)
  useEffect( () => {
    if(localStorage.getItem('token')){
      userstore.checkAuth()
    }
  }, [])


  if(userstore.isLoading){
    return <div>Loading...</div>
  }
  //let acc: boolean = false;
  if(!userstore.isAuth){
    return (
      <SignInOutContainer />
    )
  }

  return (
    <ConfirmProvider>
    <React.Fragment>
    <div className="page-container">
    <div className="content-wrap">
    <Header user = {userstore}/>  
      <div className= {classes.appMain}>
        {userstore.isAuth ? <CRMContainer /> : <SignInOutContainer />}                    
       </div> 
    </div>   
    </div>
    <footer className ="footer" ><Footer/></footer>
    <CssBaseline/>    
    </React.Fragment>
    </ConfirmProvider>
  );
}

export default observer(App);
