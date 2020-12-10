import food1 from '../assets/food1.png';
import food2 from '../assets/food2.png';
import food3 from '../assets/food3.png';
import food4 from '../assets/food4.png';
import food5 from '../assets/food5.png';
import food6 from '../assets/food6.png';
import food7 from '../assets/food7.png';
import food8 from '../assets/food8.png';
import food9 from '../assets/food9.png';
import food10 from '../assets/food10.png';

export const agric = {
    hoverColor:"#0DEAEA",
    normalColor: "#1F72D0",
    beneathCarouselColor:"#E9FAD0",
    categoryNormal:"#E5FFD5",
    priceColor:'#0CC817',
    logoColor:'#045207',
    buttonColor:'#117864',
    carousel: [
        {image:"https://www.un.org/en/africa/osaa/images/agriculture.jpg", title: "Make Profit all the way", description:"make your profit from the point of the planting to the point of sale", linkText:"Let us show you how"},
        {image:"https://cms.qz.com/wp-content/uploads/2017/12/kano-farm-market.jpg", title: "Fresh Tomatoes with no preservatives", description:"Get your Fresh tomatoes at an affordable price, with discount on importation", linkText:"View more"},
        {image:"https://healthylittlepeach.com/wp-content/uploads/2018/11/DSC_0510-Copy.jpg", title: "Get all your chicken Salad Ingredients", description:"Get all your chicken Salad Ingredients at a discounted price with a free gift", linkText:"Let us show you how"},
        {image:"https://images2.alphacoders.com/560/thumb-1920-560500.jpg", title: "Want An Hour Old Bread", description:"Need the freshest bread delivered to your house within some minutes of request", linkText:"Click here"},
    ],
    beneathCarousel: [
        {bgColor:"#E9FAD0", title:"I want to become a Merchant", description:"Learn how to market your produce in the platform", image:"https://www.pngkey.com/png/full/270-2700122_business-growth-chart-icon-graph-icon-3d.png"},
        {bgColor:"#FAD0D9", title:"Buy/Sell Livestocks", description:"Register to start selling Livestocks like Goats, sheep, cattle etc", image:"http://www.pngall.com/wp-content/uploads/2016/03/Fruit-PNG-HD.png"},
        {bgColor:"#FAF9D0", title:"Wanna Become a Vegetarian", description:"We have Nutritionists online to help you out", image:"http://www.pngall.com/wp-content/uploads/2016/03/Fruit-PNG-HD.png"},
    ],
    categories: [
        {_id: 1, name:'Livestock'},
        {_id: 2, name:'Crops'},
        {_id: 3, name:'Dairy'},
        {_id: 4, name:'Fish Farming'},
        {_id: 5, name:'Goat Farming'},
        {_id: 6, name:'Honey and Miscellaneous'},
    ],
    products: [
        {_id:1, name:"chicken salad", image:food1, previousPrice:2000, currentPrice:1000, new:true,  category: 1, description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquam purus sit amet luctus venenatis, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquam purus sit amet luctus venenatis, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquam purus sit amet luctus venenatis" },
        {_id:2, name:"tomatoes", image:food2, previousPrice:2000, currentPrice:1000, new:true,  category: 2, description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquam purus sit amet luctus venenatis, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquam purus sit amet luctus venenatis, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquam purus sit amet luctus venenatis" },
        {_id:3, name:"chicken salad", image:food3, previousPrice:2000, currentPrice:1000, new:true,  category: 3, description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquam purus sit amet luctus venenatis, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquam purus sit amet luctus venenatis, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquam purus sit amet luctus venenatis" },
        {_id:4, name:"chicken salad", image:food4, previousPrice:2000, currentPrice:1000, new:false,  category: 4, description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquam purus sit amet luctus venenatis, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquam purus sit amet luctus venenatis, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquam purus sit amet luctus venenatis" },
        {_id:5, name:"chicken salad", image:food5, previousPrice:2000, currentPrice:1000, new:true,  category: 5, description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquam purus sit amet luctus venenatis, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquam purus sit amet luctus venenatis, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquam purus sit amet luctus venenatis" },
        {_id:6, name:"chicken salad", image:food6, previousPrice:2000, currentPrice:1000, new:false,  category: 1, description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquam purus sit amet luctus venenatis, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquam purus sit amet luctus venenatis, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquam purus sit amet luctus venenatis" },
        {_id:7, name:"chicken salad", image:food7, previousPrice:2000, currentPrice:1000, new:true,  category: 2, description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquam purus sit amet luctus venenatis, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquam purus sit amet luctus venenatis, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquam purus sit amet luctus venenatis" },
        {_id:8, name:"chicken salad", image:food8, previousPrice:2000, currentPrice:1000, new:true,  category: 3, description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquam purus sit amet luctus venenatis, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquam purus sit amet luctus venenatis, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquam purus sit amet luctus venenatis" },
        {_id:9, name:"chicken salad", image:food9, previousPrice:2000, currentPrice:1000, new:false,  category: 4, description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquam purus sit amet luctus venenatis, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquam purus sit amet luctus venenatis, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquam purus sit amet luctus venenatis" },
        {_id:10, name:"chicken salad", image:food10, previousPrice:2000, currentPrice:1000, new:true,  category: 5, description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquam purus sit amet luctus venenatis, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquam purus sit amet luctus venenatis, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquam purus sit amet luctus venenatis" },
        {_id:11, name:"chicken salad", image:food4, previousPrice:2000, currentPrice:1000, new:true,  category: 1, description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquam purus sit amet luctus venenatis, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquam purus sit amet luctus venenatis, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquam purus sit amet luctus venenatis" },
        {_id:12, name:"chicken salad", image:food3, previousPrice:2000, currentPrice:1000, new:false,  category: 2, description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquam purus sit amet luctus venenatis, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquam purus sit amet luctus venenatis, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquam purus sit amet luctus venenatis" }
    ],
    merchant_of_the_week: [
        {image:"https://i.pinimg.com/originals/1f/cd/b9/1fcdb91ab0415a6b385f6c8789341999.jpg", name:"David Hammed"},
        {image:"https://i.pinimg.com/originals/db/28/b8/db28b8b825931035869f103d99c98ee6.jpg", name:"Theoderic Onipe"},
        {image:"https://static.boredpanda.com/blog/wp-content/uploads/2018/10/woman-confronts-man-entering-his-building13.jpg", name:"Daniel David"},
        {image:"https://bloximages.chicago2.vip.townnews.com/stlamerican.com/content/tncms/assets/v3/editorial/f/c8/fc8248fc-bc67-11e8-9cb2-8f0ce9e20555/5ba2e32b7a8a4.image.jpg", name:"David Hammed"},
        {image:"https://i.pinimg.com/originals/1f/cd/b9/1fcdb91ab0415a6b385f6c8789341999.jpg", name:"Hammed Musa"},
    ]
}