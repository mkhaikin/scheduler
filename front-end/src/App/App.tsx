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
    (async function(){
      try{
                      if(localStorage.getItem('token')){
                        await userstore.checkAuth()
                        console.log("User: ----Start  ---------------------------------------------------")
                        console.log("User: " + userstore.user.userbadge._positionid)
                        console.log("User: -----End  --------------------------------------------------")
                      }
      }catch(e){
        console.error(e);
      }
    })()
  }, [])


  if(userstore.isLoading ){
    return <div>Loading...</div>
  }
  //let acc: boolean = false;
  if(!userstore.isAuth){
    return (
      <SignInOutContainer />
    )
  }
/*
  if(userstore.isAuth){
    return (
      <div>
      {`${userstore.user.email}  `}
      {`${userstore.user.userbadge._positionid}`}
      </div>
    )
  }
*/


  return (
    <ConfirmProvider>
    <React.Fragment>
    <div className="page-container">
    <div className="content-wrap">
    <Header />  
      <div className= {classes.appMain}>
       <CRMContainer />                     
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
