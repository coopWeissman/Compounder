import React, { useState } from "react";
import { render } from "react-dom";
import ReactDOM from 'react-dom';
import Feild from "./Feild";
import Interest from "./Interest"
import {BrowserRouter, Link, Switch, Route} from 'react-router-dom';
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

function Current() {
    const calculate = () => {
        // A=p(1+(r/n))^(nt)
        // const result = principal * Math.pow(1 + interest, years);
       
        const result = (interest/12*(amount-principal*(1+interest/12)**(retirement-age*12)))/((1+interest/12)**((retirement-age)*12)-1)
        setResult(result.toFixed(2));
      };
        const [principal, setPrincipal] = useState();
        const [years, setYears] = useState();
        const [interest, setInterest] = useState();
        const [amount, setAmount] = useState();
        const [age, setAge] = useState();
        const [retirement, setRetirement] = useState();
        const [result, setResult] = useState();
    return (
    
        <div
       style={{
         display: "flex",
         alignItems: "center",
         justifyContent: "center",
         height: "40vh",
       }}
     >
       <form>
         <ul>
           <li><Link to="/Savings">Age</Link></li>
         </ul>
         <Feild label={"Current Age?"}  Change={(e) => setAge(e.target.value)}/>
         <Feild label={"Current Savings?"}  Change={(e) => setPrincipal(e.target.value)}/>
         <Feild label={"Ideal age of retirement?"}  Change={(e) => setRetirement(e.target.value)}/>
         <Feild label={"How much do you want?"}  Change={(e) => setAmount(e.target.value)}/>
         <Feild label={"Annual Interest rate?"}  Change={(e) => setInterest(e.target.value / 100)}/>
        
        
        
        
         <br />
         <br />
         <Button
           variant="contained"
           color="primary"
           onClick={() => {
             calculate();
           }}
         >
           Calculate
         </Button>
         <br />
         <br />
         <div style={{ fontSize: "30px" }}>${result}</div>
       </form>

     </div>
    )
}

export default Current;

 


