import React from 'react';
import PropTypes from 'prop-types';
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Slide from '@material-ui/core/Slide';
import { Fade } from '@material-ui/core';
import { useFormik } from 'formik';
import { createMuiTheme, withStyles, ThemeProvider } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { loadCSS } from 'fg-loadcss';
import Icon from '@material-ui/core/Icon';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import './styles.css'

import { green, lightGreen, purple } from '@material-ui/core/colors';


const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  appStyle: {
        backgroundColor:'black',
        boxShadow:'none',
        height:60,
      },
  appStyle2: {
    backgroundColor:'#f5f5f5',
    boxShadow:'none',
    display:'flex',
    height:30,
  },
  appStyle3: {
    backgroundColor:'white',
    boxShadow:'none',
    height:90,
  },
  sellText: {
    color:'green',
    fontWeight:'bold',
    marginTop:5,
    fontSize:12,
    marginLeft:40
  },
  centerItem: {
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    color:'black',
    marginTop:100
  },
  toolbarItems1: {
    display:'flex',
    justifyContent:'center',
    flexDirection:'row',
    
  },
  toolbarItems4: {
    display:'flex',
    justifyContent:'flex-end',
    flexDirection:'row',
   
  },
  toolbarItems5: {
    display:'flex',
    width:'70%',
    alignItems:'center',
    justifyContent:'center',
    flexDirection:'row',
    
   
    
  },
  inputCont: {
    border:'1px solid grey', 
    borderRadius:5,
    display:'flex', 
    flexDirection:'row', 
    height:30, 
    marginTop:1,
    marginRight:5,
    width:'40%',

    '&:hover': {
      border:'2px solid grey', 
    },
    '&:focus': {
      border:'2px solid grey', 
    },

  },
  toolbarItems: {
    display:'flex',
    justifyContent:'center',
    flexDirection:'row',
    
  },
  toolbarText: {
    fontSize:13,
    marginLeft:10,
    fontFamily:'Comfortaa',
    marginTop:4,
    color:'black'
  },
  toolbarText2: {
    fontSize:13,
    marginLeft:10,
    marginTop:4,
    fontFamily:'Comfortaa',
    color:'#09EE13'
  },
  logoAreaText: {
    color:'#09EE13',
    fontFamily:'Comfortaa',
    marginRight:20,
  },
  medicalText: {
    color:'black',
    fontFamily:'Comfortaa',
    
  },
  logoText: {
    color:'#045207',
    fontFamily:'Comfortaa'
  },
  logoCont: {
   
    display:'flex',
    justifyContent:'flex-start',
    marginLeft:10,
    alignItems:'center',
   
  },
  iconContainer: {
    display:'flex', 
    justifyContent:'center', 
    marginLeft:10, 
    width:35
  },
  toolbarLogo: {
    backgroundColor:'white', 
    height:'100%', 
    display:'flex', 
    alignItems:'center',
    justifyContent:'space-between'
  },
  signInText: {
    fontSize:11,
    color:'black', marginRight:15,
    fontFamily:'Comfortaa',
  }

    }))


const ColorButton = withStyles((theme) => ({
  root: {
    fontFamily:'Comfortaa',

    color: theme.palette.getContrastText(purple[500]),
    fontSize:10,
    textTransform:"lowercase",
    backgroundColor:"#045207",
    '&:hover': {
      backgroundColor: "#013B03",

    },
  },
}))(Button);


export default function HideAppBar(props) {
  const classes = useStyles();
  const trigger2 = useScrollTrigger({
    disableHysteresis: true,
    threshold: 60,
    target: props.window ? window() : undefined,
  });
  React.useEffect(() => {
    const node = loadCSS(
      'https://use.fontawesome.com/releases/v5.12.0/css/all.css',
      document.querySelector('#font-awesome-css'),
    );

    return () => {
      node.parentNode.removeChild(node);
    };
  }, []);
  const mTop = trigger2 === false ? 0 : 0
  const mTop2 = trigger2 === false ? 86 : 0

  const formik = useFormik({
    initialValues: {
      email: '',
    },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <React.Fragment>
      <CssBaseline />
      
          <AppBar className={classes.appStyle3}>
            <Grid className={classes.toolbarLogo} spacing={2}>
                <Grid item xs={12} sm={6} className={classes.logoCont}>
                  <Typography variant="h4" className={classes.logoText}>
                    KARA
                  </Typography>
                </Grid>

                <Grid item xs={12} sm={6} className={classes.toolbarItems4}>
            
                <form onSubmit={formik.handleSubmit} className={classes.toolbarItems5}>
                <ShoppingCartIcon style={{ fontSize: 30, color:'black', marginRight:20 }} />
       <span className={classes.signInText}>Sign In / Register</span>
       <div className={classes.inputCont}>
         <div className={classes.iconContainer}>
         <Icon className="fa fa-search" 
       style={{alignSelf:'center', fontSize:12, color: green[500] }} />
         </div>
      
          <input
            id="email"
            name="email"
            type="email"
style={{width:'90%', fontSize:10, marginRight:'5%', border:'none', fontFamily:'Comfortaa'}}
            placeholder="enter search here"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          
       </div>
       <ColorButton type="submit" variant="contained" color="primary" className={classes.margin}>
        Search
      </ColorButton>
       {/* <button type="submit">Submit</button> */}
      
     </form>

                </Grid>

                
            </Grid>
          </AppBar>
    </React.Fragment>
  );
}