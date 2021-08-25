import React, { useState } from "react";
import { render } from "react-dom";
import ReactDOM from 'react-dom';
import Feild from "./Feild";
import {BrowserRouter, Link, Switch, Route} from 'react-router-dom';
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
// import {BrowserRouter, Link, Switch, Route} from 'react-router-dom'
 
function Interest(){
 const [interest, setInterest] = useState();
 
 return (
   
  //  <h1>hey</h1>
     {/* <div
       style={{
         display: "flex",
         alignItems: "center",
         justifyContent: "center",
         height: "40vh",
       }}
     >
       <form>
         <Feild label={"Annual Interest rate?"}  Change={(e) => setInterest(e.target.value / 100)}/>
        
        
        
        
         <br />
         <br />
         <Button
           variant="contained"
           color="primary"
          
         >
           Calculate
         </Button>
         <br />
         <br />
         <div style={{ fontSize: "30px" }}>$</div>
       </form>
     </div>
   </> */}
 );
};
 
export default Interest;
