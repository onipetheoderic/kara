import React from 'react'
import PropTypes from 'prop-types';
import { fade, makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Slider from "react-slick";


/*
 carouselSpace: {
            height:500,
            backgroundColor:'yellow'
        },
*/ 
export default function Carousel({ data }) {
    const useStyles = makeStyles((theme) => ({
        paper: {
            padding: theme.spacing(2),
            textAlign: 'center',
            color: theme.palette.text.secondary,
            height:'100%'
        },
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
        carouselSpace: {
            height:500,
            backgroundColor:'yellow'
        },
       
    }))
    const classes = useStyles();
    const settings = {
        dots: true,
        infinite: true,
        arrows:false,
        speed: 2000,
        autoplaySpeed: 4000,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1
      };
  return (
    <Slider {...settings}>
        {data.map((d, index) => (
 <div>
 <div>
 <div>
 <img src={d.image} style={{width:'100%', height:500}} />
     <h1 style={{fontSize:50, fontFamily:'Comfortaa', color:'white', marginLeft:'20%', marginTop:-150}}>{d.title}</h1>
 </div>
 </div>
 
</div>
        ))}
   
   
   
  </Slider>
  );
}

Carousel.propTypes = {

}
