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
            backgroundColor:selectedTheme.buttonColor, 
            width:'100%', 
            height:40, 
            cursor:'pointer',
            alignItems:'center', 
            justifyContent:'center', 
            borderRadius:20,
            marginTop:10,
            '&:hover': {
               backgroundColor:selectedTheme.hoverColor, 
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
          },
          categoryText2Cont: {
            display:'flex',
            alignItems:'center'
          },
          categoryText2: {
            fontFamily:'Comfortaa',
            fontWeight:'600',
            fontSize:18,
            marginBottom:10,
          },
          previousPrice: {
            fontFamily:'Montserrat',
            fontWeight:'600',
            color:'red',
            textDecoration:'line-through',
            fontSize:15,
            marginBottom:10,
          },
          currentPrice: {
            fontFamily:'Montserrat',
            fontWeight:'600',
            color:selectedTheme.priceColor,
            fontSize:15,
            marginBottom:10,
            },
          categoryText3: {
            fontFamily:'Comfortaa',
            fontWeight:'600',
            fontSize:12,
            cursor:'pointer',
            padding:'13px 20px',
            borderRadius:20,
            '&:hover': {
                backgroundColor:selectedTheme.hoverColor
               },
          },
          categories: {
            display: 'flex',
            alignItems:'center',
            justifyContent:'flex-end'
          }, 
          
    }))
    const classes = useStyles();
    const setCategory = (_id) => {
        dispatch({type:"setSelectedCategory", payload:String(_id)})
    }
   
     const selectedP = selectedTheme.products.filter(function(el){
         return el.category.toString() == state.selectedCategory
    })

    const addToCart = (product) => {
        let currentCart = state.cart
      
        let exist = currentCart.some((x)=> x._id===product._id)
        
        if(exist){
            const index = currentCart.findIndex(x => x._id === product._id);
            let objAtIndex = currentCart[index];
            objAtIndex["quantity"] += 1
            dispatch({type:"addToCart", payload:currentCart})
        }
        else {
            let currentProduct = product;
            currentProduct["quantity"]=1
            let newCart = currentCart.concat(currentProduct)
            dispatch({type:"addToCart", payload:newCart})
        }
        
    }

    const overall = selectedP.length == 0 ? selectedTheme.products : selectedP
 
   
    let total = 0;
    state.cart.forEach(function(a) {
        total += Number(a.quantity);
    })
   
   
    const totalQty = state.cart.length == 0 ? 0 : total

  return (
   
        <Grid>
            <Toolbar cartTotal={totalQty} />
            
        <Carousel data = { selectedTheme.carousel }/>

        <Grid container spacing={5} style={{marginLeft:'auto', marginRight:'auto', width:'90%',marginTop:20, display:'flex'}}>
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
        </Grid>

        <Grid container spacing={5} style={{marginLeft:'auto', marginRight:'auto', width:'90%',marginTop:30}}>
            <Grid item xs={12} sm={2} className={classes.categoryText2Cont}>
                <Typography variant="h4" className={classes.categoryText2}>
                    New Products
                </Typography>
            </Grid>

            <Grid item xs={12} sm={10} className={classes.categories}>
               <div style={{borderRadius:20, display:'flex', flexWrap:'wrap', alignItems:'center',
                justifyContent:'space-around', backgroundColor:selectedTheme.categoryNormal, width:'90%', minHeight:40}}>
               {selectedTheme.categories.map((category)=>(
                    <Typography onClick={()=>setCategory(category._id)} 
                    variant="h4" className={classes.categoryText3} style={{backgroundColor: state.selectedCategory == String(category._id) ? selectedTheme.hoverColor : selectedTheme.categoryNormal}}>
                        {category.name}
                    </Typography>
               ))}
             
               </div>
            </Grid>
        </Grid>

        <Grid container spacing={5} style={{marginLeft:'auto', marginRight:'auto', width:'90%',marginTop:30}}>
            {overall.map((product)=>(
                <Grid item xs={12} sm={2}>
                    
                <div className={classes.paper2}>
                <span className={classes.cartText2}>{product.name}</span>
                    <img src={product.image} style={{width:'100%', height:120}} />
                   <div>
                        <span className={classes.previousPrice}>₦{product.previousPrice}</span>
                        -
                        <span className={classes.currentPrice}>₦{product.currentPrice}</span>
                   </div>
                    <div className={classes.cartButton} onClick={()=>addToCart(product)}>
                        
                        <span className={classes.cartText}>Add To Cart</span>
                    </div>
                </div>
            </Grid>
            ))}
        </Grid>
        </Grid>
  );
}
