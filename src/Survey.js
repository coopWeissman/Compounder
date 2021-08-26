import {Grid, Paper}  from '@material-ui/core';
import {CssBaseline, makeStyles} from '@material-ui/core';
import clsx from 'clsx';


const useStyles = makeStyles((theme) => ({
    grow: {
    flexGrow: 1,
  },
    container: {
      paddingTop: theme.spacing(4),
      paddingBottom: theme.spacing(4),
      height: "100%",
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
   
    
  }));

function Survey(props) {
    const classes = useStyles();
    const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
    return (
        <Grid container spacing={1}>
      <Grid item xs={12} md={8} lg={12}>
              <Paper className={classes.fixedHeightPaper}>
                <div className={classes.cardHeader} style={{backgroundColor: props.dark ? '#343a40':'#efefef',height: '40%', border: '0px', borderBottom: props.dark ? '1px solid gray': '1px solid black'}}>
                  <h3>Orders</h3>
                </div>
                <div className={classes.infoCard} style={{ backgroundColor: props.dark ? '#0f1822':'#FFF'}}>
                xssssss
                </div>
                
                
              </Paper>
      </Grid>
      <Grid item xs={12}>
              <Paper className={classes.fixedHeightPaper}>
                <div className={classes.cardHeader} style={{ backgroundColor: props.dark ? '#343a40':'#efefef', border: '0px', borderBottom: props.dark ? '1px solid gray': '1px solid black' }}>
                  <h3>Token Info</h3>
                </div>
                <div className={classes.infoCard} style={{ backgroundColor: props.dark ? '#0f1822':'#FFF' }}>
                <p>CreamPYE is looking to fully disrupt the decentralized world. We have put together a team behind the CreamPYE project to build better tech than what is currently available today. We are more than just a DeFi token, we are the future of Defi/Decentralization and CEXDEX. Join us for the ride of a lifetime and be a part of making a true impact in the world to help stop world hunger and at the same time disrupt the decentralized world by offering better tech and more affordable access to everyone.</p>
                <ul >
           
                  <li><p> https://creampye.com/</p></li>
                  <li><p> https://telegram.com/creampyetoken</p></li> 
                  <li><p> https://twitter.com/creampyetoken</p></li>
                </ul>
                </div>
              </Paper>
      </Grid>
      </Grid>
    )
}

export default Survey