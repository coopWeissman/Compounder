import React from 'react'
import TextField from "@material-ui/core/TextField";
 
function Feild(props) {
   return (
       <TextField
           label= {props.label}
           variant="outlined"
           type="number"
           onChange={props.Change}
         />
   )
}
 
export default Feild