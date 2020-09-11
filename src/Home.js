import React from 'react'
import "./Home.css";
import Product from './Product';

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img className="home__image" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt="" />
           
            <div className="home__row">
                <Product  id="1234"
                          title="The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses"
                          price={19.99}
                          image='https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg'
                          rating={5}/>
                <Product id="1235"
                         title="GIORGIO ARMANI Acqua Di Gio Profumo by Giorgio Armani for Men Eau De Parfum Spray 4.2 oz"
                          price={119.99}
                          image='https://images-na.ssl-images-amazon.com/images/I/71GF2hE18tL._AC_SX425_.jpg'
                          rating={5}/>
            </div>

            <div className="home__row">
            <Product    id="1236"
                        title='Echo Dot (3rd Gen) - Smart speaker with Alexa'
                          price={49.99}
                          image='https://static.rcwilley.com/products/111736810/Amazon-Echo-Dot-3rd-Gen---Smart-speaker-with-Alexa---Heather-Gray-rcwilley-image1~800.jpg'
                          rating={4}/>
            <Product    id="1237"
                        title='Merax FT323 Mountain Bike 21 Speed Full Suspension Aluminum Frame MTB Bicycle - 26 inch'
                          price={389.99}
                          image='https://images-na.ssl-images-amazon.com/images/I/81QDnoPLpSL._AC_SX425_.jpg'
                          rating={4}/>
            <Product    id="1238"
                        title='Baner Garden 4 Pieces Outdoor Furniture Complete Patio Cushion Wicker P.E Rattan Garden Set, Full, Black'
                        price={249.49}
                        image='https://images-na.ssl-images-amazon.com/images/I/91Q6%2Bg4XxIL._AC_SX522_.jpg'
                        rating={3}/>
            </div>
            <div className="home__row">
            <Product    id="1239"
                        title='winemana 6 Pcs Set 3 Inch Ceramic Succulent Plant Pot, Wooden Pattern Succulent Planter Container Bonsai Cactus Pots'
                        price={15.99}
                        image='https://m.media-amazon.com/images/I/61uWR6FLaxL._AC_UL320_.jpg'
                        rating={5}/>
            </div>
        </div>             
        </div>
    )
}

export default Home
