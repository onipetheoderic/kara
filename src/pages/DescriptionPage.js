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
import food1 from '../assets/food1.png';

import Slider from "react-slick";
import Carousel from '../components/Carousel';
import ReactImageZoom from 'react-image-zoom';
import { CounterContext } from "../store";

import { agric } from '../themes/agric';
import { medic } from '../themes/medic';
import food2 from '../assets/food2.png';
import food3 from '../assets/food3.png';

export default function Homepage(props) {
    const [currentIndex, changeIndex] = React.useState(0)
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
        parentCont: {
            marginTop:80,
        },
        titleText: {
            fontSize:30,
            fontWeight:'600', 
            fontFamily:'Comfortaa',
            color:'black',
            
        }, 
        titleCont: {
            width:'90%', 
            display:'flex',
            marginRight:'auto',
            marginLeft:'auto',
            marginTop:30,
            justifyContent:'center',
        },
        priceCont: {
            marginTop:20
        },
        companyCont: {
            width:'90%', 
            display:'flex',
            marginRight:'auto',
            marginLeft:'auto',
            marginTop:10,
        },
        descriptionCont: {
            width:'90%', 
            display:'flex',
            marginRight:'auto',
            marginLeft:'auto',
            marginTop:10,
        },
        secondCont: {
            backgroundColor:'white', 
            minHeight:'100vh'
        }, 
        companyText: {
            fontSize:15,
            fontWeight:'600',
            fontFamily:'Montserrat',
            color:'black',
        },
        descriptionText: {
            fontSize:13,
            fontFamily:'Spinnaker',
            color:'black',
        },
        cartCont: {
            width:'50%', 
            marginLeft:'5%'
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

          previousPrice: {
            fontFamily:'Montserrat',
            fontWeight:'600',
            color:'red',
            textDecoration:'line-through',
            fontSize:20,
            marginBottom:10,
          },
          currentPrice: {
            fontFamily:'Montserrat',
            fontWeight:'600',
            color:selectedTheme.priceColor,
            fontSize:20,
            marginBottom:10,
            },
        firstCont: {
            backgroundColor:'white', minHeight:'100vh'
        }
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
    const item = {
        title: "10 months Old Exotic Milk Producing Cow", 
        company: "R and R Farms Limited",
        _id:5,
    }
    const product =  {_id:1, 
        name:"chicken salad", 
        image:food1, 
        images: [food1, food2, food3],
        previousPrice:2000, 
        currentPrice:1000, 
        new:true,  
        company:"AgroFarms ltd",
        category: 1, 
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquam purus sit amet luctus venenatis, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquam purus sit amet luctus venenatis, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquam purus sit amet luctus venenatis" }
  
        return (
   
        <Grid>
            <Toolbar cartTotal={totalQty} />
            <Grid container spacing={2} className={classes.parentCont}>
                <Grid item xs={12} sm={6} className={classes.firstCont}>
                    <Grid container justify="center" spacing={2}>
                        <Grid item xs={12} sm={10} style={{height:300}}>
                       
                        <img src={product.images[currentIndex]} style={{width:'100%', height:'100%'}} />
                      
                        </Grid>
                       
                    </Grid>
                    
                    <Grid container justify="space-around" spacing={2} style={{marginTop:20,}}>
                        {product.images.map((image, index)=> (
                            <Grid onClick={()=>changeIndex(index)} item xs={3} sm={3} style={{height:100, cursor:'pointer'}}>
                                <img src={image} style={{width:'100%', height:'100%'}} />
                            </Grid>
                        ))}
                      
                        
                    </Grid>
                </Grid>

                <Grid item xs={12} sm={6} className={classes.secondCont}>
                    <div className={classes.titleCont}>
                        <Typography variant="h4" className={classes.titleText}>
                            {product.name}
                        </Typography>
                        
                    </div>
                    <div className={classes.companyCont}>
                        <Typography variant="h4" className={classes.companyText}>
                                By: {product.company}
                        </Typography>
                    </div>

                    <div className={classes.descriptionCont}>
                    <Typography variant="h4" className={classes.descriptionText}>
                  {product.description}                   
                  </Typography>
                    </div>

                    <div className={classes.cartCont}>
                    <div className={classes.priceCont}>
                        <span className={classes.previousPrice}>₦{product.previousPrice}</span>
                        -
                        <span className={classes.currentPrice}>₦{product.currentPrice}</span>
                   </div>                   
                   <div className={classes.cartButton} onClick={()=>addToCart(product)}>
                        
                        <span className={classes.cartText}>Add To Cart</span>
                    </div>
                    </div>
                    <Grid container spacing={5} style={{marginLeft:'auto', marginRight:'auto', width:'90%',marginTop:30}}>
          

    
        </Grid>

                </Grid>
            </Grid>
        </Grid>
  );
}
