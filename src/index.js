import React, { useState } from "react";
import { render } from "react-dom";
import ReactDOM from 'react-dom';
import Feild from "./Feild";
import { useHistory } from "react-router-dom";
import Plan from "./Plan";
import Current from "./current";
import Interest from "./Interest"
import {BrowserRouter, Link, Switch, Route} from 'react-router-dom';
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
// import {BrowserRouter, Link, Switch, Route} from 'react-router-dom'
 
const CompoundInterest = () => {
 const [principal, setPrincipal] = useState();
 const [url, setUrl] = useState();
 const [interest, setInterest] = useState();
 const [amount, setAmount] = useState();
 const [age, setAge] = useState();
 const [retirement, setRetirement] = useState();
 const [result, setResult] = useState();
 const [next, setNext] = useState(0);
 const history = useHistory();
 
 const calculate = () => {
   // A=p(1+(r/n))^(nt)
   // const result = principal * Math.pow(1 + interest, years);
  
   const result = (interest/12*(amount-principal*(1+interest/12)**(retirement-age*12)))/((1+interest/12)**((retirement-age)*12)-1)
   
   setResult(result.toFixed(2));
 };
 const next1 = () => {
  // A=p(1+(r/n))^(nt)
  // const result = principal * Math.pow(1 + interest, years);
 setNext(next+1)
};
 




  function handleClick() {
    setNext(next+1)
    
      if(next==0){
        setUrl("/Savings")
      }
      if(next==1){
        setUrl("/Current")
      }
    

    // const history = useHistory();
    history.push(url)
  };






 return (
   
   <>
   
     <div
       style={{
         display: "flex",
         alignItems: "center",
         justifyContent: "center",
         height: "40vh",
       }}
     >
       Path is 
       <form>
         <ul>
           <li><Button onClick={handleClick}>Age</Button></li>
         </ul>
         <Route  path="/Savings" ><Feild label={"Current Age?"}  Change={(e) => setAge(e.target.value)}/></Route>
          <Route  path="/Current" ><Feild label={"Current Savings?"}  Change={(e) => setPrincipal(e.target.value)}/></Route>
          <Route  path="/Retirement" > <Feild label={"Ideal age of retirement?"}  Change={(e) => setRetirement(e.target.value)}/></Route>
          <Route  path="/Amount" ><Feild label={"How much do you want?"}  Change={(e) => setAmount(e.target.value)}/></Route>
          <Route  path="/Interest" ><Feild label={"Annual Interest rate?"}  Change={(e) => setInterest(e.target.value / 100)}/></Route>
          
         {/* <Feild label={"Current Age?"}  Change={(e) => setAge(e.target.value)}/>
         <Feild label={"Current Savings?"}  Change={(e) => setPrincipal(e.target.value)}/>
         <Feild label={"Ideal age of retirement?"}  Change={(e) => setRetirement(e.target.value)}/>
         <Feild label={"How much do you want?"}  Change={(e) => setAmount(e.target.value)}/>
         <Feild label={"Annual Interest rate?"}  Change={(e) => setInterest(e.target.value / 100)}/> */}
        
        
        
        
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
   </>
 );
};
 
render(<BrowserRouter><CompoundInterest/></BrowserRouter>, document.querySelector("#root"));
