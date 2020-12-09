import React, {useContext} from 'react';
import PropTypes from 'prop-types';
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '../components/Toolbar'
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
import Paper from '@material-ui/core/Paper';
import Icon from '@material-ui/core/Icon';


import Slider from "react-slick";
import Carousel from '../components/Carousel';

import { CounterContext } from "../store";

import { agric } from '../themes/agric';
import { medic } from '../themes/medic';


export default function Homepage(props) {
    const globalState = useContext(CounterContext);
    const {state, dispatch } = globalState;

    const selectedTheme = state.currentTemplate === "agric" ? agric : medic;
    const useStyles = makeStyles((theme) => ({
      
        paperDiv: {
            backgroundColor:'white',
            display:'flex',
            flexDirection:'column',
            height:'100%'
        },
        categorySection: {
            height:400,
            backgroundColor:'black'
        },
        carouselSection: {
            height: 400,
            backgroundColor:'black'
        },
        categoryText: {
            fontFamily:'Roboto',
            color:'black',
            fontSize:12,
            marginTop:17
        },
        spacer: {
            marginLeft:20,
            display:'flex',
            flexDirection:'column',
        },
        beneathCarousel: {
            backgroundColor:'red',
            height:300,

        }, 
        toolbarLogo: {
            backgroundColor:'white', 
            height:'100%', 
            display:'flex', 
            alignItems:'center',
            justifyContent:'space-between'
          },
          paper: {
            padding: theme.spacing(2),
            textAlign: 'center',
            color: theme.palette.text.secondary,
            borderRadius:10,
          },
          paper2: {
              marginTop:10,
            padding: theme.spacing(2),
            textAlign: 'center',
            color: theme.palette.text.secondary,
           borderWidth:'1px solid red',
           height:250,
            borderRadius:10,
            backgroundColor:'#ececec',
            display:'flex',
            flexDirection:'column'
          },
          beneathText: {
            color:'black',
            fontFamily:'Comfortaa',
            fontSize:16,
            fontWeight:'600'
          },
          beneathText2: {
            color:'black',
            fontFamily:'Comfortaa',
            fontSize:12,
            fontWeight:'600'
          },
          cartButton: {
            display:'flex',
            backgroundColor:'#117864', 
            width:'100%', 
            height:40, 
            alignItems:'center', 
            justifyContent:'center', 
            borderRadius:20,
            marginTop:10,
            '&:hover': {
               backgroundColor:'#A2D9CE', 
              },
          }, 
          cartText: {
            fontFamily:'Comfortaa',
            fontWeight:'600',
            color:'white',
            fontSize:12,
          },
          cartText2: {
            fontFamily:'Comfortaa',
            fontWeight:'600',
            fontSize:12,
            marginBottom:10,
          }
    }))
    const classes = useStyles();
 
  return (
   
        <Grid>
            <Toolbar />
            
        <Carousel data = { selectedTheme.carousel }/>

        <Grid container spacing={5} style={{marginTop:20, display:'flex'}}>
            {selectedTheme.beneathCarousel.map((item)=>(
                <Grid item xs={12} sm={4}>
                    <div className={classes.paper} style={{ 
                        backgroundColor: item.bgColor}}>
                        <Typography variant="h4" className={classes.beneathText}>
                            {item.title}
                        </Typography>
                        <img src={item.image} style={{width:'90%', height:200}} />
                        <Typography variant="h4" className={classes.beneathText2}>
                            {item.description}
                        </Typography>
                    </div>
                </Grid>
            ))}
            
            {/* <Grid item xs={12} sm={4}>
                <Paper className={classes.paper}>xs=6</Paper>
            </Grid>
            <Grid item xs={12} sm={4}>
                <Paper className={classes.paper}>xs=6</Paper>
            </Grid> */}
        </Grid>
        <Grid container spacing={5} style={{marginTop:30}}>
            {selectedTheme.products.map((product)=>(
                <Grid item xs={12} sm={2}>
                    
                <div className={classes.paper2}>
                <span className={classes.cartText2}>{product.name}</span>
                    <img src={product.image} style={{width:'100%', height:140}} />
                    <div className={classes.cartButton}>
                        <span className={classes.cartText}>Add To Cart</span>
                    </div>
                </div>
            </Grid>
            ))}
        </Grid>
        </Grid>
  );
}
