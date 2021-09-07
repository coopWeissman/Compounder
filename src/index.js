import React, { useState } from "react";
import { render } from "react-dom";
import ReactDOM from 'react-dom';
import Feild from "./Feild";
import Card from '@material-ui/core/Card';
import SimpleCard from "./Card";
import { useHistory } from "react-router-dom";
import {CssBaseline, makeStyles} from '@material-ui/core';
import {
  ThemeProvider,
  createMuiTheme
} from "@material-ui/core/styles"
import Plan from "./Plan";
import Current from "./current";
import Survey from "./Survey"
import Interest from "./Interest"
import {BrowserRouter, Link, Switch, Route} from 'react-router-dom';
import TextField from "@material-ui/core/TextField";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import { NextWeekRounded } from "@material-ui/icons";
import Chart from "./chart";
// import {BrowserRouter, Link, Switch, Route} from 'react-router-dom'

const useStyles = makeStyles({
    grow: {
    width: '100%',
    height: '100%'
  },
    
    paper: {
      
      display: 'flex',
      overflow: 'wrap',
      flexDirection: 'column',
      textAlign: 'center',
      justifyContent: 'center',
      borderRadius: '1px',
      borderRadius: '.25rem',
      height: 40,
      boxShadow: '0px 0px 0px 0px',
    },
    paperTop: {
      height: 40,
      display: 'flex',
      overflow: 'wrap',
      flexDirection: 'column',
      textAlign: 'center',
      color: "primary",
      borderRadius: '0px',
      boxShadow: '0px 0px 0px 0px',
    },
      headerTitle: {
      height: 40,
      display: 'flex',
      overflow: 'wrap',
      flexDirection: 'column',
      textAlign: 'center',
      color: "primary",
      borderRadius: '0px',
      boxShadow: '0px 0px 0px 0px',
      fontWeight: "700",
    },
   
    fixedHeight: {
        height: '90%',
        margin: '2% 2% 0% 2%',
      
    },
    cardHeader:{
      textAlign:'left',
      alignItems: 'left',
      paddingLeft: '2%',
      border: '1px solid #4a4e53',
      borderTopLeftRadius:'.25rem',
      borderTopRightRadius:'.25rem',
    },
    infoCard: {
      textAlign:'left',
      alignItems: 'left',
      paddingLeft: "1%",
      paddingRight: "1%",
    },
    
    chartHeight: {
        height: "10%",

    },
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },

});
 
const CompoundInterest = () => {
 const [principal, setPrincipal] = useState();
 const [url, setUrl] = useState("/Savings");
 const [interest, setInterest] = useState();
 const [amount, setAmount] = useState();
 const [age, setAge] = useState();
 const [retirement, setRetirement] = useState();
 const [result, setResult] = useState();
 const [next, setNext] = useState(1);
 const [dark, setDark] = useState(true);
 const history = useHistory();
 const classes = useStyles();
 const customTheme= createMuiTheme ({
    //theme settings
    palette: {
      primary: {
          main: "#1e2736"
      },
      secondary: {
        main: "#f0639c"
    },
    textSecondary: {
        text: "red"
    },
    dark: "#1e2736",
    light: '#f4f6f9',
    type: dark ? 'dark':'light',
  }
  });

 
 const calculate = () => {
   // A=p(1+(r/n))^(nt)
   // const result = principal * Math.pow(1 + interest, years);
  
   const result = (interest/12*(amount-principal*(1+interest/12)**(retirement-age*12)))/((1+interest/12)**((retirement-age)*12)-1)
   
   setResult(result.toFixed(2));
 };
//  const next1 = () => {
//   // A=p(1+(r/n))^(nt)
//   // const result = principal * Math.pow(1 + interest, years);
//  setNext(next+1)
// };
 
function Next(){
  setNext(next+1)
  routing()
}

function Back(){
  setNext(next-1)
  routing()
}

  function routing() {
     
     if(next==0){
        setUrl("/Savings")
      }
      if(next==1){
        setUrl("/Current")
      }
      if(next==2){
        setUrl("/Retirement")
      }
      if(next==3){
        setUrl("/Amount")
      }
      if(next==4 || next){
        setUrl("/Interest")
        setNext(0)
      }
     
    
    
      history.push(url)
    // const history = useHistory();
    
  };
    






 return (
   <div style={{backgroundColor: dark ? '#1e2736':'#f4f6f9'}}>
   <ThemeProvider theme={customTheme}>
     <CssBaseline />

     
      
      <Card className={classes.root}>
       <form>
       
          
        <br />
         <br />
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
         <Button 
          variant="contained"
          color="primary"
           onClick={() => {
             Next()
           }}>Next
          </Button>
          <Button 
          variant="contained"
          color="primary"
           onClick={() => {
             Back()
           }}>Back
          </Button>
         <br />
         <br />
         <div style={{ fontSize: "30px" }}>${result}</div>
       </form>
       </Card>
       <Survey dark={dark}/>
       <Chart/>
    
     </ThemeProvider>
     </div>
     



 
 );
};
 
render(<BrowserRouter><CompoundInterest/></BrowserRouter>, document.querySelector("#root"));
