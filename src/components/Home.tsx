import { useContext } from "react";
import React, { Component, useEffect, useState } from 'react';
import { AuthContext } from "../context/AuthContextProvider";
import {Button, makeStyles} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";



const useStyles = makeStyles({
  root: {
      flexGrow: 1,
  },
  radioAssembly: {
      textAlign: 'center',
      padding: '15px',
  }
});


const Home  = () =>  {
  const authContext = useContext(AuthContext);

  useEffect(() =>{
          //const onLoad = window.dispatchEvent;
          const webswingFinction = window.webFunction;
          webswingFinction(window, document);
         //onLoad(new Event('initialiseDesigner') );
  },[])



  // No longer used as designer doesn't support two way communication currently
  // useEffect(() => {
  //     function waitForPingService() {
  //         console.log("Waiting for service");
  //         if (typeof window.pingService !== "undefined") {
  //             window.runSend();
  //         } else {
  //             setTimeout(waitForPingService, 250);
  //         }
  //     }
  //
  //     waitForPingService();
  // }, [])
  const [openBasicLS, setOpenBasicLS] = useState(false);

  //const handleClickBasicLS = () => {
  function handleClickBasicLS (appname: string,e: MouseEvent) {
      console.log('about to stop page from reload because of click', appname, e)

      e.preventDefault(); // prevent reload
      e.stopPropagation();
      //e.nativeEvent.stopImmediatePropagation();
      console.log('stopped page from reload because of click', appname, e)
      setOpenBasicLS(true);
      const appsConfig: { [key: string]: string } = {
        'app1': 'http://localhost:8080/netbeans',
        'app2': 'http://localhost:8080/netbeans',
        'app3': 'http://localhost:8080/netbeans'
      };
      
      //window.dispatchEvent(new Event('initialiseDesigner'))
      console.log('dispatching event', appname)
      window.dispatchEvent(new CustomEvent('initialiseApp', {detail: appsConfig[appname]}))
      
  };
  const handleCloseBasicLS = (event:any, reason:any) => {
      if (reason === 'clickaway') {
          return;
      }

      setOpenBasicLS(false);
  };

  const classes = useStyles();

  return (
      <div className={classes.radioAssembly}>
         
                  <a type="button">
                      <Button type="button" onClick={(e: any) => handleClickBasicLS('app1', e)} className='MyButton1' variant="outlined" color="secondary">
                          Load app1.1
                      </Button>
                  </a>
                  <a type="button">
                      <Button type="button" onClick={(e: any) => handleClickBasicLS('app2',e)} className='MyButton2' variant="outlined" color="secondary">
                          Load app2.1
                      </Button>
                  </a>
                  <a type="button">
                      <Button type="button" onClick={(e: any) => handleClickBasicLS('app3',e)} className='MyButton3' variant="outlined" color="secondary">
                          Load app3.1
                      </Button>
                  </a>
            
          {/* Show different content based on the roles the user has assigned. */}
          {authContext.hasRole("user") && <p>You are a user</p>}
          {authContext.hasRole("admin") && <p>You are a admin</p>}
          <button type="button" 
            className="text-white bg-red-400 border-0 py-2 px-8 focus:outline-none hover:bg-red-400 rounded text-lg mt-10"
            onClick={authContext.logout}
          >
            Logout
          </button>

          <div className="webswing-element" data-webswing-instance="webswingInstance0" style={{height: '100vh'}}></div>
      </div>
  )
}

export default Home;