import React, {useEffect, useState} from 'react'
import './home.scss'
import slide1 from '../../assets/images/merch.png'
import slide2 from '../../assets/images/merch2.png'
import slide3 from '../../assets/images/merch3.png'
import { getCategory } from '../../apis/shop'
import ShopHome from '../../COMPONENTS/shop/shop'
import t1 from '../../assets/images/t1.jpg'
import t2 from '../../assets/images/t2.jpg'
import t3 from '../../assets/images/t3.jpg'
import t4 from '../../assets/images/t4.jpg'

export default function Home() {

const [ shopCategories, setShopCategories ] = useState([])

 useEffect(() => {

  getCategory().then(e => {

    //const shuffleArr = e.sort((a, b) => 0.5 - Math.random())

    setShopCategories(e.reverse());

    console.log(shopCategories);

  })

 }, []);

  return (

    <div className="homepage">

        <div className="landingPage">

            {/* swiper */}

              <swiper-container loop autoplay speed="500" onClick = { () => window.location.href = '/shop' }>

                <swiper-slide>
                  <div className="swiper_image">
                    <img src={slide1} alt="slide 1" />
                  </div>
                </swiper-slide>

                <swiper-slide>
                  <div className="swiper_image">
                    <img src={slide2} alt="slide 2" />
                  </div>
                </swiper-slide>

                <swiper-slide>
                  <div className="swiper_image">
                    <img src={slide3} alt="slide 3" />
                  </div>
                </swiper-slide>

              </swiper-container>

          {/* swiper Ends */}


        </div>


        <div className="photoArea_xl rex">

          <div className="circleLoad"> Wear the Best</div>

            <div className="photoSlide1">
              <img src={t4} alt="" />
            </div>

            <div className="photoSlide2">

                <div className="photo1"><img src={t1} alt="" /></div>
                <div className="photo2"><img src={t2} alt="" /></div>

            </div>

        </div>

        {/* Confidence Part API */}

        
        <div className="assurance">

            <div className="card">

                <div className="icon">

                  <i className="fi fi-sr-truck-side"></i>

                </div>

                <p>
                  Super Fast Delivery
                </p>

            </div>

            <div className="card">

                <div className="icon">

                  <i className="fi fi-sr-credit-card"></i>

                </div>

                <p>
                  Secure Payments
                </p>

            </div>

            <div className="card">

                <div className="icon">

                  <i className="fi fi-sr-mushroom"></i>

                </div>

                <p>
                  Anti-Fungi Treatment
                </p>

            </div>

            <div className="card">

                <div className="icon">

                  <i className="fi fi-sr-comment"></i>

                </div>

                <p>
                  Easy Connect
                </p>

            </div>

        </div>
        
        
        <div className="shopArea shopping">

            <div className="catArea">

                {
                  shopCategories.length ? shopCategories.map( (data, index) => {

                    return <ShopHome key = {index} category = {data} limit = {3} classFix = "" view = {true} />

                  } ) : null
                }

            </div>

        </div>

    </div>

  )
}
